// controllers/userDashboardController.js

const User = require("../models/userModel");
const HealthRecord = require("../models/healthRecordModel");

// Get User Dashboard Data

const getUserDashboard = async (req, res) => {
    try {

        // Logged in user id
        const userId = req.user.id;

        // Find user
        const user = await User.findById(userId).select("-password");

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        // Get latest health records
        const records = await HealthRecord.find({ user: userId })
            .sort({ createdAt: -1 })
            .limit(10);

        // Dashboard statistics
        const totalRecords = await HealthRecord.countDocuments({
            user: userId
        });

        // Latest health data
        const latestRecord = records[0];

        // Response
        res.status(200).json({
            success: true,
            dashboard: {
                user,
                totalRecords,

                latestHealthData: latestRecord
                    ? {
                        heartRate: latestRecord.heartRate,
                        oxygenLevel: latestRecord.oxygenLevel,
                        bloodPressure: latestRecord.bloodPressure,
                        sugarLevel: latestRecord.sugarLevel,
                        temperature: latestRecord.temperature,
                        recordedAt: latestRecord.createdAt
                    }
                    : null,

                recentRecords: records
            }
        });

    } catch (error) {

        console.error("Dashboard Error:", error);

        res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
};


module.exports = {
    getUserDashboard
};