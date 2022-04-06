import { IUser } from '../../../interfaces';
import { generateAccessToken } from '../token/token.service';
import { userModel } from '../../../models'
import bcrypt from 'bcrypt';

export const getUsers = async (filer?: any) => {
    try {
        return await userModel.find(filer || {});
    } catch (error) {
        console.log(error);
        return [];
    }
};

export const getUser = async (idUser: string) => {
    if (idUser) {
        try {
            return await userModel.findById({_id: idUser});
        } catch (error) {
            console.log(error);
            return [];
        }            
    }else{
        return [];
    }
};

export const postUser = async (payload: IUser) => {
    try {
        const user = new userModel(payload);
        return await user.save();
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const updateUser = async (payload: IUser, id: string) =>{
    try {
        return await userModel.findByIdAndUpdate(id, payload);               
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const deleteUser = async (id: string) => {
    try {
        return await userModel.findByIdAndDelete(id);
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const login = async (payload: IUser): Promise<string> => {
    try {
        if (payload) {
            const found = await userModel.findOne({telephone: payload.telephone });
            if (found) {
                const hashPassword = await bcrypt.hash(payload.password, found.salt || '')
                // const match = await bcrypt.compare(found.password, hashPassword)
                // console.log(found.password === hashPassword);
                // console.log(match);
                if (found.password === hashPassword) {
                    const token = generateAccessToken(payload);
                    return token;   
                }else{
                    return "password don't match";
                }
            } else {
                return "user not found";
            }
        } else {
            return "format invalide";
        }
    } catch (error) {
        console.log(error);
        return "impossible de créer le token";
    }
};

