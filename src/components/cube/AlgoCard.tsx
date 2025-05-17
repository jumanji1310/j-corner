import Cube from "@/components/cube/AnimCube";

interface AlgoCardProps {
  title: string;
  description: string;
  moves: string;
}

export default function AlgoCard({ title, description, moves }: AlgoCardProps) {
  return (
    <div className="flex-1 rounded-lg p-4 bg-primary/20 dark:bg-dark-primary/20 border border-primary dark:border-dark-primary shadow-xl/75 shadow-secondary dark:shadow-dark-secondary">
      <h2 className="text-xl font-semibold mb-3">{title}</h2>
      <p className="mb-2">{description}</p>
      <div className="h-64 w-64 mx-auto">
        <Cube moves={moves} />
      </div>
    </div>
  );
}
