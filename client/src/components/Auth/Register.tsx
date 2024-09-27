import { useAuth } from "../../contexts/AuthContext";
import { FormEvent, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	async function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();

		// Here We will get form values and
		// invoke a function that will register the user
	}

	return (
		<div>
			<div>
				<div>
					<h2>Register your account</h2>
				</div>
				<form onSubmit={handleFormSubmit}>
					<div>
						<div>
							<input
								id="email-address"
								name="email"
								type="email"
								autoComplete="email"
								required
								placeholder="Email address"
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div>
							<input
								id="password"
								name="password"
								type="password"
								autoComplete="current-password"
								required
								placeholder="Password"
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
						<div>
							<input
								id="confirmPassword"
								name="confirmPassword"
								type="password"
								autoComplete="current-password"
								required
								placeholder="Password"
								onChange={(e) => setConfirmPassword(e.target.value)}
							/>
						</div>
					</div>
					<div>
						<button type="submit">Register</button>
					</div>
					<div>
						<div>
							<Link to="/login">Already have an account? Login</Link>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}
