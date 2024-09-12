import React from 'react';
import './index.css'; 

function App() {
  return (
    <div className='yo'>
    <div className="help-center">
      <header className="header">
        <div className="logo">Abstract | Help Center</div>
        <div className="buttons">
          <button className="btn">Submit a request</button>
          <button className="btn sign-in">Sign in</button>
        </div>
      </header>

      <main className="main-content">
        <h1>How can we help?</h1>
        <input type="text" className="search-bar" placeholder="Search" />

        <div className="help-sections">
          <HelpSection
            icon="🧩"
            title="Branches"
            description="Abstract Branches lets you manage, version, and document your designs in one place."
          />
          <HelpSection
            icon="👤"
            title="Manage your account"
            description="Configure your account settings, such as your email, profile details, and password."
          />
          <HelpSection
            icon="🔧"
            title="Manage organizations, teams, and projects"
            description="Use Abstract organizations, teams, and projects to organize your people and your work."
          />
          <HelpSection
            icon="💵"
            title="Manage billing"
            description="Change subscriptions and payment details."
          />
          <HelpSection
            icon="🔑"
            title="Authenticate to Abstract"
            description="Set up and configure SSO, SCIM, and Just-in-Time provisioning."
          />
          <HelpSection
            icon="💬"
            title="Abstract support"
            description="Get in touch with a human."
          />
        </div>
      </main>

      <footer className="footer">
        <div className="links">
          <div className="column">
            <h4>Abstract</h4>
            <a href="/">Start trial</a>
            <a href="/">Pricing</a>
            <a href="/">Downloadings</a>
          </div>
          <div className="column">
            <h4>Resources</h4>
            <a href="/">Blog</a>
            <a href="/">Help Center</a>
            <a href="/">Release Notes</a>
            <a href="/">Status</a>
          </div>
          <div className="column">
            <h4>Community</h4>
            <a href="/">Twitter</a>
            <a href="/">LinkedIn</a>
            <a href="/">Facebook</a>
            <a href="/">Dribbble</a>
            <a href="/">Podcast</a>
          </div>
          <div className="column">
            <h4>Company</h4>
            <a href="/">About Us</a>
            <a href="/">Careers</a>
            <a href="/">Legal</a>
            <a href="mailto:info@abstract.com">Contact Us</a>
          </div>
        </div>
        <div className="copyright">
          &copy; Copyright 2022 Abstract Studio Design, Inc. All rights reserved.
        </div>
      </footer>
    </div>
  </div>
  );
}

function HelpSection({ icon, title, description }) {
  return (
    <div className="help-section">
      <h3>{icon} {title}</h3>
      <p>{description}</p>
      <a href="/">Learn More →</a>
    </div>
  
  );
}

export default App;