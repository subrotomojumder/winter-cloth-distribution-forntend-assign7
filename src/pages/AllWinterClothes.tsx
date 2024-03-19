import Container from "@/components/Container";
import ClotheCard from "@/components/ui/ClotheCard";
import ErrorComponent from "@/components/ui/ErrorComponent";
import { LoadingPoints } from "@/components/ui/Loaders";
import { useGetAllClothesQuery } from "@/redux/features/clothes/clothesApi";
import { TClothe } from "@/types/clothes.type";

const AllWinterClothes = () => {
  const { data, isLoading, isError } = useGetAllClothesQuery(undefined);
  if (isLoading) {
    return <LoadingPoints className="h-screen max-h-screen" />;
  }
  if (isError) {
    return <ErrorComponent className="h-screen max-h-screen" />;
  }
  return (
    <Container className="min-h-screen">
      {/* <div className="flex justify-between items-center mt-4">
        <h2 className="text-lg md:text-xl font-medium">All Winter Clothes</h2>
        
      </div> */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-6">
        {data?.data.map((clothe: TClothe & { _id: string }) => (
          <ClotheCard key={clothe._id} clothe={clothe} />
        ))}
      </div>
    </Container>
  );
};

export default AllWinterClothes;
