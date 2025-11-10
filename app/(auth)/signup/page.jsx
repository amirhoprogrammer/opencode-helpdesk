"use client";

import AuthForm from "../AuthForm";

function SignUp() {
  const handleSubmit = async (e, email, password) => {
    e.preventDefault();
    console.log("User SignUp", email, password);
  };
  return (
    <main>
      <h2 className="text-center">Sign Up</h2>

      <AuthForm handleSubmit={handleSubmit} />
    </main>
  );
}
export default SignUp;
