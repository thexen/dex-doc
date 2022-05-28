# **MINE**
- - -

# **Address**
* ADDRESS
- - -

# **Events & Functions**

!!! note
    *onlyCreator*   
     - contract를 생성 한 account(contract) 만 호출 가능( `GBuilder contract에서 생성`)        

=== "Inquery Functions"

    * **inqueryMiningAmount**   
    모든 LPT staking holder로 mining(air drop)될 Governance token의 수량을 조회한다
    ``` java
        function inqueryMiningAmount() public view returns( uint256, uint256 )
    ```   
        Returns     

        | *Return*    | Description                          |
        | :--------- | :------------------------------------ |
        | uint256 | mining 수량 |
        | uint256 | mining 수수료 |

    - - -
    * **inqueryIsMining**   
    mining 가능 유무를 확인 한다
    ``` java
        function inqueryIsMining() public view override returns( bool )
    ```  
        Returns     

        | *Return*    | Description                          |
        | :--------- | :------------------------------------ |
        | bool | true mining 가능, false 불가능 |        

    - - -
    * **inqueryMiningConst**   
    특정 swap pool의 mining 정보를 조회 한다
    ``` java
        function inqueryMiningConst( address swapPool ) 
                    public view returns( uint256 , uint8, uint256 )
    ```   
        Parameters   
                
        | *Param*      | Description                          |
        | :--------- | :------------------------------------ |
        | swapPool | swap pool contract address |   
                            
        Returns   
        
        | *Return*    | Description                          |
        | :--------- | :------------------------------------ |
        | uint256 | 가장 최근에 invokeMining() function이 호출 된 시간 |    
        | uint8 | swap pool 가중치 |    
        | uint256 | swap pool 들의 전체 가중치 |    

    - - -
    * **inqueryIsMining**   
    특정한 swap pool에서 mining 가능한 Governance token 수량을 조회 한다
    ``` java
        function inqueryMiningAmount( address swapPool ) 
                    public view override returns( uint256 )
    ```  
        Parameters   
                
        | *Param*      | Description                          |
        | :--------- | :------------------------------------ |
        | swapPool | swap pool contract address |   
                            
        Returns   
        
        | *Return*    | Description                          |
        | :--------- | :------------------------------------ |
        | uint256 | mining 가능한 수량 |    

    
=== "Invoke Functions"

    * **invokeStart**   
    mining을 시작 한다
    ``` java
        function invokeStart() public onlyCreator
    ```  
  
    - - -
    * **invokeStop**   
    mining을 중지 한다
    ``` java
        function invokeStop() public onlyCreator
    ```  
    
    - - -
    * **invokeMining**   
    mining을 한다
    ``` java
        function invokeMining() public noReentrancy
    ```  

        !!! info
            mining 가능한 LPT Staking holder는 B(2)이상의 token으로 만    
            binding 된 swap pool 이여야만 한다      
            mining 수수료는 mining 된 전체 수량의 10%이며   
            Team wallet으로 전송된다    
    
=== "Events"
    1. Sed sagittis eleifend rutrum
    2. Donec vitae suscipit est
    3. Nulla tempor lobortis orci

