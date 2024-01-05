const { model, Schema } = require("mongoose")

const cohortSchema = new Schema({
    inProgress: { type: Boolean, required: true },
    cohortSlug: { type: String, required: true },
    cohortName: { type: String, required: true },
    program: { type: String, required: true },
    campus: { type: String, required: true },
    startDate: { type: String, required: true },
    endDate: { type: String, required: true },
    programManager: { type: String, required: true },
    leadTeacher: { type: String, required: true },
    totalHours: { type: Number, min: 0 },
  });

module.exports = model("Cohort", cohortSchema);