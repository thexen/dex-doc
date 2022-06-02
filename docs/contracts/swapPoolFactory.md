# **SWAP POOL FACTORY**
- - -

## **Address**
* ADDRESS
- - -

## **Events & Functions**



=== "Inquery Functions(0)"
    
=== "Invoke Functions(2)"

    * **createTNTSwapPool**   
    ERC20 token을 binding 하여 swap pool을 생성한다
    ``` java
        createTNTSwapPool( address firstToken
                        , address secondToken
                        , uint256 fee ) 
                    public returns( address )
    ```  
        Parameters     
           
        | *Param*        | *Description*                          |
        | :----------- | :------------------------------------ |
        | firstToken   | binding 할 첫 번째 ERC20 token contract adress  |
        | secondToken   | binding 할 두 번째 ERC20 token contract adress|   
        | fee | swap 수수료 |   

        Returns     

        | *Return*    | *Description*                          |
        | :--------- | :------------------------------------ |
        | address | 생성된 swap pool contract address |
    
    - - -
    * **createTNCSwapPool**   
    ERC20 token과 coin(klay)를 binding 하여 swap pool을 생성한다
    ``` java
        function createTNCSwapPool( address firstToken
                                , uint256 fee ) 
                            public payable returns( address )
    ```  
        Parameters     
           
        | *Param*        | *Description*                          |
        | :----------- | :------------------------------------ |
        | firstToken   | binding 할 첫 번째 ERC20 token contract adress  |
        | fee | swap 수수료 |  

        Returns     

        | *Return*    | *Description*                          |
        | :--------- | :------------------------------------ |
        | address | 생성된 swap pool contract address |        

=== "Events"
    1. Sed sagittis eleifend rutrum
    2. Donec vitae suscipit est
    3. Nulla tempor lobortis orci

