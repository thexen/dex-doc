# **SWAP POOL FACTORY**
- - -
j100 swap 생태계의 유동성 풀을 생성하는 contract 입니다   
유동성 풀 생성시 LPT Contract와 LPTStakingHolder Contract도 같이 생성 되어    
SwapPoolManager와 TokenManager에 등록되어 관리가 됩니다   
등록 수수료는 500 J100 입니다   

- - -
## **Address**
IObjects의 inquerySwapPoolFactory() function 사용

address:      
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

