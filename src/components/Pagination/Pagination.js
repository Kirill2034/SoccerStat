import React from "react";
import Button from "@material-ui/core/Button";
import styles from "./Pagingation.module.css";
import Box from "@material-ui/core/Box";

function Pagination({ perPage, total, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(total / perPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Box display="flex" flexWrap="wrap">
      {pageNumbers.map((number) => (
        <div key={number} className={styles.buttonWrapper}>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => paginate(number)}
          >
            {number}
          </Button>
        </div>
      ))}
    </Box>
  );
}

export default Pagination;
