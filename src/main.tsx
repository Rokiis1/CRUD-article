import ReactDOM from "react-dom/client";
import App from "./App";
import { PageStore } from "./context/Page";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <PageStore>
    <App />
  </PageStore>
);
