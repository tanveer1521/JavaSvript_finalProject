const Car = require('../models/Car');
const User = require('../models/user');

exports.index = async (req, res, next) => {
    try {
        const cars = await Car.find();
        res.status(200).json(cars);
    }
    catch (error) {
        next(error);
    }
};

exports.show = async (req, res, next) => {
    try {
        const cars = await Car.findById(req.params.id);

        res.status(200).json(cars);
    } catch (error) {
        next(error);
    }
}

exports.create = async (req, res, next) => {
    try {
        const { car, make, model, year, warranty } = req.body;

        const user = await User.findById(req.user._id);

        const cr = await Car.create({
            Designer: user.name,
            car,
            make,
            model,
            year,
            warranty
        });

        res.status(200).json({ message: "The Car was launched successfully", car: cr });
    } catch (error) {
        next(error);
    }
};

exports.update = async (req, res, next) => {
    try {
        const { _id, car, make, model, year, warranty } = req.body;
        const cr = await Car.findOneAndUpdate({ _id: _id }, {
            car,
            make,
            model,
            year,
            warranty
        });

        res.status(200).json({ message: "The Car was modified successfully", car: cr });
    } catch (error) {
        next(error);
    }
};

exports.destroy = async (req, res, next) => {
    try {
        const { _id } = req.body;
        await Car.findOneAndDelete({ _id: _id });

        res.status(200).json({ message: "The Car was deleted successfully" });
    } catch (error) {
        next(error);
    }
};