import { useQuery } from '@tanstack/react-query';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ClipLoader } from 'react-spinners';
import { Image } from '../../components/Image';
import { generateImage } from '../../services/generateImage';
import { getImages } from '../../services/getImages';
import { HomeContainer, ImageForm, ImageGrid, Subtitle, Title } from './styles';

type Inputs = {
  prompt: string;
};

export function Home() {
  const { data, refetch } = useQuery(['images'], getImages);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();

  const handleGenerateImage: SubmitHandler<Inputs> = async (data) => {
    try {
      await generateImage(data.prompt);
    } catch (err) {
      alert(
        'Sorry, invalid promptor or reached request limit.',
      );
    }
    await refetch();
    reset();
  };

  return (
    <HomeContainer onSubmit={handleSubmit(handleGenerateImage)}>
      <Title>DALL·E ART</Title>
      <Subtitle>The GPT-3 AI image generator</Subtitle>

      <ImageForm>
        <textarea
          {...register('prompt', { required: true, min: 8 })}
          placeholder="Describe the image you'd like to see"
        />
        {errors.prompt && <p>Use at least 8 digits to describe your image</p>}
        <button type="submit" disabled={isSubmitting}>
          {!isSubmitting && 'Generate'}
          {isSubmitting && 'Generating...'}
        </button>
      </ImageForm>

      <ImageGrid>
        {isSubmitting && (
          <div>
            <ClipLoader size={60} color="#A1AAB3" />
          </div>
        )}
        {data?.map((image) => (
          <Image url={image.url} prompt={image.prompt} key={image.id} />
        ))}
      </ImageGrid>
    </HomeContainer>
  );
}
