import { Link, NavLink, Routes, Route } from 'react-router-dom';

const courses = [
  {
    id: 1,
    icon: '💻',
    title: 'Web Development',
    description: 'Learn HTML, CSS, JavaScript and React.',
    duration: '8 Weeks',
    level: 'Beginner',
  },
  {
    id: 2,
    icon: '🐍',
    title: 'Python Programming',
    description: 'Learn Python basics and programming logic.',
    duration: '6 Weeks',
    level: 'Beginner',
  },
  {
    id: 3,
    icon: '📊',
    title: 'Data Science',
    description: 'Explore data analysis and visualization.',
    duration: '10 Weeks',
    level: 'Intermediate',
  },
];

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <span className="tag">WELCOME TO LEARNHUB</span>
          <h1>Learn New Skills.<br />Build Your Future.</h1>
          <p>
            Discover quality courses, develop your skills and
            take the next step toward your career.
          </p>
          <Link to="/courses" className="btn">
            Explore Courses →
          </Link>
        </div>

        <div className="hero-art">
          <div className="book">📚</div>
          <div className="art-caption">
            <strong>Learn at your pace</strong>
            <span>Knowledge opens doors.</span>
          </div>
        </div>
      </section>

      <section className="features">
        <h2>Why Choose LearnHub?</h2>
        <p className="section-subtitle">
          Everything you need to start learning.
        </p>

        <div className="feature-grid">
          <div className="feature-card">
            <span>🎯</span>
            <h3>Practical Learning</h3>
            <p>Build useful skills through hands-on learning.</p>
          </div>

          <div className="feature-card">
            <span>🕒</span>
            <h3>Learn Anytime</h3>
            <p>Explore learning resources at your own pace.</p>
          </div>

          <div className="feature-card">
            <span>🚀</span>
            <h3>Grow Your Career</h3>
            <p>Prepare yourself for new opportunities.</p>
          </div>
        </div>
      </section>
    </>
  );
}

function Courses() {
  return (
    <section className="page-section">
      <span className="tag">OUR PROGRAMS</span>
      <h1>Explore Our Courses</h1>
      <p className="section-subtitle">
        Choose a course and begin your learning journey.
      </p>

      <div className="course-grid">
        {courses.map((course) => (
          <div className="course-card" key={course.id}>
            <div className="course-icon">{course.icon}</div>
            <span className="level">{course.level}</span>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <div className="course-footer">
              <span>🕒 {course.duration}</span>
              <Link to="/contact">Enquire →</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="page-section about-section">
      <span className="tag">ABOUT US</span>
      <h1>Learning Made Simple</h1>
      <p>
        LearnHub is a student learning portal designed to help
        learners discover courses, build skills and explore new
        opportunities through accessible education.
      </p>

      <div className="stats">
        <div>
          <strong>3+</strong>
          <span>Featured Courses</span>
        </div>
        <div>
          <strong>100%</strong>
          <span>Learning Focus</span>
        </div>
        <div>
          <strong>24/7</strong>
          <span>Learn at Your Pace</span>
        </div>
      </div>

      <h2>Our Mission</h2>
      <p>
        Our mission is to make learning simple, engaging and
        accessible so students can grow their knowledge and skills.
      </p>
    </section>
  );
}

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Your enquiry has been submitted.');
    e.target.reset();
  };

  return (
    <section className="page-section contact-section">
      <span className="tag">GET IN TOUCH</span>
      <h1>Contact LearnHub</h1>
      <p className="section-subtitle">
        Have a question? Send us your enquiry.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name</label>
        <input
          id="name"
          type="text"
          placeholder="Enter your name"
          required
        />

        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          required
        />

        <label htmlFor="message">Your Message</label>
        <textarea
          id="message"
          rows="4"
          placeholder="Write your message"
          required
        />

        <button type="submit" className="btn">
          Send Enquiry →
        </button>
      </form>
    </section>
  );
}

function NotFound() {
  return (
    <section className="page-section not-found">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" className="btn">Go to Home</Link>
    </section>
  );
}

function App() {
  return (
    <div className="app">
      <header className="navbar">
        <Link to="/" className="logo">
          <span className="logo-icon">L</span>
          LearnHub
        </Link>

        <nav>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/courses">Courses</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact" className="contact-link">
            Contact
          </NavLink>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer className="footer">
        <Link to="/" className="footer-logo">LearnHub</Link>
        <p>Empowering students through learning.</p>
        <p>© 2026 LearnHub. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;