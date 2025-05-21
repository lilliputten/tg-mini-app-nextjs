import { Bot, webhookCallback } from 'grammy';

export const dynamic = 'force-dynamic';

export const fetchCache = 'force-no-store';

/*
 * @start bot via a template:
 * curl https://api.telegram.org/bot{TELEGRAM_BOT_TOKEN}/setWebhook?url={APP_URL}/api/bot
 */

const token = process.env.TELEGRAM_BOT_TOKEN;

if (!token) {
  throw new Error('TELEGRAM_BOT_TOKEN environment variable not found.');
}

const bot = new Bot(token);
bot.on('message:text', async (ctx) => {
  console.log('[route]', {
    ctx,
  });
  await ctx.reply(ctx.message.text);
});

export const POST = webhookCallback(bot, 'std/http');
