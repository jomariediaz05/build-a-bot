'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _tasksController = require('../controllers/tasks-controller');

var taskController = _interopRequireWildcard(_tasksController);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post('/task', taskController.create);
router.get('/task', taskController.index);
router.get('/task/:id', taskController.show);
router.put('/task', taskController.update);
router.delete('/task', taskController.remove);

exports.default = router;