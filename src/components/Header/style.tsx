import styled from 'styled-components';

const Container = styled.header`
  /* background-image: url('/src/images/bg-curvy-mobile.svg');
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover; */
  max-width: var(--max-width, 128rem);
  margin-inline: auto;
  padding-inline: var(--spacer, 2em);
  font-family: var(--ff-accent);
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 2em;

  [role='list'] {
    display: flex;
    align-items: center;
    gap: 1rem;

    a {
      text-decoration: none;
    }
  }
`;

const NavLogo = styled.div`
  width: 13rem;
`;

const Hero = styled.section`
  display: grid;
  place-items: center;
  max-width: 90ch;
  margin-inline: auto;
  padding-inline: 3em;
  text-align: center;

  h1 {
    font-size: var(--fs-900);
  }
  p {
    font-size: var(--fs-600);
  }
`;
export { Container, Nav, NavLogo, Hero };
