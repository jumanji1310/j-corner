import OLL, {OLL2} from "@/components/cube/OllSection";
import PLL from "@/components/cube/PllSection";
import F2L from "@/components/cube/F2LSection";

const CubingCornerPage = () => {
  return (
    <div className="p-5 bg-background dark:bg-dark-background text-text dark:text-dark-text flex flex-col space-y-8 p-4">
            <F2L/>
            <OLL />
            <OLL2 />
            <PLL />
    </div>
  );
};

export default CubingCornerPage;
