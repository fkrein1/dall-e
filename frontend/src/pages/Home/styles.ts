import styled from 'styled-components';

export const HomeContainer = styled.div`
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.white};
  font-size: 44px;
  text-align: center;
  margin-top: 100px;
  font-family: 'Alegreya', serif;
  font-weight: 700;
`;

export const Subtitle = styled.p`
  font-size: 14px;
  text-align: center;
  margin-top: 14px;
`;

export const ImageForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  textarea {
    font-size: 14px;
    flex: 1;
    margin-top: 20px;
    justify-content: flex-start;
    width: 560px;
    min-height: 100px;
    background: ${(props) => props.theme['base-input']};
    border: none;
    border-radius: 20px;
    padding: 10px 16px;
    color: ${(props) => props.theme.white};
  }
  textarea::placeholder {
    color: ${(props) => props.theme['base-text']};
  }

  button {
    margin-top: 16px;
    width: 144px;
    height: 36px;
    border-radius: 100px;
    border: none;
    color: ${(props) => props.theme.white};
    cursor: pointer;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    background-image: linear-gradient(
      ${(props) => props.theme.indigo},
      ${(props) => props.theme['indigo-dark']}
    );

    &:hover {
      background-image: linear-gradient(
        ${(props) => props.theme['indigo-light']},
        ${(props) => props.theme.indigo}
      );
    }
  }
`;

export const ImageGrid = styled.div`
  margin-top: 50px;
  display: grid;
  margin-inline: 20px;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  img {
    max-width: 100%;
    border-radius: 20px;
  }
`;
