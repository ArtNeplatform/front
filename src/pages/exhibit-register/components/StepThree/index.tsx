import { useState, useRef } from 'react';
import { Rnd } from 'react-rnd';

interface StepThreeProps {
  backgroundImage: string;
  overlayImage: string;
  handleSubmit: (file: File, title: string) => void;
}

const StepThree = ({
  backgroundImage,
  overlayImage,
  handleSubmit,
}: StepThreeProps) => {
  const [position, setPosition] = useState({
    x: 50,
    y: 50,
    width: 100,
    height: 100,
  });
  const [title, setTitle] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);

  const getParentPosition = () => {
    return (
      containerRef.current?.getBoundingClientRect() || { width: 0, height: 0 }
    );
  };

  const combineAndSendImages = async () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    try {
      // 이미지를 Blob으로 가져오기
      const loadImageAsBlob = async (url: string) => {
        const response = await fetch(url);
        const blob = await response.blob();
        return createImageBitmap(blob);
      };

      // 두 이미지를 비동기로 로드
      const [bgBitmap, overlayBitmap] = await Promise.all([
        loadImageAsBlob(backgroundImage),
        loadImageAsBlob(overlayImage),
      ]);

      // 캔버스 크기 설정
      canvas.width = bgBitmap.width;
      canvas.height = bgBitmap.height;

      // 배경 이미지 그리기
      ctx.drawImage(bgBitmap, 0, 0);

      // 오버레이 이미지 그리기
      const overlayX = (position.x / 100) * canvas.width;
      const overlayY = (position.y / 100) * canvas.height;
      const overlayWidth = (position.width / 100) * canvas.width;
      const overlayHeight = (position.height / 100) * canvas.height;

      ctx.drawImage(
        overlayBitmap,
        overlayX,
        overlayY,
        overlayWidth,
        overlayHeight
      );

      // Canvas를 Blob으로 직접 변환
      return new Promise<void>((resolve, reject) => {
        canvas.toBlob((blob) => {
          if (blob) {
            const file = new File([blob], 'combined-image.png', {
              type: 'image/png',
            });
            handleSubmit(file, title);
            resolve();
          } else {
            reject(new Error('Failed to create blob from canvas'));
          }
        }, 'image/png');
      });
    } catch (error) {
      console.error('이미지 처리 중 오류 발생:', error);
      // 에러 처리 로직 추가
    }
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div
        ref={containerRef}
        style={{ position: 'relative', width: '100%', height: '500px' }}
      >
        <img
          src={backgroundImage}
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          alt="배경"
        />
        <Rnd
          default={{
            x: (position.x / 100) * getParentPosition().width,
            y: (position.y / 100) * getParentPosition().height,
            width: position.width,
            height: position.height,
          }}
          onDragStop={(e, d) => {
            const parentRect = getParentPosition();
            setPosition((prev) => ({
              ...prev,
              x: (d.x / parentRect.width) * 100,
              y: (d.y / parentRect.height) * 100,
            }));
          }}
          onResizeStop={(e, direction, ref, delta, position) => {
            const parentRect = getParentPosition();
            const rect = ref.getBoundingClientRect();
            setPosition({
              x: (position.x / parentRect.width) * 100,
              y: (position.y / parentRect.height) * 100,
              width: (rect.width / parentRect.width) * 100,
              height: (rect.height / parentRect.height) * 100,
            });
          }}
          bounds="parent"
          enableResizing={{
            top: true,
            right: true,
            bottom: true,
            left: true,
            topRight: true,
            bottomRight: true,
            bottomLeft: true,
            topLeft: true,
          }}
        >
          <img
            src={overlayImage}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              zIndex: 100,
              userSelect: 'none',
              pointerEvents: 'none',
            }}
            alt="오버레이"
          />
        </Rnd>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '8px',
        }}
      >
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="작품 이름을 입력하세요"
          style={{
            padding: '12px',
            fontSize: '16px',
            border: '1px solid #ddd',
            borderRadius: '4px',
          }}
        />
        <button
          onClick={combineAndSendImages}
          disabled={!title.trim()}
          style={{
            padding: '12px 24px',
            backgroundColor: title.trim() ? '#000' : '#ccc',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: title.trim() ? 'pointer' : 'not-allowed',
            transition: 'all 0.2s',
          }}
        >
          전시 등록하기
        </button>
      </div>
    </div>
  );
};

export default StepThree;
