import React, { useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function UpdateReview({ reviewId }) {
  const [review, setReview] = useState([]);
  const [comment, setComment] = useState("");
  let { houseId } = useParams();

  const updateReview = async () => {
    const token = localStorage.getItem("token");
    const newReview = await axios.put(
      process.env.REACT_APP_SERVER + `/houses/${houseId}/reviews/${reviewId}`,
      { comment: review },

      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log(newReview.data.data.comment);
    setReview(newReview.data.data.comment);
  };
  return (
    <div>
      <form>
        <label htmlFor="review">Comment</label>
        <input
          type="text"
          name="review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
        <Button onClick={() => updateReview()}>Update</Button>
      </form>
    </div>
  );
}
