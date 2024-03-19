/* eslint-disable @typescript-eslint/no-explicit-any */
import { TUser, selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { TClothe } from "@/types/clothes.type";
import { LoadingPoints } from "./Loaders";
import ErrorComponent from "./ErrorComponent";
import { useGetSingleUserQuery } from "@/redux/features/auth/authApi";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./form";
import { Button } from "./button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";
import { useCreateDonationMutation } from "@/redux/features/donation/donationApi";
import { toast } from "sonner";
const FormSchema = z.object({
  size: z.string().optional(),
});
const DonationConfirmationForm = ({
  clothe,
}: {
  clothe: TClothe & { _id: string };
}) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  const { id } = useAppSelector(selectCurrentUser) as TUser;
  const { data, isLoading, isError } = useGetSingleUserQuery(id);
  const [createDonation, { isLoading: createLoading }] =
    useCreateDonationMutation();
  const navigate = useNavigate();

  const onSubmit = async () => {
    try {
      await createDonation({
        clotheId: clothe._id,
        clotheTitle: clothe.title,
        userId: id,
      }).unwrap();
      navigate("/dashboard");
    } catch (error: any) {
      toast.error(error?.data?.message || "Something went wrong!", {
        duration: 1000,
      });
    }
  };

  if (isLoading) {
    return <LoadingPoints className="max-h-[200px]" />;
  }
  if (isError) {
    return <ErrorComponent className="max-h-[200px]" />;
  }
  const { name, email } = data.data;

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-5 mt-2"
        >
          <div className="font-semibold text-gray-600 grid grid-cols-3">
            <span>Clothe:</span>
            <p className="col-span-2">{clothe.title}</p>
          </div>
          {clothe.size ? (
            clothe.size.length > 0 && (
              <FormField
                control={form.control}
                name="size"
                render={({ field }) => (
                  <FormItem className="grid grid-cols-3 items-center gap-1">
                    <FormLabel>Size: </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue
                            placeholder={clothe.size && clothe.size[0]}
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {clothe.size &&
                          clothe.size.map((size: string, i: number) => (
                            <SelectItem key={i} value={size}>
                              {size}
                            </SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
            )
          ) : (
            <></>
          )}
          <div className="font-semibold text-gray-700 grid grid-cols-3">
            <span>Donor:</span>
            <p className="col-span-2">{name}</p>
          </div>
          <div className="font-semibold text-gray-700 grid grid-cols-3">
            <span>Email:</span>
            <p className="col-span-2">{email}</p>
          </div>
          <div className="text-center">
            <Button type="submit" disabled={createLoading}>
              Confirm Donation
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default DonationConfirmationForm;
