import { memo } from "react";
import { Chart } from "../components/chart";
import { Product } from "../components/product";
import { Users } from "../components/users";
import { Liler_Chart } from "../components/liner_chart";

const Statistic = () => {
  return (
    <>
    <div className="w-[500px] mt-10 ml-6 flex ">
      <Chart />

      <Product />
      <Users/>
    </div>
    <div className="mt-10 w-[90%] mx-auto">
      <Liler_Chart/>
    </div>
    </>
  );
};

export default memo(Statistic);
