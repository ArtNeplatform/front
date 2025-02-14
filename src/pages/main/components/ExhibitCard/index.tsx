import { Text } from '@/styles/text';
import { ExhibitContainer, ExhibitImage } from './index.style.ts';
import { useHandleLink } from '@/hooks/common/useHandleLink.ts';

interface ExhibitCardProps {
  exhibitionId: number;
  imageUrl: string;
  title: string;
  isBig: boolean;
}

export const ExhibitCard = ({
  exhibitionId,
  imageUrl,
  title,
  isBig,
}: ExhibitCardProps) => {
  const handleLink = useHandleLink(`/exhibition/${exhibitionId}`);

  return (
    <ExhibitContainer onClick={handleLink} $isBig={isBig}>
      <ExhibitImage $isBig={isBig} src={imageUrl} alt={title} />
      <Text size={isBig ? 24 : 20} color="black" weight="medium">
        {title}
      </Text>
    </ExhibitContainer>
  );
};
