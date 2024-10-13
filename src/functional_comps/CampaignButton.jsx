import './CampaignButton.css';

function CampaignButton({ title, cccategory, ccname, color, outline, href }) {
  title ??= 'Title';
  cccategory ??= 'category';
  ccname ??= 'Course name';
  color ??= '#2E3192';
  href ??= '#';

  return (
    <a href={href} style={{ color: 'inherit' }}>
      <div
        className="container"
        style={{ backgroundColor: color, ...(outline ? { outline: '#a0a08a solid 5px' } : {}) }}
      >
        <div className="div-content">
          <img
            className="image"
            src="https://www.adobe.com/creativecloud/photography/discover/media_131179edca5f92db203e2b78cb8a308605afbc958.png?width=750&format=png&optimize=medium"
            alt=""
          />
          <div>
            <p style={{ fontSize: '30px', margin: '0', padding: '0', lineHeight: '30px' }}>{title}</p>
          </div>
        </div>
        <div style={{ marginRight: '1rem' }}>
          <div className="current-course">
            <p style={{ color: '#000' }}>Current Course</p>
          </div>
          <div className="course-card">
            <p className="course-category">{cccategory.toUpperCase()}</p>
            <p style={{ color: '#000', fontSize: '20px', margin: '0', padding: '0', lineHeight: '20px' }}>{ccname}</p>
          </div>
        </div>
      </div>
    </a>
  );
}

export default CampaignButton;
