async function getTickets() {
  const res = await fetch("http://localhost:3000/tickets", { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch tickets");
  return res.json();
}
async function TicketList() {
  const tickets = await getTickets();
  return (
    <>
      <div>tickets</div>
      {/*card*/}
      {/*tickets.map((ticket) => (
        <div key={ticket.id} className="my-5">
          <h3>{ticket.title}</h3>
          <p>{ticket.body.slice(0, 200)}</p>}
          {/*className={`pill ${ticket.priority}`}*/}
      {/*<div>{ticket.priority} priority</div>
        </div>
      ))*/}

      {/*tickets.length === 0 && <p className="text-center">There are no tickets</p>*/}
    </>
  );
}
export default TicketList;
