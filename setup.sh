sudo apt-get update
sudo apt install git
git clone https://github.com/DetectiveBatman/ComaStudio.git
cd ComaStudio
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
nvm install 12.0.0
nvm use 12.0.0
nvm install-latest-npm
npm install
npm start
