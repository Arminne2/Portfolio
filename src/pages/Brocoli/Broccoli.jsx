import img from "../../assets/schwarzenarzisse-broccoli-1450274.png"
import  "./broccoli.css"

const Broccoli = () =>{
return (
  <div className="broccoli">
    <img src={img} alt="photo d'un brocoli"/>
    <section className="broccoli-section">
      <h1>Le brocoli</h1>
    <article className="broccoli-presentation">Vous avez cliqué sur le brocoli, vous devez donc être interessé·e par ce légume. C'est un légume riche en minéraux qui se consomme principalement en automne.</article>
    <article className="broccoli-recipe">Il existe plusieurs manières de cuisiner le brocoli. Il peut être cuit à la vapeur permettant de bien garder tous ses nutriments mais assez pauvre en goût. Ou alors le faire blanchir (bien penser à le plonger dans l'eau froide pour fixer la chlorophylle) avant de l'ajouter dans une poêlée de légumes, ou un tteokbokki par exemple. Si on l'associe à des épices, il se mange très bien en soupe.</article>
    </section>
  </div>
)
}
export default Broccoli