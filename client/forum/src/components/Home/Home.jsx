import { useContext } from "react";
import { UserContext } from "../../pages/Landing";

function Home() {
  const { person } = useContext(UserContext); // Destructure person from context

  return (
    <div>
      <h1>Home</h1>
      <h2>Welcome: {person?.username || "Guest"}</h2>
    </div>
  );
}

export default Home;
