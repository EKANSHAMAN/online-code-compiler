# Use official Node.js image
FROM node:18

# Set working directory inside container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install backend dependencies
RUN npm install

# Copy rest of the backend files
COPY . .

# Expose the port (Ensure your Express app uses process.env.PORT)
EXPOSE 5000

# Start the server
CMD ["node", "server.js"]
