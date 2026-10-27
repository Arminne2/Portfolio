import "./modal.css";

export default function Modal({ onClose }) {

  return (
    <>
      <div className="containerModal">
        <div className="modal-header">
          <div className="close" onClick={() => onClose()} >&#x2715;</div>
          <h2 className="modal-title">Me contacter</h2>
        </div>
        <section className="form">
          <form>
            <label htmlFor="email">Email:</label>
            <input type="text" name="email"></input>
            <label htmlFor="message">Message:</label>
            <textarea name="message"></textarea>
            <input className="submit" type="submit" value="Envoyer"></input>
          </form>
        </section>
      </div>
    </>
  );
}
