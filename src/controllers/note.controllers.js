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

const CreateBulkNotes = async (req, res) => {
    try {
        const { notes } = req.body;

        if (!notes || !Array.isArray(notes) || notes.length === 0) {
            return res.status(400).json({
                success: false,
                message: "Provide a non-empty 'notes' array",
                data: []
            });
        }

        const createdNotes = await Note.insertMany(notes);

        res.status(201).json({
            success: true,
            message: `${createdNotes.length} notes created successfully`,
            data: createdNotes
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to create notes"
        });
    }
};

const AllNotes = async (req, res) => {
    try {
        const notes = await Note.find();
        res.status(200).json({
            success: true,
            message: "Notes fetched successfully",
            data: notes
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch notes"
        });
    }
};

const GetSingleNote = async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).json({
                success: false,
                message: "Note not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Note fetched successfully",
            data: note
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch note"
        });
    }
};
    
const ReplaceNote = async (req, res) => {
    try {
        const note = await Note.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, overwrite: true, runValidators: true }
        );
        if (!note) {
            return res.status(404).json({
                success: false,
                message: "Note not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Note replaced successfully",
            data: note
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to replace note"
        });
    }
};

const UpdateSingleNote = async (req, res) => {
    try {
        const note = await Note.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!note) {
            return res.status(404).json({
                success: false,
                message: "Note not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Note updated successfully",
            data: note
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to update note"
        });
    }
};

const DeleteSingleNote = async (req, res) => {
    try {
        const note = await Note.findByIdAndDelete(req.params.id);
        if (!note) {
            return res.status(404).json({
                success: false,
                message: "Note not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Note deleted successfully",
            data: null
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to delete note"
        });
    }
};

const DeleteBulkNotes = async (req, res) => {
    try {
        const { ids } = req.body;

        if (!ids || !Array.isArray(ids) || ids.length === 0) {
            return res.status(400).json({
                success: false,
                message: "Provide a non-empty 'ids' array",
                data: null
            });
        }

        const result = await Note.deleteMany({ _id: { $in: ids } });

        res.status(200).json({
            success: true,
            message: `${result.deletedCount} notes deleted successfully`,
            data: null
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to delete notes"
        });
    }
};

module.exports = {
    CreateSingleNote,
    CreateBulkNotes,
    AllNotes,
    GetSingleNote,
    ReplaceNote,
    UpdateSingleNote,
    DeleteSingleNote,
    DeleteBulkNotes
};