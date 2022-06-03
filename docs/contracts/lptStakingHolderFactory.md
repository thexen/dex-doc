# **LPT STAKING HOLDER FACTORY**
- - -
Swap pool Factory에서 유동성 풀을 생성 할때 호출 되어 유동성 풀에 dependency한    
LPTStakingHolder contract를 생성하는 역할을 합니다  

- - -

## **Address**
IObjects의 inqueryLPTStakingHolderFactory() function 사용

address:      
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

