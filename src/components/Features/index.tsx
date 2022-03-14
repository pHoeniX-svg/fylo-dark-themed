import { data } from '~src/data';
import { Container, GridContainer } from './style';

const Features = () => {
  return (
    <Container aria-label='features' className='section'>
      <GridContainer>
        {data?.features?.map((feature) => {
          return (
            <article key={feature.id}>
              <img src={feature.image} alt={feature.title} />
              <h3>{feature.title}</h3>
              <p>{feature.body}</p>
            </article>
          );
        })}
      </GridContainer>
    </Container>
  );
};

export { Features };
