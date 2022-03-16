import { Provider } from "react-redux";
import { store } from "./redux";
import Router from "./config/router";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <Provider store={store}>
      <CssBaseline />
      <Router />
    </Provider>
  );
}

export default App;
