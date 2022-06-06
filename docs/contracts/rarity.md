# **RARITY**
- - -
LPT Rarity의 등급을 결정 하는 확률과 강화를 할 수 있도록 해주는 contract 입니다   
이 기능과 더불어 강화재료로 사용된 ERC20 token을 적립하는 곳이기도 하고 특정 구간   
강화에 성공하면 보상을 지급해주기도 합니다   

- - -
## **Address**
IObjects의 inqueryRarity() function 사용   

address:      
- - -

## **Deployer**

CRarity contract는 개발팀에서 deploy를 합니다   

``` mermaid
graph LR
  dev[Dev.Team] -->|deploy| rarity[ CRarity ];
```
- - -

## **Events & Functions**

!!! note
    *onlyCreator*   
    - contract를 생성 한 account(contract) 만 호출 가능     
    *public checkPermission( uint16( ENUMPERMISSIONS.DAO ) )*   
    -   
    *checkPermission( uint16( ENUMPERMISSIONS.RARITY ) )*   
    - 

=== "Inquery Functions(3)"

    * **inqueryProbabilityTable**   
    강화 테이블을 조회 한다
    ``` java
        function inqueryProbabilityTable() 
                    public view returns( TProbability[] memory probabilityTable )
    ```   
        Returns     
           
        | *Return*      | *Description*                          |
        | :--------- | :------------------------------------ |
        | TProbability | 강화 테이블 |

        ``` C++
            struct TProbability {
                string      grade;          //티어(등급)
                uint        percentage;     //적용된 확률   (percentage/1,000,000)
                uint        minPercentage;  //수정 가능한 최소 확률
                uint        maxPercentage;  //수정 가능한 최대 확률
                uint16      weight;         //적용된 가중치
                uint16      minWeight;      //수정 가능한 최소 가중치
                uint16      maxWeight;      //수정 가능한 최대 가중치
                uint256     jackPot;        //강화 성공시 보상 받을 배율(jackpot 누적 수량의 %)
            }        
        ```

    - - -
    * **inqueryWeight**   
    등급별 가중치를 조회 한다
    ``` java
        function inqueryWeight( string memory rarity ) 
                        public view returns( uint )
    ```   
        Parameters     
           
        | *Param*      | *Description*                          |
        | :--------- | :------------------------------------ |
        | rarity | 등급 |

        Returns     

        | *Return*    | *Description*                          |
        | :--------- | :------------------------------------ |
        | uint | 가중치 |   

        !!! info 
            등급 C,B,A,S,SS,SSS,SSSP   

    - - -
    * **enhanceTest**   
    강화 테스트를 한다
    ``` java
        function enhanceTest( address applicant
                        , string memory rarity
                        , uint256 randNonce ) 
                    public view returns( bool, uint )
    ```   
        Parameters     
           
        | *Param*      | *Description*                          |
        | :--------- | :------------------------------------ |
        | applicant | 강화를 하는 address |
        | rarity | 강화할려는 현재 등급 |
        | randNonce | 강화 seed 값 |

        Returns     

        | *Return*    | *Description*                          |
        | :--------- | :------------------------------------ |
        | bool | 강화 성공 여부 |   
        | uint | 강화 확률에 사용된 랜덤 값 |   
    
=== "Invoke Functions(2)"

    * **invokeEditProbability**   
    등급의 확률과 가중치를 변경 한다
    ``` java
        function invokeEditProbability( string memory rarity
                                    , uint percentage
                                    , uint8 weight ) 
                                public checkPermission( uint16( ENUMPERMISSIONS.DAO ) )
    ```  
        Parameters     
           
        | *Param*        | *Description*                          |
        | :----------- | :------------------------------------ |
        | rarity   | 등급 |
        | percentage   | 강화 성공 확률( percentage/1,000,000) |   
        | weight | 가중치 |   
    
    - - -
    * **enhance**   
    강화를 한다
    ``` java
        function enhance( string memory rarity, uint256 randNonce ) 
                    public checkPermission( uint16( ENUMPERMISSIONS.RARITY ) ) 
                    returns( bool, uint, string memory )
    ```   
        Parameters     
           
        | *Param*      | *Description*                          |
        | :--------- | :------------------------------------ |
        | rarity | 강화할려는 현재 등급 |
        | randNonce | 강화 seed 값 |

        Returns     

        | *Return*    | *Description*                          |
        | :--------- | :------------------------------------ |
        | bool | 강화 성공 여부 |   
        | uint | 강화 확률에 사용된 랜덤 값 |   
        | uint | 강화 결과 등급 |                   

        !!! info 
            등급 C,B,A,S,SS,SSS,SSSP    
            S,SS,SS 등급에서 강화하여 실패하면 등급이 1단계 하락된다



=== "Events"
    1. Sed sagittis eleifend rutrum
    2. Donec vitae suscipit est
    3. Nulla tempor lobortis orci

