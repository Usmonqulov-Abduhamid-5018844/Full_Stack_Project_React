import { memo, type FC } from "react";
import spetsalizIcon from "../../../../shared/assets/Icon.svg";
import doctorIcon from "../../../../shared/assets/IconDoctor.svg";
import { Link } from "react-router-dom";
import { FaUserMd } from "react-icons/fa";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

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
  limit: number;
  page: number;
  total: number;
}
interface DoctorProps {
  data: Props;
}

export const DoctorView: FC<DoctorProps> = memo(({ data }) => {
  console.log(data);

  return (
    <div className="DoctorView p-5">
      {data?.data?.map((item: Doctor) => (
        <div
          key={item.id}
          className="flex border-2 border-gray-200 shadow-blue-100 rounded-2xl my-5 gap-6 p-3"
        >
          <div className="my-auto w-[70px] h-[70px] overflow-hidden rounded-[5px]">
            {item.image ? (
              <img
                className="w-full h-full object-cover object-right"
                src={item.image}
                alt="image"
              />
            ) : (
              <FaUserMd className="text-6xl mx-auto" />
            )}
          </div>
          <div className="flex-1 flex-col my-auto">
            <div className="flex font-bold gap-1 mb-2">
              <span>Dr.</span>
              <h2>{item.first_name}</h2>
              <h2>{item.last_name}</h2>
            </div>
            <div className="flex gap-2 mb-2">
              <img src={spetsalizIcon} alt="" />
              {item.Doctor_specialization?.map((s: any, inc: number) => (
                <span className="text-black/70" key={inc}>
                  {s.specialization.name}
                </span>
              ))}
            </div>
            <div className="flex">
              <img src={doctorIcon} alt="" />
              <span className="text-[15px] text-black/50">{item.bio}</span>
            </div>
          </div>
          <div className="flex flex-col gap-2 py-2">
            <button className=" px-3 py-2 rounded-[10px] bg-blue-500 text-white">
              <span className="font-bold">View Appointments</span>
            </button>
            <Link to={`/doctor/${item.id}`}>
              <button className="border-2 border-gray-200 px-3 py-2 rounded-[10px] w-full">
                <span className="font-bold text-[#384052]">Batafsil</span>
              </button>
            </Link>
          </div>
        </div>
      ))}
        <div className="border mx-auto rounded-[8px] mb-5 py-4 flex justify-between px-5 mt-10 border-gray-200">
              <button className="border-2 border-gray-200 py-1 hover:bg-blue-400 hover:font-bold hover:text-white px-3 rounded-[8px] flex items-center font-bold">
                <GoArrowLeft className="w-5 h-5 mr-1"  /> Previous
              </button>
              <div className="flex gap-10">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>...</span>
                <span>8</span>
                <span>9</span>
                <span>10</span>
              </div>
              <button className="border-2 hover:bg-blue-400 hover:font-bold hover:text-white border-gray-200 py-1 px-3 rounded-[8px] flex items-center font-bold">
                Next <GoArrowRight className="w-5 h-5 ml-1" />
              </button>
            </div>
    </div>
  );
});
