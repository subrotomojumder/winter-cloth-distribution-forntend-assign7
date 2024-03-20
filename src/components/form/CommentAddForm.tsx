"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { SendHorizontal } from "lucide-react";
import { useAddCommentsMutation } from "@/redux/features/donation/donationApi";
import { useAppSelector } from "@/redux/hooks";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";

const FormSchema = z.object({
  comment: z.string().min(10, {
    message: "comment must be at least 10 characters.",
  }),
});

export function CommentAddForm() {
  const user = useAppSelector(selectCurrentUser);
  const [addComment, { isLoading }] = useAddCommentsMutation();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      comment: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    addComment({ id: user?.id, body: data });
    form.reset();
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full md:w-2/3 space-y-4">
        <FormField
          control={form.control}
          name="comment"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xl lg:text-2xl font-thin dark:text-black mb-1">
                Add your comment or appreciation :
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us a little bit about our service"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="">
          <Button
            disabled={isLoading}
            type="submit"
            variant={"secondary"}
            className="gap-2"
          >
            Submit <SendHorizontal size={18} />
          </Button>
        </div>
      </form>
    </Form>
  );
}
