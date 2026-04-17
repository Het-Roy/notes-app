const Note = require('../models/note.model');

// 1. POST /api/notes — Create a single note
const CreateSingleNote = async (req, res) => {
    try {
        if (!req.body.title || !req.body.content) {
            return res.status(400).json({
                success: false,
                message: "Title and content are required",
                data: {}
            });
        }
        const note = new Note(req.body);
        await note.save();
        res.status(201).json({
            success: true,
            message: "Note created successfully",
            data: note
        });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to create note" });
    }
};



module.exports = {
    CreateSingleNote
};