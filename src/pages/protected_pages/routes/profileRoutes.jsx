import { Route, Routes } from "react-router-dom";

import Error404 from "../../../components/Errors/Error404";
import {
  BasicPathConstants,
  CloseWithAuthPathConstants,
} from "../../../utils/constants/routesConst";
import BottomMenu from "../bottomMenu";
import ProfileRetrieve from "../profile/retrieve";
/**
 * Пути для профиля пользователя.
 */
export default function ProfileRoutes() {
  return (
    <Routes>
      <Route
        path={CloseWithAuthPathConstants.RETRIEVE_PROFILE_PAGE}
        element={<ProfileRetrieve />}
      />
      <Route
        path={CloseWithAuthPathConstants.PROFILE_TEAMS}
        element={<BottomMenu />}
      />
      <Route path={BasicPathConstants.ERROR_404} element={<Error404 />} />
    </Routes>
  );
}
