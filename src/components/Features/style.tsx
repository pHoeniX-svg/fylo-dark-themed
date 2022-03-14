import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  align-items: center;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  gap: 6em;
  margin-inline: auto;

  article {
    display: flex;
    align-items: center;
    flex-direction: column;
    row-gap: 1em;
    text-align: center;
  }
`;

export { Container, GridContainer };
