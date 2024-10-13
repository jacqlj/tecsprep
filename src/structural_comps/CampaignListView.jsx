import CampaignButton from '../functional_comps/CampaignButton';

function CampaignListView() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', rowGap: '2rem' }}>
      <CampaignButton href="/campaign" title="Sorting Algorithms" cccategory="Data structures" ccname="Min Heap" />
      <CampaignButton color="#9d2a11" title="Workplace Scenarios" cccategory="Conflict" ccname="Diverging Directions" />
      <CampaignButton color="#723847" title="Greedy Algorithms" cccategory="Analysis" ccname="Cloudy Islands" />
    </div>
  );
}

export default CampaignListView;
