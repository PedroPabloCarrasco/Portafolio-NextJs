import Layout from "../../components/Layout";
import { Skills } from "../../profile";
import Image from "next/image";

const HomePage = () => (
  <Layout>
    
    {/* Hero */}
    <section
      className="text-light p-5 rounded mb-5"
      style={{
        background: "linear-gradient(135deg, #3b82f6, #2563eb, #1e40af)"
,
        boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
      }}
    >
      <div className="row align-items-center">
        <div className="col-md-4 text-center mb-3 mb-md-0">
          <Image
            src="/yo.jpeg"
            alt="Pedro Pablo Carrasco"
            width={200}
            height={200}
            className="rounded-circle border border-white"
          />
        </div>
        <div className="col-md-8">
          <h1 className="display-4 fw-bold">Pedro Pablo Carrasco</h1>
          <h4 className="fw-light">Desarrollador Fullstack & Diseñador Digital</h4>
          <p className="mt-3">
            Transformo ideas en productos digitales funcionales y visualmente atractivos.
            Combino creatividad con código para crear soluciones modernas.
          </p>
          <div className="mt-4 d-flex gap-3 flex-wrap">
            <a href="/contrato" className="btn btn-light btn-lg text-primary fw-bold shadow-sm">
              Contrátame
            </a>
            <a href="/proyectos" className="btn btn-outline-light btn-lg fw-bold shadow-sm">
              Ver Portafolio
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* Skills & Experiencia */}
    <div className="row">
      <div className="col-md-6 mb-4">
        <div className="p-4 bg-white rounded shadow h-100">
          <h3 className="text-primary fw-bold mb-4">Habilidades</h3>
          {Skills.map(({ skill, percentage }, i) => (
            <div key={i} className="mb-3">
              <strong>{skill}</strong>
              <div className="progress" style={{ height: "8px" }}>
                <div
                  className="progress-bar bg-primary"
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="col-md-6 mb-4">
        <div className="p-4 bg-white rounded shadow h-100">
          <h3 className="text-primary fw-bold mb-4">Experiencia</h3>
          <ul className="list-unstyled">
            <li className="mb-2">
              <strong>Empresa X:</strong> Frontend Intern (2024)
            </li>
            <li className="mb-2">
              <strong>Freelance:</strong> Desarrollo de e-commerce con React y Node.js
            </li>
            {/* Puedes agregar más items */}
          </ul>
        </div>
      </div>
    </div>
  </Layout>
);

export default HomePage;
