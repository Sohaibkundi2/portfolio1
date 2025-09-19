# --- Builder stage ---
FROM node:22-alpine AS builder

WORKDIR /app

# 1️⃣ Copy only package.json + package-lock.json first
COPY package*.json ./

# 2️⃣ Install dependencies (this layer will be cached if package.json doesn’t change)
RUN npm install

# 3️⃣ Now copy the rest of the project
COPY . .

# 4️⃣ Build Next.js in standalone mode
RUN npm run build


# --- Runner stage ---
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Copy only what’s needed for running
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

CMD ["node", "server.js"]
