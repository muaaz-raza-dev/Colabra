import { Request, Response } from "express";
import { OAuth2Client } from 'google-auth-library';
import { User } from "../../models/user.model"
import { ErrorResponse } from "../../utils/responsehandler";
import jwt from "jsonwebtoken"
import { JWT_SECRET } from "../../utils/tokens";
import { isValidPassword } from "../../utils/PasswordValidator";
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export async function GoogleLoginController(req: Request, res: Response) {
    const { id_token } = req.body;

    try {
        const ticket = await client.verifyIdToken({
            idToken: id_token,
            audience: process.env.GOOGLE_CLIENT_ID,
        });
        const payload = ticket.getPayload();
        if (!payload?.sub) { return ErrorResponse(res, { message: "Invalid Credentials", status: 403 }) }
        let user = await User.findOne({ email: payload.email })
        const payloadToStore = { name: payload?.name, email: payload?.email, email_verified: payload?.email_verified, picture: payload?.picture, user_provider_id: payload?.sub, provider: "google" }

        if (!user) { user = await User.create(payloadToStore) }

        const token = jwt.sign({ user_id: user._id }, JWT_SECRET || "", { expiresIn: "30d" })
        return res.cookie("COLABRA_SESSION", token, { expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) })
            .json({ token, message: "Logged in successfully!" })

    }
    catch (error) {
        console.error('Error verifying token:', error);
        return res.status(403).json({ message: 'Invalid token.' });
    }
}


export async function LocaleLoginController(req: Request, res: Response) {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email })
        if (!user||!user.password) return ErrorResponse(res, { message: "Invalid Credentials", status: 404 })
            
        const isMatch = isValidPassword(password,user.password)
        if (!isMatch) return ErrorResponse(res, { message: "Invalid Credentials", status: 404 })
            
        const token = jwt.sign({ user_id: user._id }, JWT_SECRET || "", { expiresIn: "30d" })
        return res.cookie("COLABRA_SESSION", token, { expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) }).json({ token, message: "Logged in successfully!" })

    }
    catch (error) {
        
        return res.status(403).json({ message: 'Internal server error.' });
    }
}


