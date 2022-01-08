import styled from 'styled-components';
import { ReactComponent as Logo } from '@/logo.svg';
import { ButtonLink } from '@/components/ButtonLink';

const Container = styled.div`
  text-align: center;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #282c34;
  min-height: 100vh;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Links = styled.p`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Top = () => (
  <Container>
    <Header>
      <Logo />
      <p>This is an example of how to create routable modal.</p>
      <Links>
        <ButtonLink to="/description">description</ButtonLink>
        <ButtonLink to="/modal">open modal</ButtonLink>
      </Links>
    </Header>
  </Container>
);
