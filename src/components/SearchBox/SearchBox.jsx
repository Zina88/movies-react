import { useState } from 'react';
import { Input, Button, Wrapper, Form } from './SearchBox.styled';
import PropTypes from 'prop-types';

export default function SearchBox({ onChange, value }) {
  const [movieName, setMovieName] = useState('');

  const onNameChange = e => {
    setMovieName(e.currentTarget.value.toLowerCase());
  };

  const onSubmit = e => {
    e.preventDefault();

    onChange(movieName);

    setMovieName('');
  };

  return (
    <Wrapper>
      <Form onSubmit={onSubmit}>
        <Input type="text" autoComplete="off" onChange={onNameChange}></Input>
        <Button type="submit">Search</Button>
      </Form>
    </Wrapper>
  );
}

SearchBox.propTypes = {
  onChange: PropTypes.func,
  // value: PropTypes.string,
};
