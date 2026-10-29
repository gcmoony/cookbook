sudo pkill -f nginx
sudo rm -rf /usr/share/nginx/html/assets/
sudo rm -rf /usr/share/nginx/html/vite.svg 
sudo rm -rf /usr/share/nginx/html/index.html

npm run build

sudo chmod -R 755 dist/


sudo mv dist/* /usr/share/nginx/html/
sudo chown -R root:root /usr/share/nginx/html/
sudo nginx