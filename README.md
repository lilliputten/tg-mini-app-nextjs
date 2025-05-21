<!--
 @since 2025.05.08 23:46
 @changed 2025.05.21, 21:44
-->

# Sample Next.js Vercel Telegram Mini App

## Build info (auto-generated)

- Project info: v.0.0.0 / 2025.05.08 23:46:37 +0300

- Vercel deployment: https://tg-mini-app-nextjs.vercel.app/

## Local development & tunneling

Set a tunnel with xtunnel:

```bash
xtunnel http 3000
```

From the output, use an https link with a following template to set a telegram hook:

```
curl https://api.telegram.org/bot{TELEGRAM_BOT_TOKEN}/setWebhook?url={TUNNEL_URL}/api/bot
```

## Environment variables

- `BOT_USERNAME`: Bot name.
- `TELEGRAM_BOT_TOKEN`: Bot token.
- `VERCEL_URL`: Optional. Automatically provided by vercel.
- ~~`WEBAPP_URL`~~

## See also

- [Telegram Mini Apps readme file](README.Telegram-Mini-Apps.md)
- [NextJS readme file](README.nextjs.md)
