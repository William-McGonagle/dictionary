export default function ImageView({
  images,
  direction,
  parent = true,
}: {
  images: any[];
  direction: "horizontal" | "vertical";
  parent: boolean;
}) {
  if (images.length == 1)
    return (
      <img className="w-full h-full object-cover rounded" src={images[0].url} />
    );

  //   let sum = 0;

  //   if (sum < )

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
