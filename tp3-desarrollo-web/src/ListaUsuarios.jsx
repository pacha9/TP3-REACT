import { useState, useEffect } from 'react';
import axios from 'axios';

function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const urlBase = import.meta.env.VITE_API_URL;

    const traerDatos = async () => {
      try {
        setCargando(true);
        setError(null);

        if (!urlBase) {
          throw new Error('La variable de entorno VITE_API_URL no está definida o Vite no la detectó.');
        }

        const respuesta = await axios.get(`${urlBase}/users`);
        
        if (Array.isArray(respuesta.data)) {
          setUsuarios(respuesta.data);
        } else {
          throw new Error('Los datos devueltos por el servidor no son una lista válida.');
        }
      } catch (err) {
        setError(err.message || 'Error al conectar con la API');
      } finally {
        setCargando(false);
      }
    };

    traerDatos();
  }, []);

  if (cargando) {
    return <p style={{ textAlign: 'center', fontWeight: 'bold' }}>Cargando usuarios...</p>;
  }

  if (error) {
    return (
      <div style={{ padding: '20px', textAlign: 'center', color: 'red' }}>
        <p><strong>Ocurrió un error:</strong> {error}</p>
        <small style={{ color: '#666' }}>Tip: Si dice que la variable no está definida, recordá reiniciar la consola con 'npm run dev'</small>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '600px', margin: '20px auto', fontFamily: 'sans-serif' }}>
      <h2>Lista de Usuarios (Éxito)</h2>
      <ul style={{ paddingLeft: '20px' }}>
        {usuarios.map((usuario) => (
          <li key={usuario.id} style={{ marginBottom: '8px' }}>
            <strong>{usuario.name}</strong> — {usuario.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaUsuarios;
