// Creates the question subComponent for the course component
// Has a text field with a question label and text area for the question itself

import React from 'react';

const Question = (props) => {
  const QuestionName = props.QuestionName;
  const QuestionText = props.QuestionText;
  return (
    <div>
      <label>{QuestionName}</label>
      <p>{QuestionText}</p>
    </div>
  );
};
export default Question;
