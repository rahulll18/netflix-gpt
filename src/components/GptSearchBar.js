import React from "react";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="bg-black w-1/2 grid grid-cols-12">
        <input
          type="text"
          placeholder={lang.hindi.gptSearchPlaceholder}
          className="p-4 m-4 col-span-9"
        />
        <button className="px-4 py-2 m-4 bg-red-600 text-white rounded-lg font-semibold col-span-3">
          {lang.hindi.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
