const router = require('express').Router();
const {
    CreateSingleNote,
    CreateBulkNotes,
    AllNotes,
    GetSingleNote,
    ReplaceNote,
    UpdateSingleNote,
    DeleteSingleNote,
    DeleteBulkNotes
} = require('../controllers/note.controllers');


router.post('/', CreateSingleNote);
router.post('/bulk', CreateBulkNotes);
router.get('/', AllNotes);
router.get('/:id', GetSingleNote);
router.put('/:id', ReplaceNote);
router.patch('/:id', UpdateSingleNote);
router.delete('/:id', DeleteSingleNote);
router.delete('/bulk', DeleteBulkNotes);

module.exports = router;
