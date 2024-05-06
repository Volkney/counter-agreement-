export default function AddPerson ({ onClick, label }) {
  return (
    <>
      <button onClick={onClick}>{label}</button>
    </>
  )
}
