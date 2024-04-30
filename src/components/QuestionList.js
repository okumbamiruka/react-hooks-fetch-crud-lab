import React , { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem";

const API_URL = "http://localhost:4000/questions";

function QuestionList() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setQuestions(data));
  }, []);
  console.log(questions);

  function handleDeleteItem(deletedItem) {
    const updatedQuestions = questions.filter((question) => question.id !== deletedItem.id);
    setQuestions(updatedQuestions);
  }
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question) => (
          <QuestionItem key = {question.id} question = {question} onDeleteItem={handleDeleteItem}/>
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
