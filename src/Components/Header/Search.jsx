import { useForm } from "react-hook-form";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  const { register, handleSubmit } = useForm();

  return (
    <div className="bg-[#202020]">
      <form onSubmit={handleSubmit((data) =>{
        console.log(data);
      })}>
        <div className="flex rounded-lg ">
          <input {...register("Search")} placeholder="Search Videos" className="w-11/12 rounded-r-none rounded-lg outline-none border border-slate-700  px-3 py-1.5 bg-[#202020]"/>
          <div className="w-1/12 flex rounded-lg rounded-l-none border-l-2 border-red-700 bg-red-700"><button className="m-auto justify-center items-center pr-0.5"><FaSearch/></button></div>
        </div> 
      </form>
    </div>
  );
};

export default Search;
