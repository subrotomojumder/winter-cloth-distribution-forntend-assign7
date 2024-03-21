/* eslint-disable @typescript-eslint/no-explicit-any */

import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useAddTestimonialMutation } from "@/redux/features/donation/donationApi";
import { useAppSelector } from "@/redux/hooks";
import { TTestimonial, testimonialFormSchema } from "@/types/users.type";
import { zodResolver } from "@hookform/resolvers/zod";
import { SendHorizontal } from "lucide-react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

const CreateTestimonial = () => {
  const user = useAppSelector(selectCurrentUser);
  const [createTestimonial, { isLoading }] = useAddTestimonialMutation();
  const form = useForm<TTestimonial>({
    resolver: zodResolver(testimonialFormSchema),
    defaultValues: {
      image: "",
      location: "",
      testimonial: "",
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    const toastId = toast.loading("loading....");
    const testimonialData = { id: user?.id, body: values };
    try {
      await createTestimonial(testimonialData).unwrap();
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
      <div className="w-full min-h-screen flex justify-center ">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-5 w-full md:max-w-xl px-6 md:px-12"
          >
            <h2 className="text-2xl text-blue-500 text-center pb-2">
              Add Your Testimonial
            </h2>
            <FormField
              name="testimonial"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-600">Testimonial</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
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
                  <FormLabel className="text-gray-600">
                    Your Image URL
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="url"
                      placeholder="https://cdn.pixabay.com/photo/2015/rose-729509_640.jpg"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="font-normal -pb-4" />
                </FormItem>
              )}
            />
            <FormField
              name="location"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-600">Location</FormLabel>
                  <FormControl>
                    <Input placeholder="location.." {...field} />
                  </FormControl>
                  <FormMessage className="font-normal -pb-4" />
                </FormItem>
              )}
            />
            <div className="text-center pt-3">
              <Button
                type="submit"
                variant={"secondary"}
                disabled={isLoading}
                className="gap-2 w-full disabled:cursor-not-allowed"
              >
                Submit <SendHorizontal size={18} />
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </Container>
  );
};

export default CreateTestimonial;
