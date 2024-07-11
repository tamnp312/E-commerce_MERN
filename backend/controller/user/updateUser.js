const userModel = require("../../models/userModel");

async function updateUser(req, res) {
    try {
        const { userId, email, name, role } = req.body;

        // Tạo đối tượng payload chỉ chứa các thuộc tính có giá trị truthy
        const payload = {
            ...(email && { email }),
            ...(name && { name }),
            ...(role && { role }),
        };

        // Cập nhật thông tin người dùng dựa trên userId từ body yêu cầu
        const updatedUser = await userModel.findByIdAndUpdate(userId, payload, { new: true });

        res.json({
            data: updatedUser,
            message: "User Updated",
            success: true,
            error: false
        });
    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false
        });
    }
}

module.exports = updateUser;
