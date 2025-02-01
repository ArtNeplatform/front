import { ReactNode } from 'react';
import { GridContainer } from './index.style.ts';

interface SquareGridContainerProps {
  children: ReactNode;
  columnCount?: number;
}

/**
 * 정사각형 그리드 컨테이너
 * @param children 자식 컴포넌트
 * @param columnCount 열 개수
 * 열 개수만큼 자식 컴포넌트를 배치하고 각 컴포넌트는 정사각형 형태로 배치됩니다.
 * @author 홍규진
 */
export const SquareGridContainer = ({
  children,
  columnCount = 4,
}: SquareGridContainerProps) => {
  return <GridContainer $columnCount={columnCount}>{children}</GridContainer>;
};
