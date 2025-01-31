import { Container, StyledInput } from "./index.style";

type CommonInputProps = {
  placeholder: string;
};

/**
 * 앱 전반적으로 사용되는 CommonInput입니다.
 * @author 이하늘
 */
export const CommonInput = ({ placeholder }: CommonInputProps) => {
  return (
    <Container>
      <StyledInput placeholder={placeholder} />
    </Container>
  );
};
