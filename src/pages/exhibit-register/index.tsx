import { PageLayout } from '@/components/common/PageLayout';
import { ButtonContainer, Container } from './index.style.ts';
import { StepOne } from './components/StepOne';
import { StepTwo } from './components/StepTwo';
import { useExhibitRegister } from './hooks/useExhibitRegister';
import { CommonButton } from '@/components/common/CommonButton/index.tsx';
import { useGetExhibitAvailableArtwork } from './hooks/useGetExhibitAvailableArtwork.ts';
import StepThree from './components/StepThree/index.tsx';

// 최상위 컴포넌트 통합
export const ExhibitRegister = () => {
  const {
    step,
    setStep,
    selectedBackground,
    selectedOverlay,
    handleBackgroundSelect,
    handleOverlaySelect,
    handleSubmit,
  } = useExhibitRegister();
  const { data: availableArtworks } = useGetExhibitAvailableArtwork();

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
            selectedBackground={selectedBackground}
            handleOverlaySelect={handleOverlaySelect}
            selectedOverlay={selectedOverlay}
            availableArtworks={availableArtworks}
          />
        )}
        {step === 2 && (
          <StepThree
            backgroundImage={selectedBackground as string}
            overlayImage={selectedOverlay as string}
            handleSubmit={handleSubmit}
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
        {step === 2 ? null : (
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
