import CarouselBox from "../components/CarouselBox";
import ItemGrid from "../components/ItemGrid";
import Search from "../components/Search";

export default function Home() {
  return (
    <div className="pb-40">
      <CarouselBox />
      <Search />
      <ItemGrid />
    </div>
  );
}
