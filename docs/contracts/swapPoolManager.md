# **SWAP POOL MANAGER**
- - -
j100 swap 생태계를 관리 하는 manager contract 3개가 존재 합니다, 그 중 유동성 풀들을    
등록하고 관리하는 역할을 하는 contract입니다  

- - -
## **Address**
IObjects의 inquerySwapPoolManager() function 사용

address:
- - -

## **Deployer**

CSwapPoolManager contract는 CManagerBuilder서 deploy 합니다   

``` mermaid
graph LR
  dev[Dev.Team] -->|deploy| mBuilder[ CManagerManager ];
  mBuilder --> |deploy| spManager[ CSwapPoolManager];
```

- - -
## **Events & Functions**

!!! note
    *checkPermission( uint16( ENUMPERMISSIONS.DAO ) )*   
     - DAO contract 에서만 호출 가능   
    *checkPermission( uint16( ENUMPERMISSIONS.FACTORY ) )*   
    - Factory 계열 contract에서만 호출 가능      
    *onlyCreator*   
    - contract를 생성 한 account(contract) 만 호출 가능

=== "Inquery Functions(13)"

    * **inqueryTotalValidWeight**   
    swap pool의 유효한 전체 가중치 합계를 조회 한다   
    ``` java
        function inqueryTotalValidWeight() 
                    public view returns( uint256 )
    ```   
        Returns     

        | *Return*    | Description                          |
        | :--------- | :------------------------------------ |
        | uint256 | swap pool의 전체 가중치 |

        !!! info
            token 등급 B(2)이상으로 binding 된 swap pool들만 가중치에 포함된다  

    - - -    
    * **inquerySwapPoolWeight**   
    swap pool의 가중치를 조회 한다   
    ``` java
        function inquerySwapPoolWeight( address swapPool ) public view returns ( uint8 )
    ```  
        Parameters     
           
        | *Param*        | Description                          |
        | :----------- | :------------------------------------ |
        | swapPool   | swap pool contract address |

        Returns     

        | *Return*    | Description                          |
        | :--------- | :------------------------------------ |
        | uint8 | swap pool의 가중치 |

    - - -    
    * **inqueryIsMinable**   
    swap pool의 mining 가능 여부를 조회 한다
    ``` java
        function inqueryIsMinable( address swapPool ) 
                    public view returns( bool )
    ```  
        Parameters     
           
        | *Param*        | *Description*                          |
        | :----------- | :------------------------------------ |
        | swapPool   | swap pool contract address |

        Returns     

        | *Return*    | *Description*                          |
        | :--------- | :------------------------------------ |
        | bool | true - mining 가능( B등급 이상인 token으로 bining 되어 있음) |

    - - -    
    * **inqueryPoolSize**   
    등록 된 swap pool의 크기(수)를 조회 한다
    ``` java
        function inqueryPoolSize() public view returns (uint256)
    ```  
        Returns     

        | *Return*    | Description                          |
        | :--------- | :------------------------------------ |
        | uint256 | 등록된 swap pool 갯수 |

    - - -    
    * **inquerySwapPool**   
    index로 swap pool을 조회 한다
    ``` java
        function inquerySwapPool(uint256 idx) 
                    public view returns (address)
    ```  
        Parameters     
           
        | *Param*        | *Description*                          |
        | :----------- | :------------------------------------ |
        | idx   | swap pool index |

        Returns     

        | *Return*    | *Description*                          |
        | :--------- | :------------------------------------ |
        | address | swap pool contract address |

    - - -    
    * **inqueryPagingSwapPool**   
    index로 swap pool을 조회 한다
    ``` java
        function inquerySwapPool(uint256 idx, uint256 count) 
                    public view returns (TPageSP[] memory)
    ```  
        Parameters     
           
        | *Param*        | *Description*                          |
        | :----------- | :------------------------------------ |
        | idx   | swap pool index |
        | count   | 페이지당 swap pool 갯수( 1~20 ) |        

        Returns     

        | *Return*    | *Description*                          |
        | :--------- | :------------------------------------ |
        | TPageSP[] | swap pool과 dependency contract 들 |

        ``` java
        struct TPageSP {
            address     sp;         //swap pool contract address
            address     holder;     //staking holder contract address
            address     lpt;        //lpt contract address
        }
        ```  

    - - -    
    * **inquerySwapPool**   
    LPT staking holder로 swap pool을 조회 한다
    ``` java
        function inquerySwapPool( address lptStakingHolder ) 
                    public view returns( address )
    ```  
        Parameters     
           
        | *Param*        | *Description*                          |
        | :----------- | :------------------------------------ |
        | lptStakingHolder   | LPT Staking contract address |

        Returns     

        | *Return*    | *Description*                          |
        | :--------- | :------------------------------------ |
        | address | swap pool contract address |

    - - -    
    * **inquerySwapPool**   
    binding 되어 있는 token pair로 swap pool을 조회 한다
    ``` java
        function inquerySwapPool( address firstToken
                            , address sececondToken ) 
                        public view returns( address )
    ```  
        Parameters     
           
        | *Param*        | *Description*                          |
        | :----------- | :------------------------------------ |
        | firstToken   | binding token pair 중 하나 |
        | sececondToken   | binding token pair 중 하나 |

        Returns     

        | *Return*    | *Description*                          |
        | :--------- | :------------------------------------ |
        | address | swap pool contract address |

    - - -    
    * **inqueryUnitRating**   
    수수료(fee) 와 Governance 배당률의 단위를 조회 한다
    ``` java
        function inqueryUnitRating() public view returns( uint256 )
    ```  
        Returns     

        | *Return*    | *Description*                          |
        | :--------- | :------------------------------------ |
        | uint256 | 1 gwei |

    - - -    
    * **inqueryFee**   
    swap pool의 수수료(fee)를 조회 한다
    ``` java
        function inqueryFee( address swapPool ) 
                    public view returns( uint256 )
    ```  
        Parameters     
           
        | *Param*        | *Description*                          |
        | :----------- | :------------------------------------ |
        | swapPool   | swap pool contract address |

        Returns     

        | *Return*    | *Description*                          |
        | :--------- | :------------------------------------ |
        | uint256 | 수수료 |


    - - -    
    * **inqueryAccumulation**   
    swap pool 수수료의 일부 Governance 몫에 해당되는 배당률을 조회 한다
    ``` java
        function inqueryAccumulation( address swapPool ) 
                    public view returns( uint256 )
    ```  
        Parameters     
           
        | *Param*        | *Description*                          |
        | :----------- | :------------------------------------ |
        | swapPool   | swap pool contract address |

        Returns     

        | *Return*    | *Description*                          |
        | :--------- | :------------------------------------ |
        | uint256 | Governance 배당률 |

    - - -    
    * **inqueryPolicyInfo**   
    swap pool 정책을 조회 한다
    ``` java
        function inqueryPolicyInfo( address swapPool ) 
                    public view returns( uint256, TSPPolicy memory )
    ```  
        Parameters     
           
        | *Param*        | *Description*                          |
        | :----------- | :------------------------------------ |
        | swapPool   | swap pool contract address |

        Returns     

        | *Return*    | *Description*                          |
        | :--------- | :------------------------------------ |
        | uint256 | 수수료 단위(1gwei) |
        | TSPPolicy | 정책 |

        ``` C++
        struct TSPPolicy {
            uint256     fee;            //수수료
            uint256     accumulation;   //Governance 배당률
        }
        ```

    - - -    
    * **inqueryLPT**   
    swap pool의 LPT를 조회 한다
    ``` java
        function inqueryLPT( address swapPool ) 
                    public view returns( address )
    ```  
        Parameters     
           
        | *Param*        | *Description*                          |
        | :----------- | :------------------------------------ |
        | swapPool   | swap pool contract address |

        Returns     

        | *Return*    | *Description*                          |
        | :--------- | :------------------------------------ |
        | address | LPT contract address |

    - - -    
    * **inqueryLPTStakingHolder**   
    swap pool LPT의 staking holder를 조회 한다
    ``` java
        function inqueryLPTStakingHolder( address swapPool ) 
                    public view returns( address )
    ```  
        Parameters     
           
        | *Param*        | *Description*                          |
        | :----------- | :------------------------------------ |
        | swapPool   | swap pool contract address |

        Returns     

        | *Return*    | *Description*                          |
        | :--------- | :------------------------------------ |
        | address | LPT staking holder contract address |

=== "Invoke Functions(5)"

    * **regist**   
    swap pool을 등록 한다   
    ``` java
        function regist( address swapPool
                    , address lpt
                    , uint256 fee
                    , uint256 accumulation ) 
                public checkPermission( uint16( ENUMPERMISSIONS.FACTORY ) )
    ```  
        Parameters     
           
        | *Param*        | *Description*                          |
        | :----------- | :------------------------------------ |
        | swapPool   | swap pool contract address |
        | lpt   | swap pool의 LPT |
        | fee   | swap pool의 swap 수수료 |        
        | accumulation   | swap pool의 수수료의 일부 중 Governance 배당 비율( default: 500,000,000(50%) ) |        

    - - -
    * **registLPTStakingHolder**   
    swap pool의 LPT를 staking 할 수 있는 contract address를 등록 한다  
    ``` java
        function registLPTStakingHolder( address swapPool
                                    , address stakingHolder ) 
                                public checkPermission( uint16( ENUMPERMISSIONS.FACTORY ) )
    ```  
        Parameters     
           
        | *Param*        | *Description*                          |
        | :----------- | :------------------------------------ |
        | swapPool   | swap pool contract address |
        | stakingHolder   | staking contract address |

    - - -
    * **invokeSwapPoolWeight**   
    swap pool의 가중치를 설정 한다   
    ``` java
        function invokeSwapPoolWeight( address swapPool ) 
                                public checkPermission( uint16( ENUMPERMISSIONS.DAO ) )
    ```  
        Parameters     
           
        | *Param*        | *Description*                          |
        | :----------- | :------------------------------------ |
        | swapPool   | swap pool contract address |

    - - -
    * **invokeFee**   
    swap pool의 swap 수수료를 설정 한다
    ``` java
        function invokeFee( address swapPool, uint256 fee ) 
                    public checkPermission( uint16( ENUMPERMISSIONS.DAO ) )
    ```  
        Parameters     
           
        | *Param*        | *Description*                          |
        | :----------- | :------------------------------------ |
        | swapPool   | swap pool contract address |
        | fee   | 수수료(10,000(0.001%)~1,000,000(1%), 단위 1/1,000,000,000) |

    - - -
    * **invokeAccumulation**   
    swap pool의 swap 수수료 중 Governance 배당률을 설정 한다
    ``` java
        function invokeAccumulation( address swapPool
                    , uint256 accumulation ) 
                public checkPermission( uint16( ENUMPERMISSIONS.DAO ) )
    ```  
        Parameters     
           
        | *Param*        | *Description*                          |
        | :----------- | :------------------------------------ |
        | swapPool   | swap pool contract address |
        | accumulation   | 배당률(400,0000,000(40%)~600,000,000(60%), 단위 1/1,000,000,000)|

    
=== "Events"
    1. Sed sagittis eleifend rutrum
    2. Donec vitae suscipit est
    3. Nulla tempor lobortis orci

