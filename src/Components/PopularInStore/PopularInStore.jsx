import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

const PopularInStore = () => {

  const {allProducts}  = useContext(AuthContext);

  return (
    <div className="flex flex-col gap-y-5 items-center w-full h-screen mb-28">
      <div>
        <p className="text-5xl font-playfair border-b-customGold border-b-4 text-white inline-block mt-10 mb-5">
          Popular In Store
        </p>
      </div>
    <div className="w-5/6 h-2/3">
    <div className="carousel w-full h-full">
  <div id="slide1" className="carousel-item relative w-full">
    <div className="w-full grid grid-cols-1 md:grid-cols-4 place-items-stretch gap-x-6 h-full">
    {allProducts?.slice(0,4)?.map(singleWatch=> (
      <div key={singleWatch?._id}  data-aos="fade-right" data-aos-duration="700" className=" bg-zinc-700 flex cursor-pointer flex-col items-center m-8 rounded-sm">
      <div className="basis-[55%] rounded-t-sm bg-zinc-900 hover:bg-zinc-400 transition duration-500 flex items-center justify-center">
          <img className="w-full h-full object-cover" src={singleWatch?.images[0]} alt="" />
      </div>
      <div className="basis-[45%] flex flex-col items-center">
          <p className="text-white font-medium text-2xl font-playfair py-2 pt-6">{singleWatch?.name}</p>
          <p className="text-customGray font-semibold text-xl">{singleWatch?.price}</p>
          <p className="text-customGray font-normal text-lg pb-6 italic">{singleWatch?.vendor}</p>
          <Link to={`/singleProduct/${singleWatch._id}`}> <button className='uppercase w-52 py-3 px-4 bg-buttonBg font-medium font-playfair border-b-[3px] border-b-customGold text-white text-sm hover:bg-customGold transition duration-500'>View Detalis</button> </Link> 
      </div>
      </div>
    ))}
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="md:btn md:btn-circle">❮</a> 
      <a href="#slide2" className="md:btn md:btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
  <div className="w-full grid grid-cols-1 md:grid-cols-4 place-items-center gap-x-6 h-full">
    {allProducts?.slice(4,5)?.map(singleWatch=> (
      <div key={singleWatch?._id}  data-aos="fade-right" data-aos-duration="700" className=" bg-zinc-700 flex cursor-pointer flex-col items-center m-8 rounded-sm">
      <div className="basis-[55%] rounded-t-sm bg-zinc-900 hover:bg-zinc-400 transition duration-500 flex items-center justify-center">
          <img className="w-full h-full object-cover" src={singleWatch?.images[0]} alt="" />
      </div>
      <div className="basis-[45%] flex flex-col items-center">
          <p className="text-white font-medium text-2xl font-playfair py-2 pt-6">{singleWatch?.name}</p>
          <p className="text-customGray font-semibold text-xl">{singleWatch?.price}</p>
          <p className="text-customGray font-normal text-lg pb-6 italic">{singleWatch?.vendor}</p>
          <Link to={`/singleProduct/${singleWatch._id}`}><button className='uppercase w-52 py-3 px-4 bg-buttonBg font-medium font-playfair border-b-[3px] border-b-customGold text-white text-sm hover:bg-customGold transition duration-500'>View Detalis</button></Link>
      </div>
      </div>
    ))}
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="md:btn md:btn-circle">❮</a> 
      <a href="#slide3" className="md:btn md:btn-circle">❯</a>
    </div>
  </div> 
</div>
    </div>
    <div className="w-full flex items-center justify-center mt-10">
    <Link to={"/allProducts"}> <button data-aos="fade-up" data-aos-duration="700" className='uppercase mt-24 mx-auto py-3 px-4 bg-buttonBg font-medium font-playfair border-b-[3px] border-b-customGold text-white text-md hover:bg-customGold transition duration-500'>View All Products</button> </Link>
    </div>
    </div>
  );
};

export default PopularInStore;
