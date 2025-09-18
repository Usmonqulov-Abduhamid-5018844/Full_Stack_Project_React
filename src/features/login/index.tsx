import React, { memo, useState } from "react";
import { useLogin } from "./service/login";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "../doctor/store/authSlice";
import Doctor from "../../shared/assets/doctorFile/Frame 206.png";
import Logo from "../../shared/assets/doctorFile/Logo wrap.png";

const Login = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { Login } = useLogin();
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Password:", password);
    console.log("Phone:", phone);
    Login.mutate(
      { password, phone },
      {
        onSuccess: (res) => {
          if (res.data) {
            const { AcsesToken } = res.data;
            dispatch(setToken(AcsesToken));
            setPassword("");
            setPhone("");
            nav("/");
          }
        },
      }
    );
  };

  return (
    <>
      <div className="flex flex-col md:flex-row gap-3 container mx-auto relative min-h-screen items-center">
        <div className="flex flex-col items-center md:ml-[100px] flex-1">
          <div className="mt-10">
            <Link
              target="_blank"
              to="https://intervention.uz/rus?gad_source=1&gad_campaignid=22812887272&gbraid=0AAAABAjyXiRiNw6fnPyi2nrEwgUAlP5RT&gclid=CjwKCAjwlaTGBhANEiwAoRgXBdFR7fSdu8PWcju_q0UVUw-92KXmOlT_tMYA6PYHLs2IN9NyAUcKlxoCHR0QAvD_BwE"
            >
              <img src={Logo} alt="Logo" className="h-12" />
            </Link>
          </div>

          <div className="flex w-[400px] h-[450px] items-center mt-[60px] rounded-2xl shadow-lg bg-white">
            <div className="flex flex-col gap-8 w-full px-5">
              <div className="flex flex-col items-center gap-2 text-center">
                <span className="text-[30px] font-bold">
                  Sign in to your account
                </span>
                <p className="text-gray-600">
                  Welcome back! Please enter your details.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <label className="w-full">
                  Password:
                  <input
                    className={` border-2 ${
                      Login.isError ? "border-red-600" : "border-gray-300"
                    } w-full p-2 mt-2 rounded-[8px] outline-none`}
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </label>
                <label className="w-full">
                  Phone:
                  <input
                    className={`border-2  ${
                      Login.isError ? "border-red-600" : "border-gray-300"
                    } w-full p-2 mt-2 rounded-[8px] outline-none`}
                    type="text"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </label>
                <div className="text-red-600">
                  {Login.error
                    ? `${(Login.error as any).response.data.error.message}`
                    : ""}
                </div>

                <button
                  type="submit"
                  className="border mt-3 p-2 rounded-xl bg-blue-500 text-white hover:bg-blue-600 transition"
                >
                  {Login.isPending ? "Loading..." : "Login"}
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="hidden md:flex">
          <img className="h-full object-contain" src={Doctor} alt="Doctor" />
        </div>
      </div>
    </>
  );
};

export default memo(Login);
