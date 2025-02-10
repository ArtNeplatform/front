import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const CombinedPreview = styled.div`
  position: relative;
  width: 800px;
  height: 500px;
  border: 2px dashed ${({ theme }) => theme.colors.lightGray};
  margin: 24px 0;
  overflow: hidden;
`;

export const NameInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 32px;
`;

export const OverlayImage = styled.img<{
  position: { x: number; y: number };
  maxWidth: string;
}>`
  position: absolute;
  cursor: move;
  left: ${({ position }) => position.x}%;
  top: ${({ position }) => position.y}%;
  transform: translate(-50%, -50%);
  max-width: ${({ maxWidth }) => maxWidth};
  border: 2px solid ${({ theme }) => theme.colors.white};

  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

// 기존 컴포넌트와 통합
export const DisplayImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

// 스타일 상수
export const inputStyle = css`
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 14px;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
  }
`;
