import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  align-items: center;
`;

const GridContainer = styled.div`
  display: grid;
  gap: 2em;

  @media (min-width: 35em) {
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
  }

  & .highlight__info {
    --flow-space: 1.2em;
    align-self: center;
  }

  h2 {
    font-size: var(--fs-800);
  }

  a {
    display: inline-block;
    padding-bottom: 0.3rem;
    border-bottom: 1px solid hsl(var(--clr-400));
    color: hsl(var(--clr-400));
    text-decoration: none;

    > :last-child {
      margin-inline-start: 1em;
    }
  }
`;

export { Container, GridContainer };
