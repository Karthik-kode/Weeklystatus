const db = require('../entities')
const reports = db.Report

const createReport = async (req ,  res)  => {
    try {

        // Extract the admin data from the request body
        // const {name,description,venue,date,start_time,end_time } = req.body;
        console.log(req.body)
        const formData = req.body;
        console.log("FD",formData);
        console.log("FDID" , formData.page1.projectID);
        const report = await reports.create({
            projectID: formData.page1.projectID,
            projectName: formData.page1.projectName,
            startDate: formData.page1.startDate,
            endDate: formData.page1.endDate,
            projectStatus: formData.page1.projectStatus,
            activitiesPlannedThisWeek: formData.page2.activitiesPlannedThisWeek,
            activitiesPlannedNextWeek: formData.page2.activitiesPlannedNextWeek,
            issueRisk: formData.page3.issueRisk,
            impact: formData.page3.impact,
            mitigations: formData.page3.mitigations,
          });

      

        // Send a response indicating success
        console.log('Report created:', report.toJSON());
        res.status(201).json({ message: 'report added successfully' });
    } catch (err) {
        // Handle any errors that occur during the addition process
        console.error(err);
        res.status(500).json({ error: 'Failed to create report' });
    }
}

const fetchReport = async(req , res) => {

    const name = req.params.name
    try{
        console.log("inside try")
        const projectDetails = await reports.findOne({ where: { projectName: name } });
        console.log("after fertch")
    
        if (!projectDetails) {
             return res.status(404).json({ message: 'Project not found' });
        }
    
        res.json(projectDetails);
        console.log('Report fetched: ', name);
        // res.status(201).json({ message: 'report fetched successfully' });

    }
    catch(err){
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch report' });
    }

}

module.exports = {
    createReport,
    fetchReport
}