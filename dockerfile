# Use the official Node.js image as the base image
FROM node:16

# Set the working directory inside the container
WORKDIR /service

# Copy package.json and package-lock.json to the container's working directory
COPY package*.json ./

# Install the dependencies
RUN yarn 

# Copy the source files to the container's working directory
COPY . .

# Build protobuff
RUN yarn run proto

# Compile TypeScript to JavaScript
RUN yarn run build


# Expose the application's port
EXPOSE 3000 3001

USER node
# Start the application
CMD [ "yarn", "start"]