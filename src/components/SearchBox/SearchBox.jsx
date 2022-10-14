import { Input } from './SearchBoxStyled';
import PropTypes from 'prop-types';

export default function SearchBox({ onChange, value }) {

  const onSubmit = e => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <Input
          type="text"
          autoComplete="off"
          onChange={e => onChange(e.target.value)}
          value={value}
        ></Input>
        {/* <button type="submit">Search</button> */}
      </form>
    </div>
  );
}

SearchBox.propTypes = {
  onChange: PropTypes.func,
  // value: PropTypes.string,
};
