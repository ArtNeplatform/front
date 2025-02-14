import { useRef } from 'react';

export const useScrollToSection = () => {
  const sectionRefs = {
    작품소개: useRef<HTMLDivElement>(null),
    작가소개: useRef<HTMLDivElement>(null),
    다른작품: useRef<HTMLDivElement>(null),
  };

  const scrollToSection = (section: keyof typeof sectionRefs) => {
    sectionRefs[section].current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return { sectionRefs, scrollToSection };
};
