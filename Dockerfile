# Use an official Nginx image as the base
FROM nginx:alpine

# Set the Working Directory
WORKDIR /usr/share/nginx/html

# Copy the static files into the container
COPY . .

# Expose the default HTTP port (80)
EXPOSE 80

# Example Command:
# docker build -t startpage .