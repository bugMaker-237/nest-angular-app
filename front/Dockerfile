# Use the official Node.js image as the base image
FROM node:18 as build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY ./package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . ./

# Build the Angular app
RUN npm run build

# Use a smaller Nginx image for serving the app
FROM nginx:alpine

# Copy the build output from the previous stage to the Nginx container
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the port that the Nginx server will use
EXPOSE 80