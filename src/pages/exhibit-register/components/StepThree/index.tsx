import { Text } from '@/styles/text';
import {
  CombinedPreview,
  NameInputContainer,
  DisplayImage,
  Container,
} from './index.style.ts';
import { css } from '@emotion/react';
interface StepThreeProps {
  selectedBackground: string | null;
  selectedOverlay: string | null;
  overlayPosition: { x: number; y: number };
  exhibitName: string;
  handlePositionUpdate: (e: React.MouseEvent<HTMLDivElement>) => void;
  handleNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const StepThree = ({
  selectedBackground,
  selectedOverlay,
  overlayPosition,
  exhibitName,
  handlePositionUpdate,
  handleNameChange,
}: StepThreeProps) => {
  return (
    <Container>
      <CombinedPreview
        onClick={handlePositionUpdate}
        style={{ position: 'relative' }}
      >
        {selectedBackground && (
          <DisplayImage
            src={selectedBackground}
            alt="배경"
            css={css`
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
            `}
          />
        )}
        {selectedOverlay && (
          <DisplayImage
            src={selectedOverlay}
            alt="오버레이"
            css={css`
              position: absolute;
              left: ${overlayPosition.x}%;
              top: ${overlayPosition.y}%;
              transform: translate(-50%, -50%);
              cursor: move;
              border: 2px solid white;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
              max-width: 40%;
            `}
          />
        )}
      </CombinedPreview>

      <NameInputContainer>
        <Text size={16} color="black">
          전시 이름
        </Text>
        <input
          type="text"
          value={exhibitName}
          onChange={handleNameChange}
          css={css`
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 4px;
            width: 300px;
            margin-top: 8px;
          `}
        />
      </NameInputContainer>
    </Container>
  );
};
