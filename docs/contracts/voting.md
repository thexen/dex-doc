# **VOTING**
- - -
j100 swap 생태게에서 안건이 상정되면 Governor들에게 투표권이 송부되는데 송부된 투표권을    
행사 할 수 있는 역할을 하는 contract입니다  

- - -
## **Address**
CDAO의 inqueryVoting(uint256 agendaId) function 사용

address:

- - -
## **Deployer**
CVoting contract는 CDAO에 안건을 상정 하면 CDAO에서 deploy 합니다   

``` mermaid
graph LR
  dev[Dev.Team] -->|deploy| daoBuilder[ CDAOBuilder ];
  daoBuilder -->|deploy| dao[ CDAO ];
  proposer[proposer] --> |agenda proposal| dao;
  dao -->|deploy| voting[ CVoting ];
 
```

- - -
## **Events & Functions**

!!! note
    *onlyCreator*   
     - contract를 생성 한 account(contract) 만 호출 가능   
     - DAO contract가 생성 함   
    *onlyConsent*   
    - 상정된 안건이 투표를 거처 가결되면 호출 가능   
    - 가결 조건 투표권의 과반수이상 투표 참석, 투표 참석 중 과반수 이상 찬성  

=== "Inquery Functions(2)"

    * **inqueryAggrBallot**   
    투표 진행 상태를 조회 한다
    ``` java
        function inqueryAggrBallot() 
            public view returns( uint256, uint256, uint256, uint256 ) 
    ```   
        Returns     

        | *Return*    | Description                          |
        | :--------- | :------------------------------------ |
        | uint256 | 투표 만료 일 |
        | uint256 | 안건 찬성 수  |
        | uint256 | 안건 반대 수 |
        | uint256 | 전체 투표권 수  |        

    - - -
    * **inqueryCallData**   
    상정된 본 안건 data를 조회 한다
    ``` java
         function inqueryCallData() 
                    public view returns( string memory, bytes memory )
    ```   
        Returns     

        | *Return*    | Description                          |
        | :--------- | :------------------------------------ |
        | string | 상정된 안건이 가결 되면 호출 될 function 이름 |
        | bytes | 호출 할 function의 encoded 된 parameter  |
    
=== "Invoke Functions(7)"

    * **invokeDeadline**   
    투표 만료일을 설정한다
    ``` java
        function invokeDeadline( uint256 deadline ) public onlyCreator
    ```  

    - - -
    * **mint**   
    투표권을 발행 한다
    ``` java
        function mint( address to, uint256 amount ) public onlyCreator
    ```  

    - - -    
    * **agree**   
    상정된 안건에 찬성한다
    ``` java
        function agree() public noReentrancy
    ```  
    
    - - -    
    * **disAgree**   
    상정된 안건에 반대한다
    ``` java
        function disAgree() public noReentrancy
    ```  

    - - -
    * **invokeProposer**   
    안건 제안자를 등록한다
    ``` java
        function invokeProposer( address proposer ) public onlyCreator
    ```  
        Parameters     
           
        | *Param*        | *Description*                          |
        | :----------- | :------------------------------------ |
        | proposer   | 안건을 상정한 address |

    - - -
    * **invoke**   
    상정된 본 안건이 가결되어 본 안건을 처리 한다
    ``` java
        function invoke() public onlyConsent noReentrancy 
    ```  

    - - -
    * **withdrawal**   
    투표 독려금을 회수 한다
    ``` java
         function withdrawal() public onlyProposer
    ```      
    
=== "Events(2)"

    * **Invoke**   
    투표 이벤트
    ``` java
    
        event Voting( address indexed object, address voter
                                        , uint256 agree, uint256 disagree
                                        , uint256 totalAgree, uint256 totalDisagree
                                        , uint256 totalSupply );

        Parameters     
           
        | *Param*        | *Description*                          |
        | :----------- | :------------------------------------ |
        | object   | Objects contract address  |
        | voter   | 투표자  |
        | agree   | 투표자가 찬성한 수 |
        | disagree   | 투표자가 반대한 수  |
        | totalAgree   | 전체 찬성 수  |
        | totalDisagree   | 전체 반대 수  |
        | totalSupply   | 투표권 수 |

    - - -
    * **Invoke**   
    가결된 안건 처리 이벤트
    ``` java
        event Invoke( address indexed object, bytes callData );
    ```  

        Parameters     
           
        | *Param*        | *Description*                          |
        | :----------- | :------------------------------------ |
        | object   | Objects contract address  |
        | callData   | 안건 처리 내용  |

