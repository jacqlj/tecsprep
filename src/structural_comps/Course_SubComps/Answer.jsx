import React, { useState } from 'react';

const Answer = (props) => {
  const AnswerText = props.AnswerText;
  const correct = props.correct;

  const [color, setColor] = useState(props.Color);

  return (
    <div
      style={{ border: '1px solid white', borderRadius: '5px', padding: '1rem 2rem', backgroundColor: color }}
      onClick={() => {
        setColor(correct ? 'green' : 'red');
      }}
    >
      <span>{AnswerText}</span>
    </div>
  );
};

export default Answer;
