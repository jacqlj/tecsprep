import './CampaignButton.css';

function CampaignButton() {
  return (
    <a href="" style={{ color: 'inherit' }}>
      <div className="container">
        <div className="div-content">
          <img
            className="image"
            src="https://www.adobe.com/creativecloud/photography/discover/media_131179edca5f92db203e2b78cb8a308605afbc958.png?width=750&format=png&optimize=medium"
            alt=""
          />
          <div>
            <p style={{ fontSize: '30px', margin: '0px', padding: '0px', lineHeight: '30px' }}>Sorting Algorithms</p>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', columnGap: '0.5rem' }}>
          <div>
            <div className="current-course">
              <p style={{ color: '#000' }}>Current Course</p>
            </div>
            <div className="course-card">
              <p className="course-category">DATA STRUCTURES</p>
              <p style={{ color: '#000', fontSize: '20px', margin: '0px', padding: '0px', lineHeight: '20px' }}>
                Linked List
              </p>
            </div>
          </div>
          <div>
            <i style={{ padding: '1rem' }}>
              <i className="bi bi-chevron-compact-down" style={{ fontSize: '32px' }}></i>
            </i>
          </div>
        </div>
      </div>
    </a>
  );
}

export default CampaignButton;
