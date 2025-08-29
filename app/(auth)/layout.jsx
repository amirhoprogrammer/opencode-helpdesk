import Link from "next/link";
export default function Authlayout({ children }) {
  return (
    <div>
      <nav>
        <h1>Opencode HelpDesk</h1>
        <Link href="/signup">Sign Up</Link>
        <Link href="/login">Log In</Link>
      </nav>
      {children}
    </div>
  );
}
