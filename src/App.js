import { useFetch } from "./events/useFetch";
import "./App.css";

function App() {
  const { data, loading, error } = useFetch(
    "http://localhost:5298/api/v1/producto"
  );

  return (
    <div className="app">
      <h1 className="text-xl">API REST</h1>
      <div className="container">
        {error && <div>error</div>}

        {loading && (
          <div className="m-4 size-5 animate-spin" viewBox="0 0 24 24">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
          </div>
        )}

        {data && data.length > 0 ? (
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Precio</th>
                  <th>Stock</th>
                </tr>
              </thead>
              <tbody>
                {data.map((producto) => (
                  <tr key={producto.id}>
                    <td>{producto.nombre}</td>
                    <td>{producto.precio}</td>
                    <td>{producto.stock}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          !loading && <div>No hay productos</div>
        )}
      </div>
    </div>
  );
}

export default App;
