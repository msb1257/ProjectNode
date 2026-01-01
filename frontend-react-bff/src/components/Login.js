import api from "../services/api";

export default function Login() {
  const login = async () => {
    const res = await api.post("/api/auth/login", {
      email: "test@test.com",
      password: "test123"
    });
    localStorage.setItem("token", res.data.token);
    window.location = "/home";
  };

  return <button onClick={login}>Login</button>;
}