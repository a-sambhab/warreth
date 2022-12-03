<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-4-orange.svg?style=flat-square)](#contributors-)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

<!-- Other badges-->
![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
![Ethereum](https://img.shields.io/badge/Ethereum-3C3C3D?style=for-the-badge&logo=Ethereum&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Web3js](https://img.shields.io/badge/web3.js-F16822?style=for-the-badge&logo=web3.js&logoColor=white)
![Solidity](https://img.shields.io/badge/Solidity-e6e6e6?style=for-the-badge&logo=solidity&logoColor=black)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
<!-- Other badges-->

<br />
<p align="center">
  <a href="https://github.com/a-sambhab/warreth">
    <img src="https://res.cloudinary.com/divr26z8e/image/upload/v1670043195/Screenshot_2022-12-02_at_8.25.53_PM_mcfwst.png" alt="Logo" width="80">
  </a>

  <h3 align="center">Warreth</h3>

  <p align="center">
    The official repository for the website of Warreth.
    <br />
    <a href="https://nftdocket.vercel.app/">View Live</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
      </ul>
        <li><a href="#built-with">Built With</a></li>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#running-the-project">Running the project</a></li>
      </ul>
    </li>
    <li><a href="#features">Features</a></li>
    <li><a href="#block-diagram">Block Diagram</a></li>
    <li><a href="#screenshots">Screenshots</a></li>
      <li><a href="#future-scope">Future Scope</a></li>
    <li><a href="#contributors">Contributors</a></li>
  </ol>
</details>

## About The Project

Warreth is a Decentralised Warranty Issue platform that can be used by sellers to dispatch their warranties to buyers via a NFT built using Polygon. Free up your cupboard spaces and store your warranties in the digital world in the form of NFTs having proper ownership proof over it. Now the warranty is not a piece of paper but a form of token. Start storing warranties by registering below.  
We have used the Soulbound NFT concept to provide Warrranties that can not be a victim of theft with the added features of Expiry date and Resell that makes it convenient to be used in many more use-cases.

## Built With

Following technologies and libraries are used for the development of this website

- [React](https://reactjs.org/)
- [IPFS](https://ipfs.io/)
- [Vercel](https://vercel.com/)
- [React Router](https://reactrouter.com/)
- [Solidity](https://docs.soliditylang.org/)
- [Polygon](https://polygon.technology/)
- [Ethereum](https://ethereum.org/en/)
- [Web3.js](https://web3js.readthedocs.io/)
- [Gelato Ops](https://app.gelato.network/)
- [Tailwind CSS](https://tailwindcss.com/)

## Getting Started

To setup the project locally the steps below.

### Prerequisites

- Please make sure you have [metamask](https://metamask.io/) installed and connected to polygon's mumbai testnet and have some test matic in your wallet

- [Node.js](https://nodejs.org/en/download/)

```sh
  # Homebrew
  brew install nodejs

  # Sudo apt
  sudo apt install nodejs

  # Packman
  pacman -S nodejs

  # Module Install
  dnf module install nodejs:<stream> # stream is the version

  # Windows (chocolaty)
  cinst nodejs.install

```

- [Git](https://git-scm.com/downloads)

```sh
  # Homebrew
  brew install git

  # Sudo apt
  apt-get install git

  # Packman
  pacman -S git

  # Module Install (Fedora)
  dnf install git

```


### Running the project.

The project uses NPM. It is strictly advised to stick with NPM so as to avoid dependency conflicts down the line.

```
## Checkout into the project client directory
cd client

## Install Dependencies
npm install

## Run the Project
npm start

```

Following are the commands to remove/add new dependencies using yarn

```
## Add a new Package
npm install <package-name>

## Remove an existing Package
npm uninstall <package-name>

## Save Package as a Dev Dependency
npm install <package-name> --save-dev
```


## Features

### Issue Warranty

Sellers can easily issue warranties by setting Order ID, Buyer Wallet Address and Expiry Date as Metadata for the NFT and issue it as a Pending Warranty. This feature does not need the knowledge of coding. We have also used the concept of Soulbound NFTs by making the Keccak256 Hash of the Owner ID and the Product ID and making it a part of the metadata of the NFT. The seller can also track all the pending, active and expiry warranties issued by him.

### Proof Ownership

When the Warranty is sent to the dashboard of the Buyer as a Pending Warranty the Buyer will need to proof it's ownership by hashing their wallet address which is then hashed using the Keccak256 hash and matched with the hash in the Metadata and on successful verification the Warranty is minted in the chain and added to the active warranties section of the Buyer Dashboard which can be used as a Proof of Ownership and as the Warranty till the Expiry Time.

### Resell Warranty

After the Warranty is added to the Active Warranties of the Buyer, the buyer can transfer ownership as well in case of Resell of the Product in which the Current Owner needs to put in the New Owners Wallet Address after which it is issued using the same hashing method as Soul and then the new owner needs to proof ownership in a similiar process as the previous owner.

### Auto Expiry

In the case that the current time is greater than the Expiry time of any Product Warranty the Burn Function in the Gelato Ops executes itself which in turn burns the NFT and the Warranty is moved to the Expired Warranty section of the owner. However, the Owner can still use the platform to proof ownership of the product but can not have the benefits of the warranty anymore.

### Track issued and Expired Warranty

Once a warranty is activated by a owner in their dashboard the warranty also shows the history of all it's previous owner which helps in keeping track of the ownership of the product and sale as well.


## Block Diagram

<img src="https://res.cloudinary.com/divr26z8e/image/upload/v1670076780/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f646779387962656f792f696d6167652f75706c6f61642f76313635393330383833342f4e4654446f636b65745f6165636131392e706e67_icpj48.png" alt="Block Diagram" width="100%">

## Screenshots

<img src="https://res.cloudinary.com/divr26z8e/image/upload/v1670077285/Screenshot_2022-12-03_at_7.50.53_PM_kaaw86.png" alt="Logo" width="100%">
<img src="https://res.cloudinary.com/divr26z8e/image/upload/v1670077010/Group_34_s3alea.png" alt="Logo" width="100%">

## Future Scope

* We can implement this in a Mobile Application to further increase the accessibility and use cases multifolds.
* As, we are using Soulbound NFTs in the application this can also be used to issue certificates that are issued uniquely such as Degrees, Tickets, Citizenship and much more.
* We can implement a Gamification in this platform in which every issued warranty NFT transfers some credits to the Seller which can later be redeemed on the same platform using different schemes. These credits can also be used as gas fees for issuing NFT Warranties by the sellers which will promote more and more businesses to implement the NFT Warranty system in their systems.
* We can implement a marketplace to make the process truly one click. 
* We can use the history tracking functionality to keep a track of sale which can be used in products like cars that frequently change hands.
* As the marketplace is implemented we can also add the functionality of sending the NFT on the buyer’s mobile phone as a notification.


## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/a-sambhab"><img src="https://avatars.githubusercontent.com/u/84642011?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Sai Sambhab Chaini</b></sub></a><br /><a href="" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/gouravmohanty7070"><img src="https://avatars.githubusercontent.com/u/77116228?v=4" width="100px;" alt=""/><br /><sub><b>Gourav Mohanty</b></sub></a><br /><a href="" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/inabinash"><img src="https://avatars.githubusercontent.com/u/78683499?v=4" width="100px;" alt=""/><br /><sub><b>Abinash Gupta</b></sub></a><br /><a href="" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/kumarshantanu01"><img src="https://avatars.githubusercontent.com/u/76111005?v=4" width="100px;" alt=""/><br /><sub><b>
Kumar Shantanu</b></sub></a><br /><a href="" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
