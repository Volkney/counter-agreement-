export default function Tab ({ label, onSelect, selected }) {
  return (
    <>
      <button className={selected ? 'tab-selected' : 'tab'} onClick={onSelect}>
        {label}
      </button>
    </>
  )
}
