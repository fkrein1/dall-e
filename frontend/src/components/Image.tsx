import * as Dialog from '@radix-ui/react-dialog';
import { Copy, X } from 'phosphor-react';
import { useState } from 'react';
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
  const [copied, setCopied] = useState(false);
  function handleCopyToClipboard() {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
                {copied && <span>Copied!</span>}
                {!copied && (
                  <>
                    <Copy size={16} /> <span>Copy prompt</span>
                  </>
                )}
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
