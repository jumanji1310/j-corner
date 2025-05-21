import AlgoCard from "./AlgoCard";

export default function OLL() {
  return (
    <div className="flex flex-col space-y-8 p-4">
      <h1 className="text-3xl font-bold text-center text-accent dark:text-dark-accent">
        Orientating final layer edges (OLL Part 1)
      </h1>
      <p className="text-xl text-center">
        Algorithms to solve the final layer cross. There are 3 cases to learn.
      </p>
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
      <h1 className="text-3xl font-bold text-center text-accent dark:text-dark-accent">
        Orientating final layer corners (OLL Part 2)
      </h1>
      <p className="text-xl text-center">
        Algorithms to complete the final layer face. There are 7 cases to learn.
      </p>
      {/* First row of 3 cards */}
      <div className="flex flex-col md:flex-row md:justify-evenly gap-6">
        <AlgoCard
          title="Left fish"
          description="Corner bottom left with one yellow facing you"
          moves="R U R' U R U2 R'"
          initMoves="R' F  R' B2 R F' R' B2 R2"
          extraConfig="hint=6&hinthoriz=2&hintborder=1&"
        />
        <AlgoCard
          title="Right fish"
          description="Corner bottom right with one yellow facing you"
          moves="L' U' L U' L' U2 L"
          initMoves="R' F  R' B2 R F' R' B2 R2"
          extraConfig="hint=6&hinthoriz=2&hintborder=1&"
        />
        <AlgoCard
          title="H case"
          description="Either pair of corners facing you"
          moves="R U2 R' U' R U R' U' R U' R'"
          initMoves="R' F  R' B2 R F' R' B2 R2"
          extraConfig="hint=6&hinthoriz=2&hintborder=1&"
        />
      </div>

      {/* Second row of 3 cards */}
      <div className="flex flex-col md:flex-row md:justify-evenly gap-6">
        <AlgoCard
          title="Car"
          description="Headlights facing left, Wheels on right"
          moves="f R U R' U' f' F R U R' U' F'"
          initMoves="R' F  R' B2 R F' R' B2 R2"
          extraConfig="hint=6&hinthoriz=2&hintborder=1&"
        />
        <AlgoCard
          title="Wheels"
          description="Wheels on left"
          moves="r U R' U' r' F R F'"
          initMoves="R' F  R' B2 R F' R' B2 R2"
          extraConfig="hint=6&hinthoriz=2&hintborder=1&"
        />
        <AlgoCard
          title="Bowtie"
          description="Remaining corners facing bottom and left"
          moves="F' r U R' U' r' F R"
          initMoves="R' F  R' B2 R F' R' B2 R2"
          extraConfig="hint=6&hinthoriz=2&hintborder=1&"
        />
      </div>

      {/* Third row with single card */}
      <div className="flex flex-col md:flex-row md:justify-evenly gap-6">
        <AlgoCard
          title="Headlights"
          description="Headlights facing you"
          moves="R2 D R' U2 R D' R' U2 R'"
          initMoves="R' F  R' B2 R F' R' B2 R2"
          extraConfig="hint=6&hinthoriz=2&hintborder=1&"
        />
      </div>
    </div>
  );
}
