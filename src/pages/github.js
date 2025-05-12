import Layout from "../../components/Layout";
import { FaGithub } from "react-icons/fa";

const Github = () => (
  <Layout>
    <section className="text-center my-5">
      <FaGithub size={80} className="text-dark mb-3" />
      <h1 className="display-4 fw-bold">Mi GitHub</h1>
      <p className="lead">
        Aquí puedes explorar mis proyectos, contribuciones y repositorios.
        Siempre estoy aprendiendo y mejorando.
      </p>
      <a
        href="https://github.com/PedroPabloCarrasco/" // ← Cambia esto por tu username real
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-dark mt-3"
      >
        Ver perfil en GitHub
      </a>
    </section>
  </Layout>
);

export default Github;
