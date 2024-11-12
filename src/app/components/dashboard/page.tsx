import React from "react";
// import RegisterPage from "../../register/page";
import Link from "next/link";

const Dashboard = () => {
  return (
    <div>
      Dashboard <Link href={"/register"}>Register</Link>
    </div>
  );
};

export default Dashboard;
