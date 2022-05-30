# **DAO**
- - -

# **Address**
* ADDRESS
- - -

# **Events & Functions**

> onlyVoting - voting contract만 호출 가능        
> onlyConsent - 상정된 안건의 투표결과로 호출 가능( 호출 조건 발행된 투표권의 과반수이상 투표 참석, 투표 참석 중 과반수 이상 찬성)

!!! note
    *onlyVoting*   
     - voting contract만 호출 가능
    *onlyConsent*   
     - 상정된 안건이 투표를 거처 가결되면 호출 가능   
     - 가결 조건 투표권의 과반수이상 투표 참석, 투표 참석 중 과반수 이상 찬성


=== "Inquery Functions"

    * **inqueryAgendaSize**   
    전체 안건 수를 조회 한다
    ``` java
        function inqueryAgendaSize() public view returns( uint256 )
    ```   
        Returns     

        | *Return*    | Description                          |
        | :--------- | :------------------------------------ |
        | uint256 | 상정된 전체 안건 수 |
  
    - - -
    * **inqueryVoting**   
    상정된 안건의 투표 contract address를 조회 한다
    ``` java
        function inqueryVoting( uint256 agendaId ) public view returns( address )
    ```   
        Parameters     
           
        | *Param*      | Description                          |
        | :--------- | :------------------------------------ |
        | agendaId | 상정된 안건 id |

        Returns     

        | *Return*    | Description                          |
        | :--------- | :------------------------------------ |
        | address | ERC20 투표 contract address |

    - - -
    * **inqueryVotingStatus**   
    상정된 안건의 투표 진행 상태를 조회 한다
    ``` java
        function inqueryVotingStatus( uint256 agendaId ) 
                    public view returns( TVotingStatus memory )
    ```   
        Parameters     
           
        | *Param*      | Description                          |
        | :--------- | :------------------------------------ |
        | agendaId | 상정된 안건 id |

        Returns     

        | *Return*    | Description                          |
        | :--------- | :------------------------------------ |
        | TVotingStatus | 안건 처리 상태 |

        ``` C++
        struct TVotingStatus {
            uint256     agendaId;           //안건 id
            uint256     expirationDate;     //안건 처리 만기일  deadline + 7 days
            uint256     registedTime;       //안건 상정된 시간
            uint256     preInvokedTime;     //사전안건 처리 시간
            uint256     invokedTime;        //본안건 처리 시간
        }        
        ```
=== "Invoke Functions"

    * **invokeNewBallot**   
    안건을 상정 한다
    ``` java
        function invokeNewBallot( bytes memory preCallData
                            , bytes memory callData
                            , uint256 incentive
                            , uint256 deadline ) 
                        public noReentrancy returns( address )
    ```   
        Parameters     
           
        | *Param*      | Description                          |
        | :--------- | :------------------------------------ |
        | preCallData | callData 호출전 선행되어야 하는 내용 |
        | callData | 상정한 안건이 가결 되면 호출 될 내용 |   
        | incentive | 투표권 행사를 독려하기 위한 incentive  |
        | deadline | 투표 만료 기간 |   

        Returns     

        | *Return*    | Description                          |
        | :--------- | :------------------------------------ |
        | address | ERC20 투표 contract address |

        !!! info
            deadline은 투표 만료 기간으로 안건 상정 시간으로 부터 10일을 초과 할 수 없다   
            그리고 투표가 끝난 후 가결이 되면 3일 이내 안건을 처리 하여야 한다   

    - - -
    * **invokeTokenUpGrade**   
    Token 등급을 한단계 상승시킨다
    ``` java
        function invokeTokenUpGrade( address token ) 
                    public onlyVoting noReentrancy
    ```   
        Parameters     
           
        | *Param*      | Description                          |
        | :--------- | :------------------------------------ |
        | token | ERC20 token contract address |

        !!! info
                S(4)등급 이상의 token은 단계 상승,하락 시킬수 없다  
                A(3)까지만 상승 실킬 수 있다   


    - - -
    * **invokeTokenDownGrade**   
    Token 등급을 한단계 하락시킨다
    ``` java
        function invokeTokenDownGrade( address token ) public onlyVoting noReentrancy
    ```   
        Parameters     
           
        | *Param*      | Description                          |
        | :--------- | :------------------------------------ |
        | token | ERC20 token contract address |

        !!! info
                S(4)등급 이상의 token은 단계 상승,하락 시킬수 없다   

    - - -
    * **invokePreLPTSplit**   
    swap pool의 LPT Token 분할 작업을 위해 선행 작업을 한다     
    ``` java
        function invokePreLPTSplit( address swapPool ) public onlyVoting noReentrancy
    ```   
        Parameters     
           
        | *Param*      | Description                          |
        | :--------- | :------------------------------------ |
        | swapPool | LPT 분할을 할 swap pool contract address |        

        !!! info   
                swap pool Deposit 일시 중지         
                swap pool 연결된 StakingHolder의 Staking 일시 중지   
                (일시 중지 후 만 3일 안에 재시작이 되지 않으면 자동으로 재시작 됨)   

    - - -
    * **invokeLPTSplit**   
    swap pool의 LPT Token 분할 작업을 수행한다      
    ``` java
        function invokeLPTSplit( address swapPool, uint amountPerLPT ) 
                    public onlyVoting noReentrancy
    ```   
        Parameters     
           
        | *Param*      | Description                          |
        | :--------- | :------------------------------------ |
        | swapPool | LPT 분할을 할 swap pool contract address |   
        | amountPerLPT | LPT 당 분할 할 수량 |   

        !!! info   
                swap pool Deposit 재시작   
                swap pool 연결된 StakingHolder의 Staking 재시작   

    - - -
    * **invokeFee**   
    swap pool의 swap 수수료를 설정한다
    ``` java
       function invokeFee( address swapPool, uint256 fee ) 
                    public onlyVoting noReentrancy
    ```   
        Parameters     
           
        | *Param*      | Description                          |
        | :--------- | :------------------------------------ |
        | swapPool | LPT 분할을 할 swap pool contract address |   
        | fee | 수수료(10,000(0.001%)~1,000,000(1%), 단위 1/1,000,000,000) | 

    - - -
    * **invokeGovernanceAccumulation**   
    swap pool의 swap 수수료 중 Governance 배당률을 설정 한다
    ``` java
       function invokeGovernanceAccumulation( address swapPool
                                        , uint256 accumulation ) 
                                    public onlyVoting noReentrancy
    ```   
        Parameters     
           
        | *Param*      | Description                          |
        | :--------- | :------------------------------------ |
        | swapPool | LPT 분할을 할 swap pool contract address |   
        | accumulation | 배당률(400,0000,000(40%)~600,000,000(60%), 단위 1/1,000,000,000) |     

    - - -
    * **invokeEditProbabilityTable**   
    LPT 강화 등급별 확률 및 가중치를 설정 한다
    ``` java
       function invokeEditProbabilityTable( string memory rarity
                                        , uint percentage
                                        , uint8 weight ) 
                                    public onlyVoting noReentrancy
    ```   
        Parameters     
           
        | *Param*      | Description                          |
        | :--------- | :------------------------------------ |
        | rarity | rarity 이름 |   
        | percentage | 강화 확률 |             
        | weigh` | 가중치 | 

        [:fontawesome-solid-link: LPT 강화 테이블 ](/features/lpt/#lpt-enhance){ .md-button } 

    - - -
    * **invokeStakingUnit**   
    Governance token의 staking 묶음 단위를 설정 한다
    ``` java
       function invokeStakingUnit( uint256 stakingUnit ) 
                    public onlyVoting noReentrancy
    ```   
        Parameters     
           
        | *Param*      | Description                          |
        | :--------- | :------------------------------------ |
        | stakingUnit | 최소 staking 수량 및 묶음 단위( 1 ether ~ 10,000 ether ) |   
        

=== "Events"
    1. Sed sagittis eleifend rutrum
    2. Donec vitae suscipit est
    3. Nulla tempor lobortis orci

