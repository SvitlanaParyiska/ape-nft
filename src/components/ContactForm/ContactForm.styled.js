import styled from 'styled-components';

export const InputBox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
`;

export const ErrorMessage = styled.div`
  font-family: 'Messina Sans', sans-serif, sans-serif;
  color: ${props => props.color || '#dc3b5a'};
  margin-top: 4px;
  line-height: 1.17;
  font-size: 14px;
`;

export const IconBox = styled.div`
  border-radius: 8px 0 0 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  backdrop-filter: blur(12px);
  background: #1e1e1e;
  @media (min-width: 1280px) {
    width: 64px;
    height: 64px;
  }
`;

export const InputStyled = styled.input`
  font-family: 'Messina Sans', sans-serif, sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.17;
  text-transform: uppercase;
  border: 1px solid
    ${props =>
      props.$error ? '#dc3b5a' : props.$success ? 'rgb(7, 241, 7)' : '#1e1e1e'};

  border-radius: 0 8px 8px 0;
  padding: 22px 24px;
  width: 168px;
  height: 48px;
  background: none;
  color: inherit;
  outline: none;
  background-color: var(--color-background) !important;
  &:focus {
    border: 1px solid #1e1e1e;
  }
  &::placeholder {
    color: rgba(255, 255, 255, 0.24);
  }
  @media (min-width: 768px) {
    width: 200px;
  }
  @media (min-width: 1280px) {
    width: 333px;
    height: 64px;
    &::placeholder {
      font-size: 16px;
      line-height: 1.19;
    }
  }
`;
export const ButtonStyled = styled.button`
  font-family: inherit;
  font-weight: 900;
  font-size: 16px;
  line-height: 1.19;
  color: inherit;
  backdrop-filter: blur(12px);
  background: #dc3b5a;
  border-radius: 8px;
  border: none;
  width: 216px;
  height: 41px;
  margin: 0 auto;
  transition: color var(--transition);
  &:hover {
    color: #1e1e1e;
  }
  @media (min-width: 768px) {
    width: 247px;
  }
  @media (min-width: 1280px) {
    font-size: 28px;
    line-height: 1.21;
    border-radius: 12px;
    width: 397px;
    height: 70px;
  }
`;
