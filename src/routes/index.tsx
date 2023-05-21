import { getCharacters } from "../data/Characters";
import NavBar from "./NavBar";
import { default as CharactersIndex } from "./characters";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/**
 * Route entrypoint.
 */
export default function Index() {
  return (
    <div className="relative mx-auto max-w-5xl">
      <BrowserRouter>
        <NavBar className="sticky top-0 z-50" />
        <Routes>
          {getCharacters().map((_) => (
            <Route key={_.nameUID} path={`characters/${_.nameUID}`} element={<CharactersIndex character={_} />} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
