import AddFeedbackBt from '../AddFeedbackBtn/AddFeedbackBtn';
import ThemeToggler from '../ThemeToggler/ThemeToggler';
import UserInfo from '../UserInfo/UserInfo';

import icons from '../../images/icons.svg';

import {
  ContainerHeader,
  MenuBtn,
  MenuIcon,
  PageTitle,
} from './Header.styled';

import {
  useState,
  // useEffect
} from 'react';
// import { useLocation } from 'react-router-dom';

import { FeedbackModal } from 'components/Feedback/FeedbackModal';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';

let pageTitle = 'User Profile';

const Header = () => {
  const [isOpened, setIsOpen] = useState(false);
  const [openedMenu, setOpenMenu] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpened);
  };

  const handleOpenMenu = () => {
    setOpenMenu(!openedMenu);
  };

  // const { pathname } = useLocation();
  
  // useEffect(() => {
  //   if (pathname.includes('/statistics')) {
  //     pageTitle = 'Statistics';
  //     return;
  //   } else if (pathname.includes('/account')) {
  //     pageTitle = 'User Profile';
  //   } else {
  //     pageTitle = 'Calendar';
  //   }
  // }, [pathname]);


  const user = useSelector(selectUser);

  return (
    <ContainerHeader>
      <MenuBtn
        type='button'
        onClick={handleOpenMenu}
      >
        <MenuIcon>
          <use href={icons + '#icon-menu-01'}></use>
        </MenuIcon>
      </MenuBtn>
      <PageTitle>{ pageTitle }</PageTitle>
      <AddFeedbackBt setIsOpen={setIsOpen} />
      <ThemeToggler />
      <UserInfo user={user}/>
        {isOpened && (
        <FeedbackModal onClose={handleToggle} user={user}></FeedbackModal>
      )}
    </ContainerHeader>

  );
};

export default Header;
