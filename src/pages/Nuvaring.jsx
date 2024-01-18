import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './NuvaRing.module.css'; 

export default function NuvaRing() {
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
          <p className={styles.bcHeading}>NUVARING</p>
          <img
            src='src/images/nuvaring.png'
            alt='NuvaRing'
            className={styles.nuvaRingImage}
          />
        </div>

        <div className={styles.textContainer}>
          <p className={styles.subHeading}>WHAT IS IT?</p>
          <p className={styles.answer}>
					The birth control ring is a safe and convenient birth control method that works really well if you always use it correctly. You wear a small, flexible ring inside your vagina, and it prevents pregnancy 24/7 by releasing hormones into your body. 
          </p>
          <p className={styles.subHeading}>HOW DOES IT WORK?</p>
          <p className={styles.answer}>
					The ring works by stopping sperm from joining with an egg (which is called fertilization). Each NuvaRing lasts for up to 5 weeks. You take your old NuvaRing out of your vagina and put in a new one about once a month, depending on the ring schedule you choose. You can also use NuvaRing to safely skip your period if you want to. 
          </p>
        </div>
      </div>

      <div className={styles.contentContainer}>
      <div className={styles.textContainerTwo}>
        <p className={styles.subHeading}>HOW DO I MAKE THE RING WORK BEST FOR ME?</p>
				<ul>
              <li>Use a calendar to mark the days you need to take out the ring, put in the ring, and get a new ring.</li>
              <li>Use a birth control reminder app or set an alarm on your phone.</li>
            </ul>

            <br></br>
            
						<p className={styles.subHeading}>TAKING CARE OF YOUR RING PROPERLY</p>
				<ul>
              <li>Keep your ring(s) in the same place so you don’t lose them.</li>
              <li>Store NuvaRings at room temperature, and away from direct sunlight for up to 4 months (16 weeks). Keep any NuvaRings that you won’t use within 4 months in the refrigerator.</li>
            </ul>


        <p className={styles.reviewHeading}>REVIEWS</p>
        <p>leave a review</p>

        <ul>
            {reviews.map((review, index) => (
              <li key={index}>{review}</li>
            ))}
          </ul>

          <textarea
            placeholder='love my NuvaRing!'
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

