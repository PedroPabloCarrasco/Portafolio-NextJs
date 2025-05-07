import Layout from "../../components/Layout";
import { Skills } from "../../profile";
console.log(Skills)

const Index = () =>
(
    <Layout>

        { /**Header Card */}
        <header className="row">
            <div className="col-md-12">
                <div className="card card-body bg-secondary text-light">
                    <div className="row">
                        <div className="col-md-4">
                            <img src="ryan-ray-profile2.jpeg" alt="" className="img-fluid" />
                        </div>
                        <div className="col-md-8">
                            <h1>Pedro Pablo Carrasco</h1>
                            <h4>Fullstack developer junior</h4>
                            <p>
                                Do consequat laboris enim culpa labore et voluptate do id officia
                                magna adipisicing incididunt ut.
                                magna adipisicing incididunt ut
                                magna adipisicing incididunt ut.
                                magna adipisicing incididunt ut
                            </p>
                            <a href="/contrato">Contratame</a>

                        </div>

                    </div>
                </div>

            </div>
        </header>
{/**Second Section */}
<div className="row py-2">
  {/* Skills column */}
  <div className="col-md-4">
    <div className="card bg-light">
      <div className="card-body">
        <h1>Skills</h1>

        {Skills.map(({ skill, percentage }, i) => (
          <div className="py-3" key={i}>
            <h5>{skill}</h5>
            <div className="progress">
              <div
                className="progress-bar"
                style={{ width: `${percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* Experiencia column */}
  <div className="col-md-8">
    <div className="card bg-light">
      <div className="card-body">
        <h1>Experiencia</h1>
        {/* Aquí puedes agregar tu timeline o descripción de experiencia */}
      </div>
    </div>
  </div>
</div>

            </Layout>


            )


            export default Index;