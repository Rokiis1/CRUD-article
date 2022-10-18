import ReactDOM from "react-dom/client";
import App from "./App";
import { PageStore } from "./context/Page";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <PageStore>
    <App />
  </PageStore>
);
