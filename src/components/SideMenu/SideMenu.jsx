import { useStateContext } from '../../context/StateContext';
import Customers from 'components/Customers/Customers';
import {
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
  Section,
  ContentWrapper,
  ContentText,
  HeaderNavBar,
  CloseBarIcon,
  BurgerIcon,
  ButtonNavBarBox,
} from './SideMenu.styled';
import UserImg from 'images/Ellipse.png';
import MobileSideMenu from 'components/MobileSideMenu/MobileSideMenu';

const SideMenu = () => {
  const {
    handleCustomersClick,
    handleShowMenuClick,
    showMobileSideMenu,
    showCustomers,
  } = useStateContext();

  return (
    <Section>
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
      </Wrapper>

      <ContentWrapper>
        <HeaderNavBar>
          <LogoBox>
            <LogoIconStyled />
            <LogoText>
              Dashboard<span>v.01</span>
            </LogoText>
          </LogoBox>
          <ButtonNavBarBox onClick={handleShowMenuClick}>
            <BurgerIcon showMobileSideMenu={showMobileSideMenu} />
            <CloseBarIcon showMobileSideMenu={showMobileSideMenu} />
          </ButtonNavBarBox>
        </HeaderNavBar>

        {showCustomers && (
          <>
            <ContentText> Hello Evano 👋🏼,</ContentText>
            <Customers />
          </>
        )}
        {showMobileSideMenu && <MobileSideMenu />}
      </ContentWrapper>
    </Section>
  );
};

export default SideMenu;
