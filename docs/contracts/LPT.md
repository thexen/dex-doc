# **LPT**
- - -

## **Address**
* ADDRESS
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



    
=== "Invoke Functions(6)"

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
    * **mint**   
    metadata 경로와 함께 LPT를 amount 만큼 발행 한다
    ``` java
        function mint( address to
                    , uint256 amount
                    , string memory tokenUri ) 
                public onlyOwner
    ```  
        Parameters     
           
        | *Param*        | *Description*                          |
        | :----------- | :------------------------------------ |
        | to   | tokenId owner address |
        | amount   | 발행 갯수 |   
        | tokenUri   | sub metadata 경로( /rarity/metadata.json ) |   

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
                    , address material
                    , uint randSeed
                    , address[] memory route ) 
                public returns( bool, uint )
    ```  
        Parameters     
           
        | *Param*        | *Description*                          |
        | :----------- | :------------------------------------ |
        | tokenId   | 강화 할 token Id|
        | material   | 강화 재료로 사용 될 ERC20 token contract address | 
        | randSeed   | rand seed |
        | route   | material의 상대 가치 측정을 위한 route( 목적지 -  bjects contract의 inqueryWorldCurrency() ) |         

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
    
=== "Events"
    1. Sed sagittis eleifend rutrum
    2. Donec vitae suscipit est
    3. Nulla tempor lobortis orci

