import { Link } from 'react-router-dom';
import { Box, Text } from "..";
import { CommonProps } from "../common";

export interface PaginationProps extends CommonProps {
  currentPage: number;
  totalPages: number;
}

export const Pagination = ({
  currentPage,
  totalPages
}: PaginationProps) => {
  const pages = makePageNumber(currentPage, totalPages);
  const startPageStatus = currentPage != 1;
  const lastPageStatus = totalPages - currentPage > 5;
  
  return (
    <div className={["ui-pagination"].join(' ')}>
      <Box gap="20px" verticalAlign="middle" align="center" padding="30px 0 0">
        {startPageStatus &&
          <>
            <Link to={`?page=1`}>
              <Text className={[currentPage === 1 ? 'ui-pagination--active' : '']}>1 ... </Text>
            </Link>
          </>
        }

        {pages.map(page =>
          <Link to={`?page=${page}`} key={`page${page}`}>
            <Text className={[currentPage === page ? 'ui-pagination--active' : '']}>{page}</Text>
          </Link>
        )}

        {lastPageStatus &&
          <>
            <Link to={`?page=${totalPages}`}>
              <Text className={[totalPages === currentPage ? 'ui-pagination--active' : '']}>... {totalPages}...</Text>
            </Link>
          </>
        }
      </Box>
    </div>
  )
}

function makePageNumber(currentPage: number, totalPages: number) {
  const remainingPages = totalPages - currentPage;
  const startPage = (remainingPages > 2) ? (currentPage - 2) : (totalPages - 4);
  return Array.from({ length: 5 }, (_, index) => startPage + index);
}