const mongoose = require('mongoose');

const Employees = new mongoose.Schema({
    Employee: {
        id: Number, 
        name: String,
        title: String,
        department: {
            type: [String],
            enum: [
                "SALES",
                "CORPORTATE",
                "ACCOUNTING",
                "RECEPTION",
                "HUMAN_RESOURCES"
            ],
        salary: Number,
        manager: String
        },
    }

    }
});

module.exports = mongoose.model('Employee', Employees);
