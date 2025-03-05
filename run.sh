echo "Starting Docker Build"
docker build -t j4nis05/startpage:mint .

echo "Attempting to kill Existing Container"
docker kill mint-debug
docker rm mint-debug

echo "Starting with latest changes"
docker run -d -p 3000:80 --name mint-debug j4nis05/startpage:mint
echo "Done! Server available under http://localhost:3000"
