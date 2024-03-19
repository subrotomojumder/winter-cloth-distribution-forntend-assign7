/* eslint-disable @typescript-eslint/no-explicit-any */
import { TClothe, clotheFormSchema } from "@/types/clothes.type";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePostClothesMutation } from "@/redux/features/clothes/clothesApi";
import { Textarea } from "@/components/ui/textarea";
import Container from "@/components/Container";

const CreateWinterClothes = () => {
  const [postClothe, { isLoading }] = usePostClothesMutation();
  const form = useForm<TClothe>({
    resolver: zodResolver(clotheFormSchema),
    defaultValues: {
      title: "",
      category: "",
      des: "",
      image: "",
      size: [],
      sizeInput: "",
    },
  });
  const onSubmit = async (values: TClothe) => {
    values.size = values.sizeInput?.split(",");
    delete values.sizeInput;
    const toastId = toast.loading("loading....");
    try {
      await postClothe(values).unwrap();
      toast.success("Add Successful!", {
        id: toastId,
        duration: 2000,
      });
      form.reset();
    } catch (error: any) {
      toast.error(error?.data?.message || "Something went wrong!", {
        id: toastId,
        duration: 2000,
      });
    }
  };
  return (
    <Container>
      <div className="w-full min-h-screen flex justify-center items-center">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-5 w-full md:max-w-xl px-6 md:px-12"
          >
            <h2 className="text-2xl text-blue-500 text-center pb-2">
              Add New Clothes
            </h2>
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
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel>Category </FormLabel>
                  <Select onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder={"select category"} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {["Gloves", "Sweaters", "Jackets", "Others"].map(
                        (size: string, i: number) => (
                          <SelectItem key={i} value={size}>
                            {size}
                          </SelectItem>
                        )
                      )}
                    </SelectContent>
                    <FormMessage className="font-normal -pb-4" />
                  </Select>
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
                Create
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </Container>
  );
};

export default CreateWinterClothes;
