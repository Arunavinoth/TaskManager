const mongoose = require("mongoose");

const TasksSchema = new mongoose.Schema({
    tasks: {
        type: String,
        reqired: true,
        trim: true
    },
    status: {
        type: String,
        enum: ['complete', 'incomplete'],
        default: 'incomplete'
    },
    owner_id: {
        type: Number,
        required: true,
    }
})

const Tasks = mongoose.model("Tasks", TasksSchema);

module.exports = Tasks;