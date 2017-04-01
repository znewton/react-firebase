import Index from './Views/Index';
import Login from './Views/Login';

module.exports = {
	routes: [
		{
			path: '/',
			label: 'Home',
			component: Index,
		},
		{
			path: '/login',
			label: 'Login',
			component: Login,
		},
	],
};