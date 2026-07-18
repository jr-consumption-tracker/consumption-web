# syntax=docker/dockerfile:1

FROM node:24-alpine AS build
WORKDIR /app
COPY src/ .
RUN corepack enable && pnpm install --frozen-lockfile

# Hodnoty nejsou tajne (relativni cesty, fungujici pro kterekoliv prostredi
# za spolecnou domenou s API) - proto se pec do image pri buildu, misto
# aby se cetly za behu jako u backendu. Vite je stejne peče do JS pri
# 'vite build', za behu uz je nejde zmenit.
#
# JEDEN Dockerfile pro dev i prod - CI pro kazde prostredi jen preda jine
# --build-arg (viz .github/workflows/ci.yml, VITE_ENABLE_DEVTOOLS=true pro
# dev, false pro prod). Zadny duvod mit druhy Dockerfile jen kvuli tomuhle.
ARG VITE_PUBLIC_URL=/
ARG VITE_API_BASE_URL=/api
ARG VITE_ENABLE_DEVTOOLS=false
RUN { \
      echo "VITE_PUBLIC_URL=\"${VITE_PUBLIC_URL}\""; \
      echo "VITE_API_BASE_URL=\"${VITE_API_BASE_URL}\""; \
      echo "VITE_ENABLE_DEVTOOLS=\"${VITE_ENABLE_DEVTOOLS}\""; \
    } > apps/web/.env.production

RUN pnpm --filter web build:production

FROM nginx:1.27-alpine AS runtime

# Alpine balicky v samotnem base image casem zastaravaji (i kdyz je tag
# "1.27-alpine" fixni) - apk upgrade stahne aktualni bezpecnostni zalatky
# bez ohledu na to, jak stary je konkretni base image tag.
RUN apk update && apk upgrade --no-cache

COPY --from=build /app/apps/web/dist /usr/share/nginx/html
COPY docker/prod/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
