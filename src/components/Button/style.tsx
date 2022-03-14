import styled from 'styled-components';

const BaseButton = styled.button`
  display: inline-block;
  border: none;
  border-radius: var(--b-radius);
  outline: none;
  background: transparent;
  font: inherit;
  letter-spacing: var(--spacing);
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  mix-blend-mode: normal;
  cursor: pointer;
  transition: var(--transition, all 0.2s ease);

  &:hover,
  &:focus {
    outline: none;
  }
`;

const CTAButton = styled(BaseButton)`
  border-radius: 2em;
  color: inherit;
  background: linear-gradient(
    to right,
    hsl(var(--clr-400)),
    hsl(var(--clr-400))
  );
  font-family: var(--ff-accent);
  font-size: var(--fs-400);
  font-weight: var(--fw-700);
`;

const HeroButton = styled(CTAButton)`
  padding: 1em 9rem;
`;

const SignUpButton = styled(CTAButton)`
  padding: 1em 4rem;
`;

export { HeroButton, SignUpButton };
