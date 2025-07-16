FROM ubuntu:22.04

# Install compilers
RUN apt-get update && apt-get install -y \
    g++ \
    python3 \
    openjdk-17-jdk \
    && apt-get clean

# Set working directory
WORKDIR /code

# Copy files
COPY run.sh /code/run.sh

# Make script executable
RUN chmod +x /code/run.sh

# Run script as container entrypoint
ENTRYPOINT [ "/bin/bash", "/code/run.sh" ]
