import { memo, type FC } from "react";
import spetsalizIcon from "../../../../shared/assets/Icon.svg"
import doctorIcon from "../../../../shared/assets/IconDoctor.svg"
import { Link } from "react-router-dom";

interface Specialization {
  name: string;
}

interface Doctor {
  id: number;
  first_name: string;
  last_name: string;
  phone: string;
  bio: string;
  image: string;
  Doctor_specialization: {
    specialization: Specialization;
  }[];
}

interface Props {
  data: Doctor[];
  limit: number,
  page: number,
  total: number
}
interface DoctorProps {
  data: Props
}

export const DoctorView: FC<DoctorProps> = memo(({ data }) => {
  console.log(data);
  
  return (
    <div className="DoctorView p-5">
      {data?.data?.map((item: Doctor) => (
        <div key={item.id} className="flex border-2 border-gray-200 shadow-blue-100 rounded-2xl my-5 gap-6 p-3">
          <div className="my-auto w-[70px] h-[70px] overflow-hidden rounded-[5px]">
            <img className="w-full h-full object-cover object-right" src={item.image} alt={"image"} />
          </div>
          <div className="flex-1 flex-col my-auto">
            <div className="flex font-bold gap-1 mb-2">
              <span>Dr.</span>
            <h2>{item.first_name}</h2>
            <h2>{item.last_name}</h2>
            </div>
           <div className="flex gap-2 mb-2">
            <img src={spetsalizIcon} alt="" />
            {
              item.Doctor_specialization?.map((s:any, inc:number)=> (
                <span className="text-black/70" key={inc}>{s.specialization.name}</span>
              ))
            }
           </div>
           <div className="flex">
            <img src={doctorIcon} alt="" />
            <span className="text-[15px] text-black/50">
              {item.bio}
            </span>

           </div>
          </div>
          <div className="flex flex-col gap-2 py-2">
            <button className=" px-3 py-2 rounded-[10px] bg-blue-500 text-white">
              <span className="font-bold">View Appointments</span>
            </button>
              <Link to={`/doctor/${item.id}`}>
            <button  className="border-2 border-gray-200 px-3 py-2 rounded-[10px] w-full">
             <span className="font-bold text-[#384052]">Batafsil</span>
            </button>
              </Link>
          </div>
        </div>
      ))}
    </div>
  );
});
