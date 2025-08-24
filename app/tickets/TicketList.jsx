async function getTickets() {
  const res = await fetch("http://localhost:3000/tickets");
  return res.json();
}
async function TicketList() {
  const tickets = await getTickets();
  return (
    <div>
      {tickets.map((ticket) => (
        <div key={ticket.id} className="card my-5">
          <h3>{ticket.title}</h3>
          <p>{ticket.body.slice(0, 200)}</p>
          <div className={`pill ${ticket.priority}`}>{ticket.priority} priority</div>
        </div>
      ))}

      {tickets.length === 0 && <p className="text-center">There are no tickets</p>}
    </div>
  );
}
export default TicketList;
