//Create a Course component that takes in a Question subcomponent and Answer subcomponent(s)

import Answer from './Course_SubComps/Answer';
import Question from './Course_SubComps/Question';
import React from 'react';
import Timer from './Course_SubComps/Timer';
const CourseView = () => {
  return (
    <div>
      <Timer Time="0" />
      <Question QuestionName="SampleName" QuestionText="SampleText" />
      <Answer AnswerText="SampleAnswer" Color="darkBlue" />
    </div>
  );
};
export default CourseView;
