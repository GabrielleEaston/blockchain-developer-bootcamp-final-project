    
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
    

