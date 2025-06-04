function FeatureCard({ icon, title, text, image }) {
  return (
    <div className="col-md-4">
      <div className="p-4 bg-body-secondary feature-card h-100 text-center rounded">
        <div className="feature-icon mb-3" style={{ fontSize: '3rem', color: '#0d6efd' }}>
          <i className={`bi ${icon}`}></i>
        </div>
        <h4>{title}</h4>
        <p>{text}</p>
        <img src={image} alt={title} className="img-fluid rounded" />
      </div>
    </div>
  );
}
export default FeatureCard;
