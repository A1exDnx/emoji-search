import "./App.css";
import { useState } from "react";
import Search from "./components/Search";
import Emoji from "./components/Emoji";
import emojis from "./assets/emoji.json";

function App() {
  const [search, setSearch] = useState("");

  const tab = [];
  for (let i = 0; i < emojis.length; i++) {
    if (emojis[i].keywords.indexOf(search) !== -1) {
      tab.push(
        <Emoji
          key={emojis[i].title}
          title={emojis[i].title}
          symbol={emojis[i].symbol}
        />
      );
    }
  }

  return (
    <>
      <Search search={search} setSearch={setSearch} />
      <div className="result">{tab}</div>
    </>
  );
}

export default App;
