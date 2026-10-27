import "./article.css"

export default function Article({ title, article}) {
  return (
    <section className="project-section-article">
      <h2 className="project-article-title">{title}</h2>
      <article className="project-article">
        <p className="project-article-text">{article}</p>
      </article>
    </section>
  );
}
