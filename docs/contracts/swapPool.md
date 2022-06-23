# **SWAP POOL**
- - -
DEX의 중추적인 역할을 하는 유동성 풀(swap pool)입니다    
대표적인 유동성 예치, 교환등 여러가지 기능을 가지고 있으며 swap helper를 사용하여 다른 유동성 풀과의    
연계도 가능합니다


??? info "swap pool에 dependency 한 contract address 조회하기"
    
    swap pool에 dependency StakingHolder 조회 - ISwapPoolManager의 inqueryLPTStakingHolder(address swapPool)     
    swap pool에 dependency LPT 조회 - ISwapPoolManager의 inqueryLPT(address swapPool)   

??? info "swap pool listing 하기"        
    ISwapPoolManager의 inqueryPoolSize() 와 inquerySwapPool(uint256 idx) 
- - -
## **Address**
ISwapPoolManager의 inquerySwapPool( ... ) function 사용   

address:     
- - -

## **Deployer**

CSwapPool contract는 CSwapPoolFactory에 swap pool 생성을 요청하면   
CSwapPoolFactory에서 deploy 합니다   

``` mermaid
graph LR
  dev[Dev.Team] -->|deploy| spF[ CSwapPoolFactory ];
  acc[Account] -->|create swap pool| spF;
  spF -->|deploy| lpt[CLPT];
  spF -->|deploy| lptSH[CLPTStakingHolder];
  spF -->|deploy| sp[CSwapPool];
```
- - -

## **Events & Functions**

!!! note
    *onlyMember*   
     - Team wallet의 구성원들만 호출 가능   
    *checkPermission( uint16( ENUMPERMISSIONS.DAO ) )*
     -    

=== "Inquery Functions(12)"

    * **inqueryPoolInfo**   
    swap pool의 현재 정보를 조회 한다
    ``` java
        function inqueryPoolInfo()  public view returns ( TPoolInfo memory )
    ```   
        Returns     

        | *Return*    | *Description*                          |
        | :--------- | :------------------------------------ |
        | TPoolInfo | swap pool의 정보 |

        ``` C++
        struct TPoolInfo {
            address     firstToken;             //frist token
            uint256     firstBalance;           //first token 수량
            uint256     firstAmountPerLPT;      //LPT 당 firt token 수량
            address     secondToken;            //second token
            uint256     secondBalance;          //second token 수량
            uint256     secondAmountPerLPT;     //LPT 당 seoncd token 수량
            address     lpt;                    //ERC721 LPT contract address
            address     lptStakingHolder;       //LPT staking holder
            uint256     fee;                    //교환 수수료
            uint256     totalLPT;               //발행된 전체 LPT 수
            uint256     const;                  //교환 상수
            bool        depositable;            //예치 가능 여부
            bool        minable;                //마이닝 가능 여부
            uint256     weight;                 //가중치
        } 
        ```
    - - - 
    * **inqueryConstant**   
    교환 상수를 조회 한다
    ``` java
        function inqueryConstant() public view returns( uint256 )
    ```   
        Returns     

        | *Return*    | *Description*                          |
        | :--------- | :------------------------------------ |
        | uint256 | 교환 상수 |

    - - - 
    * **inqueryConstant**   
    LPT lptAmount의 자산 가치를 조회 한다
    ``` java
        function inqueryAssetPerLPT( uint256 lptAmount ) 
                    public view returns( uint256, uint256 )
    ```   
        Parameters     

        | *Parameter*    | *Description*                          |
        | :--------- | :------------------------------------ |
        | lptAmount | LPT 수 |

        Returns     

        | *Return*    | *Description*                          |
        | :--------- | :------------------------------------ |
        | uint256 | first token 수량 |
        | uint256 | second token 수량 |

    - - - 
    * **inqueryRequiredPairAsset**   
    예치를 위한 pair token의 수량을 조회 한다   
    fromEnumToken(0또는1)의 amount 에 해당 되는 pair token의 수량을 조회 할 수 있다   
    ``` java
        function inqueryRequiredPairAsset( ENUMPAIR fromEnumToken
                                        , uint256 amount ) 
                                    public view returns( uint256, uint256 )
    ```   
        Parameters     

        | *Parameter*    | *Description*                          |
        | :--------- | :------------------------------------ |
        | fromEnumToken | binding pair token(0또는1)|
        | amount | fromEnumToken의 수량 |

        Returns     

        | *Return*    | *Description*                          |
        | :--------- | :------------------------------------ |
        | uint256 | fromEnumToken와 bindin 되어 있는 pair token의 수량 |
        | uint256 | 예치시 반환 될 fromEnumToken의 수량 |

    - - - 
    * **inqueryReceiptableLPT721**   
    예치를 할 경우 수령 가능한 LPT 수를 조회 한다 
    ``` java
        function inqueryReceiptableLPT721( uint256 firstAmount
                                    , uint256 secondAmount ) 
                                public view returns( uint256, uint256, uint256 )
    ```   
        Parameters     

        | *Parameter*    | *Description*                          |
        | :--------- | :------------------------------------ |
        | firstAmount | first token 수량 |
        | secondAmount | second token 수량 |

        Returns     

        | *Return*    | *Description*                          |
        | :--------- | :------------------------------------ |
        | uint256 | 수령 가능한 LPT 수 |
        | uint256 | 반환될 first token 수량 |        
        | uint256 | 반환될 second token 수량  |  

    - - - 
    * **inqueryReceiptFromSwap**   
    교환 할 경우 수령 가능한 pair token의 수량과 수수료를 조회 한다
    ``` java
        function inqueryReceiptFromSwap( ENUMPAIR fromEnumToken
                                    , uint256 amount ) 
                                public view returns ( uint256, uint256 )
    ```   
        Parameters     

        | *Parameter*    | *Description*                          |
        | :--------- | :------------------------------------ |
        | fromEnumToken | 교환 할 token(0또는1) |
        | secondAmount |  교환 할 token 수량 |

        Returns     

        | *Return*    | *Description*                          |
        | :--------- | :------------------------------------ |
        | uint256 | 수령 할 token 수량|
        | uint256 | 교환 수수료 |        

    - - - 
    * **inqueryReceiptFromSwap**   
    LPT를 amount 만큼 철회 할 경우 수령 가능한 자산을 조회 한다
    ``` java
        function inqueryAssetFromWithdrawal ( uint256 amount ) 
                            public view returns( uint256, uint256 )
    ```   
        Parameters     

        |  *Parameter*    | *Description*                          |
        | :--------- | :------------------------------------ |
        | java | LPT 수 |

        Returns     

        | *Return*    | *Description*                          |
        | :--------- | :------------------------------------ |
        | uint256 | first token 수량 |
        | uint256 | second token 수량 |

    - - - 
    * **inqueryAssets**   
    swap pool에 예치된 총 자산을 조회 한다
    ``` java
        function inqueryAssets() public view returns( uint256, uint256 )
    ```   
        Returns     

        | *Return*    | *Description*                          |
        | :--------- | :------------------------------------ |
        | uint256 | first token 수량 |
        | uint256 | second token 수량 |

    - - - 
    * **inqueryToken**   
    swap pool의 token address를 조회 한다
    ``` java
        function inqueryToken( ENUMPAIR enumToken ) 
                        public view returns( address )
    ```   
        Parameters     

        | *Parameter*    | *Description*                          |
        | :--------- | :------------------------------------ |
        | enumToken | 0 또는 1 |

        Returns     

        | *Return*    | *Description*                          |
        | :--------- | :------------------------------------ |
        | address | ERC20 token contract address |

    - - - 
    * **inqueryPariToken**   
    swap pool에 binding 되어 있는 pair token을 조회 한다
    ``` java
        function inqueryPariToken() 
                public view returns( address, address )
    ```   
        Returns     

        | *Return*    | Description                          |
        | :--------- | :------------------------------------ |
        | uint256 | ERC20 first token contract address  |
        | uint256 | ERC20 second token contract address |        

    - - - 
    * **inqueryTokenEnum**   
    swap pool의 binding pair token의 enum number를 조회 한다
    ``` java
        function inqueryTokenEnum( address token ) 
                        public view returns( ENUMPAIR ) 
    ```   
        Parameters     

        | *Parameter*    | Description                          |
        | :--------- | :------------------------------------ |
        | token | ERC20 token contract address |

        Returns     

        | *Return*    | Description                          |
        | :--------- | :------------------------------------ |
        | ENUMPAIR | 0 또는 1  |

    - - - 
    * **inqueryDepositableStatus**   
    예치 가능 여부를 조회 한다
    ``` java
        function inqueryDepositableStatus() 
                    public view returns( bool )
    ```   
        Returns     

        | *Return*    | Description                          |
        | :--------- | :------------------------------------ |
        | bool | turu - 예치 가능 상태 |


=== "Invoke Functions(9)"

    * **founding**   
    swap pool 생성 후 binding pair token의 비율, LPT 발행 비율을 설정하여 자산을 예치한다   
    founding은 한번만 호출 할수 있으며 호출 이후 부터 예치가 가능해 진다   
    ``` java
        function founding( uint256 firstAmount
                    , uint256 secondAmount
                    , uint256 lptAmount ) public payable
    ```  
        Parameters     
           
        | *Parameter*        | *Description*                          |
        | :----------- | :------------------------------------ |
        | firstAmount   | first token amount |
        | secondAmount   | second token amount |   
        | lptAmount | firstAmount 와 secondAmount 으로 발행 할 LPT 수 |   
    
        !!! info
            coin(klay) 와 binding pair token으로 swap pool을 생성한 경우 secondAmount는 의미가 없다
            
    - - -

    * **deposit**   
    자산을 예치하고 증명으로 LPT 수령한다   
    ``` java
        function deposit( uint256 firstAmount, uint256 secondAmount ) 
                    public payable noReentrancy
    ```  
        Parameters     
           
        | *Parameter*    | Description                          |
        | :----------- | :------------------------------------ |
        | firstAmount   | first token amount |
        | secondAmount   | second token amount |   
    
        !!! info
            coin(klay) 와 binding pair token으로 swap pool을 생성한 경우 secondAmount는 의미가 없다        
            예치 할 수 있는 pair token의 수량을 inqueryRequiredPairAsset()으로 조회 할 수 있고   
            예치 후 수령 가능한 LPT 수를 inqueryReceiptableLPT721()으로 확인 할 수 있다   

    - - -    

    * **swap**   
    fromEnumToken을 pair token으로 교환 한다   
    inqueryReceiptFromSwap() function으로 교환 시 예샹 수령 수량을 조회 할 수 있다
    ``` java
        function swap( ENUMPAIR fromEnumToken, uint256 amount ) 
                        public payable noReentrancy returns( uint256 )
    ```  
        Parameters     
           
        | *Parameter*        | Description                          |
        | :----------- | :------------------------------------ |
        | fromEnumToken   | first token amount |
        | amount   | second token amount |   

        Returns     

        | *Return*    | *Description*                          |
        | :--------- | :------------------------------------ |
        | uint256 | 교환 후 받게 된 수량 |        

        !!! info
            coin(klay)을 ERC20 token으로 교환 할 경우 fromEnumToken = 1로 설정 amount는 무의미 하다   
            ERC20 token을 coin(klay)으로 교환 할 경우 fromEnumToken = 0으로 설정 한다   

    - - - 

    * **withdrawal**   
    예치한 자산을 회수 한다  
    inqueryAssetFromWithdrawal() function으로 회수 시 수령하게 될 자산의 예상치를 조회 할 수 있다
    ``` java
        function withdrawal( uint256 tokenId ) public noReentrancy
    ```  
        Parameters     
           
        | *Parameter*        | *Description*                          |
        | :----------- | :------------------------------------ |
        | tokenId   | 회수 할 LPT 갯 수 |
        
    - - - 
    * **withdrawalEx**   
    예치한 자산을 회수 한다  
    inqueryAssetFromWithdrawal() function으로 회수 예상 수량을 조회 할 수 있다
    ``` java
        function withdrawalEx( uint256 lptAmount ) public noReentrancy
    ```  
        Parameters     
           
        | *Parameter*        | *Description*                          |
        | :----------- | :------------------------------------ |
        | lptAmount   | 회수 할 LPT 갯 수 |
        
        !!! info
            주의 - 강화된 LPT도 함께 회수 될 수 있다    
            강화된 LPT 회수 막는 방법은 LPT를 staking 하거나 withdrawal()을 사용하여 하나씩 회수 하길 추천 한다   

    - - - 
    * **registLPT**   
    swap pool에 LPT을 등록 한다 
    ``` java
        function registLPT( address lpt ) public onlyCreator
    ```  
        Parameters     
           
        | *Parameter*  | *Description*                          |
        | :----------- | :------------------------------------ |
        | lpt   | ERC721 LPT |

    - - - 
    * **invokeEnableDisposit**   
    예치 기능을 중지 한다
    ``` java
        function invokeEnableDisposit() 
                public checkPermission( uint16( ENUMPERMISSIONS.DAO ) )
    ```  

    - - - 
    * **invokeDisableDisposit**   
    예치 기능을 시작 한다
    ``` java
        function invokeDisableDisposit() 
                public checkPermission( uint16( ENUMPERMISSIONS.DAO ) )
    ```  

    - - - 
    * **invokeLPTSplit**   
    LPT를 복제(분할) 한다
    ``` java
        function invokeLPTSplit( uint amountPerLPT ) 
                    public checkPermission( uint16( ENUMPERMISSIONS.DAO ) )
    ```  
        Parameters     
           
        | *Parameter*        | *Description*                          |
        | :----------- | :------------------------------------ |
        | amountPerLPT | LPT당 복제(분할) 할 수 |

        !!! info
            LPT를 분할 하기 전 swap pool의 예치 기능과    
            LPT의 staking holder의 staking 기능을 중지 시켜야 한다   


=== "Events(5)"

    * **Founding**   
    Swap Pool이 생성된 후 첫 예치시 발생하는 이벤트
    ``` java
        event Founding( address sender
                    , uint256 firstAmount
                    , uint256 secondAmount
                    , uint256 lptAmount );
    ```  

        Parameters     
           
        | *Param*        | *Description*                          |
        | :----------- | :------------------------------------ |
        | sender   | 호출자  |
        | firstAmount   | first token 수량 |   
        | secondAmount | second token  수량 |   
        | lptAmount | firstAmount와 secondAmount 비율로 생성할 lpt 수량|   

    - - - 
    * **Deposit**   
    유동성 예치 이벤트
    ``` java
        Deposit( address sender
                , uint256 firstAmount
                , uint256 returnFirst
                , uint256 secondAmount
                , uint256 returnSecond );
    ```  

        Parameters     
           
        | *Param*        | *Description*                          |
        | :----------- | :------------------------------------ |
        | sender   | 호출자  |
        | firstAmount   | first token 수량 |   
        | returnFirst   | 반환된 first token 수량 |  
        | secondAmount | second token  수량 |   
        | returnSecond | 반환된 second token 수량 |     

    - - - 
    * **Withdrawal**   
    예치 자산 회수 이벤트
    ``` java
        event Withdrawal( address sender
                    , uint256 tokenId
                    , uint256 firstAmount
                    , uint256 secondAmount );
    ```  

        Parameters     
           
        | *Param*        | *Description*                          |
        | :----------- | :------------------------------------ |
        | sender   | 호출자  |
        | tokenId | 회수에 사용할 LPT tokenId|
        | firstAmount   | 회수된 first token 수량 |   
        | secondAmount | 회수된 second token  수량 |   

    - - - 
    * **WithdrawalEx**   
    예치 자산 회수 이벤트
    ``` java
        event WithdrawalEx( address sender
                    , uint256 lptAmount
                    , uint256 firstAmount
                    , uint256 secondAmount );
    ```  

        Parameters     
           
        | *Param*        | *Description*                          |
        | :----------- | :------------------------------------ |
        | sender   | 호출자  |
        | lptAmount | 회수에 사용할 LPT 수량|
        | firstAmount   | 회수된 first token 수량 |   
        | secondAmount | 회수된 second token  수량 |   

    - - - 
    * **Swap**   
    교환 이벤트 
    ``` java
        event Statistics( uint256 firstBalance
                    , uint256 secondBalance
                    , uint256 firstTradingVolume
                    , uint256 secondTradingVolume
                    , uint256 firstFee
                    , uint256 secondFee );
    ```  

        Parameters     
           
        | *Param*        | *Description*                          |
        | :----------- | :------------------------------------ |
        | firstBalance   | 예치된 first token 수량   |
        | secondBalance | 예치된 second token 수량 |
        | firstTradingVolume   | first token 누적 거래량 |   
        | secondTradingVolume | second token 누적 거래량 |           
        | firstFee | first token 누적 수수료 |           
        | secondFee | second token 누적 수수료 |           