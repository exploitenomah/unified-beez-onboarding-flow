"use client";
import Image from "next/image";
import { useAutoAdvance } from "@hooks/useAutoAdvance";
import ReviewCard from "@components/testimonials/Review";
import { FeatureStoriesProps } from "./types";

export default function AppFeaturesSlide({
  stories,
  interval = 3000,
}: FeatureStoriesProps) {
  const { current } = useAutoAdvance({
    length: stories.length,
    interval,
  });

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="relative z-40 w-[calc(100%-8rem)] mt-11 mx-auto flex gap-1.5">
        {stories.map((_, idx) => (
          <div
            key={idx}
            className={`grow shrink-0 h-2.25 rounded-full transition-bg duration-700 ${
              idx === current ? "bg-white" : "bg-[#fab40333]"
            }`}
          />
        ))}
      </div>
      <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,#053D27_0%,#FAB403_100%)]" />
      <div className="absolute inset-0 z-20 opacity-20 bg-[url(https://zqkrxgdm4ftxn2kt.public.blob.vercel-storage.com/auth-layout-bg-pattern-1.png)]" />
      <div className="absolute inset-0 z-30 bg-size-[50%] bg-[url(https://zqkrxgdm4ftxn2kt.public.blob.vercel-storage.com/auth-layout-bg-pattern-2.png)]" />
      <div className="relative z-50 mt-18 w-[calc(100%-8rem)] mx-auto">
        {stories.map((story, idx) => (
          <div
            key={story.id}
            className={`w-full absolute transition-opacity duration-700 ${
              idx === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="h-[calc(100dvh-14.6rem)] w-full flex flex-col">
              <h3 className="text-2xl xl:text-4xl font-bold text-white mb-6">
                {story.title}
              </h3>
              <p className="text-white text-base font-bold leading-base mb-auto">
                {story.description}
              </p>
              <Image
                src={story.image}
                alt={story.title}
                width={550}
                height={550}
                className="w-[88%] opacity-[.14] h-auto object-contain block absolute -mt-[55px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />
              <ReviewCard
                review={story.testimonial.review}
                name={story.testimonial.name}
                info={
                  story.testimonial.role && story.testimonial.company
                    ? `${story.testimonial.role}, ${story.testimonial.company}`
                    : undefined
                }
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
