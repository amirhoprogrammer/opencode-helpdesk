async function getTickets() {
  const res = await fetch("http://localhost:4000/tickets", {
    next: {
      revalidate: 20,
    },
  });
  if (!res.ok) throw new Error("Failed to fetch tickets");
  return res.json();
}
async function TicketList() {
  const tickets = await getTickets();
  return (
    <div>
      <div>TicketList</div>
      {/*card*/}
      {tickets.map((ticket) => (
        <div key={ticket.id} className="card my-5">
          <h3>{ticket.title}</h3>
          <p>{ticket.body.slice(0, 200)}</p>
          {/**/}
          <div className={`pill ${ticket.priority}`}>{ticket.priority} priority</div>
        </div>
      ))}
      {tickets.length === 0 && <p className="text-center">There are no tickets</p>}
    </div>
  );
}
export default TicketList;
