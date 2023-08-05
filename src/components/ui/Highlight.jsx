export default function Highlight({ icon, title, para }) {
  return (
    <div className="highlight">
      <div className="highlight__img">
        {icon}
      </div>
      <h2 className="highlight__subtitle">{title}</h2>
      <p className="highlight__para">
        {para}
      </p>
    </div>
  );
}
