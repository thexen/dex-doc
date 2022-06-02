# **MANAGER BUILDER**
- - -

## **Address**
* ADDRESS
- - -

## **Events & Functions**

!!! note
    *onlyCreator*   
     - contract를 생성 한 account(contract) 만 호출 가능   
   
=== "Inquery Functions(0)"

    
=== "Invoke Functions(1)"

    * **registPermission**   
    token 등급을 등록한다   
    token 등급을 등록 하지 않은 상태에서 swap pool을 만들면 C(1)등급으로 자동 설정된다
    ``` java
        function registTokenGrade( address token, uint8 grade ) 
                    public onlyCreator
    ```  
        Parameters     
           
        | *Param*        | *Description*                          |
        | :----------- | :------------------------------------ |
        | token   | ERC20 token contract address |
        | grade   | ERC20 token 등급 |   
    
=== "Events"
    1. Sed sagittis eleifend rutrum
    2. Donec vitae suscipit est
    3. Nulla tempor lobortis orci

