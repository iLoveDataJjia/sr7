import NavBar from "./NavBar";
import { default as CharactersIndex } from "./characters";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/**
 * Page entrypoint.
 */
export default function Index() {
  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <div className="mx-auto max-w-4xl">
          <Routes>
            <Route path="characters" element={<CharactersIndex />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
