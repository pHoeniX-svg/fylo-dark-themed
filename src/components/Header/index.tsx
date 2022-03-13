import Logo from '~src/images/logo.svg';
import { ImgWrapper, Nav, Wrapper } from './style';

export const Header = () => {
  return (
    <Wrapper>
      <Nav>
        <ImgWrapper>
          <img src={Logo} alt='fylo logo' />
        </ImgWrapper>

        <ul role='list'>
          <li>
            <a href='#'>Features</a>
          </li>
          <li>
            <a href='#'>Team</a>
          </li>
          <li>
            <a href='#'>Sign In</a>
          </li>
        </ul>
      </Nav>
    </Wrapper>
  );
};
