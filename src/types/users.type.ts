import { z } from "zod";

export type TUser = {
  _id?: string;
  name: string;
  email: string;
  password?: string;
  donation?: number;
  image?: string;
  location?: string;
  testimonial?: string;
};

export const testimonialFormSchema = z.object({
  image: z.string().url({ message: "Provide a valid url !" }).optional(),
  location: z.string().min(3, "Your location is required!"),
  testimonial: z.string({ required_error: "Testimonial is required!" }).min(10),
});
export type TTestimonial = z.infer<typeof testimonialFormSchema>;

export const volunteerFormSchema = z.object({
  name: z.string().min(1, "Name is required!"),
  email: z.string().email(),
  phone: z.string().min(7, "Name is 7 characters required!"),
  image: z.string().url({ message: "Provide a valid url !" }),
  location: z.string().min(3, "Your location is required!"),
  bio: z.string().max(100),
  job: z.string().optional(),
});

export type TVolunteer = z.infer<typeof volunteerFormSchema>;
