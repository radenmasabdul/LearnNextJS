import User from "@/components/user";

const UsersList = ({ users }) => {
  return (
    <>
      <h1 className="text-red-700 text-4xl">List of Users</h1>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <User user={user} />
          </div>
        );
      })}
    </>
  );
};

export default UsersList;

//static generation with get static props (run only on the server side)
//get static props hanya diperbolehkan di halaman dan tidak dapat dapat dijalankan dari komponen biasa 
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);

  return {
    props: {
      users: data,
    },
  };
}
