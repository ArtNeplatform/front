import { PageLayout } from '@/components/common/PageLayout';
import { ButtonContainer, Container } from './index.style.ts';
import { StepOne } from '@/pages/exhibition-register/components/StepOne/index.tsx';
import { StepTwo } from '@/pages/exhibition-register/components/StepTwo/index.tsx';
import { useExhibitionRegister } from '@/pages/exhibition-register/hooks/useExhibitionRegister.ts';
import { CommonButton } from '@/components/common/CommonButton/index.tsx';
import { useGetExhibitAvailableArtwork } from '@/pages/exhibition-register/hooks/useGetExhibitAvailableArtwork.ts';
import StepThree from '@/pages/exhibition-register/components/StepThree/index.tsx';

// 최상위 컴포넌트 통합
export const ExhibitionRegister = () => {
  const {
    step,
    setStep,
    selectedBackground,
    selectedOverlay,
    handleBackgroundSelect,
    handleOverlaySelect,
    handleSubmit,
  } = useExhibitionRegister();
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
