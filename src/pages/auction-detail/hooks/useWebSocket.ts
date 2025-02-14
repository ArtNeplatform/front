import { useEffect, useState } from 'react';

// interface WebSocketMessage {
//   auction_id: number;
//   bid_price: string;
// }

const useWebSocket = (auctionId: number) => {
  const [currentPrice, setCurrentPrice] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // 웹소켓 객체 생성
    const WS_URL =
      window.location.protocol === 'https:'
        ? 'wss://3.35.110.159:5000'
        : 'ws://3.35.110.159:5000';

    const socket = new WebSocket(WS_URL);

    // 웹소켓 연결 성공
    socket.onopen = () => {
      console.log('웹소켓 연결 성공');
      setError(null); // 기존 에러 초기화
    };

    // 웹소켓 메시지 수신
    socket.onmessage = (event) => {
      console.log('받은 데이터:', event.data);
      try {
        const data = JSON.parse(event.data);
        console.log('웹소켓데이터' + data.result.bid_price);

        if (!data || typeof data !== 'object') {
          throw new Error('잘못된 데이터 형식');
        }

        if (data.result.auction_id === auctionId) {
          console.log(`경매 ${auctionId} 업데이트: ${data.result.bid_price}`);
          setCurrentPrice(data.result.bid_price);
        }
      } catch (e) {
        setError('웹소켓 메시지 처리 중 오류 발생');
        console.error('웹소켓 메시지 오류:', e);
      }
    };
    console.log('웹소켓' + currentPrice);

    // 웹소켓 오류 발생 시
    socket.onerror = (event) => {
      setError('웹소켓 연결 오류');
      console.error('웹소켓 오류 발생:', event);
    };

    // 웹소켓 연결 종료
    socket.onclose = (event) => {
      console.log(
        `웹소켓 연결 종료 (Code: ${event.code}, Reason: ${event.reason})`
      );
    };

    // 클린업 함수 (컴포넌트 언마운트 시 웹소켓 종료)
    return () => {
      if (socket.readyState === WebSocket.OPEN) {
        socket.close();
        console.log('웹소켓 종료');
      }
    };
  }, [auctionId, currentPrice]);

  return { currentPrice, error };
};

export default useWebSocket;
