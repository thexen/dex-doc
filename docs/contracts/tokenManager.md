# **TOKEN MANAGER**
- - -
j100 swap 생태계를 관리 하는 manager contract 3개가 존재 합니다, 그 중 하나로 ERC20 token을   
등록하고 관리하는 역할을 하는 contract입니다  

- - -
## **Address**
IObjects의 inqueryTokenManager() function 사용

address: 
- - -

## **Deployer**

CTokenManager contract는 CManagerBuilder서 deploy 합니다   

``` mermaid
graph LR
  dev[Dev.Team] -->|deploy| mBuilder[ CManagerManager ];
  mBuilder --> |deploy| tokenManager[ CTokenManager];
```
- - -

## **Events & Functions**

!!! note
    *onlyCreator*   
    - contract를 생성 한 account(contract) 만 호출 가능


=== "Inquery Functions(4)"

    * **inqueryTokenGrade**   
    token 등급을 조회 한다
    ``` java
        function inqueryTokenGrade( address token ) public view returns ( uint8 )
    ```   
        Parameters     
           
        | *Param*      | *Description*                          |
        | :--------- | :------------------------------------ |
        | token | ERC20 token contract address |

        Returns     

        | *Return*    | *Description*                          |
        | :--------- | :------------------------------------ |
        | uint8 | token 등급 |

    - - -
    * **inqueryPairWeight**   
    binding pair token의 가중치를 조회 한다   
    가중치(weight) =  fristToken * secondToken
    ``` java
        function inqueryPairWeight( address firstToken
                                , address secondToken ) 
                            public view returns ( uint8 )
    ```   
        Parameters     
           
        | *Param*      | *Description*                          |
        | :--------- | :------------------------------------ |
        | firstToken | ERC20 token contract address |
        | secondToken | ERC20 token contract address |   

        Returns     

        | *Return*    | *Description*                          |
        | :--------- | :------------------------------------ |
        | uint8 | 가중치 |

    - - -
    * **inqueryTokenCount**   
    등록되어 관리되고 있는 token 수를 조회 한다
    ``` java
        function inqueryTokenCount() public view returns( uint256 )
    ```   
        Returns     

        | *Return*    | *Description*                          |
        | :--------- | :------------------------------------ |
        | uint256 | 등록된 token 수 |

    - - -
    * **inqueryToken**   
    token address를 조회 한다
    ``` java
        function inqueryToken( uint256 index ) 
                    public view returns( address )
    ```   
        Parameters     
           
        | *Param*      | *Description*                          |
        | :--------- | :------------------------------------ |
        | index | 등록된 token index |

        Returns     

        | *Return*    | *Description*                          |
        | :--------- | :------------------------------------ |
        | address | ERC20 token contract address |

=== "Invoke Functions(4)"

    * **registTokenGrade**   
    token 등급을 등록한다   
    token 등급을 등록 하지 않은 상태에서 swap pool을 만들면 C(1)등급으로 자동 설정된다
    ``` java
        function registTokenGrade( address token, uint8 grade ) public onlyCreator
    ```  
        Parameters     
           
        | Param        | Description                          |
        | :----------- | :------------------------------------ |
        | `token`   | ERC20 token contract address |
        | `grade`   | ERC20 token 등급 |   

    - - -

    * **registTokenGrade**   
    token을 등록 한다   
    token 등급은 C(1)로 설정된다
    ``` java
        function registTokenGrade( address token ) 
                public checkPermission( uint16( ENUMPERMISSIONS.FACTORY ) )
    ```  
        Parameters     
           
        | Param        | Description                          |
        | :----------- | :------------------------------------ |
        | `token`   | ERC20 token contract address |

    - - -

    * **invokeTokenUpGrade**   
    token 등급을 한단계 상승시킨다
    ``` java
        function invokeTokenUpGrade( address token ) 
                public checkPermission( uint16( ENUMPERMISSIONS.DAO ) ) 
    ```  
        Parameters     
           
        | Param        | Description                          |
        | :----------- | :------------------------------------ |
        | `token`   | ERC20 token contract address |

    - - -
    * **invokeTokenDownGrade**   
    token 등급을 한단계 하락시킨다
    ``` java
        function invokeTokenDownGrade( address token ) 
                public checkPermission( uint16( ENUMPERMISSIONS.DAO ) )
    ```  
        Parameters     
           
        | Param        | Description                          |
        | :----------- | :------------------------------------ |
        | `token`   | ERC20 token contract address |


=== "Events(1)"

    * **SetToken**   
    ERC20 token 등록 이벤트
    ``` java
        event SetToken( uint256 index
                    , address token
                    , uint256 expireDate
                    , uint8 weight );
    ```  

        Parameters     
           
        | *Param*        | *Description*                          |
        | :----------- | :------------------------------------ |
        | index   | token index  |
        | token   | ERC20 token contract adress  |
        | expireDate | mining 라이선트 만료 날짜 |   
        | weight | 등급(가중치) |   
        