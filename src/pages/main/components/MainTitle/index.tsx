import { Text } from '@/styles/text';
import { TitleContainer } from './index.style.ts';
import { ViewButton } from '@/pages/main/components/ViewButton/index.tsx';
import { useHandleLink } from '@/hooks/common/useHandleLink.ts';
import { Category } from '@pages/main/constants/category.ts';

interface MainTitleProps {
  category: Category;
}

export const MainTitle = ({ category }: MainTitleProps) => {
  const handleLink = useHandleLink(category.link);

  return (
    <TitleContainer>
      <Text size={38} color="black" weight="semibold">
        {category.title}
      </Text>
      <ViewButton onClick={handleLink} />
    </TitleContainer>
  );
};
