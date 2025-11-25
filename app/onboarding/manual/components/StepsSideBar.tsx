import LogoHeader from "./LogoHeader";
import SideStep from "./SideStep";

export default function StepsSideBar({}: { show: boolean }) {
  return (
    <div className="h-full">
      <LogoHeader />
      <div className="h-[88dvh] overflow-auto">
        <div className="bg-gradient-yellow-1 md:bg-none divide-y-[0.05rem] divide-gray-35/50 border-b-gray-35/50 border-b-[0.05rem] rounded-b-2xl overflow-hidden">
          <SideStep
            name={""}
            displayName={"Account Summary & Plan"}
            stepNumber={1}
            subSteps={[
              {
                name: "Account Summary & Plan",
                isComplete: true,
                displayName: "Account Summary & Plan",
              },
            ]}
          />
          <SideStep
            name={""}
            displayName={"User Type Detection & Info"}
            stepNumber={2}
            subSteps={[
              {
                name: "Business Name",
                isComplete: !false,
                displayName: "Business Name",
              },
              {
                name: "What industry is your business based?",
                isComplete: false,
                displayName: "What industry is your business based?",
              },
              {
                name: "What are the objectives of your business",
                isComplete: false,
                displayName: "What are the objectives of your business",
              },
            ]}
          />
          <SideStep
            name={""}
            displayName={"User Type Detection & Info"}
            stepNumber={3}
            subSteps={[
              {
                name: "Business Name",
                isComplete: !false,
                displayName: "Business Name",
              },
              {
                name: "What industry is your business based?",
                isComplete: false,
                displayName: "What industry is your business based?",
              },
              {
                name: "What are the objectives of your business",
                isComplete: false,
                displayName: "What are the objectives of your business",
              },
            ]}
          />
          <SideStep
            name={""}
            displayName={"User Type Detection & Info"}
            stepNumber={4}
            subSteps={[
              {
                name: "Business Name",
                isComplete: !false,
                displayName: "Business Name",
              },
              {
                name: "What industry is your business based?",
                isComplete: false,
                displayName: "What industry is your business based?",
              },
              {
                name: "What are the objectives of your business",
                isComplete: false,
                displayName: "What are the objectives of your business",
              },
            ]}
          />
          <SideStep
            name={""}
            displayName={"User Type Detection & Info"}
            stepNumber={5}
            subSteps={[
              {
                name: "Business Name",
                isComplete: !false,
                displayName: "Business Name",
              },
              {
                name: "What industry is your business based?",
                isComplete: false,
                displayName: "What industry is your business based?",
              },
              {
                name: "What are the objectives of your business",
                isComplete: false,
                displayName: "What are the objectives of your business",
              },
            ]}
          />
          <SideStep
            name={""}
            displayName={"User Type Detection & Info"}
            stepNumber={6}
            subSteps={[
              {
                name: "Business Name",
                isComplete: !false,
                displayName: "Business Name",
              },
              {
                name: "What industry is your business based?",
                isComplete: false,
                displayName: "What industry is your business based?",
              },
              {
                name: "What are the objectives of your business",
                isComplete: false,
                displayName: "What are the objectives of your business",
              },
            ]}
          />
          <SideStep
            name={""}
            displayName={"User Type Detection & Info"}
            stepNumber={7}
            subSteps={[
              {
                name: "Business Name",
                isComplete: !false,
                displayName: "Business Name",
              },
              {
                name: "What industry is your business based?",
                isComplete: false,
                displayName: "What industry is your business based?",
              },
              {
                name: "What are the objectives of your business",
                isComplete: false,
                displayName: "What are the objectives of your business",
              },
            ]}
          />
          <SideStep
            name={""}
            displayName={"User Type Detection & Info"}
            stepNumber={8}
            subSteps={[
              {
                name: "Business Name",
                isComplete: !false,
                displayName: "Business Name",
              },
              {
                name: "What industry is your business based?",
                isComplete: false,
                displayName: "What industry is your business based?",
              },
              {
                name: "What are the objectives of your business",
                isComplete: false,
                displayName: "What are the objectives of your business",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
