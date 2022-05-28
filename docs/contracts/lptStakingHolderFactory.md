# **LPT STAKING HOLDER FACTORY**
- - -

# **Address**
* ADDRESS
- - -

# **Events & Functions**

!!! note
    *checkPermission( uint16( ENUMPERMISSIONS.ONLY_SWAPPOOL_FACTORY ) )*   
     - swap pool factory contract 에서만 호출 가능 

=== "Inquery Functions"
   
=== "Invoke Functions"

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

