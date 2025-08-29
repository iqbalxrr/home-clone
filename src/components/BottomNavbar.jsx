
"use client";


export default function BottomNavbar() {
  return (
    <div className="fixed  bottom-0 left-0 w-full bg-[#1E313E] text-white flex justify-between items-center px-3 ">
      <div className="flex flex-col items-center absolute top-[-9px] -left-1.5  bg-[#1E313E] rounded-full p-1 pl-1.5 ">
        <img src="https://ik.imagekit.io/bmaxmbpyx/https://skyexcchange.com/assets/images/games-animation.webp" alt="" className="h-[53px] rounded-full " />
      </div>

      <div className="w-full ml-2 flex justify-between items-center text-[11px]">
        <div className="flex flex-col items-center ">

          <img src="https://ik.imagekit.io/bmaxmbpyx/https://skyexcchange.com/assets/images/sport-nav.svg" alt="" />
        </div>
        <div className="flex flex-col items-center ">

          <img src="https://ik.imagekit.io/bmaxmbpyx/https://skyexcchange.com/assets/images/sport-nav.svg" alt="" className="h-[17px]" />
          <span>Sports</span>
        </div>
        <div className="flex flex-col items-center ">
          <img src="https://ik.imagekit.io/bmaxmbpyx/https://skyexcchange.com/assets/images/inplay-nav.svg" alt="" className="h-[17px]" />
          <span>In-Play</span>
        </div>
        <div className="flex flex-col items-center bg-gradient-to-b from-[#2F5C78] to-[#243947] py-2 px-4 ">
          <img src="https://ik.imagekit.io/bmaxmbpyx/https://skyexcchange.com/assets/images/home-nav.svg" alt="" className="h-[17px]" />
          <span>Home</span>
        </div>
        <div className="flex flex-col items-center ">
          <img src="https://ik.imagekit.io/bmaxmbpyx/https://skyexcchange.com/assets/images/multi-nav.svg" alt="" className="h-[17px]" />
          <span>Multi...</span>
        </div>
        <div>
          <div className="flex flex-col items-center relative">
            <div className="bg-[#F7BA18] w-[62px] h-[62px] -mt-12 -left-9 
    rounded-tl-[50px] rounded-tr-[10px] rounded-br-[50px] rounded-bl-[50px] absolute flex items-center justify-center">
              <img
                src="logo.png"
                alt="Logo"
                className="object-contain bg-black h-[23px] w-[23px] p-1 "
              />
            </div>
          </div>
          <div className="flex flex-col items-center ">
            <img src="https://ik.imagekit.io/bmaxmbpyx/https://skyexcchange.com/assets/images/account-nav.svg" alt="" className="h-[17px]" />
            <span className="">Acco...</span>
          </div>
        </div>

      </div>
    </div>
  );
}
