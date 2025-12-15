FROM node:25-alpine3.22
WORKDIR /app

# Install dependencies
COPY package*.json ./

RUN npm install 
RUN npm install -g serve@latest 

# Copy app sources
COPY . .

# Build the Next.js app
RUN npm run build 
EXPOSE 3000

CMD ["serve", "-s", "out", "-l", "3000"] 