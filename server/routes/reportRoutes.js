const express = require("express");
const router = express.Router();

const Report = require("../models/Report");
const multer = require("multer");


// ================== IMAGE UPLOAD SETUP ==================

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },

  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });



// ================== POST REPORT ==================

router.post("/report", upload.single("image"), async (req, res) => {

  console.log("BODY:", req.body);
  console.log("FILE:", req.file);

  try {

    const report = new Report({

      name: req.body.name,

      location: req.body.location,

      description: req.body.description,

      phone: req.body.phone,

      image: req.file ? req.file.filename : "",

      status: "Pending"

    });


    await report.save();


    console.log("Saved:", report);


    res.status(201).json({

      message: "Report Saved Successfully",

      data: report

    });


  } catch (err) {


    console.error("Error:", err);


    res.status(500).json({

      message: "Error Saving Report",

      error: err.message

    });

  }

});




// ================== GET ALL REPORTS ==================

router.get("/reports", async (req, res) => {

  try {


    const reports = await Report.find().sort({ createdAt: -1 });


    res.json(reports);


  } catch (err) {


    console.error(err);


    res.status(500).json({

      message: "Error fetching reports"

    });


  }

});





// ================== UPDATE STATUS ==================

router.put("/report/:id", async (req, res) => {

  try {


    const updatedReport = await Report.findByIdAndUpdate(

      req.params.id,

      {
        status: req.body.status
      },

      {
        new: true
      }

    );


    res.json(updatedReport);


  } catch (err) {


    console.error(err);


    res.status(500).json({

      message: "Status update failed"

    });


  }

});





// ================== DELETE REPORT ==================

router.delete("/report/:id", async (req, res) => {

  try {


    await Report.findByIdAndDelete(req.params.id);


    res.json({

      message: "Report Deleted Successfully"

    });


  } catch (err) {


    console.error(err);


    res.status(500).json({

      message: "Delete Failed"

    });


  }

});





module.exports = router;