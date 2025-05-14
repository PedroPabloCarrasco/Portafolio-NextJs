import Layout from "../../components/Layout";
import { Skills } from "../../profile";
import Image from "next/image";

const HomePage = () => (
  <Layout>
    {/* Header */}
    <header className="row mb-4">
      <div className="col-md-12">
        <div className="card card-body bg-secondary text-light">
          <div className="row">
            <div className="col-md-4 text-center">
              <Image
                src="/yo.jpeg"
                alt="Foto de Pedro Pablo Carrasco"
                width={300}
                height={300}
                className="img-fluid rounded-circle"
              />
            </div>
            <div className="col-md-8">
  <h1>Pedro Pablo Carrasco</h1>
  <h4>Desarrollador Fullstack Junior</h4>
  <p>
    Soy un apasionado por el desarrollo web con experiencia en
    tecnologías modernas. Me gusta construir soluciones útiles y
    funcionales para personas y negocios.
  </p>

  <div className="mt-3 d-flex gap-3 flex-wrap">
    <a href="/contrato" className="btn btn-primary btn-lg">
      Contrátame
    </a>
    <a href="/proyectos" className="btn btn-outline-primary btn-lg">
      Portafolio
    </a>
  </div>
</div>

          </div>
        </div>
      </div>
    </header>

    {/* Skills y Experiencia */}
    <div className="row">
      <div className="col-md-4 mb-3">
        <div className="card bg-light h-100">
          <div className="card-body">
            <h2>Skills</h2>
            {Skills.map(({ skill, percentage }, i) => (
              <div className="mb-3" key={i}>
                <h5>{skill}</h5>
                <div className="progress">
                  <div
                    className="progress-bar"
                    style={{ width: `${percentage}%` }}
                    aria-valuenow={percentage}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {percentage}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="col-md-8">
        <div className="card bg-light h-100">
          <div className="card-body">
            <h2>Experiencia</h2>
            <ul>
              <li>Empresa X - Frontend Intern (2024)</li>
              <li>Proyecto freelance de e-commerce con React y Node.js</li>
              {/* Agrega más items */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default HomePage;
