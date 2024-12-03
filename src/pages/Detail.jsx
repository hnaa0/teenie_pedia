import DetailCard from "../components/DetailCard";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function Detail() {
  const { id } = useParams();
  const items = useSelector((state) => state.itemStore.all);
  const item = items.find((element) => element.id == id);

  return (
    <div className="px-4 md:px-10 pt-12 lg:pt-20 lg:max-w-7xl lg:mx-auto lg:my-0">
      <DetailCard data={item} />
    </div>
  );
}
