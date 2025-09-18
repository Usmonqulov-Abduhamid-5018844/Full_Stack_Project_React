import { memo } from "react";
import Appointments from "../components/appointment";
import { IoIosSearch } from "react-icons/io";
import { useDoctorStatus } from "../services/useDoctor";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useParamsHook } from "../../../shared/hooks/useParams";
import { Pagination, type PaginationProps } from "antd";
import Loading from "./loading";

const Arizalar = () => {
  const { getParam, setParam, removeParam } = useParamsHook();
  const page = getParam("page") || "1";
  const { getDoctors } = useDoctorStatus();
  const { data, isLoading } = getDoctors({ page });

  const onChange: PaginationProps["onChange"] = (page) => {
    if (page === 1) {
      removeParam("page");
    } else {
      setParam("page", page);
    }
  };

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
      {isLoading ? <Loading /> : <Appointments data={data?.data} />}

      <div className="border w-[95%] mb-6 mx-auto items-center rounded-[8px] py-4 flex justify-between px-5 mt-10 border-gray-200">
        <Pagination
          current={Number(page)}
          onChange={onChange}
          total={data?.data?.total > 1000 ? 1000 : data?.data?.total}
          defaultPageSize={10}
          showSizeChanger={false}
          className="font-bold justify-between flex items-center"
          itemRender={(page, type) => {
            if (type === "prev") {
              return (
                <button className="border-2 border-gray-200 py-1 hover:bg-blue-400 hover:font-bold hover:text-white px-3 rounded-[8px] flex items-center font-bold">
                  <GoArrowLeft className="w-5 h-5 mr-1" /> Previous
                </button>
              );
            }
            if (type === "next") {
              return (
                <button className="border-2 hover:bg-blue-400 hover:font-bold hover:text-white border-gray-200 py-1 px-3 rounded-[8px] flex items-center font-bold">
                  Next <GoArrowRight className="w-5 h-5 ml-1" />
                </button>
              );
            }
            return (
              <span className="mx-2 px-3 py-1 rounded-lg cursor-pointer hover:bg-blue-100">
                {page}
              </span>
            );
          }}
        />
      </div>
    </div>
  );
};

export default memo(Arizalar);
