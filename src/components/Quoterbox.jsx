import "./styles/Quotebox.css";
const Quoterbox = ({ handleChange, quotesSpaceS }) => {
  return (
    <section className="QuoterContent">
      <section className="contentbox">
        <h1 className="infogalax">INFOGALAX</h1>
        <article className="phrase">
          <p>{quotesSpaceS.phrase} </p> <br />
        </article>
        <button className="btn btn__m" onClick={handleChange}>
          <i className="bx bx-revision"></i>
        </button>
      </section>
    </section>
  );
};
export default Quoterbox;
