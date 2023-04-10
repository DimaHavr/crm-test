import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';

export const SearchIcon = styled(BsSearch)`
  width: 24px;
  height: 24px;
  color: #7e7e7e;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;

export const Wrapper = styled.form`
  position: relative;
`;

export const Input = styled.input`
  background-color: #f9fbff;
  border-radius: 10px;
  text-indent: 40px;
  width: 216px;
  height: 38px;
  border: none;
  transition: outline 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    outline: 1px solid #eeeeee;
  }

  @media screen and (max-width: 767px) {
    width: 200px;
  }
`;

export const Button = styled.button`
  display: flex;
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translate(-50%, -50%);
  border: none;
  background: none;
`;
