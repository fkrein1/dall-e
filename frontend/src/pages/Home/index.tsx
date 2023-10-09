import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ClipLoader } from 'react-spinners';
import { Image } from '../../components/Image';
import usePageBottom from '../../hooks/usePageBottom';
import { generateImage } from '../../services/generateImage';
import { getImages } from '../../services/getImages';

import {
  HomeContainer,
  ImageForm,
  ImageGrid,
  NexPageLoader,
  Subtitle,
  Title,
} from './styles';

type Inputs = {
  prompt: string;
};

export function Home() {
  const isPageBottom = usePageBottom();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();

  const {
    data,
    refetch,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    isSuccess,
    isFetching,
  } = useInfiniteQuery(
    ['images'],
    ({ pageParam = 1 }) => getImages(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage.length < allPages[0].length) return null;
        return allPages.length + 1;
      },
    },
  );

  useEffect(() => {
    if (isPageBottom && !isFetching && hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, isPageBottom]);

  const handleGenerateImage: SubmitHandler<Inputs> = async (data) => {
    try {
      await generateImage(data.prompt);
    } catch (err) {
      alert(
        'Sorry. We ran out of OpenAI credits.',
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
          {...register('prompt', { required: true, minLength: 8 })}
          placeholder="Describe the image you'd like to see"
        />
        {errors.prompt && <p>Use at least 8 characters to describe your image</p>}
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
        {isSuccess &&
          data.pages.map((page) =>
            page.map((image) => (
              <Image url={image.url} prompt={image.prompt} key={image.id} />
            )),
          )}
      </ImageGrid>
      {isFetchingNextPage && (
        <NexPageLoader>
          <ClipLoader size={60} color="#A1AAB3" />
        </NexPageLoader>
      )}
    </HomeContainer>
  );
}
