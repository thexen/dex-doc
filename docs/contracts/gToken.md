# **GOVERNANCE TOKEN**
- - -
j100Swap 생태계 Governance token contract 입니다  
ERC20을 상속하여 개발 되었으며 staking기능이 내장되 있습니다   

- - -
## **Address**
IObjects의 inqueryGovernanceToken() function 사용

address:

- - -
## **Deployer**
CStakableGToken contract는 CGovernanceBuilder에서 deploy를 합니다   

``` mermaid
graph LR
  dev[Dev.Team] -->|deploy| gBuilder[ CGovernanceBuilder ];
  gBuilder -->|deploy| gToken[ CStakableGToken ];
 
```

- - -

## **Events & Functions**

!!! note
    *onlyCreator*   
     - contract를 생성 한 account(contract) 만 호출 가능( `GBuilder contract에서 생성`)      
    *checkPermission( uint16( ENUMPERMISSIONS.DAO ) )*   
     - DAO만 호출 할 수 있다

=== "Inquery Functions(17)"

    * **inqueryStakingUnit**   
    Governernance token staking 묶음 단위를 조회 한다   
    ``` java
        function inqueryStakingUnit() public view returns( uint256 )
    ```   
        Returns     

        | *Return*    | *Description*                          |
        | :--------- | :------------------------------------ |
        | uint256 | staking 묶음 단위|

        !!! info
            Governance token staing은 묶음 단위로만 가능하다   
            묶음 단위가 100 Ether 이면 100개 단위로 staking을 하여야 한다           

    - - -
    * **inqueryStakingReward**   
    Caller(staker)의 Governance token staking으로 수령하게 될 reward를 조회 한다
    ``` java
        function inqueryStakingReward() 
                    public view returns( tTokenReward[] memory )
    ```   
        Returns     

        | *Return*    | *Description*                          |
        | :--------- | :------------------------------------ |
        | tTokenReward | token reward 구조체 |

        ``` C++   
        struct tTokenReward {
            address token;      //배당 받을 token
            uint256 reward;     //staking 배당 수량
        }
        ```

    - - -
    * **inqueyrRewardTokenBalance**   
    swap pool의 거래 수수료의 일부는 Governance token staker에게 reward로 배당된다   
    reward가 배당되지 않고 누적되어 있는 수량을 조회 한다   
    ``` java
        function inqueyrRewardTokenBalance( address token ) public view returns( uint256 ) 
    ```   
        Parameters     
           
        | *Param*      | *Description*                          |
        | :--------- | :------------------------------------ |
        | token | 조회 할 ERC20 token contract address  |

        Returns     

        | *Return*    | *Description*                          |
        | :--------- | :------------------------------------ |
        | uint256 | 배당 되지 않은 token의 reward 수량 |

    - - -

    * **inqueryGovernorTokendBalance**   
    Governor의 몫으로 적립되어 펀드로 조성되어 있는 Governance token의 수량을 조회 한다
    ``` java
        function inqueryGovernorTokendBalance() public view returns ( uint256 )
    ```   
        Returns     

        | *Return*    | *Description*                          |
        | :--------- | :------------------------------------ |
        | uint256 | 적립되어 있는 Governance token 수량 |   

        !!! info
            1. swap pool에서 발생된 수수료의 일부 중 Governor 몫의 Governance token    
            2. 특정 구간 강화 성공시 강화 수수료로 적립된 Governor 몫의 Governance token    
            3. 안건 상정 비용   
            DAO 안건 상정과 투표로 burn과 transferTo를 수행 할 수 있다     

    - - -
    * **stkInqueryStakingTotalWeight**   
    Staking 되어 있는 전체 가중치를 조회 한다
    ``` java
        function stkInqueryStakingTotalWeight() 
                    public view returns(uint256) 
    ```   
        Returns     

        | *Return*    | *Description*                          |
        | :--------- | :------------------------------------ |
        | uint256 | staking 되어 있는 전체 가중치 |   

    - - -
    * **stkInqueryUnlockIds**   
    staker가 staking한 Governance token 자산중 lock, unlock 상태인 항목을 조회 한다
    ``` java
        function stkInqueryUnlockIds( address owner ) 
                    public view returns( uint256[] memory, uint256[] memory )
    ```   
        Parameters     
           
        | *Param*      | *Description*                          |
        | :--------- | :------------------------------------ |
        | owner | staker address  |

        Returns     

        | *Return*    | *Description*                          |
        | :--------- | :------------------------------------ |
        | uint256[] | lock되어 있는 id 목록 |        
        | uint256[] | unlock되어 있는 id 목록 |        

        !!! info
            lock되어 있는 id는 Unstaking을 수행 할 수 없다       

    - - -
    * **stkInqueryStakingStatus**   
    staking 가능 여부를 조회 한다
    ``` java
        function stkInqueryStakingStatus() public view returns(bool)
    ```   
        Returns     

        | *Return*    | *Description*                          |
        | :--------- | :------------------------------------ |
        | bool | true - staking 가능 상태 |    

    - - -
    * **stkIsStaking**   
    id가 staking 상태인지 확인 한다
    ``` java
        function stkIsStaking( uint256 id ) public view returns(bool)
    ```   
        Parameters     
           
        | *Param*      | *Description*                          |
        | :--------- | :------------------------------------ |
        | id | staking id |

        Returns     

        | *Return*    | *Description*                          |
        | :--------- | :------------------------------------ |
        | bool | true - id는 staking이 되어 있다 |    

    - - -
    * **stkInqueryOwner**   
    staking id의 owner(staker) address를 조회 한다
    ``` java
        function stkInqueryOwner( uint256 id ) public view returns(address)
    ```   
        Parameters     
           
        | *Param*      | *Description*                          |
        | :--------- | :------------------------------------ |
        | id | staking id |

        Returns     

        | *Return*    | *Description*                          |
        | :--------- | :------------------------------------ |
        | address | staker address |    

    - - -
    * **stkInqueryIdsOfOwner**   
    Owner(staker)가 staking 하여 발급 받은 id 목록을 조회 한다
    ``` java
        function stkInqueryIdsOfOwner( address owner ) 
                    public view returns (uint256[] memory)
    ```   
        Parameters     
           
        | *Param*      | *Description*                          |
        | :--------- | :------------------------------------ |
        | owner | staker address |

        Returns     

        | *Return*    | *Description*                          |
        | :--------- | :------------------------------------ |
        | uint256[] | staker가 staking하여 발급 받은 id 목록 |   

    - - -
    * **stkInqueryIdsCountOfOwner**   
    Owner(staker)가 staking하여 발급 받은 id의 갯수를 조회 한다
    ``` java
        function stkInqueryIdsCountOfOwner( address owner ) public view returns(uint256)
    ```   
        Parameters     
           
        | *Param*      | *Description*                          |
        | :--------- | :------------------------------------ |
        | owner | staker address |

        Returns     

        | *Return*    | *Description*                          |
        | :--------- | :------------------------------------ |
        | uint256 | staking id 수 |   
    
    - - -
    * **stkInqueryOwnerSize**   
    Owner(staker)의 수를 조회 한다
    ``` java
        function stkInqueryOwnerSize() public view returns( uint256 )
    ```   
        Returns     

        | *Return*    | *Description*                          |
        | :--------- | :------------------------------------ |
        | uint256 | staker 수 |   

    - - -
    * **stkInqueryStakingWeight**   
    Owner(staker)들이 staking 한 전체 가중치를 조회 한다
    ``` java
        function stkInqueryStakingWeight( address owner ) 
                    public view returns(uint256)
    ```   
        Parameters     
           
        | *Param*      | *Description*                          |
        | :--------- | :------------------------------------ |
        | owner | staker address |

        Returns     

        | *Return*    | *Description*                          |
        | :--------- | :------------------------------------ |
        | uint256 | staking 되어 있는 전체 가중치 |

    - - -
    * **stkInqueryOwnerFromIndex**   
    Owner(staker)의 address를 조회 한다
    ``` java
        function stkInqueryOwnerFromIndex( uint256 idx ) 
                    public view returns( address )
    ```   
        Parameters     
           
        | *Param*      | *Description*                          |
        | :--------- | :------------------------------------ |
        | idx | staker index |

        Returns     

        | *Return*    | *Description*                          |
        | :--------- | :------------------------------------ |
        | address | staker address |

    - - -
    * **inqueryContractConclusion**   
    Owner(staker)의 staking 내용을 조회 한다
    ``` java
        function inqueryContractConclusion ( address owner, uint256 id ) 
                    public view returns( tConclusion memory )
    ```   
        Parameters     
           
        | *Param*      | *Description*                          |
        | :--------- | :------------------------------------ |
        | owner | staker address |
        | id | staking id |

        Returns     

        | *Return*    | *Description*                          |
        | :--------- | :------------------------------------ |
        | tConclusion | staking 내용 |

        ``` c++
        struct tConclusion {
            uint256         signedTime;     //계약체결 시간 ( 계약 적용 날짜 계약체결 시간 기준 명일 00:00:00)
            uint256         period;         //계약약정 기간 ( 일 단위 ), 0 이면 무약정 체결
            bool            locked;         //true 이면 계약약정 기간 동안 철회(Unstaking) 할 수 없음
            uint256         amount;         //erc20을 staking 할 경우 토큰 수량 또는 가중치
        }        
        ```

    - - -
    * **isLocked**   
    Owner(staker)가 staking 하여 수령한 staking id의 lock 여부를 확인 한다
    ``` java
        function isLocked( address owner, uint256 id ) public view returns( bool )
    ```   
        Parameters     
           
        | *Param*      | *Description*                          |
        | :--------- | :------------------------------------ |
        | owner | staker address |
        | id | staking id |

        Returns     

        | *Return*    | *Description*                          |
        | :--------- | :------------------------------------ |
        | bool | true - lock 상태 철회 불가 |

    - - -
    * **inqueryGovernorTokendBalance**   
    Governance token으로 조성된 펀딩 수량을 조회 한다
    ``` java
        function inqueryGovernorTokendBalance() public noReentrancy
    ```          

=== "Invoke Functions(8)"

    * **stkStaking**   
    Governance token을 staking 한다
    ``` java
        function stkStaking( uint256 amount
                            , uint256 period
                            , bool locked ) 
                        public noReentrancy 
    ```  
        Parameters     
           
        | *Param*        | *Description*                          |
        | :----------- | :------------------------------------ |
        | amount   | staking 수량(묶음 단위로 입력하여야 함) |
        | period   | staking 기간 |   
        | locked | lock 여부 |   

    - - -
    * **stkUnstaking**   
    Staking을 철회 한다
    ``` java
        function stkUnstaking( uint256 id ) public noReentrancy
    ```  
        Parameters     
           
        | *Param*        | *Description*                          |
        | :----------- | :------------------------------------ |
        | id   | staking id |

    - - -
    * **execStakingRewardDividens**   
    staking reward를 배당 한다
    ``` java
        function execStakingRewardDividens() public noReentrancy
    ```  

    - - -
    * **execStakingRewardDividens**   
    특정 token의 Staking reward를 배당한다
    ``` java
        function execStakingRewardDividens( address token ) public noReentrancy
    ```  
        Parameters     
           
        | *Param*        | *Description*                          |
        | :----------- | :------------------------------------ |
        | token   | 배당 할 token address |

    - - -
    * **invokeStakingUnit**   
    Governance token의 staking 묶음 단위를 설정 한다   
    DAO의 안건 상정과 투표로 결정 된다
    ``` java
        function invokeStakingUnit( uint256 stakingUnit ) 
                    public checkPermission( uint16( ENUMPERMISSIONS.DAO ) )
    ```  
        Parameters     
           
        | *Param*        | *Description*                          |
        | :----------- | :------------------------------------ |
        | stakingUnit   | staking 묶음 단위 |

    - - -
    * **claimStakingReward**   
    Caller(staker)에게 배당받은 staking reward를 인출 한다
    ``` java
        function claimStakingReward() public noReentrancy
    ```  

    - - -
    * **invokeBurn**   
    swap pool 수수료 중 Governor 몫의 Governance token과   
    LPT 강화에 성공한 Incentive의 일부 Governor 몫은 
    Governance token contract address로 적립된다   
    이렇개 적립된 Governance token을 소각한다   
    DAO의 안건 상정과 투표로 결정 된다   
    ``` java
        function invokeBurn( uint256 amount ) 
                    public noReentrancy 
                    checkPermission( uint16( ENUMPERMISSIONS.DAO ) )
    ```  
        Parameters     
           
        | *Param*        | *Description*                          |
        | :----------- | :------------------------------------ |
        | amount   | 소각할 Governance token 수량 |

        !!! info
            amount는 Governance token address의 balance를 초과 할 수 없다   

    - - -
    * **invokeRecycle**   
    swap pool 수수료 중 Governor 몫의 Governance token과   
    LPT 강화에 성공한 Incentive의 일부 Governor 몫은 
    Governance token contract address로 적립된다
    이렇게 적립된 Governance token을 재활용 가능 하도록      
    DAO의 안건 상정과 투표로 결정하여 Mine으로 전송 한다
    ``` java
        function invokeRecycle( uint256 amount ) 
                    public override noReentrancy 
                    checkPermission( uint16( ENUMPERMISSIONS.DAO ) )
    ```  
        Parameters     
           
        | *Param*        | *Description*                          |
        | :----------- | :------------------------------------ |
        | amount   | 송금 할 수량 |   

    
=== "Events"
    1. Sed sagittis eleifend rutrum
    2. Donec vitae suscipit est
    3. Nulla tempor lobortis orci

