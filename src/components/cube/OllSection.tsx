import Cube from "@/components/cube/AnimCube";
import AlgoCard from "./AlgoCard";

export default function OLL() {
  return (
    <div className="flex flex-col space-y-8 p-4">
      <h1 className="text-2xl font-bold">OLL Part 1 Algorithms</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <AlgoCard
          title="L Shape"
          description="Put in bottom right, algorithm: f (R U R' U') f'"
          moves="f R U R' U' f'"
        />
        <AlgoCard
          title="Line"
          description="Horizontally aligned, algorithm: F (R U R' U') F'"
          moves="F R U R' U' F'"
        />
        <AlgoCard
          title="Dot"
          description="Algorithm: F (R U R' U') F' followed by f (R U R' U') f'"
          moves="F R U R' U' F' f R U R' U' f'"
        />
      </div>
      <h1 className="text-2xl font-bold">OLL Part 2 Algorithms</h1>
    </div>
  );
}
