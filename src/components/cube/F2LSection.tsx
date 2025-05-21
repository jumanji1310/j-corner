import AlgoCard from "./AlgoCard";

export default function F2L() {
  return (
    <div className="flex flex-col space-y-8 p-4">
      <h1 className="text-3xl font-bold text-center text-accent dark:text-dark-accent">
        Solving the Cross (PLL Part 1)
      </h1>
      <div className="flex flex-row justify-center">
        <p className="text-xl text-left w-[40vw] ">
          The first step is to solve the cross on the bottom face. This means
          lining up the all the edge pieces with the center pieces of the same
          color on both the bottom face and the sides.
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:justify-evenly gap-6">
        <AlgoCard
          width="32vw"
          description="The cross is solved intuitively"
          initMoves="R U R' y R U R' y R U R' y R U R' y x2"
          extraConfig="hint=6&hinthoriz=2&hintborder=1&"
        />
      </div>
      <h1 className="text-3xl font-bold text-center text-accent dark:text-dark-accent">
        Solving first two layers (F2L)
      </h1>
      <div className="flex flex-row justify-center">
        <p className="text-xl text-left w-[40vw] ">
          Goal is to get both the edge and the corners in the U layer. If edge
          or corner is not on top layer, turn face to get it to top layer, clear
          it of the undo turn using U turns and undo the turn after. If there is
          perfect pair already, solve like a corner. Otherwise, do a turn that
          breaks it apart, turn U until it's unaffected by the undo of the
          original turn. Then undo the turn.
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:justify-evenly gap-6">
        <AlgoCard
          width="28vw"
          title="White on top"
          description={`1. Match edge with face\n2. Turn that face away\n3. Rotate U face until the corner and edge match\n4. Undo the turn in step 2`}
          moves="U2 R U R' U R U' R'"
          initMoves="R U R' U R U2 R'"
          extraConfig="hint=6&hinthoriz=2&hintborder=1&"
        />

        <AlgoCard
          width="28vw"
          title="White on side, matching colours on top"
          description={`1. Start by putting corner in then column between both faces\n2. Turn U layer once so that u can still see the white on the corner\n3. Turn the face that the white is on away\n4. Rotate U face until the edge is on the FAR parallel next to the corner\n5. Undo the turn in step 3\n6. Solve the perfect pair like a corner`}
          moves="U' R U2 R' U U R U' R'"
          initMoves="R U R' U R U2 R'"
          extraConfig="hint=6&hinthoriz=2&hintborder=1&"
        />
        <AlgoCard
          width="28vw"
          title="White on side, different colours on top"
          description={`1. Start by putting corner in then column between both faces\n2. Turn U layer once so that u can still see the white on the corner\n3. Turn the face that the white is on away\n4. Rotate U face until the edge is on the CLOSE parallel next to the corner\n5. Undo the turn in step 3\n6. Move corner to the column between both faces\n7. Turn the face the white is on away\n8. Turn the U face to slot the pair into the right spot\n9. Undo step 7 to finish`}
          moves="U F' U F U' R U R'"
          initMoves="R U R' U R U2 R'"
          extraConfig="hint=6&hinthoriz=2&hintborder=1&"
        />
      </div>
    </div>
  );
}
