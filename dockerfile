# Use Node.js base image
FROM node:18-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package files first (for caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all project files
COPY . .

# Expose app port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
