import axios from 'axios';
import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

const AddIteme = () => {
	let history = useHistory();
	const [user, setUser] = useState({
		name: '',
		username: '',
		email: '',
		phone: '',
		website: '',
	});

	const { name, username, email, phone, website } = user;
	const onInputChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};
	const onSubmit = async (e) => {
		e.preventDefault();
		await axios.post('http://localhost:3200/users', user);
		history.push('/');
	};

	return (
		<div className='container'>
			<div className='w-75 mx-auto shadow p-5'>
				<h2 className='text-center mb-4'>Add User</h2>
				<form action=''>
					<div className='form-group'>
						<input
							type='text'
							className='form-control form-control-lg'
							placeholder='Enter Your Name'
							name='name'
							value={name}
							onChange={(e) => onInputChange(e)}
							required
						/>
					</div>
					<div className='form-group'>
						<input
							type='text'
							className='form-control form-control-lg'
							placeholder='Enter Your Username'
							name='username'
							value={username}
							onChange={(e) => onInputChange(e)}
							required
						/>
					</div>
					<div className='form-group'>
						<input
							type='text'
							className='form-control form-control-lg'
							placeholder='Enter Your Email Address'
							name='email'
							value={email}
							onChange={(e) => onInputChange(e)}
							required
						/>
					</div>
					<div className='form-group'>
						<input
							type='text'
							className='form-control form-control-lg'
							placeholder='Enter Your Phone Number'
							name='phone'
							value={phone}
							onChange={(e) => onInputChange(e)}
							required
						/>
					</div>
					<div className='form-group'>
						<input
							type='text'
							className='form-control form-control-lg'
							placeholder='Enter Your Website Name'
							name='website'
							value={website}
							onChange={(e) => onInputChange(e)}
							required
						/>
					</div>
					<button
						type='button'
						class='btn btn-dark btn-lg btn-block'
						onClick={(e) => onSubmit(e)}
					>
						Add User
					</button>
					<Link className='btn btn-dark mt-5' to='/'>
						Back to Home
					</Link>
				</form>
			</div>
		</div>
	);
};

export default AddIteme;
