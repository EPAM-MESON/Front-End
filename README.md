# Install and run the project:

* ## DOCKER DEV
 - Install Docker Engine [Here](https://docs.docker.com/engine/install/)
  - It is recomended to install desktop docker
 - Build and run the develop image 
  - `sudo docker compose up --build`
 - Visit [localhost:3000](http://localhost:3000)
And that is it!! Easy as cake!

* ## DOCKER PROD
 - Install Docker Engine [Here](https://docs.docker.com/engine/install/)
 - Build the image
  - `sudo docker build -t meson-front-prod -f Dockerfile.prod .`
 - Run the image
  - `sudo docker run -d -p 8080:80 meson-front-prod`
 - Visit [http://your_ip](#)
And that is it!!

* ## IMPORTANT NOTES:
 - Everytime the code changes a new build HAS to be deploy into the prod server
