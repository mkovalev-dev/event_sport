/**
 * Базовые пути.
 */
export const BasicPathConstants = {
  ERROR_404: "*",
  HOME_PAGE: "/",
};

/**
 * Закрытые авторизацией пути.
 */
export const CloseWithAuthPathConstants = {
  ERROR_404: "*",
  PROFILE_PAGE: "/profile/*",
  RETRIEVE_PROFILE_PAGE: ":id",
  PROFILE_TEAMS: "teams",
  YMAP_ORG: "org",
};
