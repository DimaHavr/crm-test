import { customers } from 'services/customers';
import {
  TableContainer,
  TableWrapper,
  Table,
  TableHeader,
  TableData,
  TableRow,
  TableBody,
  StatusItem,
  TopWrapper,
  TopTextWrapper,
  Text,
  TextItem,
  BottomWrapper,
  BottomText,
} from './Customers.styled';
import CustomersPagination from 'components/Pagination/CustomersPagination';

const Customers = () => {
  return (
    <TableContainer>
      <TopWrapper>
        <TopTextWrapper>
          <Text>All customers</Text>
          <TextItem>Active Members</TextItem>
        </TopTextWrapper>
        <TextItem>Search</TextItem>
      </TopWrapper>
      <TableWrapper>
        <Table>
          <thead>
            <TableRow>
              <TableHeader>Customer name</TableHeader>
              <TableHeader>Company</TableHeader>
              <TableHeader>Phone number</TableHeader>
              <TableHeader>Email</TableHeader>
              <TableHeader>Country</TableHeader>
              <TableHeader>Status</TableHeader>
            </TableRow>
          </thead>
          <TableBody>
            {customers.map(
              ({ id, name, company, phone, email, country, status }) => (
                <TableRow key={id}>
                  <TableData>{name}</TableData>
                  <TableData>{company}</TableData>
                  <TableData>{phone}</TableData>
                  <TableData>{email}</TableData>
                  <TableData>{country}</TableData>
                  <TableData>
                    <StatusItem isActive={status}>
                      {status ? 'Active' : 'Inactive'}
                    </StatusItem>
                  </TableData>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </TableWrapper>
      <BottomWrapper>
        <BottomText>Showing data 1 to 8 of 256K entries</BottomText>
        <CustomersPagination />
      </BottomWrapper>
    </TableContainer>
  );
};

export default Customers;
