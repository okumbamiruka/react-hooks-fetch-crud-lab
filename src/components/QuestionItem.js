import React from "react";

function QuestionItem( { question, onDeleteItem } ) {

  const options = question.answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleDeleteClick() {
    // Call onDeleteItem, passing the deleted item
    fetch(`http://localhost:4000/questions/${question.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => onDeleteItem(question));
  }

  return (
    <li>
      <h4>Question {question.id}</h4>
      <h5>Prompt: {question.prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={question.correctIndex}>{options}</select>
      </label>
      <button onClick={handleDeleteClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
