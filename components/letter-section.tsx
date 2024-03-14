import Link from "next/link";
import words from "@/output.json";

function getFirstFromLetter(letter: string) {
  let m = Object.keys(words)
    .filter(
      (i) =>
        i.startsWith(letter) &&
        i.length > 1 &&
        !/[0-9]/g.test(i) &&
        !/[\_\-\.]/g.test(i)
    )
    .sort((a, b) => a.localeCompare(b));
  return m[0];
}
function getLastFromLetter(letter: string) {
  let m = Object.keys(words)
    .filter(
      (i) =>
        i.startsWith(letter) &&
        i.length > 1 &&
        !/[0-9]/g.test(i) &&
        !/[\_\-\.]/g.test(i)
    )
    .sort((a, b) => a.localeCompare(b));
  return m[m.length - 1];
}

export default function LetterSection({ letter }: { letter: string }) {
  return (
    <div className="w-full flex flex-row">
      <div className="text-xl">
        <Link
          className="hover:underline font-bold text-lg"
          href={`/words/${letter}`}
        >
          {letter}
        </Link>
        .{" "}
        <Link
          className="hover:underline"
          href={`/words/${getFirstFromLetter(letter)}`}
        >
          {
            // @ts-ignore
            words[getFirstFromLetter(letter)].text
          }
        </Link>{" "}
        -{" "}
        <Link
          className="hover:underline"
          href={`/words/${getLastFromLetter(letter)}`}
        >
          {
            // @ts-ignore
            words[getLastFromLetter(letter)].text
          }
        </Link>
      </div>
    </div>
  );
}
