import HeroImage from '~src/images/illustration-intro.png';
import Logo from '~src/images/logo.svg';
import { GlobalContainer } from '~src/styles';
import { HeroButton } from '../Button';
import { Container, Hero, Nav, NavLogo } from './style';

export const Header = () => {
  return (
    <GlobalContainer>
      <Container className='flow'>
        <Nav>
          <NavLogo>
            <img src={Logo} alt='fylo logo' />
          </NavLogo>
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

        <Hero className='flow'>
          <div className='showcase'>
            <img src={HeroImage} alt='all your files in one place' />
          </div>
          <h1>All your files in one secure location, accessible anywhere.</h1>
          <p>
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends
            family, and co-workers.
          </p>
          <HeroButton>Get Started</HeroButton>
        </Hero>
      </Container>
    </GlobalContainer>
  );
};
