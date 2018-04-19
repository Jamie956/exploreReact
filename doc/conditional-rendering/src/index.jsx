import React, { Component } from 'react'
import ReactDOM from "react-dom"

// const UserGreeting = (props) => <h1>Welcome back!</h1>
// const GuestGreeting = (props) => <h1>Please sign up.</h1>

// const Greeting = (props) => {
// 	return (
// 		<div>
// 			{(props.isLoggedIn) ? (<UserGreeting />) : (<GuestGreeting />)}
// 		</div>
// 	)
// }

// ReactDOM.render(<Greeting isLoggedIn={true} />, document.getElementById('root'));

//===========================================

// const UserGreeting = (props) => <h1>Welcome back!</h1>

// const GuestGreeting = (props) => <h1>Please sign up.</h1>

// const Greeting = (props) => {
// 	return (
// 		<div>
// 			{(props.isLoggedIn) ? (<UserGreeting />) : (<GuestGreeting />)}
// 		</div>
// 	)
// }

// const LoginButton = (props) => <button onClick={props.onClick}>Login</button>

// const LogoutButton = (props) => <button onClick={props.onClick}>Logout</button>

// class LoginControl extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.handleLoginClick = this.handleLoginClick.bind(this);
// 		this.handleLogoutClick = this.handleLogoutClick.bind(this);
// 		this.state = { isLoggedIn: false };
// 	}

// 	handleLoginClick() {
// 		this.setState({ isLoggedIn: true });
// 	}

// 	handleLogoutClick() {
// 		this.setState({ isLoggedIn: false });
// 	}

// 	render() {
// 		const isLoggedIn = this.state.isLoggedIn;

// 		const button = isLoggedIn ?
// 			(<LogoutButton onClick={this.handleLogoutClick} />) : (<LoginButton onClick={this.handleLoginClick} />);

// 		return (
// 			<div>
// 				<Greeting isLoggedIn={isLoggedIn} />
// 				{button}
// 			</div>
// 		);
// 	}
// }

// ReactDOM.render(<LoginControl />, document.getElementById('root'));

//===========================================

// function Mailbox(props) {
//   const unreadMessages = props.unreadMessages;
//   return (
//     <div>
//       <h1>Hello!</h1>
//       {unreadMessages.length > 0 &&
//         <h2>You have {unreadMessages.length} unread messages.</h2>
//       }
//     </div>
//   );
// }

// const messages = ['React', 'Re: React', 'Re:Re: React'];
// ReactDOM.render(<Mailbox unreadMessages={messages} />, document.getElementById('root'));

//===========================================

const WarningBanner = (props) => {
	if (!props.warn) {
		return null;
	}

	return (
		<div className="warning">
			Warning!
		</div>
	);
}

class Page extends React.Component {
	constructor(props) {
		super(props);
		this.state = { showWarning: true };
		this.handleToggleClick = this.handleToggleClick.bind(this);
	}

	handleToggleClick() {
		this.setState(prevState => ({
			showWarning: !prevState.showWarning
		}));
	}

	render() {
		return (
			<div>
				<button onClick={this.handleToggleClick}>
					{this.state.showWarning ? 'Hide' : 'Show'}
				</button>
				<WarningBanner warn={this.state.showWarning} />
			</div>
		);
	}
}

ReactDOM.render(<Page />, document.getElementById('root'));