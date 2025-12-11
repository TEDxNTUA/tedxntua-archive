FROM node:18-alpine
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install 

# Copy app sources
COPY . .

# Build the Next.js app

EXPOSE 3000

CMD npm run dev