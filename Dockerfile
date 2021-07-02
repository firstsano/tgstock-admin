FROM registry.tgplace.ru:443/infra/docker-images/nginx-for-front:1.18

EXPOSE 80

#COPY staging-nginx.conf /etc/nginx/conf.d/default.conf
COPY build /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
