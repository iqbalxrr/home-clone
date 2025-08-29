
"use client";


export default function TopNavbar() {
  return (
    <div className="flex justify-between items-center bg-gradient-to-b from-[#474747] to-[#1a1919] px-2 py-1">
      {/* Logo */}
      <div className=" w-10 flex items-center">
        <img src="/logo.png" alt="Logo" />
      </div>

      {/* Buttons */}
      <div className="flex gap-1.5">
        <button className="bg-gradient-to-b from-[#474747] to-[#353333] text-white px-[21px] py-[6px] border-1 border-black   shadow-[inset_0_0.85px_0_0_rgba(255,255,255,0.5)]  rounded text-[12px] font-semibold">
          Signup
        </button>
        <button className="bg-[#DD2114] flex gap-1 text-white px-[21px] py-[6px] shadow-[inset_0_0.85px_0_0_rgba(255,255,255,0.5)] border-1 border-black   rounded text-[12px] font-semibold">
         <img src="https://ik.imagekit.io/bmaxmbpyx/https://skyexcchange.com/assets/images/login-user.svg" alt="" className="w-4" />
          Login
        </button>
      </div>
    </div>
  );
}
