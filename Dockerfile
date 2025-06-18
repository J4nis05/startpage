FROM nginx:alpine
WORKDIR /usr/share/nginx/html
EXPOSE 80

COPY img/   ./img/
COPY icons/ ./icons/
COPY css/   ./css/
COPY js/    ./js/

COPY index.html .
COPY config.json .

# Example Command:
# docker build -t startpage .
