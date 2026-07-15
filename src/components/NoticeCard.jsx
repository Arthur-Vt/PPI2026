import "./NoticeCard.css";

function NoticeCard({ notice, onToggleFeatured }) {
  return (
    // <article className={`notice-card ${notice.featured ? "featured" : ""}`}>
    <article className={`notice-card ${notice.featured && "featured"}`}>
      <p>{notice.category}</p>
      <h3>{notice.title}</h3>
      <p>{notice.description}</p>

      <div className="notice-meta">
        <span>{notice.author}</span>-<span>{notice.date}</span>
      </div>
      <div className="notice-actions">
        <button onClick={() => onToggleFeatured(notice.id)}>Destacar</button>
      </div>
    </article>
  );
}

export default NoticeCard;
