import { useState, useEffect } from 'react';
import {
  SpinnerContainer,
  MainLogo,
  ArtworkOverlay,
  LoadingText,
} from './index.style';
import mainLogo from '@/assets/png/main-logo.png';
import artwork from '@/assets/png/example_artwork.png';
export default function PrimarySpinner() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 360) % 360);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <SpinnerContainer>
      <MainLogo src={mainLogo} alt="Loading Logo" rotation={rotation} />
      <ArtworkOverlay src={artwork} alt="Loading Artwork" />
      <LoadingText>Loading...</LoadingText>
    </SpinnerContainer>
  );
}
