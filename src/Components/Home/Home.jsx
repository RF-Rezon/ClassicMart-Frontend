import AboutUs from "../AboutUs/AboutUs";
import CarouselSection from "../carouselSection/carouselSection";
import ExpertiseSection from "../expertiseSection/expertiseSection";
import Header from "../Header/Header";
// import News from "../news/news";
import Partners from "../Partners/Partners";
import ThirdSection from "../ThirdSection/ThirdSection";

const Home = () => {
  let x = import.meta.env.VITE_LOCAL_BACKEND;

  return (
    <>
      <div className="min-h-screen">
        <Header />
        <AboutUs />
        <ThirdSection />
        <CarouselSection />
        <ExpertiseSection />
        {/* <News /> */}
        <Partners />
      </div>
    </>
  );
};

export default Home;
