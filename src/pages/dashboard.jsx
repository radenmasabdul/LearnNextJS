import { useEffect, useState } from "react";
import Link from "next/link";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    async function fetchDashboardData() {
      const response = await fetch("http://localhost:4000/dashboard");
      const data = await response.json();
      setDashboardData(data);
      setIsLoading(false);
    }
    fetchDashboardData();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h1 className="text-red-700 text-4xl">Dashboard</h1>
      <h2>Posts : {dashboardData.posts}</h2>
      <h2>Likes : {dashboardData.likes}</h2>
      <h2>Followers : {dashboardData.followers}</h2>
      <h2>Following : {dashboardData.following}</h2>
      <Link href="/">Back to Home</Link>
      <hr />
    </>
  );
};

export default Dashboard;
