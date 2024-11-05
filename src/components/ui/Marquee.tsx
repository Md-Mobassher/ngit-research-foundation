const Marquee = () => {
  return (
    <div className="overflow-hidden  text-white  sticky bottom-0 z-50 w-full pt-1 pb-2 bg-slate-100 lg:bg-opacity-40 md:bg-opacity-40 bg-opacity-50">
      <div className="flex  justify-between items-stretch gap-5  animate-marquee lg:text-2xl md:text-2xl text-xl font-bold text-black text-shadow-lg text-center ">
        <span className="text-red-600 mr-2">Admission going on.</span>
        <span>
          Phone:
          <span className="text-blue-600"> +8801996377947 </span>
        </span>
        <span>
          Whatsapp: <span className="text-blue-600"> +60142655175</span>
        </span>
        <span>
          Email: <span className="text-blue-600">ngit.info@gmail.com</span>
        </span>
      </div>
    </div>
  );
};

export default Marquee;
