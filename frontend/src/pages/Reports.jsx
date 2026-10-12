import { useEffect, useState } from "react";
import axios from "axios";

function Reports() {

  const [reports, setReports] = useState([]);


  useEffect(() => {

    axios.get("http://localhost:5000/api/reports")

    .then((response) => {

      setReports(response.data);

    })

    .catch((error) => {

      console.log(error);

    });

  }, []);



  return (

    <div>

      <h1>All Water Leakage Reports</h1>


      {
        reports.map((report) => (

          <div key={report._id}>

            <h3>
              Complaint ID: WL-{report._id.slice(-6).toUpperCase()}
            </h3>

            <p>
              Name: {report.name}
            </p>


            <p>
              Location: {report.location}
            </p>


            <p>
              Description: {report.description}
            </p>


            <p>
              Phone: {report.phone}
            </p>


            <p>
              Status: {report.status}
            </p>


            <hr />

          </div>

        ))
      }


    </div>

  );

}


export default Reports;