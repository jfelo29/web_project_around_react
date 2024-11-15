import { useState } from "react";

import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="page">
        <Header />
        <Main />
        <Footer />
        {/*  <Popup>
          <EditAvatar />{" "}
        </Popup> */}

        <template id="card__area">
          <div className="card">
            <div className="card__delate-icon"></div>
            <img src="" alt="" className="card__image" />
            <div className="card__menu">
              <h2 className="card__title"></h2>

              <button className="card__like"></button>
              <p className="pruebalikes"></p>
            </div>
          </div>
        </template>
      </div>
      {/*   <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
