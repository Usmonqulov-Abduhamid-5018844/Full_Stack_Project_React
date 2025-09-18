import { memo, type Dispatch, type FC, type SetStateAction } from "react";
import { IoClose } from "react-icons/io5";
import { FaRegEye, FaRegImage } from "react-icons/fa";
import type { Doctor } from "../types";
import { useDoctorStatus } from "../services/useDoctor";

interface Props {
  setClose: Dispatch<SetStateAction<boolean>>;
  data: Doctor;
}
const Popap: FC<Props> = ({ setClose, data }) => {
  const { getStatus } = useDoctorStatus();

  return (
    <div
      onClick={() => setClose(false)}
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[600px] max-h-[90vh] bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
      >
        <div className="flex items-center justify-between px-5 py-3 border-b-2 border-gray-200">
          <h2 className="font-bold text-lg">#{data.id} arizani tekshirish</h2>
          <button onClick={() => setClose((p) => !p)}>
            <IoClose className="w-6 h-6 text-gray-500 hover:text-black" />
          </button>
        </div>

        <div className="p-5 space-y-5 overflow-y-auto">
          <div className="grid grid-cols-2 gap-5">
            <div>
              <label className="text-sm text-gray-600">Telefon raqami</label>
              <input
                className="w-full border-1 border-gray-200 rounded-md px-3 py-2 mt-1 bg-gray-50"
                value={data.phone}
                disabled
              />
            </div>
            <div>
              <label className="text-sm text-gray-600">Holati</label>
              <input
                className="w-full border-1 border-gray-200 rounded-md px-3 py-2 mt-1 bg-gray-50"
                value={data.step}
                disabled
              />
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-600">Yuborilgan sana</label>
            <input
              className="w-full border-1 border-gray-200 rounded-md px-3 py-2 mt-1 bg-gray-50"
              value={
                data.Doctor_file.length > 0
                  ? new Date(
                      data.Doctor_file[0].created_at
                    ).toLocaleDateString()
                  : "Yuklanmagan"
              }
              disabled
            />
          </div>
          <div>
            <h3 className="font-bold mb-2">
              Hujjatlar [
              {data.Doctor_file.reduce((acc, doc) => {
                return (
                  acc +
                  [
                    doc.diplom_file,
                    doc.passport_file,
                    doc.yatt_file,
                    doc.sertifikat_file,
                    doc.tibiy_varaqa_file,
                  ].filter(Boolean).length
                );
              }, 0)}
              ]
            </h3>
            <ul className="space-y-3">
              <li className="flex justify-between items-center border-1 border-gray-200 rounded-lg px-3 py-2 hover:bg-gray-50">
                <div className="flex items-center gap-3">
                  <FaRegImage className="text-blue-500 text-[30px]" />
                  <div>
                    <p className="text-sm text-gray-500">Passport fotosutati</p>
                    <span className="font-mono text-sm font-bold block w-[430px] truncate ">
                      {data.Doctor_file[0]?.passport_file || "Yuklanmagan"}
                    </span>
                  </div>
                </div>
                {data?.Doctor_file[0]?.passport_file && (
                  <a
                    target="_blank"
                    href={data.Doctor_file[0]?.passport_file}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <FaRegEye className="text-[22px]" />
                  </a>
                )}
              </li>
              <li className="flex justify-between items-center border-1 border-gray-200 rounded-lg px-3 py-2 hover:bg-gray-50">
                <div className="flex items-center gap-3">
                  <FaRegImage className="text-blue-500 text-[30px]" />
                  <div>
                    <p className="text-sm text-gray-500">
                      Diplom (Bakalavr va mutaxassislik)
                    </p>
                    <span className="font-mono text-sm font-bold block w-[430px] truncate ">
                      {data.Doctor_file[0]?.diplom_file || "Yuklanmagan"}
                    </span>
                  </div>
                </div>
                {data?.Doctor_file[0]?.diplom_file && (
                  <a
                    target="_blank"
                    href={data.Doctor_file[0]?.diplom_file}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <FaRegEye className="text-[22px]" />
                  </a>
                )}
              </li>
              <li className="flex justify-between items-center border-1 border-gray-200 rounded-lg px-3 py-2 hover:bg-gray-50">
                <div className="flex items-center gap-3">
                  <FaRegImage className="text-blue-500 text-[30px]" />
                  <div>
                    <p className="text-sm text-gray-500">
                      O'z-o'zini band qilish
                    </p>
                    <span className="font-mono text-sm font-bold block w-[430px] truncate ">
                      {data.Doctor_file[0]?.yatt_file || "Yuklanmagan"}
                    </span>
                  </div>
                </div>
                {data?.Doctor_file[0]?.yatt_file && (
                  <a
                    target="_blank"
                    href={data.Doctor_file[0]?.yatt_file}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <FaRegEye className="text-[22px]" />
                  </a>
                )}
              </li>
              <li className="flex justify-between items-center border-1 border-gray-200 rounded-lg px-3 py-2 hover:bg-gray-50">
                <div className="flex items-center gap-3">
                  <FaRegImage className="text-blue-500 text-[30px]" />
                  <div>
                    <p className="text-sm text-gray-500">Sertifikat</p>
                    <span className="font-mono text-sm font-bold block w-[430px] truncate ">
                      {data.Doctor_file[0]?.sertifikat_file || "Yuklanmagan"}
                    </span>
                  </div>
                </div>
                {data.Doctor_file[0]?.sertifikat_file && (
                  <a
                    target="_blank"
                    href={data.Doctor_file[0]?.sertifikat_file}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <FaRegEye className="text-[22px]" />
                  </a>
                )}
              </li>
              <li className="flex justify-between items-center border-1 border-gray-200 rounded-lg px-3 py-2 hover:bg-gray-50">
                <div className="flex items-center gap-3">
                  <FaRegImage className="text-blue-500 text-[30px]" />
                  <div>
                    <p className="text-sm text-gray-500">Shaxsiy tibbiy</p>
                    <span className="font-mono text-sm font-bold block w-[430px] truncate ">
                      {data.Doctor_file[0]?.tibiy_varaqa_file || "Yuklanmagan"}
                    </span>
                  </div>
                </div>
                {data.Doctor_file[0]?.tibiy_varaqa_file && (
                  <a
                    target="_blank"
                    href={data.Doctor_file[0]?.tibiy_varaqa_file}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <FaRegEye className="text-[22px]" />
                  </a>
                )}
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-between items-center border-t-2 border-gray-200 px-5 py-3">
          <div className="flex gap-10 mx-auto">
            <button
              onClick={() => {
                getStatus.mutate({ id: data.id, body: { status: "block" } });
                setClose((p) => !p);
              }}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
            >
              Arizani bekor qilish
            </button>
            <button
              onClick={() => {
                getStatus.mutate({ id: data.id, body: { status: "finish" } });
                setClose((p) => !p);
              }}
              className="bg-indigo-900 text-white px-4 py-2 rounded-md hover:bg-indigo-800"
            >
              Tasdiqlash
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Popap);
