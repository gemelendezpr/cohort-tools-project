const { model, Schema } = require("mongoose")

const studentSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true},
    phone: { type: String, required: true, unique: true},
    linkedinUrl: { type: String, required: true, unique: true},
    languages: {type: [String], required: true},
    program: { type: String, required: true },
    background: { type: String, required: true },
    image: { type: String, default: "https://i.imgur.com/r8bo8u7.png" },
    projects: { type: [String] },
    cohort: { type: Schema.Types.ObjectId, ref: "Cohort"}
  });

module.exports = model("Student", studentSchema);