import { errorHandler } from "../utils/error.js"
import bcryptjs from 'bcryptjs'
import User from '../models/user.model.js'

export const test = (req, res) => {
        res.json({ message: 'api is working' })
}

export const updateUser = async (req, res) => {
        if (req.user.id !== req.params.userId) {
                return next(errorHandler(403, 'You are not allowed to update this user'))
        }

        if (req.body.password) {
                if (req.body.password < 6) {
                        return next(errorHandler(400, 'Password must be at least 6 chaacters'))
                }

                req.body.password = bcryptjs.hashSync(req.body.password, 10)
        }

        if (req.body.username) {
                if (req.body.username.length < 7 || req.body.username > 20) {
                        return next(errorHandler(400, 'Username must be between 7 and 20 characters'))
                }

                if (req.body.username.include(' ')) {
                        return next(errorHandler(400, 'Username cannot contain space'));
                }

                if (req.body.username !== req.body.username.toLowerCase()) {
                        return next(errorHandler(400, 'Username must be Lowercase'))
                }
        }

        try {
                const updatedUser = await User.findByIdAndUpdate(req.params.userId, {
                        $set: {
                                username: req.body.username,
                                email: req.body.email,
                                profilePicture: req.body.profilePicture,
                                password: req.body.password
                        }
                }, { new: true });

                const { password, ...rest } = updatedUser._doc;
                res.status(200).json(rest)
        } catch (error) {
                next(error)
        }


}

