import Layout from "../../components/Layout";
import { FaBlog } from "react-icons/fa";

const Blog = () => (
  <Layout>
    <section className="text-center my-5">
      <FaBlog size={80} className="text-primary mb-3" />
      <h1 className="display-4 fw-bold">Mi Blog</h1>
      <p className="lead">
        Aquí comparto artículos, ideas y tips sobre desarrollo web,
        programación y tecnología. ¡Aprendamos juntos!
      </p>

      {/* Placeholder para entradas futuras */}
      <div className="alert alert-info mt-4" role="alert">
        Próximamente estaré publicando contenido aquí. ¡Mantente atento!
      </div>
    </section>
  </Layout>
);

export default Blog;
