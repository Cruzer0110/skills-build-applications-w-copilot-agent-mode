import { Link, NavLink, Route, Routes } from 'react-router-dom';

function HomePage() {
  return (
    <section className="hero-card">
      <p className="eyebrow">Modern multi-tier fitness platform</p>
      <h1>OctoFit Tracker</h1>
      <p className="lead">
        Track workouts, build teams, compete on the leaderboard, and surface smarter training recommendations.
      </p>
      <div className="d-flex gap-3 flex-wrap">
        <Link className="btn btn-light btn-lg" to="/dashboard">
          Open dashboard
        </Link>
        <Link className="btn btn-outline-light btn-lg" to="/api-status">
          Check API status
        </Link>
      </div>
    </section>
  );
}

function DashboardPage() {
  return (
    <section className="panel-card">
      <h2>Dashboard</h2>
      <p className="mb-0">Frontend scaffold ready for profiles, activities, teams, leaderboard, and workouts.</p>
    </section>
  );
}

function ApiStatusPage() {
  return (
    <section className="panel-card">
      <h2>API Status</h2>
      <p className="mb-0">Backend is initialized for port 8000 and MongoDB integration.</p>
    </section>
  );
}

export default function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div>
          <p className="brand-mark mb-1">OctoFit Tracker</p>
          <small className="text-white-50">React 19 + Vite + Bootstrap</small>
        </div>
        <nav className="nav nav-pills gap-2">
          <NavLink className="nav-link" to="/" end>
            Home
          </NavLink>
          <NavLink className="nav-link" to="/dashboard">
            Dashboard
          </NavLink>
          <NavLink className="nav-link" to="/api-status">
            API
          </NavLink>
        </nav>
      </header>

      <main className="container-fluid py-4 py-lg-5">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/api-status" element={<ApiStatusPage />} />
        </Routes>
      </main>
    </div>
  );
}