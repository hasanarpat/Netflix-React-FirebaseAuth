import { useContext, useRef, useState } from "react";
import FirebaseContext from "../../context/FirebaseContext";
import { Navigate, useNavigate } from "react-router-dom";
import "./register.scss";

export default function Register() {
	const { register } = useContext(FirebaseContext);

	const nav = useNavigate();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const emailref = useRef();
	const passwordRef = useRef();

	const handleStart = () => {
		setEmail(emailref.current.value);
	};
	const handleFinish = () => {
		register(email, password);
		nav("/login", { replace: true });
		console.log("success");
	};

	return (
		<div className="register">
			<div className="top">
				<div className="wrapper">
					<img
						className="logo"
						src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
						alt="netflix"
					/>
					<button
						className="loginButton"
						onClick={() => nav("/login", { replace: true })}
					>
						Sign In
					</button>
				</div>
			</div>
			<div className="container">
				<h1>Unlimited movies, TV shows, and more.</h1>
				<h2>Watch anywhere. Camcel anytime.</h2>
				<p>
					Ready to watch? Enter your email to create or restart your membership.
				</p>
				{!email ? (
					<div className="input">
						<input type="email" placeholder="email address" ref={emailref} />
						<button className="registerButton" onClick={handleStart}>
							Get Started
						</button>
					</div>
				) : (
					<form className="input">
						<input
							type="password"
							placeholder="password"
							ref={passwordRef}
							onChange={(e) => {
								e.preventDefault();
								setPassword(e.target.value);
							}}
						/>
						<button className="registerButton" onClick={()=>handleFinish()}>
							Go
						</button>
					</form>
				)}
			</div>
		</div>
	);
}
