import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { Paper, Typography, Container, Box } from '@material-ui/core';

const ViewItem = () => {
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
	const { id } = useParams();

	const loadUser = async () => {
		const res = await axios.get(`http://localhost:3200/users/${id}`);
		setUser(res.data);
	};
	return (
		<div className='container py-4'>
			<h1 className='display-4 text-center'>User Id : {id}</h1>
			<hr />

			<Container maxWidth='sm' className=''>
				<Paper elevation={3}>
					<Box p={5} borderLeft={10}>
						<Box ml={10}>
							<Typography variant='subtitle1'>
								<b>Id</b> : {id}
							</Typography>
							<Typography variant='subtitle1'>
								<b>Name</b> : {user.name}
							</Typography>
							<Typography variant='subtitle1'>
								<b>Username</b> : {user.username}
							</Typography>
							<Typography variant='subtitle1'>
								<b>Phone</b> : {user.phone}
							</Typography>
							<Typography variant='subtitle1'>
								<b>Email</b> : {user.email}
							</Typography>
							<Typography variant='subtitle1'>
								<b>Website</b> : {user.website}
							</Typography>
							<Link className='btn btn-dark mt-5' to='/'>
								Back to Home
							</Link>
						</Box>
					</Box>
				</Paper>
			</Container>
		</div>
	);
};

export default ViewItem;
