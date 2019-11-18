'use strict';

const router  = require('express').Router();
const handler = require('../../handlers/project');

router.get('/', (req, res) => {
    handler.index(req.params.offset, req.params.limit).then(result => {
        res.status(200).json(result);
    });
});

router.get('/:id/', (req, res) => {
    handler.read(req.params.id).then(result => {
        res.status(200).json(result);
    });
});

router.post('/create/', (req, res) => {
    handler.create(req.body).then(result => {
        res.status(200).json(result);
    });
});

router.post('/update/:id/', (req, res) => {
    handler.update(req.params.id, req.body).then(result => {
        res.status(200).json(result);
    });
});

router.delete('/delete/:id/', (req, res) => {
    handler.delete(req.params.id).then(result => {
        res.status(200).json(result);
    });
});

module.exports = router;
