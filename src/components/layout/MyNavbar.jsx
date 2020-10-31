import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

const MyNavbar = () => {
	return (
		<div>
			<Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
				<NavLink className='navbar-brand' to='/'>
					CURD
				</NavLink>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='ml-auto mr-2 pr-5'>
						<NavLink
							className='d-inline p-2 bg-dark text-white nav-link'
							to='/'
						>
							Home
						</NavLink>
						<NavLink
							className='d-inline p-2 bg-dark text-white nav-link'
							to='/about'
						>
							About
						</NavLink>
						<NavLink
							className='d-inline p-2 bg-dark text-white nav-link'
							to='/contact'
						>
							Contact
						</NavLink>
					</Nav>
				</Navbar.Collapse>
				<Link className='btn btn-outline-light' to='/users/add'>
					Add User
				</Link>
			</Navbar>
		</div>
	);
};

export default MyNavbar;
