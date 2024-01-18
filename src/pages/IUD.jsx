import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './IUD.module.css'; 

export default function IUD() {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState('');
  
  // Function to handle adding a new review
  const addReview = () => {
    if (newReview.trim() !== '') {
      setReviews([...reviews, newReview]);
      setNewReview('');
      }
    };


  return (
    <>
      <div className={styles.centeredHeading}>
        <h1 className={styles.heading}>birth control, for you.</h1>
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.imageContainer}>
          <p className={styles.bcHeading}>THE IUD</p>
          <img
            src='src/images/iud.png'
            alt='IUD'
            className={styles.iudImage}
          />
        </div>

        <div className={styles.textContainer}>
          <p className={styles.subHeading}>WHAT IS IT?</p>
          <p className={styles.answer}>
            An IUD is a tiny device that's put into your uterus to prevent pregnancy. It’s long-term, reversible, and one of the most effective birth control methods out there.
          </p>
          <p className={styles.subHeading}>WHAT DOES IUD STAND FOR?</p>
          <p className={styles.answer}>
            IUD stands for Intrauterine Device (basically: a device inside your uterus). It's a small piece of flexible plastic shaped like a T. Sometimes it’s called an IUC — intrauterine contraception.
          </p>
          <p className={styles.subHeading}>WHAT ARE THE TYPES OF IUDS?</p>
          <p className={styles.answer}>
            There are 5 different brands of IUDs that are FDA approved for use in the United States:
            <ul>
              <li>Paragard</li>
              <li>Mirena</li>
              <li>Kyleena</li>
              <li>Liletta</li>
              <li>Skyla</li>
            </ul>
          </p>
        </div>
      </div>

      <div className={styles.contentContainer}>
      <div className={styles.textContainerTwo}>
        <p className={styles.subHeading}>These IUDs are divided into 2 types:</p>
        <p className={styles.answer}>
          Hormonal IUDs (Mirena, Kyleena, Liletta, and Skyla)
          <br />
          &amp;
          <br />
          Copper IUDs (Paragard)
          <br />
          <br />
          The Paragard IUD doesn’t have hormones. It’s wrapped in a tiny bit of copper, and it protects you from pregnancy for up to 12 years.

          The Mirena, Kyleena, Liletta, and Skyla IUDs use the hormone progestin to prevent pregnancy. Progestin is very similar to the hormone progesterone that our bodies make naturally. Mirena works for up to 8 years. Kyleena works for up to 5 years. Liletta works for up to 8 years. Skyla works for up to 3 years.
        </p>

        
        <p className={styles.reviewHeading}>REVIEWS</p>
        <p>leave a review</p>

        <ul>
            {reviews.map((review, index) => (
              <li key={index}>{review}</li>
            ))}
          </ul>

          <textarea
            placeholder='love my IUD!'
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
            className={styles.textArea}
          ></textarea>
          <button onClick={addReview} className={styles.submitButton}>submit</button>

          
      </div>
      </div>

      <div className={styles.contentContainer}>
      <div>
        <Link to="/menu">
          <button className={styles.homeButton}>home</button>
        </Link>
      </div>
      </div>

      <div className={styles.endofpage}></div>
    </>
  );
}
