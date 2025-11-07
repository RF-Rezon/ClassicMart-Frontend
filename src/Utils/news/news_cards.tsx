import newscards from "./newscards.json";
const News_cards = () => {
  return (
    <>
      {newscards.map((i, index) => (
        <div key={index} className="mb-6 md:mb-8 cursor-pointer group relative">
          <div className="w-full h-[300px] md:h-[349px] mb-2.5 md:mb-4 overflow-hidden rounded-[8px] transition-all duration-300">
            <img
              className="w-full h-full object-cover rounded-[8px] transition-transform duration-300 ease-in-out group-hover:scale-105"
              src={i.img}
              alt={i.alt}
            />
          </div>
          <div className="text-customGold space-y-1.5 md:space-y-2.5 w-full md:w-[80%]">
            <p className="flex items-center space-x-1">
              <span className="text-customGray">&#9679;</span>
              <span className="t-1 text-left text-customGray">{i.date}</span>
            </p>
            <p className="t-3">{i.title}</p>
            <p className="t-1 text-customGray">{i.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default News_cards;
