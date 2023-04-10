import styled from 'styled-components';
import { VscChromeClose } from 'react-icons/vsc';
import { ReactComponent as LogoIcon } from 'icons/setting.svg';
import { ReactComponent as ChevronRightIcon } from 'icons/chevron-right.svg';
import { ReactComponent as KeyIcon } from 'icons/key-square.svg';
import { ReactComponent as WalletIcon } from 'icons/wallet-money.svg';
import { ReactComponent as SquareIcon } from 'icons/3d-square.svg';
import { ReactComponent as DiscountIcon } from 'icons/discount-shape.svg';
import { ReactComponent as MessageIcon } from 'icons/message-question.svg';
import { ReactComponent as UserIcon } from 'icons/user-square.svg';

export const CloseIcon = styled(VscChromeClose)`
  width: 34px;
  height: 34px;
  fill: #000;
`;

export const CartWrapper = styled.div`
  width: 100%;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 100;
  animation: ${({ showMobileSideMenu }) =>
    showMobileSideMenu
      ? 'fade-in-right 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;'
      : 'fade-out-right 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;'};

  @keyframes fade-in-right {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fade-out-right {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  @media screen and (max-width: 480px) {
    width: 100vw;
  }
`;

export const CartContainer = styled.div``;

export const BackButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 36px;
  right: 28px;
  background: none;
  border: none;

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  display: ${({ showMobileSideMenu }) =>
    showMobileSideMenu ? 'none' : 'flex'};

  &:hover,
  &:focus {
    transform: scale(1.05);
  }

  @media screen and (min-width: 481px) {
    display: none;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: start;
  position: fixed;
  width: 308px;
  height: 100%;
  padding: 36px 28px 76px;
  background-color: #ffffff;
  box-shadow: 0px 10px 60px rgba(226, 236, 249, 0.5);
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
  @media screen and (max-width: 480px) {
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-self: start;
  gap: 18px;
  @media screen and (max-width: 480px) {
  }
`;

export const LogoBox = styled.div`
  cursor: pointer;
  display: flex;
  gap: 8px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    transform: scale(1.02);
  }
  @media screen and (max-width: 480px) {
  }
`;

export const LogoText = styled.p`
  font-weight: 600;
  font-size: 26px;
  line-height: 39px;
  letter-spacing: 0.01em;
  @media screen and (max-width: 480px) {
  }
  span {
    margin-left: 4px;
    font-weight: 500;
    font-size: 10px;
    line-height: 15px;
    letter-spacing: -0.01em;
    color: #838383;
  }
`;

export const ListItemText = styled.p`
  font-weight: 500;

  display: flex;
  gap: 14px;
  color: #9197b3;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  color: ${({ isShowCustomers }) => isShowCustomers && ' #ffffff;'};
  @media screen and (max-width: 480px) {
  }
`;

export const ListItem = styled.li`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  padding: 11px 8px 11px;
  transition: border-radius 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #5932ea;
    color: ${({ isShowCustomers }) => isShowCustomers && ' #ffffff;'};
  }

  &:hover ${ListItemText} {
    color: #ffffff;
  }
  background-color: ${({ isShowCustomers }) => isShowCustomers && '#5932ea;'};

  @media screen and (max-width: 480px) {
  }
`;

export const UserWrapper = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-self: start;
  gap: 12px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    transform: scale(1.02);
  }
  @media screen and (max-width: 480px) {
  }
`;

export const UserTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 480px) {
  }
`;

export const Text = styled.p`
  font-weight: 500;
  color: #000000;
`;

export const TextItem = styled.p`
  font-weight: 400;
  color: #757575;
`;

export const UserImgStyled = styled.img`
  width: 42px;
  height: 42px;
`;

export const LogoIconStyled = styled(LogoIcon)`
  width: 37px;
  height: 37px;
  fill: #000000;
`;

export const KeyIconStyled = styled(KeyIcon)`
  width: 24px;
  height: 24px;
`;

export const WalletIconStyled = styled(WalletIcon)`
  width: 24px;
  height: 24px;
`;
export const SquareIconStyled = styled(SquareIcon)`
  width: 24px;
  height: 24px;
  fill: #9197b3;
`;
export const DiscountIconStyled = styled(DiscountIcon)`
  width: 24px;
  height: 24px;
  fill: #9197b3;
`;
export const MessageIconStyled = styled(MessageIcon)`
  width: 24px;
  height: 24px;
  fill: #9197b3;
`;
export const UserIconStyled = styled(UserIcon)`
  width: 24px;
  height: 24px;
  fill: #9197b3;
`;

export const ChevronRightIconStyled = styled(ChevronRightIcon)`
  width: 16px;
  height: 16px;
`;
