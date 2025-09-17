import { memo } from "react";
import Appointments from "../components/appointment"
import { IoIosSearch } from "react-icons/io";
import { useDoctorStatus } from "../services/useDoctor";

const Arizalar = () => {
  const { getDoctors} = useDoctorStatus();
  const {data} = getDoctors();
  

  return (
    <div className="container mx-auto">
      <div className="flex mt-10 justify-between w-[95%] mx-auto">
        <div>
        <span className="text-2xl font-bold">
          Arizalar
        </span>
        <p><b className="font-bold">Shoving:</b> All Consultations of All Healthcare Providers</p>
        </div>

         <form className="w-[350px] border-2 rounded-[7px] gap-3 flex items-center border-gray-300 overflow-hidden my-auto mr-2" action="">
          <input className="w-[85%] outline-none indent-3 py-2" type="text" />
         <IoIosSearch className="text-3xl"/>
         </form>

      </div>
      <Appointments data={data?.data}/>
    </div>
  );
};

export default memo(Arizalar);
