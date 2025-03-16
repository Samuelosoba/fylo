export default function Typo({ font, col, text }) {
  return (
    <>
      <h1 style={{ fontSize: font, color: col }}>{text}</h1>
    </>
  );
}
