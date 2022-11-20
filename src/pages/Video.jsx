import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import getVideo from 'services/getVideo';
import * as basicLightbox from 'basiclightbox';
import { Wrapper, Btn } from './Video.styles';

export default function Video() {
  const [video, setVideo] = useState({});
  const { moviesId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getVideo(moviesId).then(({ results }) => setVideo(results[0]));
  }, [moviesId]);

  const onPlay = () => {
    const { id, key } = video;

    basicLightbox
      .create(
        `<iframe
          id=${id}
          src="https://youtube.com/embed/${key}"
          width="420"
          height="300"
          frameborder="0"
          allowfullscreen
          allow="autoplay; encrypted-media"
        ></iframe>`,
      )
      .show();
  };

  const back = () => {
    navigate(-1);
  };

  return (
    video && (
      <div>
        <Wrapper>
          <Btn type="button" onClick={onPlay}>
            Play
          </Btn>

          <Btn type="button" onClick={back}>
            Back
          </Btn>
        </Wrapper>
      </div>
    )
  );
}
