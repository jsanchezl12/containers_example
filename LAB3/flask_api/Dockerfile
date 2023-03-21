# Use an official Python runtime as a parent image
FROM python:3.10.8

RUN mkdir -p /app
WORKDIR /app
ENV FLASK_APP app.py
ENV FLASK_RUN_HOST 0.0.0.0
# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any needed packages specified in requirements.txt

COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt
COPY . .
# Make port 80 available to the world outside this container
EXPOSE 3008


# Run app.py when the container launches
CMD [ "flask","run","-p","3008"]