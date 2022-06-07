# **MODIFIER**
- - -
j100Swap 생태계 contract에서 정의되고 사용되는 모든 modifier를 설명 합니다    

- - -

## **onlyRegister**    
CObjects의 registPermission() function 호출 할 수 있는 권한을 말합니다    
CObjects에서 registPermission() function 호출 권한 부여(grant)    

``` mermaid
graph LR
  objs[ CObjects ] -->|grant| lptF[CLPTFactory];    
  objs[ CObjects ] -->|grant| shF[CLPTStakingHolderFactory];   
  objs[ CObjects ] -->|grant| spF[CSwapPoolFactory];      
  lptF --> |call| fun[ CObjects.registPermission ];
  shF --> |call| fun;
  spF --> |call| fun;
```

- - - 
## **onlyCreator**
해당 함수는 contract를 deploy한 contract 또는 address만 호출 권한이 있습니다       
CManagerBuilder의 registTokenGrade() function만 account address에게 권한이 부여 되어 있고   
다른 function들은 contract에게 호출 권한이 부여되어 있어 public이여도 어느 누구도 호출이    
불가능 합니다   

- - - 
## **onlyVoting**
CDAO의 invoke function들 중 invokeNewBallot() function으로 안건 상정과 CVoting으로 투표를 통해   
호출이 가능한 함수 입니다  

- - - 
## **onlyConsent**
CVoting의 invoke()을 호출 할 수 있는 권한을 말합니다   
CDAO의 invokeNewBallot()로 안건이 상정되면 CVoting contract가 deploy되고 Governor에게 투표권이   
air drop되는데 투표권을 행사하여 CVoting의 invoke()를 호출 할 수 있습니다   
!!! info "CVoting의 invoke() 호출 가능 조건"   
    1. air drop 된 투표권을 투표 기간동안 행사되어야 합니다    
    2. 투표권은 과반수 이상 찬성/반대와 같은 행사권이 이루여 져야 합니다   
    3. 행사 된 투표권 중 과반수 이상 찬성하여야 합니다    

- - - 
## **onlyOwner**
해당 함수는 contract를 deploy한 contract 또는 address만 호출 권한이 있습니다   

- - - 
## **onlyMember**
CTeamVault contract에서 사용되는 권한입니다     
해당 합수는 구성원들만이 호출 할 수 있습니다

- - - 
## **onlyQuorum**
CTeamVault contract에서 사용되는 권한입니다   
해당 함수는 구성원 또는 일반 account address에 의해 propsal된 문서에 대한 구성원들의 승인이    
있어야 호출이 가능합니다  
예를 들어 구성원중 누군가가 Team Vault에서 token을 인출 하기 위해서는 인출용 function을   
proposal 한 후 구성원들의 approval을 기다렸다가 승인이 되면 proposal 한 function 호출이   
가능해집니다  

- - - 
## **onlySelf**
CTeamVault contract에서 사용되는 권한입니다   
함수는 public으로 누구나 호출이 가능하게 되어 있지만 CTeamVault 안에서만 호출이 됩니다   
그럼 internal을 사용하지 이걸 왜 만들었냐 의구심이 가실겁니다   
만든 이유는 해당 함수를 호출 하기 위한 구성원들의 승인이 있어야만 호출이 가능하도록 하기   
위해서 입니다   
소스를 참고 하시기 바랍니다   

- - - 
## **ENUMPERMISSIONS.DAO**
CDAO contract만 호출이 가능합니다    
CObjects contract에서 grant 합니다   

- - - 
## **ENUMPERMISSIONS.FACTORY**
Factory 계열의 contract만 호출이 가능합니다    
!!! info "Factory 계열의 contract"   
    CLPTFactory     
    CLPTStakingHolderFactory    
    CSwapPoolFactory     
CObjects contract에서 grant 합니다   

- - - 
## **ENUMPERMISSIONS.SPFACTORY**
CSwapPoolFactory contract만 호출 가능합니다   
CLPTFactory, CLPTStakingHolderFactory contract를 통해 CLPT와 CLPTStakingHolder를 생성하기 위한 함수를  
호출 할 수 있는 권한 입니다  
CObjects contract에서 grant 합니다   

- - - 
## **ENUMPERMISSIONS.RARITY**
CLPT에서만 CRarity contract의 enhance()호출이 가능하도록 부여된 권한입니다   
swap pool이 CSwapPoolFactory에 의해 deploy 되면서 swap pool에 종속적인 CLPT contract도 CLPTFactory에 의해서   
deploy 됩니다, 이 때 CLPT contract가 생성되면 CLPT에게 CRarity contract의 enhance()을 호출 할 수 있도록 권한을    
부여합니다

``` mermaid
graph LR
  objs[ CObjects ] -->|grant| lptF[CLPTFactory];    
  lptF --> |call| fun[ CObjects.registPermission ];
  fun --> |grant| rarity[ CRarity ];
```

- - - 