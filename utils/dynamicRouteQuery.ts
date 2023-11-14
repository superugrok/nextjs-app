// Those function created for comfortably usage of next routing with extra params
export const formDynamicRouteQuery = (
  route: string,
  dynamicRoute: string | number,
  extraParams?: { [key: string]: any }
) => {
  const params =
    extraParams &&
    Object.entries(extraParams).map((param, i) =>
      !i ? `?${param[0]}=${param[1]}` : `&${param[0]}=${param[1]}`
    );
  return `/${route}/${dynamicRoute}${params?.join("")}`;
};
