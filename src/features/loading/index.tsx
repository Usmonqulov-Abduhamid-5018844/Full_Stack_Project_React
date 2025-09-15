import { memo } from 'react';

const LoadingDashbord = () => {
  return (
      <div className="w-[250px] h-screen bg-slate-900 sticky top-0 left-0 p-4 text-white">
      <div className=" flex gap-4 justify-center mt-3">
        <h2 className="text-3xl text-center ml-14">Medic</h2>
      </div>
      <ul className="my-10 flex flex-col gap-2">
        <li className='block p-2 mb-2 rounded-md bg-white h-[35px] text-slate-900'>
        </li>
        <li className='block p-2 mb-2 rounded-md bg-white h-[35px] text-slate-900'>
        </li>
        <li className='block p-2 mb-2 rounded-md bg-white h-[35px] text-slate-900'>
        </li>
        <li className='block p-2 mb-2 rounded-md bg-white h-[35px] text-slate-900'>
        </li>
        <li className='block p-2 mb-2 rounded-md bg-white h-[35px] text-slate-900'>
        </li>
        <li className='block p-2 mb-2 rounded-md bg-white h-[35px] text-slate-900'>
        </li>
        <li className='block p-2 mb-2 rounded-md bg-white h-[35px] text-slate-900'>
        </li>

      </ul>
    </div>
  );
};

export default memo(LoadingDashbord);