import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

export const ErrorContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.95);
  z-index: 1000;
`;

export const ErrorContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  animation: ${slideUp} 0.5s ease-out;
  max-width: 90%;
  width: 500px;
`;

export const LogoImage = styled.img`
  width: 200px;
  height: auto;
  margin-bottom: 1rem;
`;

export const ErrorIcon = styled.div`
  font-size: 3rem;
  animation: ${pulse} 2s infinite ease-in-out;
`;

export const ErrorMessage = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin: 0;
  text-align: center;
  font-weight: 600;
`;

export const ErrorDetail = styled.p`
  font-size: 1rem;
  color: #666;
  margin: 0;
  text-align: center;
  max-width: 80%;
  line-height: 1.5;
  background-color: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #eee;
`;

export const RetryButton = styled.button`
  padding: 0.8rem 2rem;
  font-size: 1.1rem;
  color: white;
  background-color: #ff6b6b;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(255, 107, 107, 0.2);

  &:hover {
    background-color: #ff5252;
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(255, 107, 107, 0.3);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(255, 107, 107, 0.2);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 107, 107, 0.3);
  }
`;
