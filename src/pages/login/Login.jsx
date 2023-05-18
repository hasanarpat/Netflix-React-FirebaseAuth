import { useContext, useRef, useState } from "react";
import "./login.scss";
import FirebaseContext from "../../context/FirebaseContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
	const { login } = useContext(FirebaseContext)
	const { signGoogle } = useContext(FirebaseContext)

	const nav = useNavigate()

	const emailref = useRef();
	const passwordRef = useRef();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleStart = () => {
		setEmail(emailref.current.value);
	};
	const handleFinish = () => {
		setPassword(passwordRef.current.value);
	};
	return (
		<div className="login">
			<div className="top">
				<div className="wrapper">
					<img
						className="logo"
						src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
						alt="netflix"
					/>
				</div>
			</div>
			<div className="container">
				<form>
					<h1>Sign In</h1>
					<input
						type="email"
						placeholder="Email or phone number"
						ref={emailref}
						onChange={handleStart}
					/>
					<input
						type="password"
						placeholder="Password"
						ref={passwordRef}
						onChange={handleFinish}
					/>
					<button className="loginButton" onClick={(e)=>{
						e.preventDefault()
						login(email,password)
						nav("/",{replace:true})
					}}>Sign In</button>
					<span>
						New to Netflix? <b><a href="/register">Sign up now</a>.</b>
					</span>
					<small>
						This page is protected by Google reCAPTCHA to ensure you're not a
						bot. <b>Learn more</b>
					</small>
				</form>
			</div>
		</div>
	);
}
