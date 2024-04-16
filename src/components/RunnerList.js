import { Runner } from './Runner';
import './RunnerList.css';

export function RunnerList({ sortedRunners }) {
  return (
    <div className="grid-container ">
      {sortedRunners.map((runner) => (
        <Runner key={runner.name} runner={runner} />
      ))}
    </div>
  );
}
