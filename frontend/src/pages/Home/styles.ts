import styled from 'styled-components';

export const HomeContainer = styled.div``;

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
  p {
    font-size: 14px;
    text-align: center;
    margin-top: 5px;
  }
  textarea {
    margin: auto;
    display: block;
    font-size: 14px;
    margin-top: 20px;
    width: 560px;
    min-height: 100px;
    background: ${(props) => props.theme['base-input']};
    border: none;
    border-radius: 20px;
    padding: 10px 16px;
    color: ${(props) => props.theme.white};

    @media (max-width: 640px) {
      width: 85vw;
    }
  }

  textarea::placeholder {
    color: ${(props) => props.theme['base-text']};
  }

  button {
    display: block;
    margin: auto;
    margin-top: 16px;
    width: 144px;
    height: 36px;
    border-radius: 100px;
    border: none;
    color: ${(props) => props.theme.white};
    cursor: pointer;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    background: ${(props) => props.theme.indigo};
    background-image: linear-gradient(
      ${(props) => props.theme.indigo},
      ${(props) => props.theme['indigo-dark']}
    );

    &:hover:not(:disabled) {
      background-image: linear-gradient(
        ${(props) => props.theme['indigo-light']},
        ${(props) => props.theme.indigo}
      );
    }

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  }
`;

export const ImageGrid = styled.div`
  margin-block: 50px;
  display: grid;
  margin-inline: 20px;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;

  div {
    border-radius: 20px;
    background: ${(props) => props.theme['base-input']};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
