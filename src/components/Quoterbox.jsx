import "./styles/Quotebox.css";
const Quoterbox = ({ handleChange, quotesSpaceS }) => {
  return (
    <section className="QuoterContent">
      <h1>INFOGALAX</h1>
      <section className="contentbox">
        <article className="phrase">
          <p>{quotesSpaceS.phrase} </p> <br />
        </article>
        <button className="btn btn__m" onClick={handleChange}>
          <i className="bx bx-revision"></i>
        </button>
      </section>

      <footer className="footer__autor">
        <article>
          <h4> {`Author: ${quotesSpaceS.author} `} </h4>
        </article>
      </footer>
    </section>
  );
};
export default Quoterbox;
