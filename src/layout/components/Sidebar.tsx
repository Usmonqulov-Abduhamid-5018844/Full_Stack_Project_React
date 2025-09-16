import { memo } from "react";
import { NavLink } from "react-router-dom";
import dashmoartimg from "../../shared/assets/bar-chart-01.png";
import shifokorimg from "../../shared/assets/calendar-plus-01.png";
import logo from "../../shared/assets/Logomark.png";
import bemorlar from "../../shared/assets/users-01.png";
import setings from "../../shared/assets/settings-01.png";
import logOut from "../../shared/assets/log-in-01.png";


const Sidebar = () => {
  return (
    <div className="w-[250px] h-screen bg-slate-900 sticky top-0 left-0 p-4 text-white">
      <div className=" flex gap-4 justify-center mt-3">
        <img className="w-[40px]" src={logo} alt="" />
        <h2 className="text-3xl text-center">Medic</h2>
      </div>
      <ul className="my-10">
        <li>
          <NavLink
            className={({ isActive }) =>
              `block p-2 mb-2 rounded-md ${
                isActive ? "bg-white text-slate-900" : ""
              }`
            }
            to={"/"}
          >
            <div className="flex gap-2">
              <img src={dashmoartimg} alt="" />
              <h1>Dashboard</h1>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `block p-2 mb-2 rounded-md ${
                isActive ? "bg-white text-slate-900" : ""
              }`
            }
            to={"doctors"}
          >
            <div className="flex gap-2">
              <img src={shifokorimg} alt="" />
              <h1>Shifokorlar</h1>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `block p-2 mb-2 rounded-md ${
                isActive ? "bg-white text-slate-900" : ""
              }`
            }
            to={"ariza"}
          >
            <div className="flex gap-2">
              <img src={shifokorimg} alt="" />
              <h1>Arizalar</h1>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
          className={({isActive}) => `block p-2 mb-2 rounded-md ${isActive ? "bg-white text-slate-900": ""}`}
           to={"bemor"}>
            <div className="flex gap-2">
              <img src={bemorlar} alt="" />
              <span>Bemorlar</span>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
          className={({isActive}) => `block p-2 mb-2 rounded-md ${isActive ? "bg-white text-slate-900": ""}`}
           to={"admin"}>
            <div className="flex gap-2">
              <img src={bemorlar} alt="" />
              <span>Administrator</span>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
          className={({isActive}) => `block p-2 mb-2 rounded-md ${isActive ? "bg-white text-slate-900": ""}`}
           to={"sozlamalar"}>
            <div className="flex gap-2">
              <img src={setings} alt="" />
              <span>Sozlamalar</span>
            </div>
          </NavLink>
        </li>
        <li>
          <button className="block p-2 w-[100%] mb-2 rounded-md text-white  hover:bg-white hover:text-slate-900">
            <div className="flex gap-2">
              <img src={logOut} alt="" />
              <span>Chiqish</span>
            </div>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default memo(Sidebar);
