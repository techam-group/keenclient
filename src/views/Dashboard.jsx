import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import DashboardBase from '../components/dashboard/layout/DashboardBase'
import DashboardOverview from '../components/dashboard/DashboardOverview.jsx'
import CreateBlog from '../components/dashboard/blogs/CreateBlog'
import AllBlogs from '../components/dashboard/blogs/AllBlogs'
import BlogView from '../components/dashboard/blogs/BlogView'
import CreateVlog from '../components/dashboard/vlogs/CreateVlog'
import AllVlogs from '../components/dashboard/vlogs/AllVlogs'
import VlogView from '../components/dashboard/vlogs/VlogView'

const DashboardRoutes = (
	<Fragment>
		<Switch>
			<Route path="/" component={DashboardOverview} />
			<Route path="dasboard/create-blog" component={CreateBlog} exact />
			<Route path="dasboard/blogs" component={AllBlogs} exact />
			<Route path="dasboard/blogs/:blog-title" component={BlogView} />
			<Route path="dasboard/create-vlog" component={CreateVlog} exact />
			<Route path="dasboard/vlogs" component={AllVlogs} exact />
			<Route path="dasboard/vlogs/:vlog-title" component={VlogView} />
		</Switch>
	</Fragment>
)

const Dashboard = () => {
	return (
		<Router>
			<DashboardBase>
				{ DashboardRoutes }
			</DashboardBase>
		</Router>
	);
};

export default Dashboard;
