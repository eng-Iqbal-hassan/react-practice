import useInput from "../hooks/useInput";

export function UserForm() {
  const [firstName, bindFirstName, resetFirstName] = useInput("");
  const [lastName, bindLastName, resetLastName] = useInput("");

  const submit = (e) => {
    e.preventDefault();
    alert(`hello ${firstName} ${lastName}`);
    resetFirstName();
    resetLastName();
  };
  return (
    <form onSubmit={submit}>
      <div>
        <label>first name</label>
        <input {...bindFirstName} type="text" />
      </div>
      <div>
        <label>last name</label>
        <input {...bindLastName} type="text" />
      </div>
      <button type="submit">submit</button>
    </form>
  );
}
