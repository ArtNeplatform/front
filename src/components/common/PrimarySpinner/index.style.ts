import styled from '@emotion/styled';

export const SpinnerContainer = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 50;
`;

export const MainLogo = styled.img<{ rotation: number }>`
  width: 128px;
  height: 128px;
  object-fit: contain;
  transform: rotate(${(props) => props.rotation}deg);
  transition: transform 2s ease-in-out;
`;

export const ArtworkOverlay = styled.img`
  width: 128px;
  height: 128px;
  object-fit: contain;
  animation: fadeIn 2s ease-in-out infinite;

  @keyframes fadeIn {
    0% {
      opacity: 0.2;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.2;
    }
  }
`;

export const LoadingText = styled.p`
  margin-top: 1rem;
  font-size: 1.125rem;
  font-weight: 500;
  color: #4b5563;
`;
