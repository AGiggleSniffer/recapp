import { useAuth } from "../../contexts/AuthContext";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
	return (
		<div>
			<div>
				<div>
					<h2>Login to your account</h2>
				</div>
				<form>
					<div>
						<div>
							<input
								id="email-address"
								name="email"
								type="email"
								autoComplete="email"
								required
								placeholder="Email"
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
							/>
						</div>
					</div>
					<div>
						<button type="submit">Login</button>
					</div>
					<div>
						<div>
							<Link to="/register">Don't have an account? Register</Link>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}
