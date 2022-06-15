# FROM nginx
# COPY ./default.conf /etc/nginx/conf.d/default.conf

# nginx state for serving content
FROM nginx
# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
# RUN rm -rf ./*
# Copy static assets from builder stage
# COPY --from=builder /app/build .
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]

# TODO Solve Nginx error: failed to solve: failed to load cache key: pull access denied, repository does not exist or may require authorization: server message: insufficient_scope: authorization failed