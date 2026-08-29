# Use Node.js to build the React app
FROM node:20 AS builder

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy app files and build the project


COPY . .





# Start Nginx
CMD ["npm", "start"]
 