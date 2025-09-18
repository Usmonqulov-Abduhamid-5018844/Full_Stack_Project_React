import { memo } from "react";
import { IoIosSearch } from "react-icons/io";

const LoadingArizalar = () => {
  return (
    <div className="container mx-auto">
      <div className="flex mt-10 justify-between w-[95%] mx-auto">
        <div>
          <span className="text-2xl font-bold">Arizalar</span>
          <p>
            <b className="font-bold">Shoving:</b> All Consultations of All
            Healthcare Providers
          </p>
        </div>

        <form
          className="w-[350px] border-2 rounded-[7px] gap-3 flex items-center border-gray-300 overflow-hidden my-auto mr-2"
          action=""
        >
          <input className="w-[85%] outline-none indent-3 py-2" type="text" />
          <IoIosSearch className="text-3xl" />
        </form>
      </div>
      <div className="border border-gray-200 mt-5">
        <div className="flex items-center gap-4 px-4 mt-4">
          <span className="text-2xl">Arizalar</span>
          <span className="text-blue-600 font-bold">{10}</span>
        </div>
        <div className="w-full border-gray-200 h-11 bg-gray-100 border ">
        </div>
        <div className="w-full border-gray-200 border-b-2 h-11 border ">
        </div>
        <div className="w-full border-gray-200 border-b-2 h-11 border ">
        </div>
        <div className="w-full border-gray-200 border-b-2 h-11 border ">
        </div>
        <div className="w-full border-gray-200 border-b-2 h-11 border ">
        </div>
        <div className="w-full border-gray-200 border-b-2 h-11 border ">
        </div>
        <div className="w-full border-gray-200 border-b-2 h-11 border ">
        </div>
        <div className="w-full border-gray-200 border-b-2 h-11 border ">
        </div>
        <div className="w-full border-gray-200 border-b-2 h-11 border ">
        </div>
        <div className="w-full border-gray-200 border-b-2 h-11 border ">
        </div>
        <div className="w-full border-gray-200 border-b-2 h-11 border ">
        </div>
        <div className="w-full border-gray-200 border-b-2 h-11 border ">
        </div>
        <div className="w-full border-gray-200 border-b-2 h-11 border ">
        </div>
        <div className="w-full border-gray-200 border-b-2 h-11 border ">
        </div>
        <div className="w-full border-gray-200 border-b-2 h-11 border ">
        </div>
        <div className="w-full border-gray-200 border-b-2 h-11 border ">
        </div>
        <div className="w-full border-gray-200 border-b-2 h-11 border ">
        </div>

      </div>
    </div>
  );
};

export default memo(LoadingArizalar);
