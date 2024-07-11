const userModel  = require('../../models/userModel') ;
async function AllUser(req, res) {
    try {
        const users = await userModel.find({});
        res.json({
            data: users,
            error: false,
            success: true,
            message: `All users ${users.length}`
        })
        
    } catch (error) {
        res.json({
            message: error.message || error,
            error : true,
            success: false,
        })
    }
}
module.exports = AllUser;