import { usePage, Page } from "../context/Page";

const Header: React.FC = () => {
  const { page, setPage } = usePage();

  const pageButton = (pageName: Page) => {
    return (
      <button
        className={pageName === page ? "active" : ""}
        onClick={() => setPage(pageName)}
      >
        {pageName}
      </button>
    );
  };

  return (
    <header>
      <nav>
        {pageButton(Page.Articles)}
        {pageButton(Page.Authors)}
      </nav>
    </header>
  );
};

export default Header;
