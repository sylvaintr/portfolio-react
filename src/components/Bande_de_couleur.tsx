export default function Bande_de_couleur({
  backgroundColor,
}: {
  backgroundColor: string;
}) {
  return (
    <div
      style={{
        width: "150%",
        height: "100px",
        position: "relative",
        left: "-25%",
        backgroundColor,
      }}
    ></div>
  );
}
