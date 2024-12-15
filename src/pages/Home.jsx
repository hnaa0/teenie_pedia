import CarouselBox from "../components/CarouselBox";
import HomeItems from "../components/HomeItems";
import Search from "../components/Search";

export default function Home() {
  return (
    <div className="pb-40 lg:max-w-7xl lg:mx-auto lg:my-0">
      <CarouselBox />
      <Search />
      <HomeItems />
    </div>
  );
}
