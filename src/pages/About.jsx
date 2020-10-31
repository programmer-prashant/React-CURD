import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
	return (
		<div className=' container'>
			<div className='py-4'>
				<h1>About Page</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
					incidunt velit reprehenderit maxime numquam, quam minus animi libero
					molestias illo aliquam aspernatur est debitis tenetur sint?
					Repellendus id fugit tempore!
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
					incidunt velit reprehenderit maxime numquam, quam minus animi libero
					molestias illo aliquam aspernatur est debitis tenetur sint?
					Repellendus id fugit tempore!
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
					incidunt velit reprehenderit maxime numquam, quam minus animi libero
					molestias illo aliquam aspernatur est debitis tenetur sint?
					Repellendus id fugit tempore!
				</p>
			</div>
			<Link className='btn btn-dark mt-5' to='/'>
				Back to Home
			</Link>
		</div>
	);
};

export default About;
