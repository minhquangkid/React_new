import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealsItem from "./MealItem/MealItem";
import { useState, useEffect } from "react";

/*
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

async function postData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

postData(
  "https://minhquangkid-3a415-default-rtdb.firebaseio.com/tasks.json",
  DUMMY_MEALS
).then((data) => {
  console.log(data); // JSON data parsed by `data.json()` call
});
*/
// cách để đưa dữ liệu lên API
// trong url, nếu ta ghi /tasks.json thì nó sẽ tạo 1 node tên là tasks

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  // PHẢI KHỞI TẠO meals ban đầu là 1 mảng rỗng [] mà ko phải là '', vì nếu ban đầu chạy mà nó là 1 mảng thì câu lệnh map sẽ chạy được mà không báo lỗi, còn nếu là '' thì nó sẽ lỗi và ko chạy tiếp chương trình, lúc đó fetch cũng bị dừng nên ko thể cập nhật state, không render lại được
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://minhquangkid-3a415-default-rtdb.firebaseio.com/tasks.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      // nếu thất bại trong việc lấy dữ liệu thì tạo ra lỗi

      const meal = await response.json();

      let test = meal["-NBbpphByO2vaZgKlZgt"];
      // meal trả về là 1 object có 1 thuộc tính là -NBbpphByO2vaZgKlZgt mà trong đó chứa mảng mà ta cần nên phải lấy chúng ra
      console.log(meal);
      console.log(test);

      setMeals(test); // sau khi lấy xong thì gắn vào state để nó render cập nhật lại
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });

    console.log(meals);
  }, []);
  // useEffect chỉ chạy 1 lần lúc mới load để lấy dữ liệu API
  // bởi vì useEffect không trả về 1 promise nên ta phải lồng fetch trong 1 hàm

  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.MealsError}>
        <p>{httpError}</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => (
    <MealsItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
