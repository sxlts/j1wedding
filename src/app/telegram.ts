'use server';
import TelegramBot from 'node-telegram-bot-api';

const token = process.env.TELEGRAM_BOT_TOKEN || '';
const chatId = process.env.TELEGRAM_CHAT_ID || '';

const bot = new TelegramBot(token, { polling: false });

export async function sendTelegramMessage(message: string) {
  console.log(`Sending telegram message: ${message}`);
  return bot.sendMessage(chatId, message);
}
