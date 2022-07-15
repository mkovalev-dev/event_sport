import { Route, Routes } from "react-router-dom";

import Error404 from "./components/Errors/Error404";
import HomeProtected from "./pages/protected_pages/homeProtected";
import BasicPathConstants from "./utils/constants/routesConst";

function App() {
  return (
    <Routes>
      <Route path={BasicPathConstants.ERROR_404} element={<Error404 />} />
      <Route path={BasicPathConstants.HOME_PAGE} element={<HomeProtected />} />
    </Routes>
  );
}

export default App;
