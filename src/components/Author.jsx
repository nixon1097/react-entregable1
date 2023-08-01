const Author = ({ quotesSpaceS }) => {
  return (
    <footer className="footer__autor">
      <article>
        <h4> {`Author: ${quotesSpaceS.author} `} </h4>
      </article>
    </footer>
  );
};
export default Author;
