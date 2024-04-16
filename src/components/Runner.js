import './Runner.css';

export function Runner({ runner }) {
  return (
    <div className="card">
      <img src={runner.img} alt="medal" className="medal" />
      <h1 className="runner">{runner.name}</h1>
      <h3 className="distance">Distance: {runner.distance}</h3>
      <p className="time">Finish Time: {runner.time}</p>
    </div>
  );
}
