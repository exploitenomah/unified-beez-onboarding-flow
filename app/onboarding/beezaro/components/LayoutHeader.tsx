import TimesIcon from "@assets/svgs/Times";
import Button from "@components/button/Button";
import StepsTopBar from "./StepsTopBar";

export default function BeezaroOnboardingLayoutHeader() {
  return (
    <header className="flex items-center justify-between px-2 md:px-10.5 lg:px-11.5 py-2.5 md:py-8">
      <Button
        variant="tertiary"
        color="danger"
        size="sm"
        startIcon={<TimesIcon width={12} height={12} />}
      >
        Exit
      </Button>
      <StepsTopBar />
    </header>
  );
}
