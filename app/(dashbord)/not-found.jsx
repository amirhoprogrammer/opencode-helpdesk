import Link from "next/link";
function notFound() {
  return (
    <main className="text-center">
      <h2 className="text-3xl">There was a problem</h2>
      <p>we could not Find the Page you Were Looking for.</p>
      <p>
        Go Back to <Link href="/">Dashbord</Link>
      </p>
    </main>
  );
}
export default notFound;
