import { User } from '../db.js'

const GetUsers = async (req, res) => {
    const allUsers = await User.findAll()
    res.send(allUsers)
}

export { GetUsers }