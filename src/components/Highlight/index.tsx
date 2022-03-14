import { FaArrowCircleRight } from 'react-icons/fa';
import Image from '~src/images/illustration-stay-productive.png';
import { Container, GridContainer } from './style';

const Highlight = () => {
  return (
    <Container aria-labelledby='highlight' className='section'>
      <GridContainer>
        <div>
          <img src={Image} alt='stay productive' />
        </div>
        <div className='highlight__info flow'>
          <h2 id='highlight'>Stay productive, wherever you are</h2>
          <p>
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
          <a href='https://random-link.com'>
            See how Fylo works
            <FaArrowCircleRight />
          </a>
        </div>
      </GridContainer>
    </Container>
  );
};

export { Highlight };
