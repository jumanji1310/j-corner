import AlgoCard from "./AlgoCard";

export default function PLL() {
  return (
    <div className="flex flex-col space-y-8 p-4">
      <h1 className="text-3xl font-bold  text-center text-accent dark:text-dark-accent">
        Permuting final layer corners (PLL Part 1)
      </h1>
      <p className="text-xl text-center">
        There is a single long algorithm to permute the final layer corners.
      </p>
      <div className="flex flex-col md:flex-row md:justify-evenly gap-6">
        <AlgoCard
          width="32vw"
          description={`Put matching corners at the back, rotate cube forward to face the bottom face\n(R' U R') D2 (R U' R') D2 R2. 
If no matching case: do the moves once first, then repeat.`}
          moves="x R' U R' D2 R U' R' D2 R2 x'"
          initMoves="R U' R U R U R U' R' U' R2"
          extraConfig="hint=6&hinthoriz=2&hintborder=1&"
        />
      </div>
      <h1 className="text-3xl font-bold  text-center text-accent dark:text-dark-accent">
        Permuting final layer edges (PLL Part 2)
      </h1>
      <p className="text-xl text-center">
        Another single long algorithm to permute the final layer edges.
      </p>
      <div className="flex flex-col md:flex-row md:justify-evenly gap-6">
        <AlgoCard
          width="32vw"
          description={`Put finished edge at the back: R U' R U R U R U' R' U' R2\n(this rotates the 3 edges anticlockwise).
If no matching case: do the moves once first, then repeat.`}
          moves="R U' R U R U R U' R' U' R2"
          extraConfig="hint=6&hinthoriz=2&hintborder=1&"
        />
      </div>
    </div>
  );
}
