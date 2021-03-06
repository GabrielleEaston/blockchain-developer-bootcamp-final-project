# blockchain-developer-bootcamp-final-project Lottery

A Lottery web app created with React, web3, smart contracts, deployed on Ropsten Test Network with truffle, and tested with mocha.

![lottery gif](https://media.giphy.com/media/UOvh7Fw9fo7KM/giphy.gif)

<hr />

### Deployed version URL:
https://final-project-lottery.netlify.app/


<hr />

### Installation Instructions
1. Make sure you have Node.js >= v14, Truffle and Ganache and Yarn installed on your machine.
2. Clone your this project to your local machine.
3. Run truffle migrate --network development
4. Run truffle test
5. To run frontend - you can use yarn start or npm run start 
6. Open `http://localhost:3000`


### Screencast

https://www.loom.com/share/a44c849add744f6ab5f6c90a503348b0


### Deployed Contract Address (deployed to Ropsten Network)
`0xbc2639770A69fa55f7C6EB528E4c24f8dE83def7`

### Public Ethereum account for certification
0xe262E2a6C160C354c747e6F9A71AC5c76843Ff0C

### Project Workflow 

1. Go to a deployed website https://final-project-lottery.netlify.app/
2. Metamask should connect automatically
3. You should see that that the lottery is on
4. Enter amount to play (it should be more than 0.01 eth)
5. Confirm with metamask (* you should be in ropsten network)
6. When transaction is approved, you should see a message "You have entered the lottery".
7. After you refresh the page, you will see that number of people entered in lottery incremented.
8. Only manager of a lottery can call pick a winner (Will work on a front end as Post MVP)


