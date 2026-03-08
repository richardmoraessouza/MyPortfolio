# Etapa 1: Build
FROM node:20 AS build
WORKDIR /app


COPY portfolio/package*.json ./
RUN npm install


COPY portfolio/ .


RUN npm run build


FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]