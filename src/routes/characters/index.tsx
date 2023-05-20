import { getCharacters } from "../../data/Characters";
import { default as NameUIDIndex } from "./nameUID";
import { Routes, Route } from "react-router-dom";

/**
 * Route entrypoint.
 */
export default function Index() {
  return (
    <>
      <Routes>
        {getCharacters().map((_) => (
          <Route key={_.nameUID} path={_.nameUID} element={<NameUIDIndex nameUID={_.nameUID} />} />
        ))}
      </Routes>
    </>
  );
}
