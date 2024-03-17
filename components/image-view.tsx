import Image from "next/image";
import useNextBlurhash from "use-next-blurhash";

export default function ImageView({
  images,
  direction,
  parent = true,
}: {
  images: any[];
  direction: "horizontal" | "vertical";
  parent: boolean;
}) {
  const [blurDataUrl] = useNextBlurhash(
    images[0].blur,
    5,
    5 * images[0].aspect
  );

  if (images.length == 1)
    return (
      <Image
        placeholder="blur"
        blurDataURL={blurDataUrl}
        alt="Definition Image"
        width={500}
        height={500 * images[0].aspect}
        className="w-full h-full object-cover rounded"
        src={images[0].url}
        // layout="fill"
      />
    );

  let index = Math.floor(images.length / 2);

  if (direction == "vertical")
    return (
      <div className={`flex flex-col gap-2 ${parent ? "" : "max-h-[70%]"}`}>
        <ImageView
          images={images.slice(0, index)}
          direction="horizontal"
          parent={false}
        />
        <ImageView
          images={images.slice(index)}
          direction="horizontal"
          parent={false}
        />
      </div>
    );

  return (
    <div
      className={`flex flex-col md:flex-row gap-2 ${
        parent ? "" : "max-w-[70%]"
      } w-full`}
    >
      <ImageView
        images={images.slice(0, index)}
        direction="vertical"
        parent={false}
      />
      <ImageView
        images={images.slice(index)}
        direction="vertical"
        parent={false}
      />
    </div>
  );
}
