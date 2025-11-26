import CheckMark from "@assets/svgs/CheckMark";
import MoreHorizontal from "@assets/svgs/MoreHorizontal";
import SectionHeading from "@components/headings/SectionHeading";
import Button from "@components/button/Button";
import TextButton from "@components/button/TextButton";
import IconItem from "@components/list/IconItem";
import { getCurrencySymbol } from "@app/utils/currency";
import { PlanCardProps } from "./types";
import PlanIcon from "./PlanIcon";
import { PLAN_ICONS } from "./constants";

export default function PlanCard({
  plan,
  isOwnPlan,
  className,
}: PlanCardProps) {
  const planTitle = isOwnPlan ? "Your Plan" : plan.title;
  return (
    <div
      className={`w-full rounded-lg border border-gray-30 bg-gradient-yellow-1 flex flex-col md:flex-row justify-start md:justify-between gap-6 shadow-sm p-4 ${className}`}
    >
      <div className="flex flex-col justify-between items-start gap-6">
        <div className="flex flex-col gap-2">
          <PlanIcon icon={PLAN_ICONS[plan.id as keyof typeof PLAN_ICONS]} />
          <div className="flex flex-wrap items-center gap-2 mt-2">
            <SectionHeading as="h4">Business Plan</SectionHeading>
            <span className="px-1.5 py-0.5 text-xs font-bold border rounded-full bg-primary-100/5 text-primary-100 border-primary-100">
              {planTitle}
            </span>
          </div>
          <p className="text-base-100 text-md leading-base">
            {plan.features.highlight}&nbsp;
            <TextButton className="text-primary-100 font-bold">
              Compare plans
            </TextButton>
          </p>
        </div>
        <div>
          <Button
            variant="secondary"
            className="bg-white text-[1rem] font-bold leading-base py-1.5 px-2.25 mt-auto mb-2"
          >
            Add-ons
          </Button>
          <div className="flex flex-wrap gap-2 text-sm text-gray-700">
            {plan.addons.map((addon) => (
              <IconItem
                key={addon.id}
                icon={
                  <span className="bg-fresh-green w-3 h-3 flex justify-center items-center rounded-full">
                    <CheckMark className="text-white" />
                  </span>
                }
                text={`${addon.quantity} ${addon.name}`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between items-end gap-6">
        <div className="text-right flex items-baseline">
          <p className="text-3xl font-semibold text-primary-100">
            {getCurrencySymbol(plan.pricing.currency)}
            {plan.pricing.amount}
          </p>
          <p className="text-dark-base-70 font-bold text-base leading-base -mt-2">
            /per month
          </p>
        </div>

        <div className="flex items-stretch gap-4">
          <Button
            variant="primary"
            className="px-4 py-2 shadow-none bg-primary-100 hover:bg-white"
          >
            Upgrade Plan
          </Button>
          <Button variant="secondary" className="p-2">
            <MoreHorizontal className="text-gray-35" />
          </Button>
        </div>
      </div>
    </div>
  );
}
