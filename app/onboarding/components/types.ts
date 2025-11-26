import { Plan } from "@app/types";

export interface PlanCardProps {
  plan: Plan;
  className?: string;
  isOwnPlan?: boolean;
}
