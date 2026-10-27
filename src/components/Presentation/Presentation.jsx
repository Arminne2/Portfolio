import "./presentation.css";
export default function Presentation() {
  return (
    <div className="presentation">
      <section className="header-presentation">
        <div className="header-presentation-text">
          <h1>Eliane Henry</h1>
          <h2>Web developpeuse</h2>
          </div>
          <div className="tagline">
            <h3>
              J'aime développer des sites internet avec un amour particulier du
              web des années 2000.
            </h3>
          </div>
      </section>
      <section className="short-presentation">
        <article>
          J'ai 29 ans et je suis consultante ITSM au sein de l'entreprise HiL-iT
          Consulting. J'ai suivi une alternance pour me reconvertir dans le
          développement web via OpenClassroom. Dans ce portfolio je vais vous
          présenter les projets conçus pendant cet apprentissage.
        </article>
      </section>
      <section className="aboutMe">
        <article>
          J'ai commencé à coder adolescente sur mon temps libre en développant
          des petits jeux vidéos en langage C. Au lycée j'ai suivi un bac S
          option Informatique Science du Numérique avant de me diriger vers des
          études en histoire à l'université. J'en suis sortie titulaire de deux
          maitrises, une dans l'enseignement de l'histoire, l'autre dans la
          recherche historique. Mais j'ai décidé de me reconvertir d'abord via la
          formation La Toile de l'EM Lyon puis ensuite en alternance via
          OpenClassroom.
          <br />
          Mon parcours universitaire m'a formé à l'autonomie tandis que
          l'alternance m'a permis d'apprendre à travailler en équipe.
        </article>
      </section>
      <section className="skills">
        <h2>Mes compétences</h2>
        <ul className="skill-list">
          <li className="skill-card">
            <h3>HTML</h3>
            <img
              alt="logo HTML5"
              src="https://thumb.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/960px-HTML5_logo_and_wordmark.svg.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
            />
          </li>
          <li className="skill-card">
            <h3>CSS</h3>
            <img
              alt="logo CSS"
              src="https://logospng.org/download/css-3/logo-css-3-1536.png"
            />
          </li>
          <li className="skill-card">
            <h3>Javascript</h3>
            <img
              alt="logo Javascript"
              src="https://www.freepnglogos.com/uploads/javascript-png/png-javascript-badge-picture-8.png"
            />
          </li>
          <li className="skill-card">
            <h3>React</h3>
            <img
              alt="logo React"
              src="https://thumb.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/960px-React_Logo_SVG.svg.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
            />
          </li>
          <li className="skill-card">
            <h3>MS SQL Server</h3>
            <img
              alt="logo MS SQL Server"
              src="https://thumb.wikimedia.org/wikipedia/commons/thumb/4/41/Microsoft_SQL_Server_2025_icon.svg/960px-Microsoft_SQL_Server_2025_icon.svg.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
            />
          </li>
        </ul>
      </section>
    </div>
  );
}
