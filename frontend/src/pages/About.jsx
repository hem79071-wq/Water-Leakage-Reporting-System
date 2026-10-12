import "../App.css";

function About() {
  return (
    <div className="about-page">

      <h1>💧 About Water Leak Reporter</h1>

      <p className="about-intro">
        Water Leak Reporter is a web-based application developed to help
        citizens quickly report water leakage problems. Users can submit
        complaints with location, image, and description so that authorities
        can identify and resolve issues faster.
      </p>

      <div className="about-card">

        <h2>🎯 Project Objective</h2>

        <p>
          The main objective of this project is to provide a simple,
          user-friendly and efficient platform for reporting water leakage
          complaints digitally. It reduces manual reporting and improves
          communication between citizens and authorities.
        </p>

      </div>

      <div className="about-card">

        <h2>✨ Key Features</h2>

        <ul>
          <li>✔ Report water leakage complaints</li>
          <li>✔ Upload leakage images</li>
          <li>✔ Select exact location using Google Map</li>
          <li>✔ Admin Dashboard to manage reports</li>
          <li>✔ Search complaints easily</li>
          <li>✔ Update complaint status</li>
          <li>✔ Delete resolved complaints</li>
          <li>✔ Mobile number validation</li>
        </ul>

      </div>

      <div className="about-card">

        <h2>🛠 Technologies Used</h2>

        <table className="tech-table">

          <tbody>

            <tr>
              <td><b>Frontend</b></td>
              <td>React JS + Vite</td>
            </tr>

            <tr>
              <td><b>Backend</b></td>
              <td>Node.js + Express.js</td>
            </tr>

            <tr>
              <td><b>Database</b></td>
              <td>MongoDB Atlas</td>
            </tr>

            <tr>
              <td><b>Maps</b></td>
              <td>Leaflet + OpenStreetMap</td>
            </tr>

            <tr>
              <td><b>API Testing</b></td>
              <td>Postman</td>
            </tr>

          </tbody>

        </table>

      </div>

      <div className="about-card">

        <h2>🚀 Future Scope</h2>

        <ul>
          <li>Email notification to authorities</li>
          <li>Live complaint tracking</li>
          <li>SMS alerts</li>
          <li>Priority-based complaint handling</li>
          <li>Mobile Application</li>
        </ul>

      </div>

      <div className="about-card">

        <h2>📌 Conclusion</h2>

        <p>
          Water Leak Reporter provides an efficient and reliable way for
          citizens to report water leakage incidents. The application improves
          response time, simplifies complaint management, and helps conserve
          water resources through digital reporting.
        </p>

      </div>

    </div>
  );
}

export default About;