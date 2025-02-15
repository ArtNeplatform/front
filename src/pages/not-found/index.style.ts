import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const shake = keyframes`
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
`;

export const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f8f9fa;
`;

export const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  animation: ${fadeIn} 0.6s ease-out;
`;

export const LogoImage = styled.img`
  width: 300px;
  height: auto;
  opacity: 0.7;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

export const ErrorCode = styled.h1`
  font-size: 8rem;
  font-weight: 800;
  color: #ff4444;
  margin: 0;
  text-shadow: 4px 4px 0px rgba(0, 0, 0, 0.1);
  animation: ${shake} 0.5s ease-in-out infinite;
`;

export const ErrorMessage = styled.p`
  font-size: 1.5rem;
  color: #666;
  margin: 0;
  font-weight: 500;
`;

export const HomeButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1.2rem;
  color: white;
  background-color: #000;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-2px);
    background-color: #333;
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;
