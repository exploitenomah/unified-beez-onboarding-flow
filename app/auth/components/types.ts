import z from "zod";
import { passwordChangeSchema } from "./schemas";

export interface FeatureStory {
  id: string;
  title: string;
  description: string;
  image: string;
  testimonial: {
    name: string;
    review: string;
    company?: string;
    role?: string;
    avatar: string;
  };
}

export interface FeatureStoriesProps {
  stories: FeatureStory[];
  interval?: number;
}

export interface OrDividerProps {
  text?: string;
  className?: string;
  lineColor?: string;
  textColor?: string;
}

export type PasswordChangeSchema = z.infer<typeof passwordChangeSchema>;
export interface PasswordFormProps {
  onSubmit: (formData: PasswordChangeSchema) => void;
}
