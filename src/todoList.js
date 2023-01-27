/**
 * Todo App
 *
 * @author Sujeong Ku
 * @see {@link https://github.com/sujeong-dev/wanted-pre-onboarding-challenge-fe-2}
 *
 */

/**
 *
 * @typedef {object} Todo
 * @description data modeling of todolist
 * @property {string} id — user ID
 * @property {string} content - content of To do
 * @property {boolean} isDone - whether To do is done(Default value: false)
 * @property {string} category — type of To do
 * @property {Array} tags — words to identify content on a specific topic
 */

/**
 * Create todolist
 * @function createTodo
 * @param {string} id - user ID
 * @param {string} content - content of To do
 * @param {string} category - type of To do
 * @param {Array} tags - words to identify content
 * @throws Will throw an error if content is empty.
 */
const createTodo = (id, content, category, tags) => {};

/**
 * Read all todolist
 * @function getTodoListAll
 * @returns {Array} Searched to do list
 */
const getTodoListAll = () => {};

/**
 * Read all todolist or todolist based on the id
 * @function getTodoListById
 * @param {string} id - user ID
 * @param {string} keyword - word to search
 * @returns {Array} Searched to do list
 */
const getTodoListById = (id, keyword) => {};

/**
 * Update todolist.
 * If id is not empty, Call 'getTodoListById' function and Modify a specific tag of a specific task.
 * @function updateTodo
 * @param {string} id - user ID
 * @param {string|boolean|Array} target - what to update(Only content, isDone, category, tags)
 * @param {string|boolean} toBe - content to update
 * @throws Will throw an error if target is Id .
 */
const updateTodo = (id, target, toBe) => {};

/**
 * Delete all todolist
 * @function deleteTodoAll
 * @returns {Array} Searched to do list
 */
const deleteTodoAll = () => {};
