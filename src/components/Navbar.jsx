import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white w-full shadow-sm">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="font-serif text-xl px-6">
          Anna & Erik
        </Link>

        <div className="space-x-6 text-sm uppercase tracking-wide">
          <Link to="/schedule" className="hover:text-neutral-500">Schema</Link>
          <Link to="/friday" className="hover:text-neutral-500">Fredag</Link>
          <Link to="/saturday" className="hover:text-neutral-500">Lördag</Link>
          <Link to="/rsvp" className="hover:text-neutral-500">RSVP</Link>
          <Link to="/dresscode" className="hover:text-neutral-500">Klädkod</Link>
          <Link to="/faq" className="hover:text-neutral-500">FAQ</Link>
        </div>
      </div>
    </nav>
  );
}
