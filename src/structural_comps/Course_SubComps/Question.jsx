// Creates the question subComponent for the course component
// Has a text field with a question label and text area for the question itself

import React from 'react';

const Question = (props) => {
  const QuestionName = props.QuestionName;
  const QuestionText = props.QuestionText;
  return (
    <div>
      <h3>{QuestionName}</h3>
      <h4>{QuestionText}</h4>
    </div>
  );
};
export default Question;
