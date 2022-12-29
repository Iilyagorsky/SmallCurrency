import {BrowserRouter} from "react-router-dom";
import AppRoute from "./components/AppRoute";

const App = () => {
  return (
      <BrowserRouter>
        <AppRoute />
      </BrowserRouter>
  );
};
export default App;