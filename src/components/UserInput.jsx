export default function UserInput({ label, id, ...props }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} />
    </>
  );
}
