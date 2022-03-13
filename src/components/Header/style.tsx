import styled from 'styled-components';

const Wrapper = styled.header``;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  [role='list'] {
    display: flex;
    align-items: center;
    gap: 1rem;

    a {
      text-decoration: none;
    }
  }
`;

const ImgWrapper = styled.div`
  width: 15rem;
`;
export { Wrapper, Nav, ImgWrapper };
