import Link from "next/link";
function notFound() {
  return (
    <>
      <main className="text-center">
        <nav>
          <h2>Opencode HelpDesk</h2>
          <Link href="/" className="text-gray-500">
            Dashbord
          </Link>
          <br />
          <Link href="/tickets" className="text-gray-500">
            Tickets
          </Link>
          <Link href="/tickets/create" className="text-gray-500">
            Create
          </Link>
        </nav>
        <h1 className="text-3xl">There was a problem</h1>
        <p>we could not Find the Page you Were Looking for.</p>
        <p>
          Go Back to <Link href="/">Dashbord</Link>
        </p>
      </main>
    </>
  );
}
export default notFound;
