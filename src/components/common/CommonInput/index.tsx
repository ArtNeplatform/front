import React from "react";
import { Container, StyledInput } from "./index.style";

type CommonInputProps = {
  placeholder: string;
};

export const CommonInput = ({ placeholder }: CommonInputProps) => {
  return (
    <Container>
      <StyledInput placeholder={placeholder} />
    </Container>
  );
};
