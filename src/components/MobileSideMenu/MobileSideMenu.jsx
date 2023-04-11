import { useEffect, useRef } from 'react';
import UserImg from 'images/Ellipse.png';
import {
  SideMenuWrapper,
  BackButton,
  CloseIcon,
  Wrapper,
  LogoBox,
  LogoText,
  MenuWrapper,
  List,
  ListItem,
  ListItemText,
  LogoIconStyled,
  ChevronRightIconStyled,
  KeyIconStyled,
  SquareIconStyled,
  UserIconStyled,
  WalletIconStyled,
  DiscountIconStyled,
  MessageIconStyled,
  UserImgStyled,
  UserWrapper,
  UserTextWrapper,
  TextItem,
  Text,
} from './MobileSideMenu.styled';

const MobileSideMenu = ({
  setMobileShowSideMenu,
  showMobileSideMenu,
  showCustomers,
  handleCustomersClick,
}) => {
  const mobileSideMenu = useRef();

  useEffect(() => {
    const onCloseModal = event => {
      if (event.code === 'Escape') {
        setMobileShowSideMenu(false);
      }
    };

    window.addEventListener('keydown', onCloseModal);

    return () => {
      window.removeEventListener('keydown', onCloseModal);
    };
  }, [setMobileShowSideMenu]);

  const onBackdropCloseModal = event => {
    if (event.target === event.currentTarget) {
      setMobileShowSideMenu(false);
    }
  };

  return (
    <SideMenuWrapper
      showMobileSideMenu={showMobileSideMenu}
      ref={mobileSideMenu}
      onClick={onBackdropCloseModal}
    >
      <Wrapper>
        <MenuWrapper>
          <LogoBox>
            <LogoIconStyled />
            <LogoText>
              Dashboard<span>v.01</span>
            </LogoText>
          </LogoBox>
          <List>
            <ListItem>
              <ListItemText>
                <KeyIconStyled />
                Dashboard
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                <SquareIconStyled />
                Product
              </ListItemText>
              <ChevronRightIconStyled />
            </ListItem>
            <ListItem
              isShowCustomers={showCustomers}
              onClick={handleCustomersClick}
            >
              <ListItemText isShowCustomers={showCustomers}>
                <UserIconStyled />
                Customers
              </ListItemText>
              <ChevronRightIconStyled />
            </ListItem>
            <ListItem>
              <ListItemText>
                <WalletIconStyled />
                Income
              </ListItemText>
              <ChevronRightIconStyled />
            </ListItem>
            <ListItem>
              <ListItemText>
                <DiscountIconStyled />
                Promote
              </ListItemText>
              <ChevronRightIconStyled />
            </ListItem>
            <ListItem>
              <ListItemText>
                <MessageIconStyled />
                Help
              </ListItemText>
              <ChevronRightIconStyled />
            </ListItem>
          </List>
        </MenuWrapper>
        <UserWrapper>
          <UserImgStyled src={UserImg} alt="User images" />
          <UserTextWrapper>
            <Text>Evano</Text>
            <TextItem>Project Manager</TextItem>
          </UserTextWrapper>
        </UserWrapper>
        <BackButton type="button" onClick={() => setMobileShowSideMenu(false)}>
          <CloseIcon />
        </BackButton>
      </Wrapper>
    </SideMenuWrapper>
  );
};

export default MobileSideMenu;
