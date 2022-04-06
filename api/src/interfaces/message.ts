export enum contentType {
  IMAGE = 'IMAGE',
  VIDEO = 'VIDEO',
  AUDIO = 'AUDIO',
  DOC = 'DOC',
}

export interface IMedia{
    contentType: contentType;
    link: string;
}

export interface IMessage {
    _id?: string;
    text?: string;
    media: IMedia;
    from?: string;
    created_at?: Date;
    updated_at?: Date;
}

export interface IMessagePayload {
    text?: string;
    media: IMedia;
    from: string;
    discussion: string;
}


export const defaultMedia: IMedia = {
    contentType: contentType.IMAGE,
    link: '',
}

export const defaultMessage: IMessage = {
    text: '',
    media: defaultMedia,
    from: '',
}

export function getMessageFromPayload(payload: IMessagePayload): IMessage {
    return {
        media: payload.media,
        from: payload.from,
        text: payload.text,
    };
}

// {
//     "text": "hello friend",
//     "from": "624cd29f761ff7212a607535",
//     "media": {
//         "contentType": "IMAGE"
//     },
//     "discussion": "624ce2eb80f42fef4e4b5bb6"
// }
