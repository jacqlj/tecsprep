// Have 5 buttons for each campaign

import React, { useReducer, useState } from 'react';

import TopicOptions from './Topic_SubComps/TopicOptions.jsx';

const TopicSelector = () => {
  const [topics, setTopics] = useState([
    { color: 'green', TopicType: 'Data Structures', selected: false },
    { color: 'blue', TopicType: 'Sorting Algorithms', selected: false },
    { color: 'orange', TopicType: 'Algorithm Analysis', selected: false },
    { color: 'red', TopicType: 'Recursion Techniques', selected: false },
    { color: 'purple', TopicType: 'Linked Data Structures', selected: false },
    { color: 'green', TopicType: 'Tree Structures', selected: false },
    { color: 'blue', TopicType: 'Project Management', selected: false },
    { color: 'orange', TopicType: 'Professional Scenarios', selected: false },
    { color: 'red', TopicType: 'Search Algorithms', selected: false },
    { color: 'purple', TopicType: 'Database Management', selected: false },
    { color: 'green', TopicType: 'Graph Algorithms', selected: false },
    { color: 'blue', TopicType: 'Dynamic Programming', selected: false },
    { color: 'orange', TopicType: 'Optimization Techniques', selected: false },
    { color: 'red', TopicType: 'Divide and Conquer Strategies', selected: false },
    { color: 'purple', TopicType: 'Backtracking Methods', selected: false },
    { color: 'green', TopicType: 'Hashing Techniques', selected: false },
    { color: 'blue', TopicType: 'Stack and Queue Operations', selected: false },
    { color: 'orange', TopicType: 'Heap Structures', selected: false },
    { color: 'red', TopicType: 'Bitwise Operations', selected: false },
    { color: 'purple', TopicType: 'String Algorithms', selected: false },
    { color: 'green', TopicType: 'Network Algorithms', selected: false },
    { color: 'blue', TopicType: 'Geometric Algorithms', selected: false },
    { color: 'orange', TopicType: 'Approximation Methods', selected: false },
    { color: 'red', TopicType: 'Randomized Techniques', selected: false },
  ]);
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  const toggleTopic = (index) => {
    const entry = topics[index];
    topics[index] = { color: entry.color, TopicType: entry.TopicType, selected: !entry.selected };
    setTopics(topics);
    forceUpdate();
  };
  return (
    <div style={{ margin: '0 1rem' }}>
      <h1 className="display-4">Select the topics that you would wish to improve on</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', rowGap: '0.75rem', columnGap: '0.75rem', margin: '2rem 0' }}>
        {topics.map((topic, index) => (
          <TopicOptions
            key={index}
            color={topic.color}
            TopicType={topic.TopicType}
            selected={topic.selected}
            onClick={() => toggleTopic(index)}
          />
        ))}
      </div>
      <a href="/campaignlist" style={{ color: 'inherit' }}>
        <div style={{ display: 'flex', justifyContent: 'right' }}>
          <span style={{ outline: 'aqua solid 3px', padding: '0.5rem 1rem', borderRadius: '100rem' }}>
            Submit <i className="bi bi-arrow-right"></i>
          </span>
        </div>
      </a>
    </div>
  );
};
export default TopicSelector;
