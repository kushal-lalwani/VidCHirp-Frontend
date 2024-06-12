import { useForm } from "react-hook-form";

const Search = () => {
  const { register, handleSubmit } = useForm();

  return (
    <div >
      <form onSubmit={handleSubmit((data) =>{
        console.log(data);
      })}>
        <input {...register("Search")} placeholder="Search Videos" className="w-full px-3 py-2 outline-none border-2 border-slate-700 bg-[#191919]"/>
      </form>
    </div>
  );
};

export default Search;
