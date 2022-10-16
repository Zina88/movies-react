import { Rings } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styles';

const Loader = () => {
  return (
    <LoaderWrapper>
      <Rings
        height="80"
        width="80"
        color="#c865f7"
        radius="6"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="rings-loading"
      />
    </LoaderWrapper>
  );
};

export default Loader;
