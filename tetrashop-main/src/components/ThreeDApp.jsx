import React from 'react';

const ThreeDApp = () => {
  return (
    <div className="app-page">
      <div className="app-header">
        <h2>🔄 تبدیل 3D</h2>
        <p>ابزار پیشرفته تبدیل فرمت‌های سه‌بعدی - آماده استفاده</p>
      </div>
      
      <div className="iframe-container">
        <iframe
          src="/3d-app/index.html"
          width="100%"
          height="700px"
          style={{
            border: 'none',
            borderRadius: '12px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            background: 'white'
          }}
          title="3D Conversion Tool"
        />
      </div>
      
      <div className="app-info">
        <p>✅ اپلیکیشن تبدیل 3D با موفقیت یکپارچه شد</p>
      </div>
    </div>
  );
};

export default ThreeDApp;
