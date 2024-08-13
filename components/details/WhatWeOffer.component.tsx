import React from "react";
import styles from "./WhatWeOffer.module.scss";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

const WhatWeOffer = () => {
  return (
    <div className={styles.offer}>
      <div className={styles.offers}>
        <h1> What we offer</h1>
        <div className={styles.offerSection}>
          <div>
            <div className={styles.listItem}>
              <IoCheckmarkDoneOutline color="green" />
              <p>Understand how to create interesting Vue applications</p>
            </div>
            <div className={styles.listItem}>
              <IoCheckmarkDoneOutline color="green" />
              <p>
                Acquire the programming skills needed to obtain a software
                engineering job
              </p>
            </div>
            <div className={styles.listItem}>
              <IoCheckmarkDoneOutline color="green" />
              <p>
                Use Vuex to manage and update data stored in application state
              </p>
            </div>
            <div className={styles.listItem}>
              <IoCheckmarkDoneOutline color="green" />
              <p>Authenticate users with an advanced OAuth2 flow</p>
            </div>
            <div className={styles.listItem}>
              <IoCheckmarkDoneOutline color="green" />
              <p>Style content intelligently using CSS Grids</p>
            </div>
          </div>
          <div>
            <div className={styles.listItem}>
              <IoCheckmarkDoneOutline color="green" />
              <p>Create dynamic web apps using the latest in web technology</p>
            </div>
            <div className={styles.listItem}>
              <IoCheckmarkDoneOutline color="green" />
              <p>Navigate users between pages using Vue Router</p>
            </div>
            <div className={styles.listItem}>
              <IoCheckmarkDoneOutline color="green" />
              <p>
                Practice your skills with many large projects, exercises, and
                quizzes
              </p>
            </div>
            <div className={styles.listItem}>
              <IoCheckmarkDoneOutline color="green" />
              <p>Style content intelligently using CSS Grids</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.price}>hello</div>
    </div>
  );
};

export default WhatWeOffer;
