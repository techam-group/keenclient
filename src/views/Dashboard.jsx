import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import DashboardBase from '../components/dashboard/layout/DashboardBase'
import DashboardOverview from '../components/dashboard/DashboardOverview.jsx'
import CreateBlog from '../components/dashboard/blogs/CreateBlog'
import AllBlogs from '../components/dashboard/blogs/AllBlogs'
import BlogView from '../components/dashboard/blogs/BlogView'
import CreateVlog from '../components/dashboard/vlogs/CreateVlog'
import AllVlogs from '../components/dashboard/vlogs/AllVlogs'
import VlogView from '../components/dashboard/vlogs/VlogView'

const DashboardRoutes = () => (
	<Switch>
		<Route path="/dashboard" component={DashboardOverview} exact />
		<Route path="/dashboard/create-blog" component={CreateBlog} exact />
		<Route path="/dashboard/blogs" component={AllBlogs} exact />
		<Route path="/dashboard/blogs/:blog_title" component={BlogView} />
		<Route path="/dashboard/create-vlog" component={CreateVlog} exact />
		<Route path="/dashboard/vlogs" component={AllVlogs} exact />
		<Route path="/dashboard/vlogs/:vlog_title" component={VlogView} />
	</Switch>
)

const Dashboard = () => (
	<Router>
		<DashboardBase>
			<DashboardRoutes />
		</DashboardBase>
	</Router>
);

export default Dashboard;
