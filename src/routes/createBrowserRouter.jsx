import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Home } from "@pages/home";
import { Unauthorized } from "@pages/unauthorized";
import { ROUTES, PrivateRoute } from "@routes";
import { GetRequest } from "@pages/getRequest";
import { PostRequest } from "@pages/postRequest";
import { UseStateConcept } from "@pages/useState";
import { UseEffectConcept } from "@pages/useEffect";
import { UseContext } from "@pages/useContext";
import { UseReducer } from "@pages/useReducer";
import { UseCallBack } from "@pages/useCallBack";
import { UseMemo } from "@pages/useMemo";
import { UseRef } from "@pages/useRef";
import { CustomHooks } from "@pages/customHooks";

// eslint-disable-next-line no-unused-vars
const createPrivateRoute = (Component) => {
  return (
    <PrivateRoute>
      <Component />
    </PrivateRoute>
  );
};

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* <Route path={ROUTES.HOME} element={createPrivateRoute(Home)} /> */}
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.UN_AUTHORIZED} element={<Unauthorized />} />
      <Route path={ROUTES.GET_REQUEST} element={<GetRequest />} />
      <Route path={ROUTES.POST_REQUEST} element={<PostRequest />} />
      <Route path={ROUTES.USE_STATE} element={<UseStateConcept />} />
      <Route path={ROUTES.USE_EFFECT} element={<UseEffectConcept />} />
      <Route path={ROUTES.USE_CONTEXT} element={<UseContext />} />
      <Route path={ROUTES.USE_REDUCER} element={<UseReducer />} />
      <Route path={ROUTES.USE_CALLBACK} element={<UseCallBack />} />
      <Route path={ROUTES.USE_MEMO} element={<UseMemo />} />
      <Route path={ROUTES.USE_REF} element={<UseRef />} />
      <Route path={ROUTES.CUSTOM_HOOKS} element={<CustomHooks />} />
    </>
  ),
  { basename: "/app" }
);
