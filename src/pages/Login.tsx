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
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { TUser, setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { verifyToken } from "@/utils/verifyToken";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, "Invalid Password !"),
});
type TLoginData = z.infer<typeof loginSchema>;

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/home";
  const [register, { isLoading }] = useLoginMutation();
  const form = useForm<TLoginData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = async (values: TLoginData) => {
    const toastId = toast.loading("loading....");
    try {
      const res = await register(values).unwrap();
      const user = verifyToken(res.token) as TUser;
      dispatch(setUser({ user: user, token: res.token }));
      toast.success("Login Successful!", {
        id: toastId,
        duration: 2000,
      });
      navigate(from, { replace: true });
    } catch (error: any) {
      toast.error(error?.data?.message || "Something went wrong!", {
        id: toastId,
        duration: 2000,
      });
    }
  };
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-5 w-full md:max-w-md  md:border md:rounded-xl px-6 md:px-12 pt-5 pb-8"
        >
          <h2 className="text-2xl text-blue-500 text-center pb-2">
            Login Account
          </h2>
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
          <div className="flex justify-between">
            <Link to={"/reset-password"}>
              <Button type="button" variant={"link"} className="p-0">
                Reset Password
              </Button>
            </Link>
            <Link to={"/register"}>
              <Button type="button" variant={"link"} className="p-0">
                Create a Account
              </Button>
            </Link>
          </div>

          <div className="text-center">
            <Button className="w-full" type="submit" disabled={isLoading}>
              Login
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
export default Login;
