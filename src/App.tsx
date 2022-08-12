import React, { useEffect, useState } from "react";
import { Navigation } from "./components";
import { useKeyPressed, generateWords, getTrimWords } from "./libs";

import { clsx } from "clsx";

function App() {
  const [words, setWords] = useState(generateWords());
  const [wordsPosition, setWordsPosition] = useState<number>(0);
  const [typoCheck, setTypoCheck] = useState<number[]>([]);
  const [wordsArray, setWordsArray] = useState<string[]>([]);

  const twIsSpace = "border-solid border-2 border-b w-2 border-blue-700";
  const twIsCorrect = "text-gray-400 font-bold";
  const twIsActive = "text-blue-700 font-extrabold";

  useKeyPressed((key) => {
    if (key === wordsArray[wordsPosition]) {
      setWordsPosition(wordsPosition + 1);
    }
    if (key !== wordsArray[wordsPosition]) {
      setTypoCheck((curTypoCheck) => [
        ...curTypoCheck,
        wordsArray.indexOf(wordsArray[wordsPosition]),
      ]);
    }
  });

  useEffect(() => {
    setWordsArray(getTrimWords(words));
  }, []);

  return (
    <div className="flex justify-center p-6">
      <div className="max-w-4xl">
        <Navigation />
        <div className="mx-auto p-4 m-4">
          <p className="text-4xl leading-relaxed tracking-wider">
            {wordsArray.map((item, index) => {
              return (
                <span
                  key={index}
                  className={clsx(
                    "text-black",
                    wordsPosition === index && item === " " && twIsSpace,
                    wordsPosition > index && twIsCorrect,
                    wordsPosition === index && twIsActive
                  )}
                >
                  {item}
                </span>
              );
            })}
          </p>
        </div>
        {/* <pre>{JSON.stringify(wordsArray)}</pre> */}
      </div>
    </div>
  );
}

export default App;
