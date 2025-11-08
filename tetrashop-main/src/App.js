import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import ThreeDApp from './components/ThreeDApp';

function HomePage() {
  return (
    <div className="app-container">
      {/* هدر */}
      <header className="app-header">
        <nav className="navbar">
          <div className="logo">Tetrashop100</div>
          <ul className="nav-links">
            <li><Link to="/">خانه</Link></li>
            <li><Link to="/products">محصولات</Link></li>
            <li><Link to="/3d">تبدیل 3D</Link></li>
            <li><Link to="/payment">پرداخت</Link></li>
          </ul>
          <div className="auth-buttons">
            <button className="btn btn-secondary">ورود</button>
            <button className="btn btn-primary">ثبت نام</button>
          </div>
        </nav>
      </header>

      {/* بخش اصلی */}
      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>به Tetrashop100 خوش آمدید</h1>
            <p>تجربه‌ای جدید از خرید آنلاین با امنیت، سرعت و کیفیت بی‌نظیر</p>
            <div className="cta-buttons">
              <button className="btn btn-primary" style={{padding: '1rem 2rem', fontSize: '1.1rem'}}>
                مشاهده محصولات
              </button>
              <button className="btn btn-secondary" style={{padding: '1rem 2rem', fontSize: '1.1rem'}}>
                ثبت نام رایگان
              </button>
            </div>
          </div>
        </section>

        {/* ویژگی‌ها */}
        <section className="features">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>سرعت بالا</h3>
              <p>تجربه خرید سریع و روان</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>امنیت</h3>
              <p>پرداخت امن با رمزگذاری پیشرفته</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚚</div>
              <h3>تحویل سریع</h3>
              <p>ارسال به تمام نقاط کشور</p>
            </div>
          </div>
        </section>
      </main>

      {/* فوتر */}
      <footer className="app-footer">
        <div className="logo" style={{marginBottom: '1rem'}}>T</div>
        <p style={{marginBottom: '1rem'}}>Tetrashop100</p>
        <p style={{marginBottom: '1rem', opacity: '0.8'}}>تجربه‌ای جدید از خرید آنلاین با امنیت، سرعت و کیفیت بی‌نظیر</p>
        <nav style={{marginBottom: '1rem'}}>
          <Link to="/" style={{color: 'white', margin: '0 1rem', textDecoration: 'none'}}>خانه</Link>
          <Link to="/products" style={{color: 'white', margin: '0 1rem', textDecoration: 'none'}}>محصولات</Link>
          <Link to="/payment" style={{color: 'white', margin: '0 1rem', textDecoration: 'none'}}>پرداخت</Link>
        </nav>
        <p style={{opacity: '0.6', fontSize: '0.9rem'}}>© 2024 Tetrashop100. تمام حقوق محفوظ است.</p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/3d" element={<ThreeDApp />} />
        <Route path="/products" element={<div className="app-page"><h2>محصولات</h2><p>صفحه محصولات به زودی...</p></div>} />
        <Route path="/payment" element={<div className="app-page"><h2>پرداخت</h2><p>صفحه پرداخت به زودی...</p></div>} />
      </Routes>
    </Router>
  );
}

export default App;
