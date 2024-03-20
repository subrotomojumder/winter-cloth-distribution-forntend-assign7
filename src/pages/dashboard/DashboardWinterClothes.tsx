import Container from "@/components/Container";
import ClotheUpdateForm from "@/components/ui/ClotheUpdateForm";
import ConfirmationModal from "@/components/ui/ConfirmationModal";
import ErrorComponent from "@/components/ui/ErrorComponent";
import { LoadingPoints } from "@/components/ui/Loaders";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { useGetAllClothesQuery } from "@/redux/features/clothes/clothesApi";
import type { TClothe } from "@/types/clothes.type";
import { SquarePen, Trash2 } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const DashboardWinterClothes = () => {
  const [editToggle, setEditToggle] = useState(false);
  const { data, isLoading, isError, error } = useGetAllClothesQuery(undefined);
  const closeEditModal = () => {
    setEditToggle(false);
  };
  return (
    <Container className=" py-5 lg:py-10">
      <div className="mx-2 xl:mx-1">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl  text-blue-500 text-center">Clothe List</h2>
          <Link to={"/dashboard/create-winter-clothes"}>
            <Button variant={"ghost"} className="bg-gray-100 dark:bg-slate-400 text-sm">
              Add Winter Clothe
            </Button>
          </Link>
        </div>
        {isLoading ? (
          <LoadingPoints className="min-h-[60vh]" />
        ) : isError ? (
          <ErrorComponent error={error} />
        ) : (
          <Table className=" border rounded-md px-0 ">
            <TableHeader>
              <TableRow>
                <TableHead className=""></TableHead>
                <TableHead className="">Title</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Size</TableHead>
                <TableHead className="text-start pl-5">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.data?.map((clothe: TClothe & { _id: string }) => (
                <TableRow key={clothe._id}>
                  <TableCell>
                    <div className=" w-16 lg:w-24">
                      <img
                        src={clothe.image}
                        alt=""
                        className={cn("object-cover rounded h-full w-full")}
                      />
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">{clothe.title}</TableCell>
                  <TableCell>{clothe.category}</TableCell>
                  <TableCell>
                    {clothe.size?.length ? clothe.size.join(", ") : "N/A"}
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="flex justify-between flex-nowrap gap-x-5">
                      <Button
                        onClick={() => setEditToggle(true)}
                        variant={"outline"}
                        className="py-0 px-2 text-sm flex items-center gap-x-2 "
                      >
                        <span className="leading-3">Edit</span>{" "}
                        <SquarePen className="size-3" />
                      </Button>
                      <ClotheUpdateForm
                        clothe={clothe}
                        isOpen={editToggle}
                        onClose={closeEditModal}
                      />
                      <ConfirmationModal clothe={clothe}>
                        <Button
                          variant={"ghost"}
                          className="p-2 rounded-full hover:bg-gray-200"
                        >
                          <Trash2 className="size-5" />
                        </Button>
                      </ConfirmationModal>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={4}>Total Services</TableCell>
                <TableCell className="text-right ">
                  <span className="pr-3">{data.data?.length}</span>
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        )}
      </div>
    </Container>
  );
};

export default DashboardWinterClothes;
