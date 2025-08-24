import TicketList from "./TicketList";
function Tickets() {
  return (
    <div>
      <nav className="pb-4 border-b-2 border-gray-200 flex items-center gap-5 my-10 mx-auto max-w-5xl">
        <h2 className="font-bold text-lg" style={{ color: "#7856ff" }}>
          Tickets
        </h2>
        <p>
          <small>currently open tickets</small>
        </p>
      </nav>
      <TicketList />
    </div>
  );
}
export default Tickets;
