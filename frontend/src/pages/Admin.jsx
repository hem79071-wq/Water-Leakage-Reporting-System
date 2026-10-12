import { useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import "../App.css";

function Admin() {
  const [reports, setReports] = useState([]);
  const [search, setSearch] = useState("");

  const isAdmin = localStorage.getItem("isAdmin");

  useEffect(() => {
    if (isAdmin === "true") {
      fetchReports();
    }
  }, [isAdmin]);

  const fetchReports = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/reports"
      );

      setReports(res.data);
    } catch (err) {
      console.log(err);
      alert("Unable to fetch reports");
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await axios.put(
        `http://localhost:5000/api/report/${id}`,
        {
          status: status,
        }
      );

      alert("Status Updated Successfully");

      fetchReports();
    } catch (err) {
      console.log(err);
      alert("Status Update Failed");
    }
  };

  const deleteReport = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this report?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(
        `http://localhost:5000/api/report/${id}`
      );

      alert("Report Deleted Successfully");

      fetchReports();
    } catch (err) {
      console.log(err);
      alert("Delete Failed");
    }
  };

  // Login pannala na Admin Login-ku anuppum
  if (isAdmin !== "true") {
    return <Navigate to="/admin-login" replace />;
  }

  return (
    <div className="admin">

      <h1>🚰 Admin Dashboard</h1>

      <h2>Total Reports: {reports.length}</h2>

      <input
        type="text"
        placeholder="Search by Name or Location..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "20px",
          borderRadius: "8px",
          border: "1px solid #ccc",
        }}
      />

      {reports.length === 0 ? (
        <h3>No Reports Found</h3>
      ) : (
        reports
          .filter((report) => {
            return (
              (report.name || "")
                .toLowerCase()
                .includes(search.toLowerCase()) ||
              (report.location || "")
                .toLowerCase()
                .includes(search.toLowerCase())
            );
          })
          .map((report, index) => (
            <div
              className="report-card"
              key={report._id}
            >

              <h3>Complaint {index + 1}</h3>

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
                <strong>Description:</strong>{" "}
                {report.description}
              </p>

              <p>
                <strong>Status:</strong>{" "}

                <select
                  value={report.status || "Pending"}
                  onChange={(e) =>
                    updateStatus(
                      report._id,
                      e.target.value
                    )
                  }
                >
                  <option value="Pending">
                    Pending
                  </option>

                  <option value="In Progress">
                    In Progress
                  </option>

                  <option value="Resolved">
                    Resolved
                  </option>
                </select>
              </p>

              {report.image && (
                <img
                  src={`http://localhost:5000/uploads/${report.image}`}
                  alt="Water Leakage"
                  className="submitted-image"
                />
              )}

              <br />

              <button
                onClick={() =>
                  deleteReport(report._id)
                }
                style={{
                  marginTop: "10px",
                  background: "red",
                  color: "white",
                  border: "none",
                  padding: "10px 15px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Delete Report
              </button>

            </div>
          ))
      )}

    </div>
  );
}

export default Admin;