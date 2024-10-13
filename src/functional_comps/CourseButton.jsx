function CourseButton({ category, color, title, completed }) {
  category ??= 'category';
  color ??= '#2E3192';
  title ??= 'Course Title';

  return (
    <a href="" style={{ color: 'inherit' }}>
      <div
        style={{
          display: 'flex',
          width: '32rem',
          alignItems: 'center',
          backgroundColor: color,
          borderRadius: '10px',
          margin: '0 auto',
          filter: `brightness(${completed ? '30%' : '100%'})`,
        }}
      >
        <div>
          <img
            style={{
              width: '100px',
              marginRight: '25px',
              objectFit: 'cover',
              height: '100px',
              borderRadius: '10px 0px 0px 10px',
            }}
            src="https://www.adobe.com/creativecloud/photography/discover/media_131179edca5f92db203e2b78cb8a308605afbc958.png?width=750&format=png&optimize=medium"
            alt=""
          />
        </div>
        <div>
          <p style={{ margin: '0px', padding: '2px', lineHeight: '16px', fontWeight: '500', letterSpacing: '1.5px' }}>
            {category.toUpperCase()}
          </p>
          <p style={{ fontSize: '30px', margin: '0px', padding: '0px', lineHeight: '30px' }}>{title}</p>
        </div>
      </div>
    </a>
  );
}

export default CourseButton;
