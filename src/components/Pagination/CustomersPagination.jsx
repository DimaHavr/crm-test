import styled from 'styled-components';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';

const StyledPagination = styled(Pagination)`
  & .MuiPagination-ul {
    justify-content: center;
    gap: 5px;
  }

  & .css-19xm0h7-MuiButtonBase-root-MuiPaginationItem-root {
    width: 23px;
    margin: 0;
  }

  & .MuiPaginationItem-root {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 12px;
    line-height: 100%;
    color: #404b52;
    background-color: #f5f5f5;
    border: 1px solid #eeeeee;
    border-radius: 4px;
  }

  & .MuiPaginationItem-page.Mui-selected {
    background-color: #5932ea;
    color: #fff;
  }

  & .MuiPaginationItem-page:hover {
    background-color: #eeeeee;
    color: #404b52;
  }
  &
    .MuiPaginationItem-root.MuiPaginationItem-sizeMedium.MuiPaginationItem-outlined.MuiPaginationItem-rounded.MuiPaginationItem-ellipsis.css-1v2lvtn-MuiPaginationItem-root {
    font-size: 12px;
    line-height: 100%;
    background: none;
    border: none;
    color: #000000;
  }
`;

const CustomersPagination = ({ handleChange, page, totalPages }) => {
  return (
    <Stack spacing={2}>
      <StyledPagination
        variant="outlined"
        shape="rounded"
        count={40}
        page={1}
        boundaryCount={1}
        onChange={handleChange}
      />
    </Stack>
  );
};

export default CustomersPagination;
