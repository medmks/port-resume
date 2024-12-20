import LogoTickerComponent from "~/components/logoTicker.component";
import ServicesComponent from "../components/services.components";
import HeroComponent from "~/components/hero.component";

const HomePage = () => {
  return (
    <main className=" relative z-0  h-full">
      <HeroComponent />
      <LogoTickerComponent />
      <ServicesComponent />
      <div className="h-[690px]">
        <p></p>
      </div>
    </main>
  );
};
export default HomePage;
