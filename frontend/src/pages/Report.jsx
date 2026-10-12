import "../App.css";
import { useState } from "react";
import axios from "axios";
import MapPicker from "../components/MapPicker";

function Report() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState(null);
  const [report, setReport] = useState(null);
  // Get Current Location
const getCurrentLocation = () => {
  if (!navigator.geolocation) {
    alert("Geolocation is not supported by this browser.");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      setLocation(`${lat}, ${lng}`);
    },
    () => {
      alert("Unable to fetch your location.");
    }
  );
};

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("phone", phone);
      formData.append("location", location);
      formData.append("description", description);

      if (image) {
        formData.append("image", image);
      }

      const response = await axios.post(
        "http://localhost:5000/api/report",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data);

      setReport({
        id: "WL-" + response.data.data._id.slice(-6).toUpperCase(),
        name,
        phone,
        location,
        description,
        image:
          "http://localhost:5000/uploads/" + response.data.data.image,
        date: new Date().toLocaleString(),
        status: "Pending",
      });

      setName("");
      setPhone("");
      setLocation("");
      setDescription("");
      setImage(null);

      alert("Report Submitted Successfully!");

    } catch (error) {
      console.error("Submit Error:", error);
      alert("Failed to submit report");
    }
  };


  return (
    <div className="report">

      <h1>🚰 Report Water Leakage</h1>

      <form onSubmit={handleSubmit}>

        {/* Name */}
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />


        {/* Phone */}
        <input
          type="tel"
          placeholder="Enter 10-digit Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          pattern="[0-9]{10}"
          maxLength={10}
          title="Please enter a valid 10-digit phone number"
          required
        />


        {/* Map Location */}
        <label>
          <strong>Select Location on Map</strong>
        </label>

        <MapPicker setLocation={setLocation} />


        <input
          type="text"
          value={location}
          placeholder="Selected Location"
          readOnly
          required
          style={{ marginTop: "10px" }}
        />
        <button
  type="button"
  onClick={getCurrentLocation}
  style={{
    marginTop: "10px",
    marginBottom: "15px",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    padding: "10px",
    borderRadius: "5px",
    cursor: "pointer",
  }}
>
📍 Use Current Location
</button>


        {/* Description */}
        <textarea
          placeholder="Describe the water leakage"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />


        {/* Image Upload */}
        <input
          type="file"
          accept="image/*"
          required
          onChange={(e) => {
            const file = e.target.files[0];

            if (file) {
              setImage(file);
            }
          }}
        />


        {/* Image Preview */}
        {image && (
          <img
            src={URL.createObjectURL(image)}
            alt="Preview"
            className="preview-image"
          />
        )}


        <button type="submit">
          Submit Report
        </button>

      </form>



      {/* Report Card */}

      {report && (

        <div className="report-card">

          <h2>Submitted Report</h2>

          <p>
            <strong>Complaint ID:</strong> {report.id}
          </p>

          <p>
            <strong>Name:</strong> {report.name}
          </p>

          <p>
            <strong>Phone:</strong> {report.phone}
          </p>

          <p>
            <strong>Location:</strong> {report.location}
          </p>

          <p>
            <strong>Description:</strong> {report.description}
          </p>

          <p>
            <strong>Date:</strong> {report.date}
          </p>

          <p>
            <strong>Status:</strong> {report.status}
          </p>


          <img
            src={report.image}
            alt="Water Leakage"
            className="submitted-image"
          />

        </div>

      )}

    </div>
  );
}

export default Report;