import { useGetAllClothesQuery } from "@/redux/features/clothes/clothesApi";
import Container from "../Container";
import ClotheCard from "../ui/ClotheCard";
import SectionHeading from "../ui/SectionHeading";
import { TClothe } from "@/types/clothes.type";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import ErrorComponent from "../ui/ErrorComponent";
import { LoadingPoints } from "../ui/Loaders";

const HomeWinterClothes = () => {
  const { data, isLoading, isError } = useGetAllClothesQuery(undefined);
  if (isLoading) {
    return <LoadingPoints />;
  }
  if (isError) {
    return <ErrorComponent />;
  }
  return (
    <Container>
      <SectionHeading
        headingText="Winter clothing items"
        details="Winter Clothes Posts displayed in card format, providing a snapshot of each clothing item. Compellingly expedite real-time processes and collaborative content."
      />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-10">
        {data?.data.slice(0, 6).map((clothe: TClothe & {_id: string}) => (
          <ClotheCard key={clothe._id} clothe={clothe} />
        ))}
      </div>
      <div className="text-center mt-8 group">
        <Link to={"/winter-clothes"}>
          <Button variant={"link"}>View All...</Button>
        </Link>
      </div>
    </Container>
  );
};

export default HomeWinterClothes;
