import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = ({ handleSubmit, handleInputChange, searchInput }) => {
  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        type="text"
        value={searchInput}
        onChange={(e) => handleInputChange(e)}
        className="px-4 py-2 rounded-l-lg w-full focus:outline-none focus:ring  border-[1px]  "
        required
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 rounded-r-lg px-4 py-2 text-white border-2 border-blue-600"
      >
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </form>
  );
};

export default Search;
