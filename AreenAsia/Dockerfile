FROM ubuntu 

ADD ./ContainerFiles /app

ENTRYPOINT tail -f /dev/null

RUN cd /app; \
apt-get update; \
apt-get -y install npm; \ 
apt-get -y install nodejs; \
apt-get -y install npm; 


EXPOSE 8123

CMD ["node", "/app/server.js"]