import React from "react";
import styles from "./Apply.module.scss";
import course from "../../public/images/course3.jpg";
import Image from "next/image";
import { Rate } from "antd";

const ApplyComponent = () => {
  return (
    <div className={styles.application}>
      <Image src={course} alt={"image"} className="w-[600px]" />
      <div className={styles.details}>
        <h1>Node.js, Express, MongoDB & More: The Complete Bootcamp</h1>
        <p>
          Master Node by building a real-world RESTful API and web app (with
          authentication, Node.js security, payments &amp; more)
        </p>
        <div className={styles.review}>
          <p>4.7</p>
          <Rate disabled allowHalf defaultValue={4.7} />
        </div>
      </div>
    </div>
  );
};

export default ApplyComponent;
