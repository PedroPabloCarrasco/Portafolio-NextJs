import Layout from "../../components/Layout";

// Datos de los proyectos
const proyectos = [
  {
    titulo: "Sitio Web Corporativo",
    descripcion: "Diseño y desarrollo para empresa de servicios legales.",
    imagen: "/imagenes/proyecto1.jpg",
    enlace: "https://ejemplo.com/proyecto1",
  },
  {
    titulo: "E-commerce de Ropa",
    descripcion: "Tienda online con pasarela de pago y catálogo administrable.",
    imagen: "/imagenes/proyecto2.jpg",
    enlace: "https://ejemplo.com/proyecto2",
  },
  {
    titulo: "Landing Page de Evento",
    descripcion: "Promoción de evento con formulario de inscripción.",
    imagen: "/imagenes/proyecto3.jpg",
    enlace: "https://ejemplo.com/proyecto3",
  },
];

const Contrato = () => (
  <Layout>
    <main className="container my-5">
      <h1 className="text-center display-4 fw-bold">Proyectos</h1>
      <p className="text-center lead">¿Cómo contratar nuestros servicios?</p>

      <section className="row mt-5">
        {proyectos.map((proyecto, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100 shadow-sm">
              <img
                src={proyecto.imagen}
                className="card-img-top"
                alt={proyecto.titulo}
              />
              <div className="card-body">
                <h5 className="card-title">{proyecto.titulo}</h5>
                <p className="card-text">{proyecto.descripcion}</p>
                <a
                  href={proyecto.enlace}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Ver Proyecto
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  </Layout>
);

export default Contrato;
