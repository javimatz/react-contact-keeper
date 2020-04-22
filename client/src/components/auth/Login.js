import React, { useState } from 'react';

const Login = () => {
	
	const [user, setUser] = useState({
		email: '',
		password: '',
	});

	const { email, password } = user;

	const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

	const onSubmit = () => {
		e.preventDefault();
		console.log('Login Submit');
	}

	return (
		<div class='form-container'>
			<h1>Account <span className='text-primary'>Register</span></h1>
			<form onSubmit={onSubmit}>
				<div className='form-group'>
					<label htmlFor='name'>Name</label>
					<input type='text' name='name' value={name} onChange={onChange} />
				</div>
				<div className='form-group'>
					<label htmlFor='email'>Email</label>
					<input type='email' name='email' value={email} onChange={onChange} />
				</div>
				<div className='form-group'>
					<label htmlFor='password'>Password</label>
					<input type='password' name='password' value={password} onChange={onChange} />
				</div>
				<div className='form-group'>
					<label htmlFor='password2'>Confirm Password</label>
					<input type='password' name='password2' value={password2} onChange={onChange} />
				</div>
				<input type='submit' value='Register' className='btn btn-primary btn-block' /> 
			</form>
		</div>
	)
}

export default Login;