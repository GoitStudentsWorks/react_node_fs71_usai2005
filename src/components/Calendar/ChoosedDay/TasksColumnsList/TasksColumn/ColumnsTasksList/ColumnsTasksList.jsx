import { TaskColumnCard } from './TaskColumnCard/TaskColumnCard';

export const ColumnsTasksList = ({ tasks }) => {
  console.log(tasks);
  return (
    <ul>
      {tasks &&
        tasks.map(task => {
          return <TaskColumnCard key={task._id} task={task} />;
        })}
    </ul>
  );
};
