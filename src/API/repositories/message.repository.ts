import axios from 'axios';
import { IMessageDTO } from '../dto/message.dto';

export default class MessageRepository {
  baseURL?: string;

  constructor() {
    this.baseURL = "https://us-central1-steve-a.cloudfunctions.net";
  }

  sendMessageToDev =  (mData:IMessageDTO) => {
    return axios.post(`${this.baseURL}/saveLead`, {...mData});
  }
}