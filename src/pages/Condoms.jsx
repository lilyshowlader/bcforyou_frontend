// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import styles from './Condoms.module.css'

// export default function Condoms() {

//   const [reviews, setReviews] = useState([]);
//   const [newReview, setNewReview] = useState('');
  
//   // Function to handle adding a new review
//   const addReview = () => {
//     if (newReview.trim() !== '') {
//       setReviews([...reviews, newReview]);
//       setNewReview('');
//       }
//     };

//   return (
//     <>
//       <div className={styles.centeredHeading}>
//         <h1 className={styles.heading}>birth control, for you.</h1>
//       </div>

//       <div className={styles.contentContainer}>
//         <div className={styles.imageContainer}>
//           <p className={styles.bcHeading}>CONDOMS</p>
//           <img
//             src='src/images/condoms.png'
//             alt='Condoms'
//             className={styles.condomImage}
//           />
//         </div>

//         <div className={styles.textContainer}>
//           <p className={styles.subHeading}>WHAT IS IT?</p>
//           <p className={styles.answer}>
// 					Condoms are thin, stretchy pouches that you wear on your penis during sex. Condoms provide great protection from both pregnancy and STDs. They’re easy to use and easy to get.
//           </p>
//           <p className={styles.subHeading}>HOW DOES IT WORK?</p>
//           <p className={styles.answer}>
// 					Condoms are small, thin pouches that cover your penis during sex and collect semen (cum). Condoms prevent pregnancy by stopping sperm from getting into the vagina, so sperm can’t meet up with an egg. Some types of condoms also help prevent STDs.
// 					<br></br>
// 					There are 3 types of condoms: latex condoms, plastic (non latex) condoms, and lambskin (animal skin) condoms.
//           </p>
//         </div>
//       </div>

//       <div className={styles.contentContainer}>
//       <div className={styles.textContainerTwo}>
//       <p className={styles.subHeading}>Latex condoms</p>
// 			<ul>
//         <li>Latex condoms are made from rubber and are the most common type of condom</li>
//         <li>Latex condoms help protect against both pregnancy and STDs.</li>
//         <li>Only use water-based or silicone lube with latex condoms — don’t use anything with oil, because oil can damage latex condoms.</li>
//       </ul>

// 						<p className={styles.subHeading}>Plastic condoms</p>
// 						<ul>
// 						<li>Plastic/non latex condoms are made from plastics like polyurethane, nitrile, or polyisoprene and are safe for people with latex allergies or sensitivities. </li>
//               <li>Plastic/non latex condoms help protect against both pregnancy and STDs.</li>
//               <li>You can use water-based and silicone lube with any kind of plastic condom. You can generally use oil-based lubes with plastic condoms. </li>
//             </ul>

// 						<p className={styles.subHeading}>Lambskin condoms</p>
// 						<ul>
// 						<li>Lambskin condoms are made from the lining of animal intestines (usually sheep).</li>
//               <li>Lambskin condoms only help protect against pregnancy — they don’t prevent STDs..</li>
//               <li>You can use any kind of lube, including oils, with lambskin condoms.</li>
//             </ul>

//         <p className={styles.bcHeading}>REVIEWS</p>
//         <p>leave a review</p>

//         <ul>
//             {reviews.map((review, index) => (
//               <li key={index}>{review}</li>
//             ))}
//           </ul>

//           <textarea
//             placeholder='love using condoms!'
//             value={newReview}
//             onChange={(e) => setNewReview(e.target.value)}
//             className={styles.textArea}
//           ></textarea>
//           <button onClick={addReview} className={styles.submitButton}>submit</button>




//       </div>
//       </div>
   
//       <div className={styles.contentContainer}>
//       <div>
//         <Link to="/menu">
//           <button className={styles.homeButton}>home</button>
//         </Link>
//       </div>
//       </div>

//       <div className={styles.endofpage}></div>
//     </>
//   );
// }

import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import styles from './Condoms.module.css';
import { submitReview, getReviews } from '../services/reviewService'

export default function Condoms() {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ title: '', text: '' });


  useEffect(() => {
    // Fetch reviews from the server when the component mounts
    async function fetchReviews() {
      try {
        const reviewsData = await getReviews(); // Implement the getReviews function
        setReviews(reviewsData);
      } catch (error) {
        console.error(error.message);
      }
    }

    fetchReviews();
  }, []);



  const handleReviewSubmit = async () => {
    try {
      // Submit the review using the service function
      const newReviewData = await submitReview(newReview);
  
      // Update the reviews state with the new review
      setReviews([...reviews, newReviewData]);

      // Clear the newReview state
      setNewReview({ title: '', text: '' });
    } catch (error) {
      console.error(error.message);
    }
  };


  return (
    <>

        <div className={styles.centeredHeading}>
        <h1 className={styles.heading}>birth control, for you.</h1>
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.imageContainer}>
          <p className={styles.bcHeading}>CONDOMS</p>
          <img
            src='src/images/condoms.png'
            alt='Condoms'
            className={styles.condomImage}
          />
        </div>

        <div className={styles.textContainer}>
          <p className={styles.subHeading}>WHAT IS IT?</p>
          <p className={styles.answer}>
					Condoms are thin, stretchy pouches that you wear on your penis during sex. Condoms provide great protection from both pregnancy and STDs. They’re easy to use and easy to get.
          </p>
          <p className={styles.subHeading}>HOW DOES IT WORK?</p>
          <p className={styles.answer}>
					Condoms are small, thin pouches that cover your penis during sex and collect semen (cum). Condoms prevent pregnancy by stopping sperm from getting into the vagina, so sperm can’t meet up with an egg. Some types of condoms also help prevent STDs.
					<br></br>
					There are 3 types of condoms: latex condoms, plastic (non latex) condoms, and lambskin (animal skin) condoms.
          </p>
        </div>
      </div>

      <div className={styles.contentContainer}>
      <div className={styles.textContainerTwo}>
      <p className={styles.subHeading}>Latex condoms</p>
			<ul>
        <li>Latex condoms are made from rubber and are the most common type of condom</li>
        <li>Latex condoms help protect against both pregnancy and STDs.</li>
        <li>Only use water-based or silicone lube with latex condoms — don’t use anything with oil, because oil can damage latex condoms.</li>
      </ul>

						<p className={styles.subHeading}>Plastic condoms</p>
						<ul>
						<li>Plastic/non latex condoms are made from plastics like polyurethane, nitrile, or polyisoprene and are safe for people with latex allergies or sensitivities. </li>
              <li>Plastic/non latex condoms help protect against both pregnancy and STDs.</li>
              <li>You can use water-based and silicone lube with any kind of plastic condom. You can generally use oil-based lubes with plastic condoms. </li>
            </ul>

						<p className={styles.subHeading}>Lambskin condoms</p>
						<ul>
						<li>Lambskin condoms are made from the lining of animal intestines (usually sheep).</li>
              <li>Lambskin condoms only help protect against pregnancy — they don’t prevent STDs..</li>
              <li>You can use any kind of lube, including oils, with lambskin condoms.</li>
            </ul>

          <p className={styles.bcHeading}>REVIEWS</p>

  
          <div className={styles.reviewForm}>
            <label htmlFor="reviewTitle">Title:</label>
            <input
              type="text"
              id="reviewTitle"
              placeholder="Review title"
              value={newReview.title}
              onChange={(e) => setNewReview({ ...newReview, title: e.target.value })}
              className={styles.inputField}
            />
            <label htmlFor="reviewText">Review:</label>
            <textarea
              id="reviewText"
              placeholder="Love using condoms!"
              value={newReview.text}
              onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
              className={styles.textArea}
            ></textarea>
            <button onClick={handleReviewSubmit} className={styles.submitButton}>
              Submit
            </button>
          </div>

          <ul>
            {reviews.map((review, index) => (
              <li key={index}>
                <p>Title: {review.title}</p>
                <p>Text: {review.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </>
  );
}
