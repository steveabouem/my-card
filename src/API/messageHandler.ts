import { IMessageDTO } from "./dto/message.dto";
import MessageRepository from "./repositories/message.repository";

export const sendMessage = async (data: IMessageDTO) => {
  const messageRepo = new MessageRepository();
  return messageRepo.sendMessageToDev(data);
};