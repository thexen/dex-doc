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

## **Deployer**

CSwapPoolFactory contract는 개발팀에서 deploy 합니다   

``` mermaid
graph LR
  dev[Dev.Team] -->|deploy| spF[ CSwapPoolFactory ];
```

`Objects`는 CSwapPoolFactory에게 아래 contract를 대상으로 `ENUMPERMISSIONS.FACTORY` 권한을   
부여합니다

!!! note ""   
    CSwapPoolManager      
    CTokenManager  

그리고 아래 contract를 대상으로 `ENUMPERMISSIONS.ONLY_SWAPPOOL_FACTORY` 권한을   
추가적으로 부여합니다

!!! note ""   
    CLPTFactory      
    CLPTStakingHolderFactory        

마지막으로 `Objects`의 registPermission() 사용 권한을 부여 받습니다   

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

=== "Events(1)"

    * **CreateSwapPool**   
    Swap Pool 생성 이벤트
    ``` java
        event CreateSwapPool( address firstToken
                        , address secondToken
                        , address sp
                        , address holder
                        , address lpt
                        , uint256 fee );
    ```  

        Parameters     
           
        | *Param*        | *Description*                          |
        | :----------- | :------------------------------------ |
        | firstToken   | binding 된 ERC20 token contract adress  |
        | secondToken   | binding 된 ERC20 token contract adress|   
        | sp | 생성된 swap pool contract address |   
        | holder | 생성된 staking holder contract address |   
        | lpt | 생성된 LPT contract address |                   
        | fee | swap 수수료 |   
