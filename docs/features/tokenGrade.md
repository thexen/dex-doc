# **TOKEN TIER**
- - -

# **Address**
* ADDRESS
- - -

# **Events & Functions**

!!! note
    *onlyCreator*   
     - contract를 생성 한 account(contract) 만 호출 가능( `Permission contract는 Objects contract가 생성 함` )   

=== "Inquery Functions"

    * **inqueryPermission**   
    contract에 접근가능한 권한을 조회 한다.
    ``` java
        function inqueryPermission( address resource
                                , address accessor ) 
                            public view returns( uint16 )
    ```   
        Parameters     
           
        | *Param*      | *Description*                          |
        | :--------- | :------------------------------------ |
        | resource | 접근하고자 하는 contract address |
        | accessor | resource contract의 invoke functions을 호출 할 contract address |   

        Returns     

        | *Return*    | *Description*                          |
        | :--------- | :------------------------------------ |
        | uint16 | 접근 권한 코드 (0-조회 실패)|

    
=== "Invoke Functions"

    * **registPermission**   
    Invoke functions이 있는 contract로 다른 contract에서 호출이 가능하도록 호출 권한을 부여 한다
    ``` java
        function registPermission( address resource
                                , address accessor
                                , uint16 permission ) 
                            public onlyCreator
    ```  
        Parameters     
           
        | *Param*        | *Description*                          |
        | :----------- | :------------------------------------ |
        | resource   | 접근하고자 하는 contract address |
        | accessor   | resource contract의 invoke functions을 호출 할 contract address |   
        | permission | 접근 권한 코드 |   
    
=== "Events"
    1. Sed sagittis eleifend rutrum
    2. Donec vitae suscipit est
    3. Nulla tempor lobortis orci
