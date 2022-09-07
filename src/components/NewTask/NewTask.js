import Section from "../UI/Section";
import TaskForm from "./TaskForm";
import useHttp from "../../hooks/use-http";

const NewTask = (props) => {
  const { isLoading, error, sendRequest: sendTaskRequest } = useHttp();
  // đổi tên sendRequest thành sendTaskRequest

  const createdTask = (taskText, taskData) => {
    const generatedId = taskData.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
    // truyền giá trị của createdTask vào hàm taskAddHandler trong App.js
  };

  const enterTaskHandler = async (taskText) => {
    sendTaskRequest(
      {
        url: "https://minhquangkid-3a415-default-rtdb.firebaseio.com/tasks.json",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: { text: taskText },
      },
      createdTask.bind(null, taskText)
      // tham số đầu tiên trong bind là dùng cho this nhưng ta ko sài nên để null, tham số thứ 2 là gì ko hiểu ??
      // bind dùng để định cấu hình cho 1 hàm
    );
    // bởi vì đã chuyển đổi JSON.stringify trong use-http rồi nên ở đây chỉ truyền vào { text: taskText }
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};
// enterTaskHandler sẽ gửi dữ liệu lên API
export default NewTask;
