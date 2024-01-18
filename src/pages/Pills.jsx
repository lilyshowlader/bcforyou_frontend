import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Pills.module.css'; 

export default function Pills() {
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
          <p className={styles.bcHeading}>PILLS</p>
          <img
            src='src/images/pills.png'
            alt='Pills'
            className={styles.pillsImage}
          />
        </div>

        <div className={styles.textContainer}>
          <p className={styles.subHeading}>WHAT IS IT?</p>
          <p className={styles.answer}>
					Birth control pills are a kind of medicine with hormones. Birth control pills come in a pack, and you take 1 pill every day. The pill is safe, affordable, and effective if you always take your pill on time. Besides preventing pregnancy, the pill has lots of other health benefits, too.
          </p>
          <p className={styles.subHeading}>HOW DOES IT WORK?</p>
          <p className={styles.answer}>
					The birth control pill works by stopping sperm from joining with an egg. When sperm joins with an egg it’s called fertilization. The hormones in the pill safely stop ovulation. No ovulation means there’s no egg for sperm to fertilize, so pregnancy can’t happen.The pill’s hormones also thicken the mucus on the cervix. This thicker cervical mucus blocks sperm so it can’t swim to an egg — kind of like a sticky security guard.


          </p>
        </div>
      </div>

      <div className={styles.contentContainer}>
      <div className={styles.textContainerTwo}>
        <p className={styles.subHeading}>THERE ARE TWO KINDS OF BIRTH CONTROL PILLS</p>
			<ul>
              <li>Combination pills (aka combined oral contraceptives, or COCs) Combination pills have both estrogen and progestin. These are the most common type of birth control pill </li>
              <li>Progestin-only pills (aka POPs or mini pills) Progestin-only pills only have progestin.</li>
            </ul>

            <br></br>
            
						<p className={styles.subHeading}>HOW DO I MAKE THE PILL WORK BEST FOR ME?</p>
						<p className={styles.answer}>
						Forgetting pills, losing the pack, not refilling your prescription on time — these are the main reasons why people might get pregnant when they use the pill. It’s good to plan ahead and think about the best way for you to use the pill correctly. Here are some ways to help you remember to take your pills every day:
						</p>


						<ul>
              <li>Use a birth control reminder app or set an alarm on your phone.</li>
              <li>Keep your pill pack next to something you use every day (like your toothbrush or phone charger).</li>
              <li>Keep your pills in your bag so they’re always with you.</li>
            </ul>


        <p className={styles.bcHeading}>REVIEWS</p>
        <p>leave a review</p>

        
        <ul>
            {reviews.map((review, index) => (
              <li key={index}>{review}</li>
            ))}
          </ul>

          <textarea
            placeholder='love my bc pills!'
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

