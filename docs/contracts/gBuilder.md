# **GOVERNANCE BUILDER**
- - -
mine 과 Governance token contract를 deploy하고 objects에 등록하는 역할을 합니다   

- - -
## **Address**
IObjects의 inqueryGovernaceBuilder() function 사용

address:    
- - -

## **Events & Functions**

!!! note
    *onlyCreator*   
     - contract를 생성 한 account(contract) 만 호출 가능( `개발팀에서 생성`)   

=== "Inquery Functions"
   
=== "Invoke Functions(2)"

    * **invokeStartMining**   
    Mining을 시작한다   
    ``` java
        function invokeStartMining() public onlyCreator 
    ```  

        !!! info
            Mine contract의      
            invokeMining(), inqueryMiningAmount( address swapPool ) 두 function 호출을   
            가능하게 한다  
      
    - - -
    * **invokeStopMining**   
    Mining을 중지한다
    ``` java
        function invokeStopMining() public onlyCreator
    ```  
    
=== "Events"
    1. Sed sagittis eleifend rutrum
    2. Donec vitae suscipit est
    3. Nulla tempor lobortis orci

