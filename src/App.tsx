import { useState } from "react";
import { Navigation } from "./components";
import { useKeyPressed, generateCharactersArray } from "./utils";

import { clsx } from "clsx";

function App() {
  const [indexPosition, setIndexPosition] = useState<number>(0);
  const [charactersArray, setCharactersArray] = useState(
    generateCharactersArray()
  );

  const twIsSpace = "border-solid border-2 border-b w-2 border-blue-700";
  const twIsCorrect = "text-gray-400 font-bold";
  const twIsActive = "text-blue-700 font-extrabold";
  const twIsWrong = "text-red-400 font-bold";

  useKeyPressed((key) => {
    // Key is the same within array of ["x", 0]
    if (key === charactersArray[indexPosition][0]) {
      setIndexPosition(indexPosition + 1);
      setCharactersArray(
        charactersArray.map((charState, index) => {
          if (index === indexPosition) {
            return [charState[0], 1]; // set to correct
          }
          return charState;
        })
      );
    }

    // Key is not the same
    if (key !== charactersArray[indexPosition][0]) {
      setIndexPosition(indexPosition + 1);
      setCharactersArray(
        charactersArray.map((charState, index) => {
          if (index === indexPosition) {
            return [charState[0], -1]; // set to wrong/typo
          }
          return charState;
        })
      );
    }
  });

  return (
    <div className="flex justify-center p-6">
      <div className="max-w-4xl">
        <Navigation />
        {/* <pre>{JSON.stringify(charactersArray, null, 2)}</pre> */}

        <div className="mx-auto p-4 m-4">
          <p className="text-4xl leading-relaxed tracking-wider">
            {charactersArray.map((charState, index) => {
              const currentPosition = indexPosition === index;

              return (
                <span
                  key={index}
                  className={clsx(
                    // default
                    "text-black",
                    // is active
                    currentPosition && twIsActive,
                    // is space
                    currentPosition && charState[0] === " " && twIsSpace,
                    // is correct
                    charState[1] === 1 && twIsCorrect,
                    // is wrong/typo
                    charState[1] === -1 && twIsWrong
                  )}
                >
                  {charState[0]}
                </span>
              );
            })}
          </p>
        </div>
        {/* <pre>{JSON.stringify(charactersArray)}</pre> */}
      </div>
    </div>
  );
}

export default App;
