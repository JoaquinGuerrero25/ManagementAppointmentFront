import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const links = [
    { to: "/home", label: "Home" },
    { to: "/doctors", label: "Doctores" },
    { to: "/appointments", label: "Turnos" },
  ];

  return (
    <aside className="w-64 bg-gray-900 text-white h-screen p-5">
      <div className="text-2xl font-bold mb-8">MedicalApp</div>
      <nav className="flex flex-col gap-4">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`p-2 rounded hover:bg-gray-700 ${
              location.pathname.startsWith(link.to) ? "bg-gray-700" : ""
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
