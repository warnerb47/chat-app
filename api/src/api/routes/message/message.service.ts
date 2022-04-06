import { IDiscussion, IMessage } from '../../../interfaces';
import { discussionModel, messageModel } from '../../../models'
import { updateDiscussion } from '../discussion/discussion.service';

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

export const postMessage = async (payload: IMessage, IdDiscussion: string) => {
    try {
        const discussion = await discussionModel.findById(IdDiscussion);
        console.log(IdDiscussion);
        if (discussion) {
            const message = new messageModel(payload);
            discussion?.messages.push(message?._id || '');
            await updateDiscussion(discussion as IDiscussion, IdDiscussion);
            await message.save();
            return message;
        }
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

