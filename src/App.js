import { Route, Routes } from "react-router-dom";

import Error404 from "./components/Errors/Error404";
import HomePage from "./pages/open_pages/home";
import ProfileRoutes from "./pages/protected_pages/routes/profileRoutes";
import {
  BasicPathConstants,
  CloseWithAuthPathConstants,
} from "./utils/constants/routesConst";

function App() {
  return (
    <Routes>
      <Route path={BasicPathConstants.ERROR_404} element={<Error404 />} />
      <Route path={BasicPathConstants.HOME_PAGE} element={<HomePage />} />
      <Route
        path={CloseWithAuthPathConstants.PROFILE_PAGE}
        element={<ProfileRoutes />}
      />
    </Routes>
  );
}

export default App;
