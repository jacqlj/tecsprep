//Create a Course component that takes in a Question subcomponent and Answer subcomponent(s)

import { useEffect, useState } from 'react';

import Answer from './Course_SubComps/Answer';
import Question from './Course_SubComps/Question';
import React from 'react';
import Timer from './Course_SubComps/Timer';
import { getCoursePool } from '../dbUTIL';

const CourseView = (props) => {
  const [course, setCourse] = useState({});
  const [question, setQuestion] = useState('');
  const [answers, setAnswers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getCoursePool();
        setCourse(response[0]);
        setQuestion(JSON.parse(response[0].questions));
        setAnswers(JSON.parse(response[0].answers));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', width: '50rem' }}>
        <Timer Time="0" />
        <div style={{ padding: '3rem 0' }}>
          <Question QuestionName={course ? course.name : ''} QuestionText={course ? question : ''} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', rowGap: '1rem' }}>
          <Answer AnswerText={course ? answers[0] : ''} Color="#2E3192" />
          <Answer AnswerText={course ? answers[1] : ''} Color="#2E3192" correct />
          <Answer AnswerText={course ? answers[2] : ''} Color="#2E3192" />
          <Answer AnswerText={course ? answers[3] : ''} Color="#2E3192" />
        </div>
      </div>
    </div>
  );
};
export default CourseView;
