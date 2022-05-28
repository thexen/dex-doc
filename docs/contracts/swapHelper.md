# **SWAP HELPER**
- - -

# **Address**
* ADDRESS
- - -

# **Events & Functions**

> onlyCreator - contract를 생성 한 account(contract) 만 호출 가능, Permission contract는 Objects contract에서 생성 됨        

=== "Inquery Functions"

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

    
    
=== "Invoke Functions"

    * **registPermission**   
    ERC20 token 'from'의 fromAmount 수량으로 ERC20 token 'to'로 교환 한다  
    ``` java
        function exchange( address from
                        , uint256 fromAmount
                        , address to
                        , uint256 expectedAmount
                        , uint16 slippage
                        , address[] memory route ) 
                    public payable returns( uint256 )
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
        | uint256 | 교환된 to의 수량 |

        !!! info
            from이 address(0) 이면 coin(klay)을 to로 교환 하는 것이므로 fromAmount는 의미가 없다   

=== "Events"
    1. Sed sagittis eleifend rutrum
    2. Donec vitae suscipit est
    3. Nulla tempor lobortis orci

