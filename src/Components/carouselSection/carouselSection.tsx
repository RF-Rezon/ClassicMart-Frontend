import carouselsection from "./carouselsection.json";

interface CarouselItem {
  img: string;
  alt: string;
  number: string;
  title: string;
  description: string;
}

const CarouselSection = () => {
  return (
    <div>
      {carouselsection.map((i: CarouselItem, index: number) => (
        <div
          key={index}
          className="relative min-h-screen w-full flex items-center justify-center bg-center bg-cover bg-no-repeat sticky top-0"
          style={{ backgroundImage: `url('${i.img}')` }}
        >
          {/* ⬇️ Overlay layer */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* ⬇️ Content layer */}
          <div className="relative w-[90%] text-white z-10">
            <p className="text-center t-2 pb-8">{i.number}</p>

            <div className="md:max-w-4xl max-w-full md:mx-auto text-center pb-[10px]">
              <p className="t-6">{i.title}</p>
            </div>

            <p className="text-center t-2 pb-8">{i.description}</p>

            <div className="flex justify-center mx-2">
              <button className="py-[14px] px-[26px] rounded-[5px] t-2 bg-[#cca471] hover:bg-[#ddb27a] cursor-pointer transition-all duration-300 opacity-95 shadow-md">
                View Project
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarouselSection;
