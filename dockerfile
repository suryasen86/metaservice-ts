# Use the official Node.js image as the base image
FROM node:16

# Set the working directory inside the container
WORKDIR /service

# Copy package.json and package-lock.json to the container's working directory
COPY package*.json ./

# Install the dependencies
RUN npm i 

# Copy the source files to the container's working directory
COPY . .

# Build protobuff
RUN npm run proto

# Compile TypeScript to JavaScript
# RUN yarn run dev


# Expose the application's port
EXPOSE 3000 3001 3001

USER node
# Start the application
CMD ["yarn","dev"]