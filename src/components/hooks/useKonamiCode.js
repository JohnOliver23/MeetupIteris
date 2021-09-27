import { useEffect, useState } from "react";

export const konamiSequence = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];
export default function useKonamiCode(
  codeSequence = konamiSequence,
  callBack = () => {}
) {
  const [sequence, setSequence] = useState([]);
  const [rightSequence, setRightSequence] = useState(false);

  const onKeyDown = (event) =>
    setSequence((preview) => [...preview, event.key]);

  useEffect(() => {
    sequence.forEach((key, i) => {
      if (key !== codeSequence[i]) {
        setSequence([]);
      }
    });
    if (sequence.toString() === codeSequence.toString()) {
      setRightSequence(true);
      callBack();
    }
  }, [sequence]);

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  });

  return { sequence, rightSequence };
}
