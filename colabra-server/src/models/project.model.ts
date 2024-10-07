import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    status: {
        type: String,
        enum: ["pending", "completed", "abandoned", "planned"],
        default: 'planned'
    },
    dates: { type: [{ label: String, date: Date }] },
    category: { ref: "Category", type: mongoose.SchemaTypes.ObjectId },
    tech: [String], //techs/ stacks
    features: [{ name: String, status: { type: String, enum: ["in progress", "completed", "upcoming"] } }],
    problemSolution: String,
    Inspirations: [String],
    links: [{ label: String, link: String }],
    images: [String]

}, { timestamps: true });

export const Project = mongoose.model('Project', projectSchema);
