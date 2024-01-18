import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './ThePatch.module.css'; 
import ReviewList from './ReviewList/ReviewList';

export default function ThePatch() {
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
          <p className={styles.bcHeading}>THE PATCH</p>
          <img
            src='src/images/patch.png'
            alt='The Patch'
            className={styles.patchImage}
          />
        </div>

        <div className={styles.textContainer}>
          <p className={styles.subHeading}>WHAT IS IT?</p>
          <p className={styles.answer}>
					The transdermal contraceptive patch is a safe and convenient birth control method that works really well if you always use it correctly. You wear the patch on certain parts of your body, and it releases hormones through your skin that prevent pregnancy. 
					<br></br>
          </p>
          <p className={styles.subHeading}>HOW DOES IT WORK</p>
          <p className={styles.answer}>
						The birth control patch, like Xulane or Twirla, prevents pregnancy by inhibiting fertilization through hormones that stop ovulation and thicken cervical mucus to block sperm. It's applied on the belly, butt, back, or upper arm, and the hormones are absorbed through the skin to provide contraception.
          </p>
          <p className={styles.subHeading}>HOW DO I MAKE THE PATCH WORK BEST FOR ME?</p>
          <p className={styles.answer}>
					To get the patch’s full birth control powers, you have to use it correctly. Making a mistake — like forgetting to refill your prescription or not putting on a new patch on time — is the main reason why people might get pregnant when they’re using the patch.
          </p>
        </div>
      </div>

      <div className={styles.contentContainer}>
      <div className={styles.textContainerTwo}>
        <p className={styles.subHeading}>TIPS TO HELP YOU STAY ON SCHEDULE</p>
				<ul>
              <li>Use Spot On, our birth control reminder app or set a weekly alarm on your phone.</li>
              <li>Note your patch change days on your calendar.</li>
              <li>Be patch buddies with friends or family members who also use the patch, and help each other remember.</li>
              <li>Your partner can help remind you.</li>
            </ul>


						<p className={styles.reviewHeading}>REVIEWS</p>
            <p>leave a review</p>

            <ul>
            {reviews.map((review, index) => (
              <li key={index}>{review}</li>
            ))}
          </ul>

          <textarea
            placeholder='love the patch!'
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
            className={styles.textArea}
          ></textarea>
          <button onClick={addReview} className={styles.submitButton}>submit</button>

          
      </div>
      </div>
              <ReviewList></ReviewList>
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
