import Image from "next/image";
export default function Background() {
  return (
    <div
      style={{
        zIndex: -1,
        position: "fixed",
        width: "210vh",
        height: "210vh",
      }}
    >
      <Image
        alt="backgorund-img"
        src="/bgImage.jpg"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
}
