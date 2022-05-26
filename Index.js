// For this to work you need to download and install Node. js
// How to Install Node. js and NPM on Windows
// Step 1: Download Node. js Installer. In a web browser, navigate to https://nodejs.org/en/download/. ...
// Step 2: Install Node. js and NPM from Browser. ...
// Step 3: Verify Installation. Open a command prompt (or PowerShell) by searching cmd, and enter the following: node -v
// Step 4: if the outcome is: v:XX.XX.X where X are numbers then you did a good job, otherwise search to see what you did wrong
// Now that we installed Node we will go to the directory where we have the script
// To do this we will need to go to the file that we downloaded, right click on it and select properties and copy what's after the field called Location:
// in the terminal/cmd we will type cd followed by what we copied, in my case it will be: cd C:\Users\User\Downloads
// here we need to type: npm install api --save
// hit enter
// after this we need to type node index.js and click enter
// the values that are equal to 50 will change based on how many results we want to have

const sdk = require("api")("@opensea/v1.0#4vnv6l38vynjp");

sdk["retrieving-collections-testnets"]({ offset: "0", limit: "50" }) //change this values
  .then((res) => {
    let i = 0;
    const results = res;

    while (i <= 50) {
      //and this value
      try {
        let name = results.collections[i].primary_asset_contracts[0].name;
        let createdAt =
          results.collections[i].primary_asset_contracts[0].created_date;
        let supply =
          results.collections[i].primary_asset_contracts[0].total_supply;
        let type_of_NFT =
          results.collections[i].primary_asset_contracts[0].schema_name;

        let floor = results.collections[i].stats.floor_price;
        let volume = results.collections[i].stats.thirty_day_volume;
        console.log(
          i,
          "collection:",
          name,
          "| created_at:",
          createdAt,
          "| supply:",
          supply,
          "| token:",
          type_of_NFT,
          "| collection_floor:",
          floor,
          "| collection_volume(30days):",
          volume
        );
        i++;
      } catch (err) {
        i++;
      }
    }
  })
  .catch((err) => console.error(err));
