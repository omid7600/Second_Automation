# Second_AutomationRun in docker
- docker build . -f Dockerfile -t=firstautomation
- docker run -v "$(pwd)"/reports:/app/reports -v "$(pwd)"/cypress/videos:/app/cypress/videos --rm firstautomation:latest