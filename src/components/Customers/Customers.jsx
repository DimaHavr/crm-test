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
import SearchBox from 'components/SearchBox/SearchBox';
import { useState } from 'react';

const Customers = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputSubmit = value => {
    setSearchQuery(value);
  };

  const filteredData = customers.filter(row =>
    Object.values(row).some(value =>
      value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );
  return (
    <TableContainer>
      <TopWrapper>
        <TopTextWrapper>
          <Text>All customers</Text>
          <TextItem>Active members</TextItem>
        </TopTextWrapper>
        <SearchBox onSubmit={handleInputSubmit} />
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
            {filteredData.map(
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
