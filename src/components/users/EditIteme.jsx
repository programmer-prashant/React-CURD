import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useHistory, useParams, Link } from 'react-router-dom';

const EditIteme = () => {
	let history = useHistory();
	const { id } = useParams();
	const [user, setUser] = useState({
		name: '',
		username: '',
		email: '',
		phone: '',
		website: '',
	});

	useEffect(() => {
		loadUser();
	}, []);
	const { name, username, email, phone, website } = user;
	const onInputChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};
	const onSubmit = async (e) => {
		e.preventDefault();
		await axios.put(`http://localhost:3200/users/${id}`, user);
		history.push('/');
	};

	const loadUser = async () => {
		const result = await axios.get(`http://localhost:3200/users/${id}`);
		setUser(result.data);
	};

	return (
		<div className='container'>
			<div className='w-75 mx-auto shadow p-5'>
				<h2 className='text-center mb-4'>Edit User</h2>
				<form action=''>
					<div className='form-group'>
						<input
							type='text'
							className='form-control form-control-lg'
							placeholder='Enter Your Name'
							name='name'
							value={name}
							onChange={(e) => onInputChange(e)}
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
						/>
					</div>
					<button
						type='button'
						class='btn btn-warning btn-lg btn-block'
						onClick={(e) => onSubmit(e)}
					>
						Update User
					</button>
					<Link className='btn btn-dark btn-block mt-5' to='/'>
						Back to Home
					</Link>
				</form>
			</div>
		</div>
	);
};

export default EditIteme;
