import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getVideo from 'services/getVideo';
import { Wrapper } from './Video.styles';

import React from 'react';
import ReactPlayer from 'react-player';

const Video = () => {
	const [video, setVideo] = useState({});
	const { moviesId } = useParams();

	useEffect(() => {
		getVideo(moviesId).then(({ results }) => setVideo(results[0]));
	}, [moviesId]);

	const { key } = video;

	return (
		<Wrapper>
			<ReactPlayer url={`https://www.youtube.com/embed/${key}`} width="100%" controls={true} />
		</Wrapper>
	);
};

export default Video;
