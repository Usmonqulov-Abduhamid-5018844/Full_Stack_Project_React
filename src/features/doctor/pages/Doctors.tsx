import { memo } from "react";
import { useDoctor } from "../services/useDoctor";
import { DoctorView } from "../components/doctor-view/DoctorView";
import filter from "../../../shared/assets/filter-funnel-01.svg";
import { IoIosSearch } from "react-icons/io";

const Doctors = () => {
  const { getFinished } = useDoctor();
  const { data } = getFinished();

  return (
    <div className="Doctors">
      <div className="flex justify-between mt-5">
        <div className="ml-8 flex flex-col gap-3">
          <h2 className="text-2xl font-bold">Shifokorlar</h2>
          <span>
            <b className="font-bold text-black/70 mr-2">Showing:</b> All
            Consultations of All Healthcare Providers
          </span>
        </div>
        <div className="mr-8 flex gap-5 h-9 my-auto">
          <div className=" border-2 border-gray-300 rounded-[10px] overflow-hidden w-[370px] flex">
            <input
              placeholder="Qidirish"
              className="w-[88%] h-full indent-4 outline-none "
              type="text"
            />
            <IoIosSearch className="text-[26px] my-auto ml-2" />
          </div>
          <div className="border-2 border-gray-300 w-20 rounded-[10px] overflow-hidden flex items-center gap-2 pl-1">
            <span className="pl-1 text-center">Filtr</span>
            <img className="w-5" src={filter} alt="" />
          </div>
        </div>
      </div>

      <DoctorView data={data?.data} />
    </div>
  );
};

export default memo(Doctors);
