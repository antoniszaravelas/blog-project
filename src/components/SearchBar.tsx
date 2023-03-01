import Button from './Button';

const SearchBar = ({ posts }: { posts: [] }) => {
  return (
    <div className="flex flex-col mb-10 items-center">
      <label htmlFor="searchPost" className="text-gray-400 text-2xl">
        Search Term by Title:
      </label>
      <div className="flex w-1/2">
        <input
          name="searchPost"
          className="mt-2  bg-gray-500 text-white py-1 pl-3 rounded-md text-lg  border-none focus:outline-none w-1/2"
          type="search"
        />
        <Button className="" text="Search"></Button>
      </div>
    </div>
  );
};

export default SearchBar;
