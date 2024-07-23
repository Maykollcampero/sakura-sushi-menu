import { useEffect, useState } from "react";
import productos from "../productos";
import { formatHelper } from "../helpers/formatName";

const Header = () => {
  const [hash, setHash] = useState("");

  useEffect(() => {
    // Función para actualizar el hash
    const handleHashChange = () => {
      setHash(window.location.hash.slice(1)); // Elimina el símbolo '#'
    };

    // Añadir el listener para el cambio de hash
    window.addEventListener("hashchange", handleHashChange);

    // Configuración inicial del hash
    handleHashChange();

    // Limpiar el listener cuando el componente se desmonte
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div className="border-top" style={{ background: "black" }}>
      <div
        className="d-flex align-items-center overflow-hidden"
        style={{ width: "100%", position: "relative" }}
      >
        <div
          className="overflow-auto"
          style={{ whiteSpace: "nowrap", width: "100%" }}
        >
          <ul className="list-unstyled d-flex" style={{ display: "flex" }}>
            {Object.keys(productos).map((key) => (
              <li
                className={`m-1 mx-3 ${hash === key ? "active" : ""}`}
                key={key}
              >
                <a
                  className={"text-decoration-none"}
                  href={`#${key}`}
                  style={{ color: hash === key ? "red" : "white" }}
                >
                  {formatHelper(key)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
