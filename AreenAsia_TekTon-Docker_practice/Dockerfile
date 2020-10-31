FROM node

ADD ./ContainerFiles /webpage

ENTRYPOINT tail -f /dev/null

WORKDIR ./webpage

RUN rm -r ContainerFiles; \
npm install;


#apt-get update; \
#apt-get -y install npm; \ 
#apt-get -y install nodejs; \
#apt-get -y install npm; 


EXPOSE 8123

#CMD ["node", "server.js"]
