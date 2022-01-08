import styled from 'styled-components';
import { ButtonLink } from '@/components/ButtonLink';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #282c34;
  min-height: 100vh;
  padding: 1rem;
  font-size: calc(10px + 2vmin);
  color: white;
  text-align: center;
`;

export const Description = () => (
  <Container>
    <header>
      Description
    </header>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Vestibulum quis erat venenatis, tristique ex sit amet, efficitur ex.
      Morbi iaculis dolor sit amet ultricies rutrum.
      Morbi quis lectus bibendum erat dictum sollicitudin non sed arcu.
      Nam at nibh facilisis est tempus viverra.
      Curabitur id risus vestibulum, blandit metus non, interdum tortor.
      Vestibulum non nibh vel turpis ultrices fermentum.
      Nullam vitae ligula pellentesque, hendrerit metus vel, suscipit urna.
      Vestibulum eget libero dictum arcu iaculis egestas.
      Sed ac libero eget nunc ullamcorper finibus sit amet non lorem.
      Maecenas luctus nibh sed lorem imperdiet, non maximus nisi ullamcorper.
      Nunc ac mi at urna ultrices aliquet at at mauris.
      Integer sit amet massa maximus, suscipit turpis vel, pharetra lectus.
      Mauris sed quam sit amet eros blandit volutpat at id tortor.
      Nullam eu velit auctor, feugiat ante in, tempus leo.
      Morbi lobortis arcu ac odio consequat, a placerat ipsum elementum.
      Nunc id quam in nisi egestas aliquam.
      Mauris vel elit at sapien vestibulum luctus.
      Aliquam ultricies tellus vitae lobortis efficitur.
      Aliquam tincidunt mi in felis malesuada elementum.
    </p>
    <p>
      <ButtonLink to="/modal" state={{ backgroundPath: '/description' }}>open modal</ButtonLink>
    </p>
  </Container>
);
