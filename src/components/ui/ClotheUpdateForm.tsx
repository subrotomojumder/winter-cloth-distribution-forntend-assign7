/* eslint-disable @typescript-eslint/no-explicit-any */
import Modal from "@/components/ui/Modal";
import { useUpdateClotheMutation } from "@/redux/features/clothes/clothesApi";
import { TClothe, clotheFormSchema } from "@/types/clothes.type";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { Button } from "./button";
import { toast } from "sonner";

const ClotheUpdateForm = ({
  clothe,
  isOpen,
  onClose,
}: {
  clothe: TClothe & { _id: string };
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [postClothe, { isLoading }] = useUpdateClotheMutation();
  const defaultValues = {
    title: clothe.title || "",
    category: clothe.category || "",
    des: clothe.des || "",
    image: clothe.image || "",
    size: [],
    sizeInput: clothe.size?.join(", ") || "",
  };
  const form = useForm<TClothe>({
    resolver: zodResolver(clotheFormSchema),
    defaultValues: defaultValues,
  });
  const onSubmit = async (values: TClothe) => {
    values.size = values.sizeInput?.split(",");
    delete values.sizeInput;
    const toastId = toast.loading("loading....");
    try {
      await postClothe({ id: clothe._id, updateData: values }).unwrap();
      toast.success("Update Successful!", {
        id: toastId,
        duration: 1000,
      });
      onClose();
    } catch (error: any) {
      toast.error(error?.data?.message || "Something went wrong!", {
        id: toastId,
        duration: 1000,
      });
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="">
      <Modal.ModalHeader>
        <h1 className="text-xl font-semibold">Update Clothe</h1>
        <Modal.CloseButton />
      </Modal.ModalHeader>
      <div className="py-4 overflow-y-scroll max-h-[70vh] ">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-5 w-full px-3"
          >
            <FormField
              name="title"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-600">Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Clothe title" {...field} />
                  </FormControl>
                  <FormMessage className="font-normal -pb-4" />
                </FormItem>
              )}
            />
            <FormField
              name="category"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-600">Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Category" {...field} />
                  </FormControl>
                  <FormMessage className="font-normal -pb-4" />
                </FormItem>
              )}
            />
            <FormField
              name="sizeInput"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-600">Size</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. : M , L , XL" {...field} />
                  </FormControl>
                  <FormMessage className="font-normal -pb-4" />
                </FormItem>
              )}
            />
            <FormField
              name="image"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-600">Image URL</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://cdn.pixabay.com/photo/2015/rose-729509_640.jpg"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="font-normal -pb-4" />
                </FormItem>
              )}
            />
            <FormField
              name="des"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-600">Description</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <div className="text-center">
              <Button
                variant={"destructive"}
                className="w-full"
                type="submit"
                disabled={isLoading}
              >
                Update
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </Modal>
  );
};

export default ClotheUpdateForm;
