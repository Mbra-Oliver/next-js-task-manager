import TaskCard from "@/components/TaskCard";
import Image from "next/image";

const TasksList = () => {
  return (
    <div className="grid  grid-cols-3 gap-4">
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
    </div>
  );
};

export default function Home() {
  return <TasksList />;
}
