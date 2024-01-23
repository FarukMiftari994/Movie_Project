import { useState } from "react";

type Props = {
  handleSubmit: (
    userInput: string,
    setUserInput: React.Dispatch<React.SetStateAction<string>>
  ) => void;
};

function Comments({ handleSubmit }: Props) {
  const [userInput, setUserInput] = useState("");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <textarea
        placeholder="Leave a Comment"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button onClick={() => handleSubmit(userInput, setUserInput)}>
        Submit
      </button>
    </div>
  );
}

export default Comments;
