FROM nginx:1.18-alpine

EXPOSE 80

#COPY staging-nginx.conf /etc/nginx/conf.d/default.conf
COPY build /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
