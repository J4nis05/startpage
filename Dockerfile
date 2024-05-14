# Use an official Nginx image as the base
FROM nginx:alpine

# Copy the static files into the container
COPY ./data/startpage /usr/share/nginx/html

# Expose the default HTTP port (80)
EXPOSE 80

# docker build -t startpage .