    - Players will need to enter the lottery
    ```
    function enter() public payable{
       //enter the lottery with ether
    }
    ```
  
    ```
    function random() private view returns (uint){
       //random helper function to choose a winner
    }
    ```
    - Pick a winner - can be called by the admin of the Lottery
    ```
    function pickWinner() public restricted{
       //pick a winner
    }
    ```
    
    
    ```
    function getPlayers() public view returns(address[] memory){
        //get players info
    }

    ```
    

