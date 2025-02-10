import { PageLayout } from '@/components/common/PageLayout';
import { ButtonContainer, Container } from './index.style.ts';
import { StepOne } from './components/StepOne';
import { StepTwo } from './components/StepTwo';
import { useExhibitRegister } from './hooks/useExhibitRegister';
import { StepThree } from './components/StepThree';
import { CommonButton } from '@/components/common/CommonButton/index.tsx';

// 최상위 컴포넌트 통합
export const ExhibitRegister = () => {
  const {
    step,
    setStep,
    selectedBackground,
    selectedOverlay,
    overlayPosition,
    exhibitName,
    handleBackgroundSelect,
    handleOverlaySelect,
    handlePositionUpdate,
    handleNameChange,
  } = useExhibitRegister();

  const handleSubmit = () => {
    // API 호출 로직
    console.log({
      background: selectedBackground,
      overlay: selectedOverlay,
      position: overlayPosition,
      name: exhibitName,
    });
  };

  return (
    <PageLayout>
      <Container>
        {step === 0 && (
          <StepOne
            handleBackgroundSelect={handleBackgroundSelect}
            selectedBackground={selectedBackground}
          />
        )}
        {step === 1 && (
          <StepTwo
            handleOverlaySelect={handleOverlaySelect}
            selectedOverlay={selectedOverlay}
          />
        )}
        {step === 2 && (
          <StepThree
            selectedBackground={selectedBackground}
            selectedOverlay={selectedOverlay}
            overlayPosition={overlayPosition}
            exhibitName={exhibitName}
            handlePositionUpdate={handlePositionUpdate}
            handleNameChange={handleNameChange}
          />
        )}
      </Container>

      <ButtonContainer>
        <CommonButton
          color="black"
          background="white"
          borderColor="black"
          onClick={() => setStep(step - 1)}
          disabled={step === 0}
          text="이전 단계"
        />
        {step === 2 ? (
          <CommonButton
            color="white"
            background="black"
            borderColor="white"
            onClick={handleSubmit}
            disabled={!exhibitName || !selectedBackground || !selectedOverlay}
            text="전시 등록"
          />
        ) : (
          <CommonButton
            color="white"
            background="black"
            borderColor="white"
            borderRadius="0px"
            onClick={() => setStep(step + 1)}
            disabled={
              (step === 0 && !selectedBackground) ||
              (step === 1 && !selectedOverlay)
            }
            text="다음 단계"
          />
        )}
      </ButtonContainer>
    </PageLayout>
  );
};
