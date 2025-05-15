import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center p-6">
      <div className="w-24 h-24 mb-4 animate-bounce">
        <svg
          className="w-full h-full"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C14.21 22 16.26 21.2 17.88 19.88L12 14H20V22L17.3 19.3C15.42 20.84 13.01 21.69 10.43 21.41C6.31 20.94 3 17.25 3 13C3 8.03 7.03 4 12 4C14.21 4 16.26 4.8 17.88 6.12L19.3 4.7C17.42 3.16 15.01 2.31 12.43 2.59C12.29 2.59 12.14 2.6 12 2.6V2Z"
            fill="#3b82f6"
          />
        </svg>
      </div>
      <h1 className="text-4xl font-bold text-blue-600 mb-2">
        404 - Página no encontrada
      </h1>
      <p className="text-gray-600 mb-6 text-center max-w-md">
        Lo sentimos, la ruta a la que estás intentando acceder no existe o ha sido movida.
      </p>
      <Link
        to="/home"
        className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition"
      >
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;
