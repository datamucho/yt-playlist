import { useState } from "react";
import { SearchButton, SearchContainer, SearchInput } from "../styles";

const Search = ({ handleSearch }: { handleSearch: (term: string) => void }) => {
  const [searchText, setSearchText] = useState<string>("");

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search for videos"
      />
      <SearchButton onClick={() => handleSearch(searchText)}>
        Search
      </SearchButton>
    </SearchContainer>
  );
};

export default Search;
