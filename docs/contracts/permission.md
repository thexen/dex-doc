# **PERMISSION**
- - -
j100Swap 생태계 contract의 function 호출 권한을 관리하는 contract 입니다   

- - -
## **Address**
IObjects의 inqueryPermission() function 사용

address:
- - -

## **Deployer**

CPermission contract는 CObjects가 deploy 합니다   

``` mermaid
graph LR
  dev[Dev.Team] -->|deploy| objs[ CObjects ];
  objs -->|deploy| perm[ CPermission ];
 
```

- - -

## **Events & Functions**

!!! note
    *onlyCreator*   
     - contract를 생성 한 account(contract) 만 호출 가능( `Permission contract는 Objects contract가 생성 함` )   

=== "Inquery Functions(1)"

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

    
=== "Invoke Functions(1)"

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

