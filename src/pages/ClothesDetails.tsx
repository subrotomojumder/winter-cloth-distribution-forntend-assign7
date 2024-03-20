import Container from "@/components/Container";
import DonorTestimonials from "@/components/home/DonorTestimonials";
import DonationConfirmationForm from "@/components/ui/DonationConfirmationForm";
import ErrorComponent from "@/components/ui/ErrorComponent";
import { LoadingPoints } from "@/components/ui/Loaders";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TUser, selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useGetSingleClotheQuery } from "@/redux/features/clothes/clothesApi";
import { useAppSelector } from "@/redux/hooks";
import { Link, useLocation, useParams } from "react-router-dom";

const ClothesDetails = () => {
  const { clotheId } = useParams();
  const location = useLocation();
  const user = useAppSelector(selectCurrentUser) as TUser;
  const { data, isLoading, isError } = useGetSingleClotheQuery(clotheId, {
    skip: !clotheId,
  });

  if (isLoading) {
    return <LoadingPoints className="h-screen max-h-screen" />;
  }
  if (isError) {
    return <ErrorComponent className="h-screen max-h-screen" />;
  }
  const clothe = data?.data;
  return (
    <Container className="min-h-screen space-y-10 md:space-y-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-12 px-3 lg:px-8 py-8 lg:divide-x-2">
        <div className="px-5 bg-gray-50">
          <img src={clothe.image} alt="" className="max-h-[450px]" />
        </div>
        <div className="flex flex-col justify-between items-start md:pl-12">
          <div className="space-y-3 md:space-y-5 mb-8">
            <h3 className="text-2xl lg:text-5xl font-bold truncate mt-4 mb-2">
              {clothe.title}
            </h3>
            <p className="text-xl lg:text-2xl font-medium text-gray-600">
              Category: {clothe.category}
            </p>
            <p className="text-xl lg:text-2xl font-medium text-gray-600">
              Price: $ {clothe.price || "N/A"}
            </p>
            <div className="flex justify-start items-center space-x-2 font-medium text-gray-600 text-xl lg:text-2xl">
              <p>Size: </p>
              {clothe.size?.length < 1 ? (
                <span>N/A</span>
              ) : (
                clothe.size?.map((item: string, i: number) => (
                  <Badge key={i} variant="outline">
                    {item}
                  </Badge>
                ))
              )}
            </div>
            <p className="text-gray-600">{clothe.des}</p>
          </div>
          {user?.email ? (
            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-full" variant={"destructive"}>
                  Donate Now
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Donation confirmation</DialogTitle>
                </DialogHeader>
                <div className="">
                  <DonationConfirmationForm clothe={clothe} />
                </div>
              </DialogContent>
            </Dialog>
          ) : (
            <Link
              to="/login"
              state={{ from: location }}
              replace
              className="w-full"
            >
              <Button className="w-full" variant={"destructive"}>
                Login & Donate Now
              </Button>
            </Link>
          )}
        </div>
      </div>
      <DonorTestimonials />
    </Container>
  );
};

export default ClothesDetails;
