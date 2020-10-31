import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';
import MyNavbar from './components/layout/MyNavbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Error from './pages/Error';
import AddIteme from './components/users/AddIteme';
import EditIteme from './components/users/EditIteme';
import ViewIteme from './components/users/ViewIteme';

function App() {
	return (
		<Router>
			<div className='App'>
				<MyNavbar />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/about' component={About} />
					<Route exact path='/contact' component={Contact} />
					<Route exact path='/users/add' component={AddIteme} />
					<Route exact path='/users/edit/:id' component={EditIteme} />
					<Route exact path='/users/:id' component={ViewIteme} />
					<Route component={Error} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
