import { useEffect, useState } from 'react';
import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		getUsers();
	}, []);

	const getUsers = async () => {
		const result = await Axios.get('http://localhost:3200/users');
		setUsers(result.data.reverse());
	};

	const deleteUser = async (id) => {
		await Axios.delete(`http://localhost:3200/users/${id}`);
		getUsers();
	};
	return (
		<div className=' container'>
			<div className='py-4'>
				<h1>Home Page</h1>
				<table className='table border shadow table-hover'>
					<thead className='thead-dark'>
						<tr>
							<th scope='col'>Sr. No</th>
							<th scope='col'>Name</th>
							<th scope='col'>User Name</th>
							<th scope='col'>Email</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{users.map((user, index) => {
							return (
								<tr className='table-secondary'>
									<th scope='row'>{index + 1}</th>
									<td>{user.name}</td>
									<td>{user.username}</td>
									<td>{user.email}</td>
									<td>
										<Link
											className='btn btn-info mr-2'
											to={`/users/${user.id}`}
										>
											View
										</Link>

										<Link
											className='btn btn-secondary mr-2'
											to={`/users/edit/${user.id}`}
										>
											Edit
										</Link>

										<Link
											className='btn btn-danger mr-2'
											onClick={() => deleteUser(user.id)}
										>
											Delete
										</Link>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Home;
