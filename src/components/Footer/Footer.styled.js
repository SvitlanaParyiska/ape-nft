import styled from 'styled-components';

export const FooterContainer = styled.section`
  padding-top: 30px;
  padding-bottom: 24px;
  @media (min-width: 768px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }

  p {
    text-align: center;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.17;
    font-family: 'Messina Sans Mono', sans-serif;
    text-transform: uppercase;
  }
`;
