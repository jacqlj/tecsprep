import React from 'react';

const Answer = (props) => {
  const AnswerText = props.AnswerText;
  const Color = props.Color;
  return (
    <div style={{ border: '1px solid white', borderRadius: '5px', width: '400px', backgroundColor: Color }}>
      <p>{AnswerText}</p>
    </div>
  );
};

export default Answer;
