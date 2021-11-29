# blockchain-developer-bootcamp-final-project Lottery

A Lottery web app created with React, web3, smart contracts, deployed on Ropsten Test Network with truffle, and tested with mocha.

![lottery gif](https://media.giphy.com/media/UOvh7Fw9fo7KM/giphy.gif)

<hr />

### Deployed version URL:
https://stupefied-golick-3b969c.netlify.app/


<hr />

### Installation Instructions
1. Make sure you have Node.js >= v14, Truffle and Ganache and Yarn installed on your machine.
2. Clone your this project to your local machine.
3. Run truffle migrate --network development
4. Run truffle test
5. To run frontend - you can use yarn start or npm run start 
6. Open `hhtp://localhost:3000


###Screencast


###Deployed Contract Address (deployed to Ropsten Network)


###Project Workflow 

1. Go to a deployed website
2. Metamask should connect automatically
3. You should see that that the lottery is on
4. Enter amount to play (it should be more than 0.01)
5. Confirm with metamask (you should be in ropsten network)
6. When transaction is approved, you should see a message "You have entered.."
7. After you refresh the page, you will see that number of people entered in lottery incremented.
8. !!!!Only manager of a lottery can call pick a winner (I will need to work on this later, it looks a bit confusing at the moment)

