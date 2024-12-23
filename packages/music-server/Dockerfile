FROM node:20-slim

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package.json .
# 컨테이너를 빌드하는 과정에서 진행.
RUN npm install

# Bundle app source
COPY . .

# tsconfig.json ./
# COPY src ./src
# COPY prisma ./prisma
# COPY .env ./
# COPY esbuild.js ./
# COPY public ./public

# PRISMA GENERATE
# RUN은 빌드단계에서 실행되는 명령어
RUN npx prisma generate

# Build
RUN npm run build

# Start
# CMD 명령어는 컨테이너가 실행할 떄 실행되는 명령어 (노드의 디스트를 직접 입력해도됨)
CMD ["npm", "start"]

# expose port
EXPOSE 4000

# docker build -t ai-music-app:latest .       # 이미지 생성
# docker build --no-cache -t ai-music-app:latest .  # 이미지 생성 (노 캐시)
# 빌드시 환경변수 넘기고 싶을 떄
# docker build --build-arg NODE_ENV=production -t ai-music-app:latest .  # 이미지 생성 (노 캐시)