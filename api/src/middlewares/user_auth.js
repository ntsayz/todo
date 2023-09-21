const saveUser = (req, res, next) => {
    const { username, email, full_name, password } = req.body;

    // Check for missing fields
    if (!username || !email || !full_name || !password) {
        return res.status(400).send("All fields (username, email, full_name, password) are required.");
    }

    // Check for valid email format (simple validation)

    if (is_email_valid(email)) {
        return res.status(400).send("Invalid email format.");
    }

    // Check for password strength (simple validation, can be extended)
    if (password.length < 8) {
        return res.status(400).send("Password must be at least 8 characters long.");
    }

    // If all validations pass, move to the next middleware/controller
    next();
};


const is_email_valid = (email) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
        return false;
    }
}

// implement a middleware that checks if the user is logged in

module.exports = {
    saveUser,
    is_email_valid
    // ... other exported middlewares if any
};