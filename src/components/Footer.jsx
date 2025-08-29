import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#EEEEEE] text-gray-700 text-sm py-8 ">
      {/* Support Buttons */}
      <div className="flex flex-col gap-3 items-center px-6">
        {/* Customer Support */}
        <div className="flex gap-2 items-center bg-white  py-3 px-6 rounded-lg w-full justify-center">
          <img
            src="https://ik.imagekit.io/bmaxmbpyx/https://skyexcchange.com/assets/images/Customer.svg"
            alt="Customer Support"
            className="h-7"
          />
          <span className="text-[11px]">Customer support1 | support2</span>
        </div>

        {/* WhatsApp */}
        <div className="flex gap-2 items-center text-start bg-white  py-3 rounded-lg w-full justify-center">
          <img
            src="icon1.png"
            alt="WhatsApp"
            className="h-7"
          />
          <span className="text-[11px]">WhatsApp 3 | WhatsApp 4</span>
        </div>
        <div className="flex gap-2 items-center bg-white  py-2 rounded-lg w-full justify-center">
          
          
        </div>

       <div className="w-full grid grid-cols-3 gap-2">
         {/* Skype */}
        <div className="flex   items-center bg-white  py-3 rounded-lg w-full justify-center">
          <img
            src="icon2.png"
            alt="Skype"
            className="h-6"
          />
          <span className="text-[11px]">Skype</span>
        </div>

        {/* Email */}
         <div className="flex   items-center bg-white py-3 rounded-lg w-full justify-center">
          <img
            src="icon3.png"
            alt="Skype"
            className="h-6"
          />
          <span className="text-[11px]">Email</span>
        </div>
         <div className="flex   items-center bg-white py-3 rounded-lg w-full justify-center">
          
          
        </div>

      </div>
       </div>

      

      {/* Links */}
      <div className=" flex flex-wrap gap-1 justify-center text-[10px] px-1 *:underline text-gray-600 pt-10 ">
        <a href="#">Privacy Policy |</a>  
        <a href="#">Terms and Conditions |</a> 
        <a href="#">Rules and Regulations |</a> 
        <a href="#">KYC |</a> 
        <a href="#">Responsible Gaming |</a> 
        <a href="#">About Us |</a> 
        <a href="#">Self-Exclusion Policy |</a> 
        <a href="#">Underage Policy</a>
      </div>
      <div className="flex justify-center items-center py-6 ">
        <img src="appdownlod.png" alt="" className=" h-24 pb-5" />
      </div>
    </footer>
  );
};

export default Footer;
