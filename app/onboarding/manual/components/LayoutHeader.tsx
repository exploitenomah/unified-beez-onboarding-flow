import PlayIcon from "@assets/svgs/PlayIcon";
import TimesIcon from "@assets/svgs/Times";
import useToggleRoute from "@hooks/useToggleRoute";
import Button from "@components/button/Button";
import GradientBorderButton from "@components/button/GradientBorderButton";

export default function LayoutHeader() {
  const { goTo } = useToggleRoute();

  return (
    <header className="flex items-center justify-end gap-2.5 border-b border-b-gray-30 py-[2.9rem] px-6">
      <GradientBorderButton variant="border" size="sm">
        <PlayIcon className="text-primary-100 mx-1.5 my-0.5" />
        Play Tutorial
      </GradientBorderButton>
      <Button
        onClick={() => goTo("/onboarding")}
        variant="tertiary"
        color="danger"
        size="sm"
        startIcon={<TimesIcon width={12} height={12} />}
      >
        Exit
      </Button>
    </header>
  );
}
