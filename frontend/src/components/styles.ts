import * as Dialog from '@radix-ui/react-dialog';
import styled from 'styled-components';

export const ImageContainer = styled.div`
  cursor: pointer;
  position: relative;

  @media (min-width: 640px) {
    &:hover {
      background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.8) 0%,
        rgba(0, 0, 0, 0.4) 40%,
        rgba(0, 0, 0, 0.1) 100%
      );
      box-shadow: 0 0 100px 30px #000 inset;
  
      transition: all 0.2s;
  
      p {
        display: block;
      }
  
      img {
        opacity: 0.4;
      }
    }
  }
  img {
    max-width: 100%;
    border-radius: 20px;
  }

  p {
    display: none;
    position: absolute;
    z-index: 1;
    color: ${(props) => props.theme.white};
    font-weight: 700;
    bottom: 16px;
    left: 16px;
    right: 16px;
  }
`;

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  z-index: 3;
`;

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 1rem;
  right: 1rem;
  line-height: 0;
  cursor: pointer;
  color: ${(props) => props.theme['base-text']};
`;

export const Content = styled(Dialog.Content)`
  z-index: 4;
  width: 70vw;

  border-radius: 6px;
  padding: 24px 16px;
  background: ${(props) => props.theme['base-background']};
  border: 1px solid ${(props) => props.theme['base-border']};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 40px;

  @media (max-width: 768px) {
    padding: 50px 16px 16px;
    width: 90vw;
  }
`;

export const Prompt = styled(Dialog.Description)`
  div {
    border-radius: 12px;
    max-width: 350px;
    background: ${(props) => props.theme['base-dark-input']};
    --tw-bg-opacity: 0.5;
    padding: 10px 20px;
    color: white;

    @media (max-width: 768px) {
      max-width: 100%;
    }

    button {
      margin-top: 10px;
      padding: 8px 10px;
      display: flex;
      gap: 8px;
      align-items: center;
      width: 100%;
      background: ${(props) => props.theme['base-dark-input']};
      border: none;
      color: ${(props) => props.theme.white};
      border: 1px solid #52525b;
      border-radius: 8px;
      cursor: pointer;

      &:hover {
        background: ${(props) => props.theme['base-hover']};
        transition: background-color 0.2s;
      }
    }
  }
`;

export const ImageWrapper = styled.div`
  img {
    width: 90%;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
