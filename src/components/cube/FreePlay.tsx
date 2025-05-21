import { AnimCube } from "./AnimCube";
import { useTheme } from "next-themes";
/* eslint-disable react/no-unescaped-entities */

export default function FreePlay() {
  // Base config strings for different themes
  const lightConfig =
    "bgcolor=0a1e30&slidercolor=dfe9f1&butbgcolor=135594&troughcolor=135594&";
  const darkConfig =
    "bgcolor=fee9f4&slidercolor=0e0d0d&butbgcolor=fea6d5&troughcolor=fea6d5&";

  // Use the theme hook instead of direct localStorage access
  const { theme } = useTheme();

  // Select config based on theme
  const config = `${
    theme === "dark" ? darkConfig : lightConfig
  }buttonheight=25&gabbacolors=1&colorscheme=yw3201`;

  return (
    <div className="flex flex-col space-y-8 h-full">
      <h1 className="text-3xl font-bold text-center text-accent dark:text-dark-accent">
        Free Play Rubik's Cube
      </h1>
      <div className="flex flex-row justify-center">
        <p className="text-xl text-left w-[30vw] ">
          This is a free play Rubik's Cube simulator. You can rotate the cube
          by dragging it with your mouse on the outside. To turn a face, simply hold and drag a face. The button on the bottom left resets it.
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:justify-evenly gap-6">
        <div className="h-[55vh] w-[30vw] mx-auto">
          <AnimCube config={config} />
        </div>
      </div>
    </div>
  );
}
