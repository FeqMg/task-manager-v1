import express, { type Request, type Response } from 'express'

const server = express();
const port = 3000;

server.use(express.json());

server.post('/new-user', (req: Request, res: Response) => {
    type Data = {
        username: string,
        email: string,
        password: string,
        confirmPassword: string
    }

    const data: Data = req.body;
    try {
        if (data.password != data.confirmPassword) {
            return res.status(400).json({ msg: "Password do not match!" });
        }
        return res.status(200).json({ msg: "User created!" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: "Something went wrong.." });
    }
});

server.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
