import styles from './ReviewList.module.css'

const ReviewList = (props) => {
  return (
		<>
    <main className={styles.container}>
      {props.reviews.map((review) => (
        <p key={review._id}>
          {review.title}
        </p>
      ))}
    </main>
		</>
  )
}

export default ReviewList