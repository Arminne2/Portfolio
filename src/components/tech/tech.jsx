import "./tech.css";
import { tech } from "../../data/tech";

export default function Tech({ name }) {

  const localTech = tech.filter((techno) => techno.name === `${name[0]}` || techno.name === `${name[1]}` || techno.name === `${name[2]}` || techno.name === `${name[3]}` || techno.name === `${name[4]}`);
  return (
    <section className="project-techno-header">
      <h2>Technologie(s) principale(s):</h2>
      <div className="project-techno-body">
        {localTech.map((technologie, index) => (
          <div className="project-techno" key={index}>
              <h3 className="project-techno-title">{technologie.name}</h3>
              <div className="project-techno-img">
                <img alt={technologie.alt} src={technologie.tech_img} />
              </div>
            </div>
        ))}
      </div>
    </section>
  );
}
