import React from "react";
import { GiArchiveResearch } from "react-icons/gi";
import { useData } from "../context/DataContext";
import axios from "axios";

function Search() {
  const { setSearch, search, setData } = useData();
  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=20`
      )
      .then((res) => setData(res.data.items))
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex justify-center items-center mt-5">
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <input
            type="search"
            onChange={(e) => setSearch(e.target.value)}
            className="block rounded-sm w-72 h-7 p-4 pl-2 text-sm bg-gray-50"
            placeholder="Search "
          />
          <GiArchiveResearch className="absolute right-2.5 bottom-[2px] w-10 h-7 text-blue-900" />
        </div>
      </form>
    </div>
  );
}

export default Search;
