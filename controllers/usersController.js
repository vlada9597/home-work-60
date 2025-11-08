// controllers/usersController.js


exports.getUsers = (req, res) => {
res.type('text/plain').send('Get users route');
};


exports.postUsers = (req, res) => {
res.type('text/plain').send('Post users route');
};


exports.getUserById = (req, res) => {
const { userId } = req.params;
res.type('text/plain').send(`Get user by Id route: ${userId}`);
};


exports.putUserById = (req, res) => {
const { userId } = req.params;
res.type('text/plain').send(`Put user by Id route: ${userId}`);
};


exports.deleteUserById = (req, res) => {
const { userId } = req.params;
res.type('text/plain').send(`Delete user by Id route: ${userId}`);
};