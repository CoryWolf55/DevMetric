import "../styles/mainview.css"
import '@fortawesome/fontawesome-free/css/all.min.css';
function MainView(){


    return(
        <div className="hero">
  <div className="hero-content">
    <h1 className="hero-title">
      Measure your <span className="no-wrap">GitHub impact</span> against developers your age
    </h1>

    <p className="hero-subtitle">
      DevMetric analyzes your GitHub activity and ranks you in real-world percentiles so you know exactly where you stand.
    </p>

    <div className="hero-actions">
      <button className="hero-button-primary">Get Started Free</button>
      <button className="hero-button-secondary">Learn More</button>
    </div>

    <div className="hero-features">
  <div className="hero-feature">
    <i className="fa-solid fa-circle-check"></i>
    <span>Free forever</span>
  </div>
  <div className="hero-feature">
    <i className="fa-solid fa-circle-check"></i>
    <span>No credit card required</span>
  </div>
  <div className="hero-feature">
    <i className="fa-solid fa-circle-check"></i>
    <span>Setup in 2 minutes</span>
  </div>
</div>

  </div>
</div>

    );
}

export default MainView;