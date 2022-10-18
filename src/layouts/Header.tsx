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
    <header className="bg-gray-800 py-5 text-white">
      <nav className="px-5 flex gap-5">
        <div>{pageButton(Page.Articles)}</div>
        <div>{pageButton(Page.Authors)}</div>
      </nav>
    </header>
  );
};

export default Header;
