import styled from "styled-components";
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Badge from "./Badge";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Container } from "@mui/material";

const Pagination = ({ badgesPerPage, badges }) => {
    const [currentBadges, setCurrentBadges] = useState(null); // Empty list of badges
    const [pageCount, setPageCount] = useState(0); // Page count
    const [badgeOffset, setBadgeOffset] = useState(0); // Badge offset

    useEffect(() => { // Load badges 
      const endOffset = badgeOffset + badgesPerPage;
      setCurrentBadges(badges.slice(badgeOffset, endOffset));
      setPageCount(Math.ceil(badges.length / badgesPerPage));
    }, [badgeOffset, badgesPerPage]);
  
    const handlePageClick = (event) => { // Request another page
      const newOffset = (event.selected * badgesPerPage) % badges.length;
      setBadgeOffset(newOffset);
    };

  return (
    <>
      {currentBadges &&
        currentBadges.map((badge, index) => (
          <Badge key={index} badge={badge._badge} />
        )
      )}
      <Container sx={{ py: 4, width: "auto" }}>
        <ReactPaginateStyled
          breakLabel="..."
          nextLabel={<ChevronRightIcon />}
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          pageCount={pageCount}
          previousLabel={<ChevronLeftIcon />}
          renderOnZeroPageCount={null}
        />
      </Container>
    </>
  );
}

const ReactPaginateStyled = styled(ReactPaginate)`
  display: flex;
  justify-content: center;
  background-color: var(--color-accent-light);
  border-radius: 5px;
  & li {
    display: flex;
    align-items: center;
    border-radius: 5px;
    cursor: pointer;
    color: #999;
  }
  & li:hover {
    background-color: #e5e5e5;
  }
  & a {
    user-select: none;
    display: flex;
    align-items: center;
    padding: 5px 10px;
    font-weight: 700;
    font-size: 14px;
  }
  & li.disabled {
    cursor: default;
  }
  & .selected {
    background-color: var(--color-blue)!important;
    color: var(--color-accent-light);
    cursor: default;
  }
`;

export default Pagination;