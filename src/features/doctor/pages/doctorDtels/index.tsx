import { memo } from "react";
import { useParams } from "react-router-dom";
import { useDoctor } from "../../services/useDoctor";
import type { Doctor } from "../../types";
import qabullarsonImg from "../../../../shared/assets/Frame (2).png"
import daromat from "../../../../shared/assets/Frame 1000005958.png"

const DoctorDtels = () => {
  const { id } = useParams();
  const { getDoctorById } = useDoctor();
  const {data, isLoading} = getDoctorById(Number(id));

  const doctor: Doctor = data?.data;

  if (isLoading) return <div>Loading...</div>;

  return (

      <div className=" p-6 flex gap-6 justify-center items-center mt-16">

      <div className="flex flex-col shadow-amber-100 border-1 border-amber-200 rounded-xl w-[320px] shadow-md p-4 items-center">

        <div className="w-[120px] h-[120px] rounded-full overflow-hidden border">
          <img
            className="w-full h-full object-cover"
            src={doctor.image}
            alt={doctor.first_name}
          />
        </div>

        <div className="mt-3 text-center">
          <h2 className="font-semibold text-lg">{`Mr. ${doctor.first_name} ${doctor.last_name}`}</h2>
          {doctor.isActive ? (
            <span className="text-green-500 font-medium">Aktiv</span>
          ) : (
            <span className="text-red-500 font-medium">Inaktiv</span>
          )}
        </div>

        <div className="mt-2 flex flex-col items-center gap-1">
          <div className="flex items-center gap-1">
            <span className="text-yellow-500">⭐</span>
            <span>{doctor.reyting}</span>
          </div>
          <span className="text-sm text-gray-500">
            {doctor.reyting_count} ta sharh
          </span>
          {doctor.verified && (
            <span className="text-xs text-blue-600">
              Medical Registration Verified
            </span>
          )}
        </div>

        <div className="mt-4 w-full border-t border-gray-400 pt-3 text-sm text-gray-700 space-y-1">
          <p>
            <strong>Telefon:</strong> {doctor.phone}
          </p>
          <p>
            <strong>Hudud:</strong> {doctor.region}
          </p>
          <p>
            <strong>Tajriba:</strong> {doctor.experience_years} yil
          </p>
          <p>
            <strong>Yoshi:</strong>{" "}
            {new Date().getFullYear() -
              new Date(doctor.date_of_birth).getFullYear()}
          </p>
        </div>
      </div>


      <div className="flex-1">

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="border border-amber-200 bg-[#eaebed] rounded-xl p-4 text-center shadow flex flex-col items-center gap-2">
            <div>

            <img src={qabullarsonImg} alt="" />
            </div>
            <h3 className="text-2xl font-bold">4</h3>
            <p className="text-sm text-gray-600">Qabullar soni</p>
          </div>
          <div className="border border-amber-200 bg-[#eaebed] rounded-xl p-4 text-center shadow flex flex-col items-center gap-2">
            <div>

            <img src={daromat} alt="" />
            </div>
            <h3 className="text-2xl font-bold">
              {doctor.Wellet[0]?.balance} UZS
            </h3>
            <p className="text-sm text-gray-600">Umumiy daromad</p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold mb-2">Mutaxassisligi</h3>
          <div className="flex gap-2 border-b-1 border-gray-400 pb-6 ">
            {
                doctor.Doctor_specialization.map((s: any)=>(
                    
                    <span className="border border-amber-300 px-3 py-1 rounded-lg">{s.specialization.name}</span>
                ))
            }
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Hujjatlar</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href={doctor.Doctor_file[0]?.passport_file}
                target="_blank"
                className="text-blue-600 underline"
              >
                Passport
              </a>
            </li>
            <li>
              <a
                href={doctor.Doctor_file[0]?.diplom_file}
                target="_blank"
                className="text-blue-600 underline"
              >
                Diplom
              </a>
            </li>
            <li>
              <a
                href={doctor.Doctor_file[0]?.yatt_file}
                target="_blank"
                className="text-blue-600 underline"
              >
                YATT
              </a>
            </li>
            <li>
              <a
                href={doctor.Doctor_file[0]?.sertifikat_file}
                target="_blank"
                className="text-blue-600 underline"
              >
                Sertifikat
              </a>
            </li>
            <li>
              <a
                href={doctor.Doctor_file[0]?.tibiy_varaqa_file}
                target="_blank"
                className="text-blue-600 underline"
              >
                Shaxsiy tibbiy varaqa
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default memo(DoctorDtels);
