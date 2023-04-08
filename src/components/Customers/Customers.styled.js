import styled from 'styled-components';

export const TableContainer = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 10px 60px rgba(226, 236, 249, 0.5);
  border-radius: 30px;
  overflow: auto;
  margin: 0 auto;
  width: 100%;
  max-width: 968px;
`;

export const TableWrapper = styled.div`
  overflow: auto;
  padding: 0 40px 0 38px;
`;

export const Table = styled.table`
  border-spacing: 0 10px;
  border-collapse: collapse;
  width: 100%;
`;

export const TableRow = styled.tr``;

export const TableHeader = styled.th`
  font-weight: 400;
  color: #757575;
  padding-bottom: 14px;
  border-bottom: 1px solid #eeeeee;
  white-space: nowrap;
  text-align: left;
  &:last-child {
    text-align: center;
  }

  &:not(:last-child) {
    padding-right: 50px;
  }
`;

export const TableBody = styled.tbody``;

export const TableData = styled.td`
  font-weight: 500;
  color: #000000;
  padding: 19.5px 0;
  border-bottom: 1px solid #eeeeee;
  text-align: left;
  white-space: nowrap;
  &:last-child {
    text-align: center;
  }
  &:not(:last-child) {
    padding-right: 50px;
  }
`;

export const StatusItem = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  width: 80px;
  height: 29px;
  border: 1px solid #00b087;
  border-radius: 4px;
  margin: 0 auto;
  background-color: ${({ isActive }) =>
    isActive ? 'rgba(22, 192, 152, 0.38);' : '#FFC5C5;'};
  border: ${({ isActive }) =>
    isActive ? '1px solid #00b087;' : '1px solid #DF0404;'};
  color: ${({ isActive }) => (isActive ? ' #008767;' : '#DF0404;')}; ;
`;

export const TopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 53px 40px 38px;
`;

export const TopTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  align-items: flex-start;
`;

export const Text = styled.p`
  font-weight: 600;
  font-size: 22px;
  line-height: 33px;
  color: #000000;
`;

export const TextItem = styled.p`
  font-weight: 400;
  color: #16c098;
`;

export const BottomWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 40px 40px 38px;
`;

export const BottomText = styled.p`
  font-weight: 500;
  color: #b5b7c0;
`;
