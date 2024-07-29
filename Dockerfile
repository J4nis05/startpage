# Use an official Nginx image as the base
FROM nginx:alpine


# Copy the static files into the container
COPY ./css /usr/share/nginx/html
COPY ./icons /usr/share/nginx/html
COPY ./img /usr/share/nginx/html
COPY ./js /usr/share/nginx/html

COPY ./config.json /usr/share/nginx/html
COPY ./index.html /usr/share/nginx/html


# Expose the default HTTP port (80)
EXPOSE 80

# docker build -t startpage .