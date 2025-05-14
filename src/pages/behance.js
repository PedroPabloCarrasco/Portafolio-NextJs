import Layout from "../../components/Layout";
import { FaBehance } from "react-icons/fa";

const Behance = () => (
  <Layout>
    <section className="text-center my-5">
      <FaBehance size={80} className="text-dark mb-3" />
      <h1 className="display-4 fw-bold">Mi portafolio en behance</h1>
      <p className="lead">
        Aquí puedes explorar mis proyectos, contribuciones y repositorios.
        Siempre estoy aprendiendo y mejorando.
      </p>
      <a
        href="https://www.behance.net/PedroPabloCarrasco" // ← Cambia esto por tu username real
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-dark mt-3"
      >
        Ver perfil en Behance
      </a>
    </section>
  </Layout>
);

export default Behance;
