import Link from "next/link";
function notFound() {
  return (
    <main className="text-center">
      <h2 className="text-3xl">Sorry but nothing</h2>
      <p>we could not Find the Page you Were Looking for.</p>
      <p>
        Go Back All <Link href="/tickets">Tickets</Link>
      </p>
    </main>
  );
}
export default notFound;
