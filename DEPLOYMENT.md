# Deployment Guide

## Single Render Service

This repo can be deployed as one Render web service using [render.yaml](/e:/Shopkaro/Shopkaro/Ecommerce/render.yaml:1).

- Render root directory: `server`
- Build command: `npm install && npm run build`
- Start command: `npm start`

The build step installs the client, builds it, and copies the output into `server/build`, which the Express app serves.

Set these environment variables on Render:

- `DB_KEY`
- `CORS_ALLOWED_ORIGINS`
- `FRONTEND_URL`
- `JWT_SECRET_KEY_ADMIN`
- `JWT_SECRET_KEY_BUYER`
- `MAIL_SENDER`
- `MAIL_PASSWORD`
- `SITE_NAME`
- `RPKEYID`
- `RPSECRETKEY`

For a single-service deploy, set:

- `REACT_APP_BACKEND_SERVER=` empty string
- `CORS_ALLOWED_ORIGINS=https://your-render-service.onrender.com`
- `FRONTEND_URL=https://your-render-service.onrender.com`

## Server

Set these environment variables on your backend host:

- `DB_KEY`
- `PORT`
- `CORS_ALLOWED_ORIGINS`
- `JWT_SECRET_KEY_ADMIN`
- `JWT_SECRET_KEY_BUYER`
- `MAIL_SENDER`
- `MAIL_PASSWORD`
- `SITE_NAME`
- `RPKEYID`
- `RPSECRETKEY`

Use [server/.env.example](/e:/Shopkaro/Shopkaro/Ecommerce/server/.env.example:1) as the template.

Start command:

```bash
npm start
```

## Client

Set this environment variable on your frontend host:

- `REACT_APP_BACKEND_SERVER`

Use [client/.env.example](/e:/Shopkaro/Shopkaro/Ecommerce/client/.env.example:1) as the template.

Build command:

```bash
npm run build
```

## Notes

- Backend now reads MongoDB from `DB_KEY` or `MONGODB_URI`.
- CORS now uses `CORS_ALLOWED_ORIGINS` as a comma-separated list.
- Product update/delete/create routes are admin-only.
- Razorpay now reads `RPSECRETKEY` with the correct env name.
