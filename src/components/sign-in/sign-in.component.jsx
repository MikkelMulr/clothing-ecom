import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import './sign-in.styles.scss';

class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		};
	}

	handleSubmit(e) {
		e.preventDefault();
		this.setState({ email: '', password: '' });
	}

	handleChange(e) {
		const { value, name } = e.target;
		// dynamically sets the property being assigned a value in state by pulling the name (either email or password) from the input's name field
		this.setState({ [name]: value });
	}

	render() {
		return (
			<div className='sign-in'>
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						type='email'
						name='email'
						value={this.state.email}
						handleChange={this.handleChange}
						label='email'
						required
					/>
					<FormInput
						type='password'
						name='password'
						value={this.state.password}
						handleChange={this.handleChange}
						label='password'
						required
					/>
					<div className='buttons'>
						<CustomButton type='submit'>Sign in</CustomButton>
						<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
							{' '}
							Sign in with Google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
