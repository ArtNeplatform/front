import { ReactNode } from 'react';
import { GridContainer } from './index.style.ts';

interface WidthFirstGridContainerProps {
  children: ReactNode;
  columnCount?: number;
}
/**
 * 너비 우선 그리드 컨테이너
 * @param children 자식 컴포넌트
 * @param columnCount 열 개수
 * 열 개수만큼 자식 컴포넌트를 배치하고 각 컴포넌트는 너비 우선으로 배치됩니다.
 * @author 홍규진
 */
export const WidthFirstGridContainer = ({
  children,
  columnCount = 4,
}: WidthFirstGridContainerProps) => {
  return <GridContainer $columnCount={columnCount}>{children}</GridContainer>;
};
