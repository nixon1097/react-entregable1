import { useState } from "react";
import "./App.css";
import quotesSpace from "./db/quotesSpace.json";
import { getRandom } from "./utils/random";
import Quoterbox from "./components/Quoterbox";
import Author from "./components/Author";
function App() {
  const listImages = ["bg1", "bg2", "bg3", "bg4"];
  const [quotesSpaceS, setQuotesSpaceS] = useState(getRandom(quotesSpace));
  const [currentBg, setCurrentBg] = useState(getRandom(listImages));

  const handleChange = () => {
    let newQuote = getRandom(quotesSpace);
    let newimages = getRandom(listImages);
    setQuotesSpaceS(newQuote);
    setCurrentBg(newimages);
    // console.log("New quote: ", JSON.stringify(newQuote));
  };

  return (
    <main className={`App  ${currentBg} `}>
      <Quoterbox
        handleChange={handleChange}
        quotesSpaceS={quotesSpaceS}
        setQuotesSpaceS={setQuotesSpaceS}
      />

      <Author quotesSpaceS={quotesSpaceS} setQuotesSpaceS={setQuotesSpaceS} />
    </main>
  );
}

export default App;
