import DetailCard from "../components/DetailCard";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function Detail() {
  const { id } = useParams();
  const items = useSelector((state) => state.itemStore.all);
  const item = items.find((element) => element.id == id);

  return (
    <div className="pb-40 lg:max-w-7xl lg:mx-auto lg:my-0">
      <div className="h-32 sm:h-40 md:h-52"></div>
      <DetailCard data={item} />
    </div>
  );
}
