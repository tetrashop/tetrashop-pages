import React from 'react';
import { ServicePlatform } from './components/ServicePlatform';

/**
 * کامپوننت اصلی تتراشاپ
 * نسخه پایدار و تایید شده
 */
function App() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1a1a1a 0%, #2d1b69 100%)',
      fontFamily: 'Tahoma, Arial, sans-serif'
    }}>
      <ServicePlatform />
    </div>
  );
}

export default App;
