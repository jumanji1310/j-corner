/* eslint-disable react/no-unescaped-entities */

export default function MusicBasics() {
  return (
    <div className="min-h-[90vh] p-4 bg-background dark:bg-dark-background text-text dark:text-dark-text">
      <div className="flex flex-col space-y-8 p-4">
        <h1 className="text-3xl font-bold text-center text-accent dark:text-dark-accent">
          Music Theory Basics
        </h1>

        <h2 className="text-2xl font-bold text-center text-accent dark:text-dark-accent">
          Piano Layout
        </h2>
        <div className="flex flex-row justify-center">
          <p className="text-xl text-left w-[40vw]">
            A general piano has 88 keys and repeats 12 notes continuously. These
            consist of 7 white notes and 5 black notes. The most important part
            of starting is finding the middle C key which is white key left of
            the 2 black keys near the middle of the piano.
          </p>
        </div>
        <div className="flex flex-row justify-center">
          <img
            src="/music/piano-layout.svg"
            className="w-[40vw]"
            alt="Piano layout showing middle C"
          />
        </div>

        <h2 className="text-2xl font-bold text-center text-accent dark:text-dark-accent">
          Identifying Notes
        </h2>
        <div className="flex flex-row justify-center">
          <p className="text-xl text-left w-[40vw]">
            The white notes loop from A B C D E F G and back to A. However, the
            middle C as mentioned is the center of a lot of songs and is
            considered the start point.
          </p>
        </div>
        <div className="flex flex-row justify-center">
          <img
            src="/music/piano-notes.png"
            className="w-[20vw]"
            alt="Piano key layout with note names"
          />
        </div>

        <h2 className="text-2xl font-bold text-center text-accent dark:text-dark-accent">
          Sharps and Flats (Accidentals)
        </h2>
        <div className="flex flex-row justify-center">
          <p className="text-xl text-left w-[40vw]">
            The black keys are known as the sharps and flats. Moving from one
            key to another (eg from the middle C to the black key directly right
            of it) is considered a "half-step" move. C to D for example is
            considered a "full-step". Sharps (#) are half steps to the right
            while Flats (b) are half steps to the left.
          </p>
        </div>
        <div className="flex flex-row justify-center">
          <img
            src="/music/accidentals.png"
            className="w-[20vw]"
            alt="Piano showing sharps and flats"
          />
        </div>
        <div className="flex flex-row justify-center">
          <p className="text-xl text-left w-[40vw]">
            Each black key has two names. For example, the black key half step
            right of C is called a C sharp (C#) but it's also half step left of
            D so it's also D flat (Db).
          </p>
        </div>
        <h2 className="text-2xl font-bold text-center text-accent dark:text-dark-accent">
          Reading Sheet Music
        </h2>
        <div className="flex flex-row justify-center">
          <p className="text-xl text-left w-[40vw]">
            A sheet music consists of two different sets of lines. The treble
            clef (G clef) is usually played with the right hand. The bass clef
            (F clef) is played with the left hand.
          </p>
        </div>
        <div className="flex flex-row justify-center">
          <img
            src="/music/clefs.jpg"
            className="w-[30vw]"
            alt="Treble and bass clefs"
          />
        </div>
        <div className="flex flex-row justify-center">
          <p className="text-xl text-left w-[40vw]">
            To read the notes, first notice that there are 5 lines and 4 spaces
            in between. A note is a circle (either filled or unfilled) that
            occupies a space or sits on top of a line. For the treble clef, use
            the mnemonic "Every Good Boy Deserves Food" for the lines (E G B D
            F) and "FACE" for the spaces.
          </p>
        </div>
        <div className="flex flex-row justify-center">
          <img
            src="/music/note-reading.png"
            className="w-[30vw]"
            alt="Note positions on the staff"
          />
        </div>
        <div className="flex flex-row justify-center mt-8">
          <a
            href="https://www.musictheory.net/exercises/note"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg px-6 py-3 rounded-lg bg-accent dark:bg-dark-accent text-text dark:text-dark-text hover:opacity-90 transition-opacity"
          >
            Practice Note Reading
          </a>
        </div>
        <h2 className="text-2xl font-bold text-center text-accent dark:text-dark-accent">
          Key Signatures
        </h2>
        <div className="flex flex-row justify-center">
          <p className="text-xl text-left w-[40vw]">
            On the right of the clefs, sometimes there are sharps or flats
            symbols. Depending on which line or space it occupies, it means that
            key is played with that accidental every time it appears. The set of
            these accidentals dictate the "key" of the song.
          </p>
        </div>
        <div className="flex flex-row justify-center">
          <img
            src="/music/key-signatures.png"
            className="w-[30vw]"
            alt="Common key signatures"
          />
        </div>
        <div className="flex flex-row justify-center">
          <p className="text-xl text-left w-[40vw]">
            For example, a song in G major key (or E minor) has all natural
            white keys except F sharp (F#) as shown in the diagram.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-center text-accent dark:text-dark-accent">
          Bars and Note Values
        </h2>
        <div className="flex flex-row justify-center">
          <p className="text-xl text-left w-[40vw]">
            Each note symbol dictates the duration it's played for. A normal 4/4
            song has 4 beats in a bar. Each bar is separated by a vertical line
            breaking up the staff. A whole note (semibreve) is held for the
            entire bar.
          </p>
        </div>
        <div className="flex flex-row justify-center">
          <img
            src="/music/note-values.png"
            className="w-[30vw]"
            alt="Note values and durations"
          />
        </div>
        <div className="flex flex-row justify-center">
          <p className="text-xl text-left w-[40vw]">
            Rest symbols indicate periods of silence with durations
            corresponding to their note equivalents.
          </p>
        </div>
      </div>
    </div>
  );
}
