import { useQuery } from '@tanstack/react-query';
import { getImages } from '../../services/getImages';
import { HomeContainer, ImageForm, ImageGrid, Subtitle, Title } from './styles';

export function Home() {
  const { data } = useQuery(['images'], getImages);
  return (
    <HomeContainer>
      <Title>DALL·E ART</Title>
      <Subtitle>The GPT-3 AI image generator</Subtitle>

      <ImageForm>
        <textarea placeholder="Describe the image you'd like to see" />
        <button>Generate</button>
      </ImageForm>
      <ImageGrid>
        {data?.map((image) => (
          <img src={image.url} alt={image.prompt} />
        ))}
      </ImageGrid>
    </HomeContainer>
  );
}
