import React from 'react';
import AuthLayout from '../components/auth/AuthLayout';
import SignupForm from '../components/forms/SignupForm';

const Signup = () => {
	return (
		<AuthLayout signup>
			<SignupForm />
		</AuthLayout>
	);
};

export default Signup;
