# **LPT FACTORY**
- - -
Swap pool Factory에서 유동성 풀을 생성 할때 호출 되어 유동성 풀에 dependency한    
LPT contract를 생성하는 역할을 합니다 

- - -
## **Address**
IObjects의 inqueryLPTFactory() function 사용

address:    
- - -

## **Events & Functions**

!!! note
    *checkPermission( uint16( ENUMPERMISSIONS.ONLY_SWAPPOOL_FACTORY ) )*   
     - swap pool factory contract 에서만 호출 가능 

=== "Inquery Functions(0)"
   
=== "Invoke Functions(1)"

    * **createLPT**   
    LPT를 생성한다
    ``` java
        function createLPT( address swapPool
                        , string memory lptName
                        , string memory lptSymbol
                        , string memory lptBaseUri ) 
                    public checkPermission( uint16( ENUMPERMISSIONS.ONLY_SWAPPOOL_FACTORY ) ) 
                    returns( address )
    ```  
        Parameters     
           
        | *Param*        | *Description*                          |
        | :----------- | :------------------------------------ |
        | swapPool   | 유동성을 예치할 swap pool contract address |
        | lptName   | LPT name |   
        | lptSymbol | LPT symbol |   
        | lptBaseUri | LPT base uli |   
    
=== "Events"
    1. Sed sagittis eleifend rutrum
    2. Donec vitae suscipit est
    3. Nulla tempor lobortis orci

