import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  return (
    <div className="home">

      <h1>💧 Save Every Drop of Water</h1>

      <p>
        Report water leakage in your area quickly and
        help save thousands of liters of water.
      </p>

      <button onClick={() => navigate("/report")}>
      🚰 Report Water Leak
      </button>

    </div>
  );
}

export default Home;