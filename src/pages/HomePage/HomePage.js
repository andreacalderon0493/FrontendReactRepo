import React from "react";

const HomePage = () => {
  // The "user" value from this Hook contains user information (id, userName, email) from the decoded token
  // The "token" value is the JWT token sent from the backend that you will send back in the header of any request requiring authentication

  return (
    <div className="container">
      <h1>Welcome!</h1>
      <h2>Please navigate to the Search Bar for Books! Enjoy!</h2>
    </div>
  );
};

export default HomePage;
