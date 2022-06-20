# **SWAP HELPER**
- - -

유동성 풀에서 제공 되지 않는 기능이 있는데 여러개의 유동성 풀을 거쳐서 교환을 한다거나 특정 ERC20 token과의    
상대적인 가치평가를 하는 것입니다, 이런 기능을 제공 해주는 contract 입니다

- - -

## **Address**
IObjects의 inquerySwapHelper() function 사용   

address:      
- - -

## **Deployer**

CSwapHelper contract는 개발팀에서 deploy를 합니다   

``` mermaid
graph LR
  dev[Dev.Team] -->|deploy| sh[ CSwapHelper ];
```
- - -

## **Events & Functions**

=== "Inquery Functions(2)"

    * **inqueryRelativeValue**   
    ERC20 token 'from'의 fromAmount 수량으로 ERC20 token 'to'의 상대적 가치를 조회 한다   
    ``` java
        function inqueryRelativeValue( address from
                                    , uint256 fromAmount
                                    , address to
                                    , address[] memory route ) 
                                public view returns( uint256 )
    ```   
        Parameters     
           
        | *Param*      | *Description*                          |
        | :--------- | :------------------------------------ |
        | from | ERC20 token contract address |
        | fromAmount | from의 수량 |   
        | to | ERC20 token contract address  |   
        | route | from 에서 to 까지 도달 가능한 경로 |  

        Returns     

        | *Return*    | *Description*                          |
        | :--------- | :------------------------------------ |
        | uint256 | to의 수량 |

        !!! info 
            교환 수수료 적용을 하지 않은 상태에서 from으로 to로 교환시 획득 할 수 있는 to의 수량을 조회 하면   
            from 과 to의 상대적인 가치 측정이 가능해진다                

    - - -

    * **inqueryExpectedReceipt**   
    ERC20 token 'from'의 fromAmount 수량으로 ERC20 token 'to'로 교환 할 경우 얻을 수 있는   
    'to'의 수량을 조회 한다
    ``` java
        function inqueryExpectedReceipt( address from
                                , uint256 fromAmount
                                , address to
                                , address[] memory route ) 
                            public view returns( uint256 )
    ```   
        Parameters     
           
        | *Param*      | *Description*                          |
        | :--------- | :------------------------------------ |
        | from | ERC20 token contract address |
        | fromAmount | from의 수량 |   
        | to | ERC20 token contract address  |   
        | route | from 에서 to 까지 도달 가능한 경로 |  

        Returns     

        | *Return*    | *Description*                          |
        | :--------- | :------------------------------------ |
        | uint256 | to의 수량 |

    
    
=== "Invoke Functions(2)"

    * **exchange**   
    ERC20 token 'from'의 fromAmount 수량으로 ERC20 token 'to'로 교환 한다  
    ``` java
        function exchange( address from
                        , uint256 fromAmount
                        , address to
                        , uint256 minimumQuantity
                        , address[] memory route ) 
                    public payable returns( uint256 )
    ```  
        Parameters     
           
        | *Param*      | *Description*                          |
        | :--------- | :------------------------------------ |
        | from | ERC20 token contract address |
        | fromAmount | from의 수량 |   
        | to | ERC20 token contract address  |    
        | minimumQuantity | 교환되어 받을 to의 수량이 minimumQuantity 보다 크거나 같아야 교환이 이루어지게 하는 수치 |    
        | route | from 에서 to 까지 도달 가능한 경로 |    

        Returns     

        | *Return*    | *Description*                          |
        | :--------- | :------------------------------------ |
        | uint256 | 교환된 to의 수량 |

        !!! info
            from이 address(0) 이면 coin(klay)을 to로 교환 하는 것이므로 fromAmount는 의미가 없다   

    * **exchange**   
    ERC20 token 'from'의 fromAmount 수량으로 ERC20 token 'to'로 교환 한다  
    ``` java
        function exchange( address from
                        , uint256 fromAmount
                        , address to
                        , uint256 expectedAmount
                        , uint8 slippage
                        , address[] memory route ) 
                    public payable returns( uint256 )
    ```  
        Parameters     
           
        | *Param*      | *Description*                          |
        | :--------- | :------------------------------------ |
        | from | ERC20 token contract address |
        | fromAmount | from의 수량 |   
        | to | ERC20 token contract address  |    
        | expectedAmount | 교환하여 받게 되는 to의 예상 수량 |    
        | slippage | 슬리피지(단위 %)|   
        | route | from 에서 to 까지 도달 가능한 경로 |    

        Returns     

        | *Return*    | *Description*                          |
        | :--------- | :------------------------------------ |
        | uint256 | 교환된 to의 수량 |

        !!! info
            from이 address(0) 이면 coin(klay)을 to로 교환 하는 것이므로 fromAmount는 의미가 없다   
        !!! info
            slippage는 교환된 to 수량이  ( expectedAmount - (expectedAmount * slippage / 100) )   
            보다 커야 거래가 진행된다

=== "Events(1)"

    * **Exchange**   
    token 교환 이벤트
    ``` java
        event Exchange( address sender
                    , address from
                    , uint256 fromAmount
                    , address to
                    , uint256 minimumQuantity
                    , uint256 receiptAmount );
    ```  

        Parameters     
           
        | *Param*        | *Description*                          |
        | :----------- | :------------------------------------ |
        | sender   | Exchange 호출한 address  |
        | from   | from ERC20 token contract address |   
        | fromAmount | 교환 할 수량 |   
        | to | to ERC20 token contract address |   
        | minimumQuantity | 슬리피지가 적용된 교환가능한 최소 수량 |                   
        | receiptAmount | 교환된 수량 |   

