import { memo } from 'react';
import Logo from "../../shared/assets/Logomark.svg"

const LoadingDashbord = () => {
  return (
     <div className="flex items-center justify-center h-screen">
  <div className="w-[100px] h-[100px]">
    <img className='w-40' src={Logo} alt="" />
  </div>
</div>

  );
};

export default memo(LoadingDashbord);