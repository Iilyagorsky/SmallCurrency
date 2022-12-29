import { Routes, Route } from 'react-router-dom';
import routePaths from '../constants/routePaths';
import CurrencyPage from "../pages/Currency/CurrencyPage";
import PreciousPage from "../pages/Precious/PreciousPage";
import Main from "./Main/Main";
import ErrorPage from "./ErrorPage";
import Bank from "./Bank";


const AppRouter = () => {
  const { main } = routePaths;

  return (
    <Routes>
      <Route path={main.root} element={<Main />}>
        <Route path={main.currency} element={<CurrencyPage />} />
        <Route path={main.precious} element={<PreciousPage />} />
        {/*<Route path={main.bank} element={<Bank />}>*/}
        {/*  */}
        {/*</Route>*/}
      </Route>

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRouter;