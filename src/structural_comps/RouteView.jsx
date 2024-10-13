import CampaignButton from '../functional_comps/CampaignButton';
import CourseButton from '../functional_comps/CourseButton';

function RouteView() {
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
            backgroundColor: '#ffffde88',
            zIndex: -1,
          }}
        ></div>
        <CampaignButton />
        <CourseButton category="Merge Sort" title="Implementation" completed />
        <CourseButton category="Quick Sort" color="#ca530b" title="Array Sort" />
        <CourseButton category="Analysis" color="#005140" title="Bubble Sort Vs. Quick Sort" />
        <CourseButton category="Algorithms" color="#ca530b" title="Counting Sort" />
      </div>
    </>
  );
}

export default RouteView;
