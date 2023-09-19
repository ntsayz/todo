FROM postgres:latest

# Set environment variable for the database password (this is used by the base PostgreSQL image)
ENV POSTGRES_PASSWORD=mysecretpassword

# Copy SQL scripts to Docker entrypoint for init scripts
COPY 01-init.sql /docker-entrypoint-initdb.d/
COPY 02-data.sql /docker-entrypoint-initdb.d/
