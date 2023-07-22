import { BiSearch } from 'react-icons/bi'

const BannerInput = () => {
  return (
    <div className='py-4 sm:py-8 lg:py-16'>
        <div className="sm:w-2/3 lg:w-1/3 flex flex-row items-center gap-3 rounded-3xl w-2/3 mx-auto">
      <input
        className="w-full text-base mx-auto px-5 py-4  border rounded-3xl border-gray-300 focus:outline-pink-300 bg-white text-gray-900"
        type="text"
        placeholder="Search for a college name?"
      ></input>
      <div className="-ml-16 sm:-ml-[120px] -mt-2 py-4 px-4 bg-pink-600 rounded-full text-white flex items-center gap-2">
        <BiSearch size={20} />
        <p className="hidden font-semibold sm:flex">Search</p>
      </div>
    </div>
    </div>
  );
};

export default BannerInput;
