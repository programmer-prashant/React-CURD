import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Error = () => {
	return (
		<div className=' error'>
			<h1 className='display-1'> ERROR : 404 Page not found... </h1>
			<Link to='/' className=' errorlink'>
				<Button variant='dark'>Return Home</Button>
			</Link>
		</div>
	);
};

export default Error;
