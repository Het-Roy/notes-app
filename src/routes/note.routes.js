const router = require('express').Router();
const {
    CreateSingleNote,
    CreateBulkNotes,
    AllNotes,
    GetSingleNote
} = require('../controllers/note.controllers');


router.post('/', CreateSingleNote);
router.post('/bulk', CreateBulkNotes);
router.get('/', AllNotes);
router.get('/:id', GetSingleNote);

module.exports = router;
