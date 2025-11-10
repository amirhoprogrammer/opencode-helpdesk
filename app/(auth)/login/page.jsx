"use client";

import AuthForm from "../AuthForm";

function Login() {
  const handleSubmit = async (e, email, password) => {
    e.preventDefault();
    console.log("User Login", email, password);
  };

  return (
    <main>
      <h2 className="text-center">Log In</h2>

      <AuthForm handleSubmit={handleSubmit} />
    </main>
  );
}
export default Login;
