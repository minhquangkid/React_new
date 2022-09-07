import React, { useCallback, useEffect, useState } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useHttp from "./hooks/use-http";

function App() {
  const [tasks, setTasks] = useState([]);

  // ta dùng useCallback để đảm bảo hàm transformTasks chỉ chạy 1 lần khi render app, như vậy mới đảm bảo dependence applyData ko bị thay đổi khi render app lại
  const { isLoading, error, sendRequest: fetchTasks } = useHttp();

  // useHttp nhận 2 tham số truyền vào là object có chứa url, và 1 hàm là transformTasks

  /* useHttp trả về là 1 object nên ta gán giá trị trả về đó trong object 
  const {
    isLoading,
    error,
    sendRequest
  } */

  // sendRequest: fetchTasks là để đổi tên sendRequest thành fetchTasks

  useEffect(() => {
    const transformTasks = (tasksObj) => {
      const loadedTasks = [];

      for (const taskKey in tasksObj) {
        loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
      }

      setTasks(loadedTasks);
    };

    fetchTasks(
      {
        url: "https://minhquangkid-3a415-default-rtdb.firebaseio.com/tasks.json",
      },
      transformTasks
    );
  }, [fetchTasks]);
  // truyền url vào tham số requestConfig trong sendRequest
  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
