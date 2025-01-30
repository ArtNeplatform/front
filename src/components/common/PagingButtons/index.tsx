import React, { useEffect, useState } from "react";
import { Container, StyledButton, PageButton, IconButton } from "./index.style";
import {
  HiChevronDoubleLeft,
  HiChevronLeft,
  HiChevronDoubleRight,
  HiChevronRight,
} from "react-icons/hi2";

interface PaginationProps {
  totalPage: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export const PagingButtons = ({
  totalPage,
  page,
  setPage,
}: PaginationProps) => {
  const limit = 10;
  const [currentPageArray, setCurrentPageArray] = useState<number[]>([]);
  const [totalPageArray, setTotalPageArray] = useState<number[][]>([]);

  useEffect(() => {
    const slicedPageArray = sliceArrayByLimit(totalPage, limit);
    setTotalPageArray(slicedPageArray);
    setCurrentPageArray(slicedPageArray[0]);
  }, [totalPage, limit]);

  useEffect(() => {
    if (page % limit === 1) {
      setCurrentPageArray(totalPageArray[Math.floor(page / limit)]);
    } else if (page % limit === 0) {
      setCurrentPageArray(totalPageArray[Math.floor(page / limit) - 1]);
    }
  }, [page, limit, totalPageArray]);

  const sliceArrayByLimit = (total: number, limit: number) => {
    const result: number[][] = [];
    for (let i = 0; i < total; i += limit) {
      result.push(
        Array.from({ length: limit }, (_, j) => i + j + 1).filter(
          (n) => n <= total
        )
      );
    }
    return result;
  };

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  const handleDoubleLeft = () => {
    if (page > limit) {
      setPage(page - limit);
    }
  };

  const handleLeft = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleRight = () => {
    if (page < totalPage) {
      setPage(page + 1);
    }
  };

  const handleDoubleRight = () => {
    if (page + limit <= totalPage) {
      setPage(page + limit);
    }
  };

  return (
    <Container>
      <StyledButton
        active={false}
        onClick={handleDoubleLeft}
        disabled={page <= limit}
      >
        <IconButton>
          <HiChevronDoubleLeft />
        </IconButton>
      </StyledButton>

      <StyledButton active={false} onClick={handleLeft} disabled={page <= 1}>
        <IconButton>
          <HiChevronLeft />
        </IconButton>
      </StyledButton>

      {currentPageArray?.map((pageNum) => (
        <PageButton
          key={pageNum}
          active={pageNum === page}
          onClick={() => handlePageChange(pageNum)}
        >
          {pageNum}
        </PageButton>
      ))}

      <StyledButton
        active={false}
        onClick={handleRight}
        disabled={page >= totalPage}
      >
        <IconButton>
          <HiChevronRight />
        </IconButton>
      </StyledButton>

      <StyledButton
        active={false}
        onClick={handleDoubleRight}
        disabled={page + limit > totalPage}
      >
        <IconButton>
          <HiChevronDoubleRight />
        </IconButton>
      </StyledButton>
    </Container>
  );
};
