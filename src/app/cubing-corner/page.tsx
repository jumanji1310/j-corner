import OLL, {OLL2} from "@/components/cube/OllSection";
/* eslint-disable react/no-unescaped-entities */
const CubingCornerPage = () => {
  return (
    <div className="p-5 bg-background dark:bg-dark-background text-text dark:text-dark-text">
            <OLL />
            <OLL2 />
      <h1>How to Solve a Rubik's Cube</h1>
      <p>
        Welcome to the Cubing Corner! Follow this step-by-step guide to solve a
        3x3 Rubik's Cube.
      </p>

      <h2>Step 1: Solve the White Cross</h2>
      <p>
        Start by solving the white cross on one face of the cube. Align the edge
        pieces with the center pieces of the same color.
      </p>

      <h2>Step 2: Solve the White Corners</h2>
      <p>
        Place the white corner pieces in their correct positions to complete the
        white face. Use algorithms like R U R' U'.
      </p>

      <h2>Step 3: Solve the Middle Layer</h2>
      <p>
        Align the edge pieces of the middle layer by using algorithms such as U
        R U' R' U' F' U F.
      </p>

      <h2>Step 4: Solve the Yellow Cross</h2>
      <p>
        Form a yellow cross on the top face. Use the F R U R' U' F' algorithm to
        achieve this.
      </p>

      <h2>Step 5: Position the Yellow Corners</h2>
      <p>
        Place the yellow corners in their correct positions. Use the algorithm U
        R U' L' U R' U' L.
      </p>

      <h2>Step 6: Orient the Yellow Corners</h2>
      <p>
        Rotate the yellow corners to match the yellow face. Use the algorithm R'
        D' R D repeatedly.
      </p>

      <h2>Step 7: Solve the Final Layer</h2>
      <p>
        Align the remaining edge pieces to complete the cube. Use algorithms
        like F2 U L R' F2 L' R U F2.
      </p>

      <p>Congratulations! You've solved the Rubik's Cube!</p>
    </div>
  );
};

export default CubingCornerPage;
