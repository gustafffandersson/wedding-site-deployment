import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white w-full shadow-sm">
      <div className="max-w-5xl mx-auto px-4 py-4">

        {/* Mobile layout */}
        <div className="flex flex-col items-center gap-3 sm:hidden">
          <Link to="/" className="font-serif text-2xl">
            Ebba & Gustaf
          </Link>

          <div className="flex flex-wrap justify-center gap-4 text-sm uppercase tracking-wide">
            <Link to="/schedule" className="hover:text-neutral-500">
              Upplägg
            </Link>
            <Link to="/friday" className="hover:text-neutral-500">
              Fredag
            </Link>
            <Link to="/saturday" className="hover:text-neutral-500">
              Lördag
            </Link>
            <Link to="/rsvp" className="hover:text-neutral-500">
              OSA
            </Link>
          </div>
        </div>

        {/* Desktop layout */}
        <div className="hidden sm:flex justify-between items-center">
          <Link to="/" className="font-serif text-xl px-6">
            Ebba & Gustaf
          </Link>

          <div className="space-x-6 text-sm uppercase tracking-wide">
            <Link to="/schedule" className="hover:text-neutral-500">
              Upplägg
            </Link>
            <Link to="/friday" className="hover:text-neutral-500">
              Fredag
            </Link>
            <Link to="/saturday" className="hover:text-neutral-500">
              Lördag
            </Link>
            <Link to="/rsvp" className="hover:text-neutral-500">
              OSA
            </Link>
          </div>
        </div>

      </div>
    </nav>
  );
}

