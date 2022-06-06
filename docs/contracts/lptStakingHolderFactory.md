# **LPT STAKING HOLDER FACTORY**
- - -
Swap pool Factory에서 유동성 풀을 생성 할때 호출 되어 유동성 풀에 dependency한    
LPTStakingHolder contract를 생성하는 역할을 합니다  

- - -

## **Address**
IObjects의 inqueryLPTStakingHolderFactory() function 사용

address:      
- - -

## **Deployer**

CLPTStakingHolderFactory contract는 개발팀에서 deploy 합니다   

``` mermaid
graph LR
  dev[Dev.Team] -->|deploy| lptSHF[ CLPTStakingHolderFactory ];
```

`Objects`는 CLPTStakingHolderFactory에게 아래 contract를 대상으로 `ENUMPERMISSIONS.FACTORY` 권한을   
부여합니다

!!! note ""   
    CSwapPoolManager      
    CTokenManager   

마지막으로 `Objects`의 registPermission() 사용 권한을 부여 받습니다   

- - -

## **Events & Functions**

!!! note
    *checkPermission( uint16( ENUMPERMISSIONS.ONLY_SWAPPOOL_FACTORY ) )*   
     - swap pool factory contract 에서만 호출 가능 

=== "Inquery Functions(0)"
   
=== "Invoke Functions(1)"

    * **createLPTStakingHolder**   
    LPT staking holder를 생성한다
    ``` java
        function createLPTStakingHolder( address swapPool
                                    , address lpt ) 
                                public  checkPermission( uint16( ENUMPERMISSIONS.ONLY_SWAPPOOL_FACTORY ) ) 
                                returns( address )
    ```  
        Parameters     
           
        | *Param*        | *Description*                          |
        | :----------- | :------------------------------------ |
        | swapPool   | swap pool contract address |
        | lpt   | staking 할 LPT |   

    
=== "Events"
    1. Sed sagittis eleifend rutrum
    2. Donec vitae suscipit est
    3. Nulla tempor lobortis orci

