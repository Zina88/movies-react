import { WrapperNotFound, ImgNotFound } from './styles.module';
import notFound from 'utilits/img/Not-found.jpg';

const NotFound = () => {
	return (
		<WrapperNotFound>
			<ImgNotFound src={notFound} alt="not found page" />
		</WrapperNotFound>
	);
};

export default NotFound;
