import { useEffect, useState } from 'react';

import CampaignButton from '../functional_comps/CampaignButton';
import CourseButton from '../functional_comps/CourseButton';
import { getCampaigns } from '../dbUTIL';

function CampaignView(props) {
  const [Campaigns, setCampaigns] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getCampaigns();
        setCourses(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  const Campaign = Campaigns[0];
  return (
    <>
      <div
        style={{
          position: 'absolute',
          display: 'flex',
          flexDirection: 'column',
          rowGap: '3rem',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <div
          style={{
            position: 'absolute',
            width: '6px',
            height: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: '#a0a08a',
            zIndex: -1,
          }}
        ></div>
        <CampaignButton title="Sorting Algorithms" cccategory="data structures" ccname="Min Heap" outline />
        <CourseButton category="Merge Sort" title="Implementation" completed />
        <CourseButton category="Data Structures" color="#383b12" title="Min Heap" href="/course" />
        <CourseButton category="Analysis" color="#005140" title="Bubble Sort Vs. Quick Sort" />
        <CourseButton category="Algorithms" color="#ca530b" title="Counting Sort" />
      </div>
    </>
  );
}

export default CampaignView;
