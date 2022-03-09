FROM nginx:stable-alpine

RUN apk add tzdata

RUN cp /usr/share/zoneinfo/Asia/Jakarta /etc/localtime && \
    echo Asia/Jakarta > /etc/timezone

COPY build/ /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
