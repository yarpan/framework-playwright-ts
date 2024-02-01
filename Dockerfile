# Get the latest version of Playwright
FROM mcr.microsoft.com/playwright:v1.41.1-jammy

# Set the working directory
WORKDIR /tests

# Copy files with tests
COPY . /tests

# Install dependencies
RUN npm install

# Set the entry point for the container
CMD ["npx", "playwright", "test"]