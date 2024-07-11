async function userLogout(req, res  ) {
    try {
        res.clearCookie('token');
        res.status(200).json({
            message: "Logout successfully",
            success: true,
            error: false,
            data: []
        });


    }catch (err) { 
        res.json({
            error: true,
            success: false,
            message: err.message || err
        });
    }
}

module.exports = userLogout;