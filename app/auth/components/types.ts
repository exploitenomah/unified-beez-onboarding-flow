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
