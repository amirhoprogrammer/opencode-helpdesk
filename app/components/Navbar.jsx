import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/logo-edited1.png";
function Navbar() {
  return (
    <nav>
      <Image src={Logo} alt="opencode helpdesk" className="w-34 rounded-2xl" quality={100} />
      <h2>Opencode HelpDesk</h2>
      <Link href="/" className="text-gray-500">
        Dashbord
      </Link>
      <br />
      <Link href="/tickets" className="text-gray-500">
        Tickets
      </Link>
      <Link href="/create" className="text-gray-500">
        Create
      </Link>
    </nav>
  );
}
export default Navbar;
/*nav className="pb-4 border-b-2 border-gray-200 flex items-center gap-5 my-10 mx-auto max-w-5xl"*/
/*h2  className="font-bold text-lg" style={{ color: "#7856ff" }} */
