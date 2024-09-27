import {
	createContext,
	useContext,
	ReactElement,
	useState,
	useEffect,
} from "react";

import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	User,
	UserCredential,
} from "firebase/auth";

import auth from "../firebase";

type AuthFunction = (
	email: string,
	password: string,
) => Promise<UserCredential>;

type UserContext = {
	currentUser: User | null;
	login: AuthFunction;
	register: AuthFunction;
};

const AuthContext = createContext<UserContext | null>(null);

export function useAuth() {
	return useContext(AuthContext);
}

type AuthProviderProps = {
	children: ReactElement;
};

export function AuthProvider({ children }: AuthProviderProps) {
	const [currentUser, setCurrentUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(true);

	function register(email: string, password: string) {
		// If the new account was created, the user is signed in automatically.
		return createUserWithEmailAndPassword(auth, email, password);
	}

	function login(email: string, password: string) {
		return signInWithEmailAndPassword(auth, email, password);
	}

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			setCurrentUser(user);
			setLoading(false);
		});

		return unsubscribe;
	}, []);

	const value: UserContext = {
		currentUser,
		login,
		register,
	};

	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	);
}
