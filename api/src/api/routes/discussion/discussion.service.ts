import { IDiscussion, IUser } from '../../../interfaces';
import { IDiscussionPopulated } from '../../../interfaces/discussion';
import { discussionModel } from '../../../models'

export const getDiscussions = async (filer?: any) => {
    try {
        return await discussionModel.find(filer || {});
    } catch (error) {
        console.log(error);
        return [];
    }
};

export const getUsersDiscussions = async (idUser: string) => {
    try {
        const discussionList: Array<IDiscussionPopulated> = (await discussionModel.find()
        .populate('users')
        .populate('messages')) as Array<IDiscussionPopulated>;
        const result = discussionList
        .filter(discussion => discussion.users.some(user => user._id == idUser));
        return result;
    } catch (error) {
        console.log(error);
        return [];
    }
};

export const getDiscussionById = async (idDiscussion: string) => {
    if (idDiscussion) {
        try {
            return await discussionModel.findById(idDiscussion);
        } catch (error) {
            console.log(error);
            return [];
        }            
    }else{
        return [];
    }
};

export const postDiscussion = async (payload: IDiscussion) => {
    try {
        const Discussion = new discussionModel(payload);
        return await Discussion.save();
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const updateDiscussion = async (payload: IDiscussion, id: string) =>{
    try {
        return await discussionModel.findByIdAndUpdate(id, payload);               
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const deleteDiscussion = async (id: string) => {
    try {
        return await discussionModel.findByIdAndDelete(id);
    } catch (error) {
        console.log(error);
        return null;
    }
};

