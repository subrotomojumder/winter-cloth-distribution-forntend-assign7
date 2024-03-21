/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from "@/components/Container";
import ErrorComponent from "@/components/ui/ErrorComponent";
import { LoadingPoints } from "@/components/ui/Loaders";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  useCreateVolunteerMutation,
  useGetSingleUserQuery,
} from "@/redux/features/auth/authApi";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { TVolunteer, volunteerFormSchema } from "@/types/users.type";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const VolunteerCreate = () => {
  const navigate = useNavigate();
  const user = useAppSelector(selectCurrentUser);
  const {
    data: preUserData,
    isLoading,
    isError,
    error,
  } = useGetSingleUserQuery(user?.id, {
    skip: !user?.id,
  });
  const [createVolunteer, { isLoading: createLoading }] =
    useCreateVolunteerMutation();

  const form = useForm<TVolunteer>({
    resolver: zodResolver(volunteerFormSchema),
  });
  const onSubmit = async (values: TVolunteer) => {
    const toastId = toast.loading("loading....");
    const volunteerData = { id: preUserData?.data?._id, body: values };
    try {
      await createVolunteer(volunteerData).unwrap();
      toast.success("Request send Successful!", {
        id: toastId,
        duration: 2000,
      });
      navigate("/about-us");
    } catch (error: any) {
      toast.error(error?.data?.message || "Something went wrong!", {
        id: toastId,
        duration: 2000,
      });
    }
  };
  useEffect(() => {
    if (preUserData?.data) {
      form.reset({
        name: preUserData?.data?.name || "",
        email: preUserData?.data?.email || "",
        phone: preUserData?.data?.phone || "",
        image: preUserData?.data?.image || "",
        location: preUserData?.data?.location || "",
      });
    }
  }, [preUserData]);
  return (
    <div className="py-[60px] lg:py-[70px] min-h-screen">
      <div
        className="w-full min-h-52 text-white text-center space-y-1 md:space-y-2 py-12 lg:py-14 px-5"
        style={{
          background: `linear-gradient(90deg, rgba(32, 5, 19, 0.75), rgba(32, 5, 19, 0.75)), url(https://images.squarespace-cdn.com/content/v1/58c88532d2b85703a206095e/1604259198035-71D361CCJ69YUWMCGUGT/_DSC7930+%281%29.jpg)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPositionY: "center",
        }}
      >
        <h2 className="text-3xl lg:text-4xl text-yellow-500 font-bold font-serif">
          Serve the Humanity
        </h2>
        <h1 className="text-xl lg:text-3xl font-semibold font-mono">
          Sign up for volunteer program
        </h1>
        <p className="font-thin max-w-[50ch] mx-auto">
          Transform lives with your donation. Join us in creating change. Every
          contribution matters.
        </p>
      </div>
      <Container className="flex justify-center">
        {isLoading ? (
          <LoadingPoints />
        ) : isError ? (
          <ErrorComponent error={error} />
        ) : (
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full md:max-w-5xl px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8"
            >
              <div className="col-span-2">
                <h2 className="text-2xl text-blue-500 text-center pb-2 uppercase">
                  Sign up for volunteer opportunities
                </h2>
                <p className="font-thin mx-auto text-center mb-4">
                  Transform lives with your donation. Join us in creating
                  change. Every contribution matters.
                </p>
                <hr />
              </div>
              <FormField
                name="name"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-600">Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" {...field} />
                    </FormControl>
                    <FormMessage className="font-normal -pb-4" />
                  </FormItem>
                )}
              />
              <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-600">Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your email"
                        {...field}
                        readOnly
                        className="cursor-not-allowed"
                      />
                    </FormControl>
                    <FormMessage className="font-normal -pb-4" />
                  </FormItem>
                )}
              />
              <FormField
                name="phone"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-600">Contact No.</FormLabel>
                    <FormControl>
                      <Input placeholder="Your phone number" {...field} />
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
                      <Input placeholder="your address.." {...field} />
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
                control={form.control}
                name="job"
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel>Are you jobholder? </FormLabel>
                    <Select onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder={"select answer"} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {["Yes", "No", "Others"].map(
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
                name="bio"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormLabel className="text-gray-600">Bio</FormLabel>
                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>
                    <FormMessage className="font-normal -pb-4" />
                  </FormItem>
                )}
              />
              <Button
                disabled={createLoading}
                type="submit"
                variant={"destructive"}
                className="col-span-2"
              >
                Request Send
              </Button>
            </form>
          </Form>
        )}
      </Container>
    </div>
  );
};

export default VolunteerCreate;
