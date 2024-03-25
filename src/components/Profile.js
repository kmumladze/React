import './Profile.css';

export function Profile({ person: { img, name, distance, time } }) {
  return (
    <div className="card">
      <img src={img} alt="medal" className="medal" />
      <h1 className="runner">{name}</h1>
      <h3 className="distance">Distance: {distance}</h3>
      <p className="time">Finish Time: {time}</p>
    </div>
  );
}
