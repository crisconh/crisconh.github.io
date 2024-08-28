import { useState } from "react";
import "./App.css";
import "./Menu.css";

import { HomePage } from "./modules/HomePage";
import { Menu } from "./modules/Menu";
import { Navbar } from "./modules/Navbar";

function App() {
  const [currentVisible, nextVisible] = useState(false)

  return (
    <>
      <Menu menuVisible={currentVisible} />
      <Navbar
        menuVisible = {currentVisible}
        onClick={() => {
          nextVisible(!currentVisible);
        }
      }
      />
      <HomePage />
    </>
  );
}

export default App;
