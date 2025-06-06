/* eslint-disable react/no-unescaped-entities */

export default function Basics() {
  return (
    <div className="flex flex-col space-y-8 p-4">
      <h1 className="text-3xl font-bold text-center text-accent dark:text-dark-accent">
        The Basic terminology
      </h1>
      <h2 className="text-2xl font-bold text-center text-accent dark:text-dark-accent">
        Face turns
      </h2>
      <div className="flex flex-row justify-center">
        <p className="text-xl text-left w-[40vw] ">
          U - upper, R - right, L - left, F - front, D - down, B - back. Each
          move is done by turning that side clockwise 90 degrees while facing
          that side.
        </p>
      </div>
      <div className="flex flex-row justify-center">
        <img src="cube/turns.jpg" className="w-[40vw]" />
      </div>
      <div className="flex flex-row justify-center">
        <p className="text-xl text-left w-[40vw] ">
          A letter with a prime (') means to turn that side counterclockwise 90
          degrees.
        </p>
      </div>
      <div className="flex flex-row justify-center">
        <img src="cube/turns2.jpg" className="w-[40vw]" />
      </div>
      <div className="flex flex-row justify-center">
        <p className="text-xl text-left w-[40vw] ">
          A letter with a 2 means to turn that side 180 degrees or face 90
          degrees twice.
        </p>
      </div>
      <div className="flex flex-row justify-center">
        <img src="cube/turns3.jpg" className="w-[40vw]" />
      </div>
      <h2 className="text-2xl font-bold text-center text-accent dark:text-dark-accent">
        Wide turns
      </h2>
      <div className="flex flex-row justify-center">
        <p className="text-xl text-left w-[40vw] ">
          Wide moves are denoted by a lower case letter. They turn 2 layers at
          once.
        </p>
      </div>
      <div className="flex flex-row justify-center">
        <img src="cube/turns4.jpg" className="w-[40vw]" />
      </div>
      <h2 className="text-2xl font-bold text-center text-accent dark:text-dark-accent">
        Cube rotations
      </h2>
      <div className="flex flex-row justify-center">
        <p className="text-xl text-left w-[40vw] ">
          Entire cube rotations are written as x, y and z.
        </p>
      </div>
      <div className="flex flex-row justify-center">
        <img src="cube/turns5.jpg" className="w-[25vw]" />
      </div>
      <h2 className="text-2xl font-bold text-center text-accent dark:text-dark-accent">
        Slice moves
      </h2>
      <div className="flex flex-row justify-center">
        <p className="text-xl text-left w-[40vw] ">
          Slice moves are written as M, E and S and turn the middle layer of the
          cube. M follows the L direction, E follows the D direction, S follows
          the F direction.
        </p>
      </div>
      <div className="flex flex-row justify-center">
        <img src="cube/turns6.jpg" className="w-[20vw]" />
      </div>
    </div>
  );
}
