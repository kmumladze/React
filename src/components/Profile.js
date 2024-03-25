import './Profile.css';

export function Profile(props) {
  return (
    <div className="card">
      <img src={props.person.img} alt="medal" className="medal" />
      <h1 className="runner">{props.person.name}</h1>
      <h3 className="distance">Distance: {props.person.distance}</h3>
      <p className="time">Finish Time: {props.person.time}</p>
    </div>
  );
}
