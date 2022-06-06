# **PERMISSION**
- - -
DAO의 안건 등록을 도와 주는 contract 입니다   
Objects contract에는 동록 되어있지 않습니다      

- - -
## **Address**

address:
- - -

## **Deployer**

CPermission contract는 CObjects가 deploy 합니다   

``` mermaid
graph LR
  dev[Dev.Team] -->|deploy| daoH[ CDAOHelper ];
```

- - -
## **Events & Functions**

Voting contract에서 address(CDAO).call(payload) function call을 위한 payload 부분을 만들어 주는    
function 들입니다   
각 parameter들은 DAO contract 문서를 참고 하시기 바랍니다    

[:fontawesome-solid-link: CONTRACTS - DAO :fontawesome-solid-link:](/contracts/dao/){ .md-button } 


=== "Inquery Functions(9)"

    * **invokeModifyTokenAttr**   
    CDAO contract의 invokeModifyTokenAttr function을 호출 할 수 있도록   
    abi encoding한 결과를 응답한다
    ``` java
        function invokeModifyTokenAttr( address token, uint8 mod ) 
                        public pure returns( bytes memory )
    ```   
        Parameters     
           
        | *Param*      | *Description*                          |
        | :--------- | :------------------------------------ |
        | token | ERC20 token contract address |
        | mod | 0 : 1등급 상승, 1 : 1등급 하락, 2: 마이닝 자격 갱신, 3 : 마이닝 자격 박탈 |

        Returns     

        | *Return*    | *Description*                          |
        | :--------- | :------------------------------------ |
        | bytes | 호출이 가능한 abi encoding 된 bytes |
    - - -       

    * **invokeLPTSplit**   
    CDAO contract의 invokeLPTSplit function을 호출 할 수 있도록   
    abi encoding한 결과를 응답한다
    ``` java
      function invokeLPTSplit( address swapPool
                            , uint256 amountPerLPT ) 
                          public pure returns( bytes memory )   
    ```   

    - - -   
    * **invokeFee**   
    CDAO contract의 invokeFee function을 호출 할 수 있도록   
    abi encoding한 결과를 응답한다
    ``` java
      function invokeFee( address swapPool, uint256 fee ) 
                  public pure returns( bytes memory )
    ```   

    - - -   
    * **invokeGovernanceAccumulation**   
    CDAO contract의 invokeGovernanceAccumulation function을 호출 할 수 있도록   
    abi encoding한 결과를 응답한다
    ``` java
      function invokeGovernanceAccumulation( address swapPool
                                          , uint256 accumulation ) 
                                        public pure returns( bytes memory )
    ```   

    - - -   
    * **invokeEditProbabilityTable**   
    CDAO contract의 invokeEditProbabilityTable function을 호출 할 수 있도록   
    abi encoding한 결과를 응답한다
    ``` java
      function invokeEditProbabilityTable( string memory rarity
                                        , uint percentage
                                        , uint8 weight ) 
                                      public pure returns( bytes memory )
    ```   

    - - -   
    * **invokeStakingUnit**   
    CDAO contract의 invokeStakingUnit function을 호출 할 수 있도록   
    abi encoding한 결과를 응답한다
    ``` java
      function invokeStakingUnit( uint256 stakingUnit ) 
                                public pure returns( bytes memory )
    ```   

    - - -            
    * **invokeDealFundingAsset**   
    CDAO contract의 invokeDealFundingAsset function을 호출 할 수 있도록   
    abi encoding한 결과를 응답한다
    ``` java
      function invokeDealFundingAsset( uint8 mod
                                    , uint256 amount ) 
                                  public pure returns( bytes memory )
    ``` 

    - - -     
    * **getDeadline**   
    CDAO의 deadline 설정 시간을 계산하기 위해 지금 시간으로 부터 votingPeriod   
    초만큼 뒤의 시간을 계산하여 응답한다   
    ``` java
      function getDeadline( uint256 votingPeriod ) public view returns (uint256)
    ```   
        Returns     

        | *Return*    | *Description*                          |
        | :--------- | :------------------------------------ |
        | uint256 | 지금 시간으로 부터 votingPeriod초 후의 시간 |  

    - - -   
    * **get3MinDeadline**   
    지금 시간으로 부터 3분뒤의 시간을 응답한다
    ``` java
      function get3MinDeadline() public view returns (uint256)
    ```   
        Returns     

        | *Return*    | *Description*                          |
        | :--------- | :------------------------------------ |
        | uint256 | 지금 시간으로 부터 3분 후의 시간 |     

    - - -   


=== "Invoke Functions(0)"
=== "Events(0)"

