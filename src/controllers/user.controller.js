const catchError = require('../utils/catchError');
const User = require('../models/User');

const getAll = catchError(async(req, res) => {
    // Operaciones...
    const users = await User.findAll();
    return res.json(users);
});

const create = catchError(async(req, res) => {
    const { first_name, last_name, email, password, birthday } = req.body;
    const user = await User.create({ 
        first_name : first_name,
        last_name : last_name,
        email : email,
        password : password,
        birthday : birthday  
    });
    return res.status(201).json(user);
});

const getOne = catchError(async(req, res) => {
    const {id} = req.params;
    const user = await User.findByPk(id);
    return res.status(201).json(user);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await User.destroy({ where: { id } });
    return res.sendStatus(202);
});
const update = catchError(async(req, res) => {
    const id = req.params.id;
    const { first_name, last_name, email, password, birthday } = req.body;
    const user = await User.findByPk(id);
    user.first_name = first_name;
    user.last_name = last_name;
    user.email = email;
    user.password = password;
    user.birthday = birthday;   

    await user.save();
    return res.sendStatus(202); 
});

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
}