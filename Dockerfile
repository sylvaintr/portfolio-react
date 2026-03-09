FROM node:20-alpine AS build
WORKDIR /app

# Install dependencies (include devDependencies for the build)
COPY package*.json ./
# Ensure devDependencies are installed during the build
ENV NODE_ENV=development
RUN npm ci --silent

# Copy source and build
COPY . .
RUN npm run build

FROM nginx:stable-alpine AS production
WORKDIR /usr/share/nginx/html
# Copy built files from the build stage
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]
