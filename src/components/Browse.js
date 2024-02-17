import React from "react";
import Header from "./Header";
// import toast, { Toaster } from "react-hot-toast";

const Browse = () => {
  // useEffect(() => {
  //   // Display success toast only if it hasn't been displayed before

  //   toast.success("Logged In Successfully !!!");
  // }, []);

  return (
    <div>
      {/* <Toaster position="top-center" reverseOrder={false} />{" "} */}
      {/* Toaster component for displaying toasts */}
      <Header />
    </div>
  );
};

export default Browse;
