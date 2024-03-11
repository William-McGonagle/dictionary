import Link from "next/link";

export default function LetterSection({
  letter,
  first,
  last,
}: {
  letter: string;
  first: string;
  last: string;
}) {
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
        <Link className="hover:underline" href={`/words/${first}`}>
          {first}
        </Link>{" "}
        -{" "}
        <Link className="hover:underline" href={`/words/${last}`}>
          {last}
        </Link>
      </div>
    </div>
  );
}
