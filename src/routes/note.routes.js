const router = require('express').Router();
const {
    CreateSingleNote,
    CreateBulkNotes
} = require('../controllers/note.controllers');


router.post('/', CreateSingleNote);
router.post('/bulk', CreateBulkNotes);

module.exports = router;
