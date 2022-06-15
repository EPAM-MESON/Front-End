# Install and run the project:

## DOCKER DEV
 - Install Docker Engine [Here](https://docs.docker.com/engine/install/)
   - It is recomended to install desktop docker
 - Build and run the develop image 
   - `sudo docker compose up --build`
 - Visit [localhost:3000](http://localhost:3000)
 ### And that is it!! Easy as cake!

## DOCKER PROD
 - Install Docker Engine [Here](https://docs.docker.com/engine/install/)
 - Install nginx
   - Linux: `sudo apt-get install nginx`
 - Build the image
   - `sudo docker build -t meson-front-prod -f Dockerfile.prod .`
 - Run the image
   - `sudo docker run -d -p 8080:80 meson-front-prod`
 - Make sure `/etc/nginx/sites-available/default` has the following information
    ```
      location / {
        # First attempt to serve request as file, then
        # as directory, then fall back to displaying a 404.

        # Comment the next line like on the example
        # try_files $uri $uri/ =404;

        # Add all of this
        proxy_set_header HOST $host;
        proxy_set_header X-REAL-IP $remote_addr;

        # We are using a real ngnix to proxy into our docker nginx
        proxy_pass http://localhost:8080; #React prod app
      }
     ```

 - Visit [http://your_ip](#)
### And that is it!!

## IMPORTANT NOTES:
 - Everytime the code changes a new build HAS to be deploy into the prod server
