import { getCharacters } from "../data/Characters";
import NavBar from "./NavBar";
import { default as CharactersIndex } from "./characters";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

/**
 * Route entrypoint.
 */
export default function Index() {
  // Set <title>...</title>
  useEffect(() => {
    document.title = `${window.location.host.toUpperCase()} - Build hub for Honkai Impact Star Rail. Unleash the power of your beloved waifus and husbandos!`;
  }, []);

  // Render
  return (
    <div className="relative mx-auto max-w-5xl">
      <BrowserRouter>
        <NavBar className="sticky top-0 z-50" />
        <Routes>
          {getCharacters().map((_) => (
            <Route key={_.nameUID} path={`characters/${_.nameUID}`} element={<CharactersIndex character={_} />} />
          ))}
          <Route path="*" element={<Navigate to="/characters/clara" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
