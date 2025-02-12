import { Text } from '@/styles/text';
import { ButtonContainer, ArrowIcon } from './index.style.ts';
import Arrow from '@/assets/svg/arrow-right-black.svg';
import { useHandleLink } from '@/hooks/common/useHandleLink.ts';

interface MoreButtonProps {
  authorId: number;
}

export const MoreButton = ({ authorId }: MoreButtonProps) => {
  const handleLink = useHandleLink(`/author/${authorId}`);

  return (
    <ButtonContainer onClick={handleLink}>
      <Text size={14} color="black" weight="regular">
        작가 정보 더보기
      </Text>
      <ArrowIcon src={Arrow} alt="보러가기" />
    </ButtonContainer>
  );
};
