FROM ghcr.io/mint-lang/mint:latest as build
WORKDIR /opt/mint
COPY . .
RUN mint build --no-optimize --verbose
RUN cp -r assets/wallpapers/ dist/__mint__


FROM nginx:alpine as final
WORKDIR /usr/share/nginx/html
COPY --from=build /opt/mint/dist .
EXPOSE 80

# Example Command:
# docker build -t j4nis05/startpage:mint .
# docker push