# **LPT STAKING HOLDER**
- - -

# **Address**
* ADDRESS
- - -

# **Events & Functions**

!!! note
    *onlyCreator*   
    - contract를 생성 한 account(contract) 만 호출 가능     
    *checkPermission( uint16( ENUMPERMISSIONS.DAO ) )*
    -

=== "Inquery Functions"

    * **inqueryStakingReward**   
    caller가 수령 가능한 staking holder의 reward(mining)을 조회 한다   
    ``` java
        function inqueryStakingReward() 
                    public view returns( tTokenReward[] memory )
    ```   
        Returns     

        | *Return*    | *Description*                          |
        | :--------- | :------------------------------------ |
        | tTokenReward | token reward 구조체 |

        ```C++
        struct tTokenReward {
            address token;      //배당 받을 token
            uint256 reward;     //staking 배당 수량
        }
        ```

    - - -
    * **inqueryStakingRewardConst**   
    caller가 수령 가능한 staking holder의 reward 상수를 조회 한다   
    조회된 상수 값으로 실시간 mining 수치를 계산 할 수 있다   
    ``` java
        function inqueryStakingRewardConst() 
                    public view returns( uint256 reserves
                                    , uint256 invokedLastTime
                                    , uint8 weight
                                    , uint256 totalWeight ) 
    ```   
        Returns     

        | *Return*    | *Description*                          |
        | :--------- | :------------------------------------ |
        | reserves | staking holder에 caller분량의 적립된 수량 |
        | invokedLastTime | 마지막으로 mining을 호출 한 시간 |
        | weight | swap pool의 가중치 |
        | totalWeight | B등급 이상으로 binding 된 swap pool들의 가중치 합계 |

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
    staker가 staking한 목록 중 lock, unlock 항목을 조회 한다
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

        !!! warning
            lock되어 있는 id는 withrawal을 수행 할 수 없다

    - - -
    * **stkInqueryStakingStatus**   
    staking 가능 여부를 조회 한다
    ``` java
        function stkInqueryStakingStatus() public view returns(bool)
    ```   
        Returns     

        | *Return*    | *Description*                          |
        | :--------- | :------------------------------------ |
        | bool | true - staking 가능 |    

    - - -
    * **stkIsStaking**   
    staking 상태인지 확인 한다
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

        | *Return*    | Description                          |
        | :--------- | :------------------------------------ |
        | uint256[] | staker가 staking하여 발급 받은 id 목록 |   

    - - -
    * **stkInqueryIdsCountOfOwner**   
    Owner(staker)가 staking하여 발급 받은 id의 갯수를 조회 한다
    ``` java
        function stkInqueryIdsCountOfOwner( address owner ) 
                                    public view returns(uint256)
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
    Owner(staker)가 staking 한 총 가중치를 조회 한다
    ``` java
        function stkInqueryStakingWeight( address owner ) 
                                public view returns(uint256)
    ```   
        Parameters     
           
        | *Param*     | *Description*                          |
        | :--------- | :------------------------------------ |
        | owner | staker address |

        Returns     

        | *Return*    | *Description*                          |
        | :--------- | :------------------------------------ |
        | uint256 | staking 한 총 가중치 |

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
        function inqueryContractConclusion ( address owner
                                        , uint256 id ) 
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
            bool            locked;         //true 이면 계약약정 기간 동안 철회(withdrawl) 할 수 없음
            uint256         amount;         //erc20을 staking 할 경우 토큰 수량 또는 가중치
        }        
        ```

    - - -
    * **isLocked**   
    Owner(staker)의 staking id의 lock 여부를 확인 한다
    ``` java
        function isLocked( address owner, uint256 id ) 
                                    public view returns( bool )
    ```   
        Parameters     
           
        | *Param*      | *Description*                          |
        | :--------- | :------------------------------------ |
        | owner | staker address |
        | id | staking id |

        Returns     

        | *Return*    | *Description*                          |
        | :--------- | :------------------------------------ |
        | bool | true - lock 된 상태임 철회 불가 |        


=== "Invoke Functions"

    * **stkStaking**   
    token id 별로 staking 한다
    ``` java
        function stkStaking( uint256 id
                        , uint256 period
                        , bool locked ) 
                    public noReentrancy
    ```  
        Parameters     
           
        | *Param*      | *Description*                          |
        | :--------- | :------------------------------------ |
        | id | token id |
        | period | staking 기간 |
        | locked | lock 여부 |                

    - - -
    * **stkStakingEx**   
    token id와 무관하게 amount 만큼 staking 한다
    ``` java
        function stkStakingEx( uint256 amount
                            , uint256 period
                            , bool locked ) 
                        public noReentrancy
    ```  
        Parameters     
           
        | *Param*      | *Description*                          |
        | :--------- | :------------------------------------ |
        | amount | staking 할 수량 |
        | period | staking 기간 |
        | locked | lock 여부 |                

    - - -
    * **stkWithdrawal**   
    staking을 철회(회수) 한다
    ``` java
        function stkWithdrawal( uint256 id ) public noReentrancy
    ```  
        Parameters     
           
        | *Param*     | *Description*                          |
        | :--------- | :------------------------------------ |
        | id | 철회(회수)할 token id |

    - - -
    * **stkWithdrawalEx**   
    token id와 무관하게 amount 만큼 철회(회수) 한다
    ``` java
        function stkWithdrawalEx( uint256 amount ) public noReentrancy
    ```  
        Parameters     
           
        | *Param*      | *Description*                          |
        | :--------- | :------------------------------------ |
        | amount | 철회(회수)할 수량 |
     
    - - -     
    * **stkWithdrawalF**   
    token id를 강제 회수 한다   
    ``` java
        function stkWithdrawalF( uint256 id ) public noReentrancy
    ```  
        Parameters     
           
        | *Param*      | *Description*                          |
        | :--------- | :------------------------------------ |
        | id | token id |

        !!! info
            강제 회수 기능을 enable 하면 lock상태 인 token id를 강제 회수 할 수 있다  
        !!! warning 
            DEX protocol에서는 지원하지 않는다

    - - -
    * **execStakingRewardDividens**   
    staking holder가 배당(mining) 받은 reward를 모든 staker에게 배당한다   
    ``` java
        function execStakingRewardDividens() public noReentrancy
    ```  
        !!! info
                staker가 배당 받은 reward는 claim 하여야만 인출 된다   
        !!! warning 
            DEX protocol에서는 지원하지 않는다

    - - -
    * **claimStakingReward**   
    배당 받은 reward와 mining하여 즉시 인출 한다   
    ``` java
        function claimStakingReward() public noReentrancy 
    ```  
        !!! info
            배당 받은 reward는 다른 누군가의 caller가 mining 또는 execStakingRewardDividens을    
            호출 하여 적립된 수량이다

    - - -    
    * **stkEnable**   
    staking을 가능하게 한다
    ``` java
        function stkEnable() public checkPermission( uint16( ENUMPERMISSIONS.DAO ) )
    ```  

    - - -
    * **stkDisable**   
    staking을 못하게 막는다
    ``` java
        function stkDisable() public checkPermission( uint16( ENUMPERMISSIONS.DAO ) )
    ```  




=== "Events"
    1. Sed sagittis eleifend rutrum
    2. Donec vitae suscipit est
    3. Nulla tempor lobortis orci

