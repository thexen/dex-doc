# **OBJECTS-KR**
- - -

## **Address**
* ADDRESS
- - -

## **Events & Functions**

> onlyRegister - 등록 권한을 부여 받은 contract address만 호출 가능( Objects, Factory 계열의 contract 들만 호출 가능 )    

!!! note

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.


=== "Inquery Functions"

    * **inqueryWorldCurrency**   
    Stable token의 contract Address를 조회 한다   
    설정되어 있는 토큰은 Tether 이다.
    ``` java title="bubble_sort.py"
        function inqueryWorldCurrency() public view returns( address )
    ```        
    > 토큰의 가치 평가 기준이 되는 토큰   

    - - -
    * **inqueryPermission**   
    Inovoke funtions 중 호출 권한이 필요한 functions인 경우 호출 권한이 부여된 contract 만이 호출이 가능한데 이를 관리하는 contract address를 조회 한다
    ``` java
        function inqueryPermission() public view returns( address )
    ```

    - - -
    * **inqueryTeamWallet**   
    개발팀의 wallet contract address를 조회 한다
    ``` java
        function inqueryTeamWallet() public view returns( address ) 
    ```    

    - - -
    * **inqueryGovernaceBuilder**   
    Governace mine 과 Governace token을 deploy한 contract address를 조회 한다
    ``` java
        function inqueryGovernaceBuilder() public view returns( address )
    ```   

    - - -
    * **inqueryGoveranceMine**   
    Governace mine contract address를 조회 한다
    ``` java
        function inqueryGovernanceMine() public view returns( address ) 
    ```   

    - - -
    * **inqueryGovernanceToken**
    Governace token contract address를 조회 한다
    ``` java
        function inqueryGovernanceToken() public view returns( address payable ) 
    ```       
    > Governace token contract에는 staking 기능이 내장 되어 있다

    - - -
    * **inqueryDAOBuilder**    
    DAO contract를 deploy한 contract address를 조회 한다
    ``` java
        function inqueryDAOBuilder() public view returns( address )
    ```  

    - - -
    * **inqueryDAO**   
    DAO contract address를 조회 한다
    ``` java
        function inqueryDAO() public view returns( address )
    ```   

    - - -
    * **inqueryManagerBuilder**   
    Swap pool manager 와 Token grade manager를 deploy한 contract address를 조회 한다
    ``` java
        function inqueryManagerBuilder() public view returns( address )
    ```  

    - - -  
    * **inquerySwapPoolManager**   
    Swap pool manager contract address를 조회 한다 
    ``` java
        function inquerySwapPoolManager() public view returns( address ) 
    ```  

    - - -  
    * **inqueryTokenManager**   
    Token grade manager contract address를 조회 한다 
    ``` java
        function inqueryTokenManager() public view returns( address )
    ```  

    - - -  
    * **inqueryLPTFactory**   
    LPT(ERC721)을 create 하는 contract address를 조회 한다
    ``` java
        function inqueryLPTFactory() public view returns( address )
    ```   

    - - -
    * **inqueryLPTStakingHolderFactory**   
    LPT의 Staking Holder를 create 하는 contract address를 조회 한다 
    ``` java
         function inqueryLPTStakingHolderFactory() public view returns( address )
    ```  

    - - - 
    * **inquerySwapPoolFactory**   
    Swap pool을 create 하는 contract address를 조회 한다 
    ``` java
        function inquerySwapPoolFactory() public view override returns( address )
    ```  

    - - - 
    * **inqueryRarity**   
    LPT의 희귀성을 결정 하는 contract address를 조회 한다 
    ``` java
        function inqueryRarity() public view override returns( address )
    ```  

    - - - 
    * **inquerySwapHelper**    
    Swap pool의 swap을 도와 주는 유티릴티 contract address를 조회 한다
    ``` java
        function inquerySwapHelper() public view override returns( address ) 
    ```  

    - - -
    * **checkDepenencyV1**    
    Objects의 의존성을 검증 한다 
    ``` java
        function chekcDepenencyV1() public view returns( bool )
    ```  

    - - - 
    * **inqueryObject**   
    Objects에 등록 되어 있는 contract를 id로 조회 한다 
    ``` java
        function inqueryObject( uint16 objectId ) public view returns( address)
    ```  

        Parameters     
           
        | Param      | Description                          |
        | :--------- | :------------------------------------ |
        | `objectId` | Objects에 등록 되어 있는 ObjectId |

        Returns     

        | return    | Description                          |
        | :--------- | :------------------------------------ |
        | `address` | Objects에서 조회 된 contract address |   

        > 조회 실패 - address(0)

=== "Invoke Functions"

    * **registPermission**   
    Invoke functions이 있는 contract로 다른 contract에서 호출이 가능하도록 호출 권한을 부여 한다
    ``` java
        function registPermission( address resource, address accessor, uint16 permission ) public onlyRegister
    ```  
        Parameters     
           
        | Param        | Description                          |
        | :----------- | :------------------------------------ |
        | `resource`   | 접근하고자 하는 contract address |
        | `accessor`   | resource contract의 invoke functions을 호출할 contract |   
        | `permission` | 접근 권한 코드 |   

=== "Events"
    1. Sed sagittis eleifend rutrum
    2. Donec vitae suscipit est
    3. Nulla tempor lobortis orci

