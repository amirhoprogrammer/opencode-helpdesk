import Link from "next/link";
function Navbar() {
  return (
    <nav className="pb-4 border-b-2 border-gray-200 flex items-center gap-5 my-10 mx-auto max-w-5xl">
      <h2 className="font-bold text-lg" style={{ color: "#7856ff" }}>
        Opencode HelpDesk
      </h2>
      <Link href="/" className="text-gray-500">
        Dashbord
      </Link>
      <br />
      <Link href="/tickets" className="text-gray-500">
        tickets
      </Link>
    </nav>
  );
}
export default Navbar;
