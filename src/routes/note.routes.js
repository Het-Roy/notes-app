const router = require('express').Router();
const {
    CreateSingleNote
} = require('../controllers/note.controllers');


router.post('/', CreateSingleNote);

module.exports = router;
