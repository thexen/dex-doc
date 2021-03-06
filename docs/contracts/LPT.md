# **LPT**
- - -
유동성 공급을 하면 공급 증명서와 같은 것을 수령하게 되는데 타 DEX와 달리    
j100 swap에서는 강화 가능한 NFT화 된 LPT를 수령하게 됩니다   
이런 처리를 하는 contract 입니다   

- - -
## **Address**
ISwapPoolManager의 inqueryLPT(address swapPool) function 사용

address:   
- - -

## **Deployer**

CLPT contract는 CSwapPoolFactory에 swap pool 생성을 요청하면   
CSwapPoolFactory에서 deploy 합니다   

``` mermaid
graph LR
  dev[Dev.Team] -->|deploy| spF[ CSwapPoolFactory ];
  acc[Account] -->|create swap pool| spF;
  spF -->|deploy| lpt[CLPT];
```
- - -

## **Events & Functions**

> onlyOwner - 
!!! note
    *onlyOwner*   
    - TODO

=== "Inquery Functions(3)"

    * **tokenURI**   
    tokenId의 metadata 경로를 조회 한다
    ``` java
        function tokenURI(uint256 tokenId) 
                    public view virtual returns (string memory)
    ```   
        Parameters     
           
        | *Param*      | *Description*                          |
        | :--------- | :------------------------------------ |
        | tokenId | LPT token id |

        Returns     

        | *Return*    | *Description*                          |
        | :--------- | :------------------------------------ |
        | string | metadata 경로 |

    - - - 
    * **inqueryBindedPairToken**   
    LPT에 binding 되어 있는 pair token을 조회 한다
    ``` java
        function inqueryBindedPairToken() 
                    public view returns ( address, address ) 
    ```  
        Returns     

        | *Return*    | *Description*                          |
        | :--------- | :------------------------------------ |
        | address | first token contract address |
        | address | second token contract address |


    - - - 
    * **inqueryWeight**   
    tokenId의 가중치를 조회 한다
    ``` java
        function inqueryWeight( uint256 tokenId ) 
                    public view returns ( uint )
    ```  
        Parameters     
           
        | *Param*      | *Description*                          |
        | :--------- | :------------------------------------ |
        | tokenId | LPT token id |

        Returns     
           
        | *Param*        | *Description*                          |
        | :----------- | :------------------------------------ |
        | uint   | 가중치 |



    
=== "Invoke Functions(5)"

    * **mint**   
    LPT를 amount 만큼 발행 한다
    ``` java
        function mint( address to, uint256 amount ) public onlyOwner 
    ```  
        Parameters     
           
        | *Param*        | *Description*                          |
        | :----------- | :------------------------------------ |
        | to   | tokenId owner address |
        | amount   | 발행 갯수 |   

    - - - 
    * **burn**   
    tokenId를 소각 한다
    ``` java
        function burn( address from, uint256 tokenId ) public onlyOwner
    ```  
        Parameters     
           
        | *Param*        | *Description*                          |
        | :----------- | :------------------------------------ |
        | from   | LPT owner address |
        | tokenId   | 소각 할 tokenId |  
        
    - - - 
    * **burnEx**   
    amount 만큼 LPT를 소각 한다
    ``` java
        function burnEx( address from, uint256 amount ) public onlyOwner
    ```  
        Parameters     
           
        | *Param*        | Description                          |
        | :----------- | :------------------------------------ |
        | from   | LPT owner address |
        | amount   | 소각할 갯수 |  

    - - - 
    * **copy**   
    LPT를 복제(분할) 한다   
    복제(분할)된 LPT는 C급으로 발행 된다   
    ``` java
        function copy( uint amountPerLPT
                    , address stakingHolder ) 
                public onlyOwner
    ```  
        Parameters     
           
        | *Param*       | *Description*                          |
        | :----------- | :------------------------------------ |
        | amountPerLPT   | LPT당 복제 할 갯수 |
        | stakingHolder   | LPT의 staking holder |           

        !!! info
            LPT를 복제(분할) 전 swap pool의 deposit 과 staking이 일지 중지 되어 있어야 한다      

    - - - 
    * **enhance**   
    LPT를 강화 한다   
    ``` java
        function enhance( uint256 tokenId
                    , uint randSeed        
                    , address material
                    , uint256 limitAmount
                    , address[] memory materialRoute
                    , address[] memory feeRoute
                    , uint256 stackId ) 
                public returns( bool, uint )
    ```  
        Parameters     
           
        | *Param*        | *Description*                          |
        | :----------- | :------------------------------------ |
        | tokenId   | 강화 할 token Id|
        | randSeed   | rand seed |        
        | material   | 강화 재료로 사용 될 ERC20 token contract address | 
        | limitAmount | 강화 재료의 최대 수량 |
        | materialRoute   | material(재료)의 상대 가치 측정을 위한 route( 목적지 -  bjects contract의 inqueryWorldCurrency() ) |         
        | feeRoute   | Governance token(수수료)의 상대 가치 측정을 위한 route( 목적지 -  bjects contract의 inqueryWorldCurrency() ) |    

        Returns     

        | *Return*    | *Description*                          |
        | :--------- | :------------------------------------ |
        | bool | 강화 성공 실패 유무 |
        | uint | 강화 결과의 랜덤 값 |     

        !!! info            
            LPT 등급 C,B,A,S,SS,SSS,SSSP    
            material은 강화 재료이며 Objects contract의 inqueryWorldCurrency()을 기준으로    
            동일한 가치를 측정 후 사용된다( 수량 10 ether )   
            material 조건 ERC20 token A(3) 등급 이상 만 사용 가능하다   

        !!! warning
            S,SS,SS 등급에서 강화하여 실패하면 등급이 1단계 하락된다
    
=== "Events(1)"


    * **Enhance**   
    강화 결과 이벤트
    ``` java
        event Enhance( address indexed objects 
                    , address sender
                    , string currentRarity
                    , uint rand );

    ```  

        Parameters     
           
        | *Param*        | *Description*                          |
        | :----------- | :------------------------------------ |
        | object | objects contract address |
        | sender   | Enhance 호출한 address  |
        | currentRarity   | 강화 전 등급 |   
        | rand | 강화 결과 수치 |   
