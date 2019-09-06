sudo apt-get update
sudo apt install git
sudo apt install curl
git clone https://github.com/DetectiveBatman/ComaStudio.git
cd ComaStudio
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs
npm install
npm start
