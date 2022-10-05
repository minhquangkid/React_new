import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.back}>
      <div className={classes.frame}>
        <div>
          <h3>CUSTOMER SERVICES</h3>
          <p>Help & Contact Us</p>
          <p>Returns & Refunds</p>
          <p>Online Stores</p>
          <p>Term & Conditions</p>
        </div>
        <div>
          <h3>COMPANY</h3>
          <p>What We Do</p>
          <p>Available Services</p>
          <p>Latest Posts</p>
          <p>FAQs</p>
        </div>
        <div>
          <h3>SOCIAL MEDIA</h3>
          <p>Twitter</p>
          <p>Instagram</p>
          <p>FaceBook</p>
          <p>Pinterest</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
