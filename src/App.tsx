import { Page, usePage } from "./context/Page";
import Header from "./layouts/Header";
import Article from "./pages/ArticlePage";
import AuthorPage from "./pages/AuthorPage";

const App = () => {
  const { page } = usePage();

  const renderSwitch = () => {
    switch (page) {
      case Page.Articles:
        return <Article />;
      case Page.Authors:
        return <AuthorPage />;
      default:
        return "";
    }
  };
  return (
    <div>
      <Header />
      {renderSwitch()}
    </div>
  );
};

export default App;
