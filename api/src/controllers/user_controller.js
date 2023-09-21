const bcrypt = require('bcrypt');
const user_model = require('../models/user_model');


const signup = async (req, res) => {
    try {
        const { username, email, full_name, password } = req.body;
        
        if (await user_model.doesUserExist(username, email)) {
            return res.status(409).send("Username or email already exists.");
        }

        const user_id = await user_model.create_user(username, email, full_name, password);
        res.json({ success: true, user_id });

    } catch (error) {
        res.status(500).send("Error registering user.");
    }
};

const getUserById = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await user_model.get_user_by_id(userId);

        if (!user) {
            return res.status(404).send("User not found.");
        }

        res.json(user);
    } catch (error) {
        console.error("Error fetching user by ID:", error);
        res.status(500).send("Internal Server Error");
    }
};

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        
        // Fetch user details from DB
        const user = await user_model.get_user_by_username_or_email(username);

        if (!user) {
            return res.status(404).send("User not found.");
        }

        // Check password
        const passwordMatch = await bcrypt.compare(password, user.password);
        
        if (!passwordMatch) {
            return res.status(401).send("Invalid credentials.");
        }

        // Here, you can generate and send a token for the authenticated user, or any other logic you want

        res.json({ success: true, user_id: user.id });

    } catch (error) {
        res.status(500).send("Error during login.");
    }
};

module.exports = { 
    signup,
    login 
};