import Cube from "@/components/cube/AnimCube";

interface AlgoCardProps {
  title?: string;
  description?: string;
  moves?: string;
  initMoves?: string;
  extraConfig?: string;
  customConfig?: string;
  width?: string;
  height?: string;
}

export default function AlgoCard({
  title,
  description = "",
  moves,
  initMoves,
  extraConfig,
  customConfig,
  width = "",
  height = "",
}: AlgoCardProps) {
  return (
    <div
      style={{ width: width, height: height }}
      className={`flex flex-col justify-between rounded-lg p-4 bg-primary/20 dark:bg-dark-primary/20 border border-primary dark:border-dark-primary shadow-xl/75 shadow-secondary dark:shadow-dark-secondary`}
    >
      <div>
        <h2 className="text-xl font-semibold mb-3">{title}</h2>
        <p className="mb-2 whitespace-break-spaces">{description}</p>
      </div>
      <div className="h-80 w-[26vw] mx-auto">
        <Cube
          moves={moves}
          initMoves={initMoves}
          extraConfig={extraConfig}
          customConfig={customConfig}
        />
      </div>
    </div>
  );
}
