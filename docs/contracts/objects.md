# **OBJECTS**
- - -
j100Swap 생태계의 contract들은 deploy 되면 Objects contract에 자동 등록되어 생태계의 모든 contract에서    
유기적으로 호출 가능도록 설계, 개발 된 contract 입니다   

- - -
## **Address**

address:
- - -

## **Deployer**

CObjects contract는 개발팀에서 deploy를 합니다   

``` mermaid
graph LR
  dev[Dev.Team] -->|deploy| objs[ CObjects ];
 
```

- - -

## **Events & Functions**

!!! note
    *onlyRegister*   
     - 등록 권한을 부여 받은 contract address 만 호출 가능함( `Objects, Factory 계열의 contract` )


=== "Inquery Functions(18)"

    * **inqueryReleaseDate**   
    Staker가 채굴한 Governance token lockup 해지 날짜와 Governance token staking 시작날짜를 조회 한다    
    ``` java title="bubble_sort.py"
        function inqueryReleaseDate() public view returns( uint256 )
    ```        

    - - -
    * **inqueryWorldCurrency**   
    Stable token의 contract Address를 조회 한다   
    설정되어 있는 토큰은 Tether 이다.
    ``` java title="bubble_sort.py"
        function inqueryWorldCurrency() public view returns( address )
    ```        
   
        !!! info
            토큰의 가치 평가 기준이 되는 토큰

    - - -
    * **inqueryPermission**   
    Inovoke funtions 중 호출 권한이 필요한 functions인 경우 호출 권한이 부여된 contract 만이 호출이 가능한데 이를 관리하는 contract address를 조회 한다
    ``` java
        function inqueryPermission() public view returns( address )
    ```

    - - -
    * **inqueryTeamVault**   
    개발팀의 Vault contract address를 조회 한다
    ``` java
        function inqueryTeamVault() public view returns( address ) 
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

        !!! info
            Governace token contract에는 staking 기능이 내장 되어 있다

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
        function inquerySwapPoolFactory() public view returns( address )
    ```  

    - - - 
    * **inqueryRarity**   
    LPT의 희귀성을 결정 하는 contract address를 조회 한다 
    ``` java
        function inqueryRarity() public view returns( address )
    ```  

    - - - 
    * **inquerySwapHelper**    
    Swap pool의 swap을 도와 주는 유티릴티 contract address를 조회 한다
    ``` java
        function inquerySwapHelper() public view returns( address ) 
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
        function inqueryObject( uint16 objectId ) public view returns( address )
    ```  

        Parameters     
           
        | *Param*      | *Description*                          |
        | :--------- | :------------------------------------ |
        | objectId | Objects에 등록 되어 있는 ObjectId |

        Returns     

        | *Return*    | *Description*                          |
        | :--------- | :------------------------------------ |
        | address | Objects에서 조회 된 contract address |   

        | *Object ID*    | *Number*                          |
        | :--------- | :------------------------------------ |
        | WORLDCURRENCY | 0  |   
        | PERMISSION | 1  |  
        | TEAMVAULT | 2 |  
        | GBUILDER | 3 |  
        | MINE | 4 |   
        | GTOKEN | 5 |  
        | DAOBUILDER | 6 |  
        | DAO | 7 |  
        | MANAGERBUILDER | 8 |   
        | SWAPPOOLMANAGER | 9 |  
        | TOKENMANAGER | 10 |  
        | LPTFACTORY | 11 |          
        | LPTSTAKINGHOLDERFACTORY | 12 |   
        | SWAPPOOLFACTORY | 13 |  
        | RARITY | 14 |  
        | SWAPHELPER | 15 |    


    


=== "Invoke Functions(1)"

    * **registPermission**   
    Invoke functions이 있는 contract로 다른 contract에서 호출이 가능하도록 호출 권한을 부여 한다
    ``` java
        function registPermission( address resource
                                , address accessor
                                , uint16 permission )
                            public onlyRegister
    ```  
        Parameters     
           
        | *Param*        | *Description*                          |
        | :----------- | :------------------------------------ |
        | resource   | 접근하고자 하는 contract address |
        | accessor   | resource contract의 invoke functions을 호출 할 contract address|   
        | permission | 접근 권한 코드 |   

        !!! warning "호출 권한을 부쳐 받은 contract"   
            Factory 계열의    
            CLPTFactory   
            CLPTStakingHolderFactory   
            CSwapPoolFactory    

=== "Events"
    1. Sed sagittis eleifend rutrum
    2. Donec vitae suscipit est
    3. Nulla tempor lobortis orci

