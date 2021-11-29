    1. Players will need to enter the lottery
    
    function enter() public payable{
       //enter the lottery with ether
    }
    
    2.
    function random() private view returns (uint){
       //random helper function to choose a winner
    }
    
    3. Pick a winner - can be called by the admin of the Lottery
    function pickWinner() public restricted{
       //pick a winner
    }
    
    
    4.
    function getPlayers() public view returns(address[]){
        //get players info
    }

    

