import useSWR from "swr";
import Link from "next/link";

const fetcher = async () => {
  const response = await fetch("http://localhost:4000/dashboard");
  const data = await response.json();
  return data;
};

const DashboardSWR = () => {
  const { data, error } = useSWR("dashboard", fetcher);

  if (error) return "An error has occured";
  if (!data) return "Loading";

  return (
    <>
      <h1 className="text-red-700 text-4xl">Dashboard</h1>
      <h2>Posts : {data.posts}</h2>
      <h2>Likes : {data.likes}</h2>
      <h2>Followers : {data.followers}</h2>
      <h2>Following : {data.following}</h2>
      <Link href="/">Back to Home</Link>
      <hr />
    </>
  );
};

export default DashboardSWR;
