// pages/feedback.js
import { useState } from "react";

function FeedbackPage() {
  const [feedback, setFeedback] = useState("");

  function handleChange(event: any) {
    setFeedback(event.target.value);
  }

  function handleSubmit(event: any) {
    event.preventDefault();

    // Send the feedback to your server
    fetch("/api/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ feedback }),
    });

    // Reset the feedback field
    setFeedback("");
  }

  return (
    <div>
      <h1>Feedback</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          name="feedback"
          value={feedback}
          onChange={handleChange}
          placeholder="Enter your feedback here"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FeedbackPage;
