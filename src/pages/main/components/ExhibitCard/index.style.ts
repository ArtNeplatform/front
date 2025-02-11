import styled from '@emotion/styled';

interface ExhibitCardProps {
  $isBig: boolean;
}

export const ExhibitContainer = styled.div<ExhibitCardProps>`
  display: flex;
  flex-direction: column;
  gap: ${({ $isBig }) => ($isBig ? `32px` : `20px`)};
  cursor: pointer;
`;

export const ExhibitImage = styled.img<ExhibitCardProps>`
  width: 100%;
  aspect-ratio: ${({ $isBig }) => ($isBig ? `1 / 1` : `415 / 311`)};
  height: auto;
  object-fit: cover;
`;
