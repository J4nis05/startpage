FROM httpd:latest

COPY . /usr/local/apache2/htdocs

EXPOSE 80

# docker build -t startpage .