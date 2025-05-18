import AlgoCard from "./AlgoCard";

export default function OLL() {
  return (
    <div className="flex flex-col space-y-8 p-4">
      <h1 className="text-2xl font-bold">OLL Part 1 Algorithms</h1>
      <div className="flex flex-col md:flex-row md:justify-evenly gap-6">
        <AlgoCard
          title="L Shape"
          description="Put in bottom right, algorithm: f (R U R' U') f'"
          moves="f R U R' U' f'"
          initMoves="R U2 R' U' R U R' U' R U' R'"
        />
        <AlgoCard
          title="Line"
          description="Horizontally aligned, algorithm: F (R U R' U') F'"
          moves="F R U R' U' F'"
          initMoves="R U2 R' U' R U R' U' R U' R'"
        />
        <AlgoCard
          title="Dot"
          description="Algorithm: F (R U R' U') F' followed by f (R U R' U') f'"
          moves="F R U R' U' F' f R U R' U' f'"
          initMoves="R U2 R' U' R U R' U' R U' R'"
        />
      </div>
    </div>
  );
}

export function OLL2() {
  return (
    <div className="flex flex-col space-y-8 p-4">
      <h1 className="text-2xl font-bold">OLL Part 2 Algorithms</h1>

      {/* First row of 3 cards */}
      <div className="flex flex-col md:flex-row md:justify-evenly gap-6">
        <AlgoCard
          title="Left fish"
          description="Bottom left with one yellow facing you"
          moves="R U R' U R U2 R'"
          initMoves="R' F  R' B2 R F' R' B2 R2"
        />
        <AlgoCard
          title="Right fish"
          description="Bottom right with one yellow facing you"
          moves="L' U' L U' L' U2 L"
          initMoves="R' F  R' B2 R F' R' B2 R2"
        />
        <AlgoCard
          title="H case"
          description="Facing you"
          moves="R U2 R' U' R U R' U' R U' R'"
          initMoves="R' F  R' B2 R F' R' B2 R2"
        />
      </div>

      {/* Second row of 3 cards */}
      <div className="flex flex-col md:flex-row md:justify-evenly gap-6">
        <AlgoCard
          title="Car"
          description="Wheels facing left"
          moves="f R U R' U' f' F R U R' U' F'"
          initMoves="R' F  R' B2 R F' R' B2 R2"
        />
        <AlgoCard
          title="Wheels"
          description="On left"
          moves="r U R' U' r' F R F'"
          initMoves="R' F  R' B2 R F' R' B2 R2"
        />
        <AlgoCard
          title="Bowtie"
          description="Bottom and left"
          moves="F' r U R' U' r' F R"
          initMoves="R' F  R' B2 R F' R' B2 R2"
        />
      </div>

      {/* Third row with single card */}
      <div className="flex flex-col md:flex-row md:justify-evenly gap-6">
        <AlgoCard
          title="Headlights"
          description="Facing you"
          moves="R2 D R' U2 R D' R' U2 R'"
          initMoves="R' F  R' B2 R F' R' B2 R2"
        />
      </div>
    </div>
  );
}
