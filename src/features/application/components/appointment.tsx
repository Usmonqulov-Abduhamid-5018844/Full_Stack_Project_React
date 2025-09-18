import { memo, useState, type FC } from "react";
import type { Doctor, DoctorProps } from "../types";
import { useDoctorStatus } from "../services/useDoctor";
import Popap from "../pages/popap";

const Appointments: FC<DoctorProps> = ({ data }) => {
  const { getStatus } = useDoctorStatus();
  const [onClose, setClose] = useState(false);
  const [selectorItem, setSelectorItem] = useState<any>(null);



  return (
    <div className="container mx-auto">
      <div className="border mx-auto w-[95%] mt-6 rounded-2xl border-gray-200">
        <div className="flex flex-col">
          <div className="flex items-center gap-4 px-4 mt-4">
            <span className="text-2xl">Arizalar</span>
            <span className="text-blue-600 font-bold">{data?.total}</span>
          </div>

          <div className="grid grid-cols-6 py-3 px-4 bg-gray-100 border-y border-gray-200 mt-5 font-medium">
            <div className="flex items-center gap-3">
              <input className="scale-150" type="checkbox" />
              <span>Telefon raqam</span>
            </div>
            <span>ID</span>
            <span>Hujjatlar soni</span>
            <span>Yuborilgan sana</span>
            <span>Status</span>
            <span>Action</span>
          </div>

          {data?.data?.map((item: Doctor) => (
            <div
              className="grid grid-cols-6 border-b-2 border-gray-200 py-4 px-4 items-center"
              key={item.id}
            >
              <div className="flex items-center gap-3">
                <input className="scale-150" type="checkbox" />
                <span className="font-bold">{item.phone}</span>
              </div>

              <span>#{item.id}</span>

              <span>
                {item.Doctor_file.reduce((acc, doc) => {
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
              </span>

              <span>
                {item.Doctor_file.length > 0
                  ? new Date(
                      item.Doctor_file[0].created_at
                    ).toLocaleDateString()
                  : "Yuklanmagan"}
              </span>

              <div className="flex items-center rounded-[20px] max-w-[190px] py-1.5 gap-3 bg-gray-100 ">
                <div
                  className={`w-3 h-3 ml-3 ${
                    item.step === "pending"
                      ? "bg-yellow-500"
                      : item.step === "files"
                      ? "bg-blue-500"
                      : item.step === "finish"
                      ? "bg-green-500"
                      : "bg-red-500"
                  } rounded-[50%]`}
                ></div>

                <span
                  className={`font-bold ${
                    item.step === "pending"
                      ? "text-yellow-500"
                      : item.step === "files"
                      ? "text-blue-500"
                      : item.step === "finish"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {item.step === "pending"
                    ? "Kutilmoqda"
                    : item.step === "files"
                    ? "Jarayonda"
                    : item.step === "finish"
                    ? "Ruxsat berilgan"
                    : "Bekor qilingan"}
                </span>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setSelectorItem(item);
                    setClose((p) => !p);
                  }}
                  className="text-blue-600 px-1 cursor-pointer hover:bg-blue-500 rounded-[10px] hover:text-white"
                >
                  Tekshirish
                </button>

                {item.step !== "block" && (
                  <button
                    disabled={getStatus.isPending}
                    onClick={() =>
                      getStatus.mutate({
                        id: item.id,
                        body: { status: "block" },
                      })
                    }
                    className={`text-red-500 px-1 cursor-pointer hover:bg-red-500 hover:text-white rounded-[10px]`}
                  >
                    Bekor qilish
                  </button>
                )}
                {item.step !== "finish" && (
                  <button
                    disabled={getStatus.isPending}
                    onClick={() =>
                      getStatus.mutate({
                        id: item.id,
                        body: { status: "finish" },
                      })
                    }
                    className="text-emerald-500 cursor-pointer px-1 hover:bg-emerald-500 hover:text-white rounded-[10px]"
                  >
                    Tasdiqlash
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      {onClose && <Popap setClose={setClose} data={selectorItem} />}
    </div>
  );
};

export default memo(Appointments);
