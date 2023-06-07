import { FaSearch } from "react-icons/fa";
import { Divider, Input } from "antd";

const SearchBar = ({ setSearchQuery }) => {
  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
  };

  return (
    <div>
      <Divider>
      
      <FaSearch />
      <Input
        placeholder="Search illustration ..."
        type="search"
        onChange={handleSearch}
      />
      </Divider>
    </div>
  );
};

export default SearchBar;
