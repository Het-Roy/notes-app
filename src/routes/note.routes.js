const router = require('express').Router();
const {
    CreateSingleNote,
    CreateBulkNotes,
    AllNotes
} = require('../controllers/note.controllers');


router.post('/', CreateSingleNote);
router.post('/bulk', CreateBulkNotes);
router.get('/', AllNotes);

module.exports = router;
