FROM ghcr.io/mint-lang/mint:latest

WORKDIR /opt/mint
COPY . .
EXPOSE 3000

# Example Command:
# docker build -t j4nis05/startpage:mint .
# docker push