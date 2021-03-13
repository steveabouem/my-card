export default class MessageRepository {
  baseURL?: string;

  constructor() {
    this.baseURL = process.env.FIREBASE_FUNCTIONS_BASE_URL;
  }

  // public sendMessageToDev = ({ mData:IMessageDto}): Promise<any> => {
  //   try {
  //     // const{ data } = await firebasecall, build it in /utils

  //   }
  // }

}