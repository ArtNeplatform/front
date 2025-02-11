import { useState } from 'react';

// hooks/useExhibitRegister.ts
interface ExhibitState {
  step: number;
  selectedBackground: string | null; // 배경 이미지 URL
  selectedOverlay: string | null; // 오버레이 이미지 URL
  overlayPosition: { x: number; y: number };
  exhibitName: string;
}

export const useExhibitRegister = () => {
  const [state, setState] = useState<ExhibitState>({
    step: 0,
    selectedBackground: null,
    selectedOverlay: null,
    overlayPosition: { x: 50, y: 50 },
    exhibitName: '',
  });

  const handleBackgroundSelect = (imageUrl: string) => {
    setState((prev) => ({ ...prev, selectedBackground: imageUrl }));
  };

  const handleOverlaySelect = (imageUrl: string) => {
    setState((prev) => ({ ...prev, selectedOverlay: imageUrl }));
  };

  const handlePositionUpdate = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setState((prev) => ({
      ...prev,
      overlayPosition: { x, y },
    }));
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState((prev) => ({ ...prev, exhibitName: e.target.value }));
  };

  const setStep = (step: number) => {
    setState((prev) => ({ ...prev, step }));
  };

  return {
    ...state,
    setStep,
    handleBackgroundSelect,
    handleOverlaySelect,
    handlePositionUpdate,
    handleNameChange,
  };
};
