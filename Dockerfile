FROM node:20

RUN apt-get update
RUN apt-get install -y gcc g++
RUN apt-get install dos2unix

ARG PORT
ARG CORS_ORIGIN
ARG DB_USERNAME
ARG DB_PASSWORD
ARG BackendHost
ARG JWT_SECRET_KEY
ARG GEMINI_API_KEY
ARG PingBotDuration
ARG MemoryLimitForOutputFileInBytes
ARG Server
ARG REACT_APP_SERVER_URL
ARG REACT_APP_SERVER_WS_URL

ENV PORT ${PORT}
ENV CORS_ORIGIN ${CORS_ORIGIN}
ENV DB_USERNAME ${DB_USERNAME}
ENV DB_PASSWORD ${DB_PASSWORD}
ENV BackendHost ${BackendHost}
ENV JWT_SECRET_KEY ${JWT_SECRET_KEY}
ENV GEMINI_API_KEY ${GEMINI_API_KEY}
ENV PingBotDuration ${PingBotDuration}
ENV MemoryLimitForOutputFileInBytes ${MemoryLimitForOutputFileInBytes}
ENV Server ${Server}

WORKDIR /app

COPY Backend/ .

COPY Frontend/ ./Frontend

WORKDIR /app/Frontend

RUN echo "REACT_APP_SERVER_URL=${REACT_APP_SERVER_URL}" >> .env \
    && echo "REACT_APP_SERVER_WS_URL=${REACT_APP_SERVER_WS_URL}" >> .env

RUN npm install

RUN npm run build

RUN cp -r /app/Frontend/build /app/build

WORKDIR /app

RUN rm -r /app/Frontend

RUN npm install

RUN mkdir -p public/TemporaryCodeBase

RUN dos2unix src/Code/script.sh

RUN chmod +x src/Code/script.sh

EXPOSE 8080

CMD ["node", "src/index.js"]