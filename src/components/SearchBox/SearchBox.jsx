import { useLocation, useNavigate } from 'react-router-dom';
import { Input, Button, Wrapper, Form } from './SearchBox.styled';
import PropTypes from 'prop-types';
import { Report } from 'notiflix/build/notiflix-report-aio';

export default function SearchBox({ value }) {
	const location = useLocation();
	const navigate = useNavigate();

	const onSubmit = e => {
		e.preventDefault();
		const value = e.currentTarget.elements.query.value;

		navigate({
			...location,
			search: `query=${value}`,
		});

		if (value.trim() === '') {
			return Report.warning('Error', 'Please enter a request', 'Close');
		}
	};

	return (
		<Wrapper>
			<Form onSubmit={onSubmit}>
				<Input type="text" autoComplete="off" name="query" defaultValue={value}></Input>
				<Button type="submit">Search</Button>
			</Form>
		</Wrapper>
	);
}

SearchBox.propTypes = {
	value: PropTypes.string,
};
