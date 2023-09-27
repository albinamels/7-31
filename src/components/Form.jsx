import "./Form.css";

export const Form = ({ inputVal, handleInput, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input value={inputVal} onChange={handleInput} />
      <button type="submit">Submit</button>
    </form>
  );
};
