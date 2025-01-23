import React from 'react';

function Footer() {
  return (
    <div className="w-full h-full p-10 bg-[#252641] text-white text-center  flex flex-col justify-center items-center">
      {/* الحاوية الرئيسية */}
      <div className="w-[388px] h-[83px] grid grid-cols-3 gap-4 p-5">
  {/* العنصر الأول */}
  <div className="flex justify-center items-center">
    <div className="w-[53px] h-[53px] border-2 mr-10 border-teal-600 rounded-[6px] rotate-45 flex justify-center items-center">
      <span className="rotate-[-45deg] text-3xl text-white font-bold mb-10 ml-10">
        TOTC
      </span>
    </div>
  </div>

  {/* الخط الفاصل */}
  <div className="flex justify-center items-center">
    <div className="border-l-2 border-gray-600 h-[83px]"></div>
  </div>

  {/* العنصر الثاني */}
  <div className="flex justify-center items-center w-[156px] h-[66px]  text-2xl ">
    Virtual Class for Zoom
  </div>
      </div>

      <div className='w-[440px] h-[39px] mt-10'>Subscribe to get our Newsletter</div>

      <div className="flex justify-center items-center w-[599px]">
  <input
    type="email"
    className="w-[340px] h-[39px] p-4 rounded-3xl bg-transparent text-white placeholder:text-gray-400 border-2 border-gray-600"
    placeholder="Enter your email address"
  />
  <button className="bg-teal-600 p-4 text-center flex justify-center items-center text-white rounded-3xl h-[39px] w-[100px] ml-2">Subscribe</button>
</div>

<div className="w-[564px] h-[33px] flex justify-center items-center gap-5 mt-10">
  <span>Careers</span>
  <div className="border-l-2 border-gray-400 h-[33px]"></div> {/* خط فاصل */}
  <span>Privacy Policy</span>
  <div className="border-l-2 border-gray-400 h-[33px]"></div> {/* خط فاصل */}
  <span>Terms & Conditions</span>
</div>
<div className='w-[358px] mt-5'>© 2021 Class Technologies Inc. </div>



    </div>
  );
}

export default Footer;
