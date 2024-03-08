import React, { useEffect, useState } from "react";
import {
  Nav,
  SearchButton,
  SearchContainer,
  SearchInput,
  SuggestedSearch,
  SuggestedContainer,
} from "../styles"; // Assuming SuggestedSearch is added
import useDebounce from "../hooks/useDebounce";
import { DEBOUNCE_DELAY } from "../constants";
import { useQuery } from "@tanstack/react-query";
import getVideos from "../services/getVideos";
import videoStore from "../stores/videos.store";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const debounceTerm = useDebounce(searchTerm, DEBOUNCE_DELAY);
  const { data: videos } = useQuery({
    queryKey: ["videos", debounceTerm],
    queryFn: () => getVideos(debounceTerm),
  });
  const setVideos = videoStore((state) => state.setVideos);
  const [suggestedSearches, setSuggestedSearches] = useState<string[]>([]);
  const location = useLocation();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = async () => {
    setVideos(await getVideos(searchTerm));
    setSuggestedSearches([]);

    if (location.pathname !== "/") {
      navigate("/");
    }
  };

  const handleSusgestionClick = (suggestion: string) => {
    setSearchTerm(suggestion);
    setSuggestedSearches([]);
  };

  useEffect(() => {
    if (videos && (videos || []).length > 0) {
      const titles = videos
        .map((video: { title: string }) => video.title)
        .slice(0, 4);
      setSuggestedSearches(titles);
    }
  }, [videos]);

  useEffect(() => {
    // add listener to keyboard so that when user presses enter, it will trigger the search
    const listener = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        handleSearch();
      }
    };
    document.addEventListener("keydown", listener);

    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <Nav>
      <h1 onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
        Home
      </h1>
      <SearchContainer>
        <SearchInput
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search for videos"
        />
        <SearchButton onClick={() => handleSearch()}>Search</SearchButton>
      </SearchContainer>
      {(suggestedSearches || []).length > 0 && (
        <SuggestedContainer>
          {suggestedSearches.map((suggestion, index) => (
            <SuggestedSearch
              key={index}
              onClick={() => handleSusgestionClick(suggestion)}
            >
              {suggestion}
            </SuggestedSearch>
          ))}
        </SuggestedContainer>
      )}
    </Nav>
  );
};

export default Navbar;
