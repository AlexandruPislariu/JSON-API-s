const   express     = require("express");
        router      = express.Router();
const   helpers     = require("../helpers/todos");

// INDEX and NEW
router.route("/")
    .get(helpers.getTodos)
    .post(helpers.createTodo)

// SHOW, UPDATE and DELETE
router.route("/:todoId")
    .get(helpers.showTodo)
    .put(helpers.updateTodo)
    .delete(helpers.deleteTodo)

module.exports = router;