import { IMessage } from '../../../interfaces';
import { messageModel } from '../../../models'

export const getMessages = async (filer?: any) => {
    try {
        return await messageModel.find(filer || {});
    } catch (error) {
        console.log(error);
        return [];
    }
};


export const getMessageById = async (idMessage: string) => {
    if (idMessage) {
        try {
            return await messageModel.findById(idMessage);
        } catch (error) {
            console.log(error);
            return [];
        }            
    }else{
        return [];
    }
};

export const postMessage = async (payload: IMessage) => {
    try {
        const Message = new messageModel(payload);
        return await Message.save();
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const updateMessage = async (payload: IMessage, id: string) =>{
    try {
        return await messageModel.findByIdAndUpdate(id, payload);               
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const deleteMessage = async (id: string) => {
    try {
        return await messageModel.findByIdAndDelete(id);
    } catch (error) {
        console.log(error);
        return null;
    }
};

