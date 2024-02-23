import React from 'react';
import Wrapper from '../assets/wrappers/ErrorPage';
import { Link, useRouteError } from 'react-router-dom';
import img from '../assets/not-found.svg';

const ErrorPage = () => {
	const error = useRouteError();
	console.log(error);

	if (error.status === 404) {
		return (
			<Wrapper>
				<div>
					<img src={img} alt='not found' />
					<h2>Ohh!</h2>
					<h5>We can't seem to find page you are looking for :(</h5>
					<Link to='/'>back home</Link>
				</div>
			</Wrapper>
		);
	}

	return (
		<Wrapper>
			<div>
				<h3>something went wrong</h3>
			</div>
		</Wrapper>
	);
};

export default ErrorPage;
