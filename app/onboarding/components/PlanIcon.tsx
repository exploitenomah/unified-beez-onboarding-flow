import DoubleCirclePattern from "@assets/svgs/DoubleCirclePattern";

export default function PlanIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <div className="relative w-14 h-14 rounded-xl bg-dark-base-100 flex items-center justify-center">
      <span className="flex justify-center items-center absolute z-10 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
        <DoubleCirclePattern />
      </span>
      <span className="blocktext-white w-8 h-8 relative z-20">{icon}</span>
    </div>
  );
}
