import classes from "./middle.module.css";

const getTitle = (e) => {
  //   console.log(e.target);
  console.log(e.target.textContent);
};

const Middle = () => {
  return (
    <div className={classes.container}>
      <div className={classes.leftCol} onClick={getTitle}>
        <h2>CATEGORIES</h2>
        <h4 style={{ backgroundColor: "black", color: "white" }}>APPLE</h4>
        <p>All</p>
        <h4>IPHONE & MAC</h4>
        <p>IPhone</p>
        <p>Ipad</p>
        <p>Macbook</p>
        <h4>WIRELESS</h4>
        <p>Airpod</p>
        <p>watch</p>
        <h4>OTHER</h4>
        <p>Mouse</p>
        <p>Keyboard</p>
        <p>Other</p>
      </div>
      <div className={classes.rightCol}>2</div>
    </div>
  );
};

export default Middle;
