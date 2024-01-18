import * as tokenService from './tokenService'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/reviews`


// VIEW ALL REVIEWS
const getReviews = async () => {
  const res = await fetch(`${BASE_URL}`, {
    headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
  });
  return res.json();
};

// CREATE REVIEW
const submitReview = async (newReview) => {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newReview), 
    });

    if (res.ok) {
      return res.json();
    } else {
      throw new Error('Review submission failed');
    }
  } catch (error) {
    console.error(error);
  }
}


export { getReviews, submitReview };


