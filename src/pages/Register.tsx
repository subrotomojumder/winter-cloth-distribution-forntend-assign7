/* eslint-disable @typescript-eslint/no-explicit-any */
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "@/redux/features/auth/authApi";
import { toast } from "sonner";

const loginSchema = z.object({
  name: z.string().min(1, "Name is Required!"),
  email: z.string().email(),
  password: z.string().min(6, "Invalid Password !"),
});
type TRegisterData = z.infer<typeof loginSchema>;

const Register = () => {
  const navigate = useNavigate();
  const [register, {isLoading}] = useRegisterMutation();
  const form = useForm<TRegisterData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const onSubmit = async (values: TRegisterData) => {
    const toastId = toast.loading("loading....");
    try {
      await register(values).unwrap();
      toast.success("Registration Successful!", {
        id: toastId,
        duration: 2000,
      });
      navigate(`/login`);
    } catch (error: any) {
      toast.error(error?.data.message || "Something went wrong!", {
        id: toastId,
        duration: 2000,
      });
    }
  };
  return (
    <div className="w-full min-h-screen flex justify-center items-center py-8">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-5 w-full md:max-w-md md:border md:rounded-xl px-6 md:px-12 pt-5 pb-8"
        >
          <h2 className="text-2xl text-blue-500 text-center pb-2">
            Create a Account
          </h2>
          <FormField
            name="name"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-600">Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your name" {...field} />
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
                  <Input placeholder="Enter your email" {...field} />
                </FormControl>
                <FormMessage className="font-normal -pb-4" />
              </FormItem>
            )}
          />
          <FormField
            name="password"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-600">Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your password"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="font-normal" />
              </FormItem>
            )}
          />
          <div className="flex justify-start items-center space-x-1">
            <span className="font-normal text-gray-600">
              Already have an account
            </span>
            <Link to={"/login"}>
              <Button type="button" variant={"link"} className="p-0">
                Login
              </Button>
            </Link>
          </div>

          <div className="text-center">
            <Button className="w-full" type="submit" disabled={isLoading}>
              Register
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
export default Register;
