import * as Dialog from '@radix-ui/react-dialog';
import { Copy, X } from 'phosphor-react';
import {
  CloseButton,
  Content,
  ImageContainer,
  ImageWrapper,
  Overlay,
  Prompt,
} from './styles';

interface ImageProps {
  url: string;
  prompt: string;
}
export function Image({ url, prompt }: ImageProps) {
  function handleCopyToClipboard() {
    navigator.clipboard.writeText(prompt);
  }
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild={true}>
        <ImageContainer>
          <img src={url} alt={prompt} />
          <p>{`${prompt.substring(0, 60)}...`}</p>
        </ImageContainer>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Overlay />
        <Content>
          <CloseButton>
            <X size={24} />
          </CloseButton>
          <Prompt>
            <div>
              <p>{prompt}</p>
              <button onClick={handleCopyToClipboard}>
                <Copy size={16} />
                Copy prompt
              </button>
            </div>
          </Prompt>
          <ImageWrapper>
            <img src={url} alt={prompt} />
          </ImageWrapper>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
