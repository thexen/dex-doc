# **MINING**
- - -

mining은 j100Swap이 자랑하는 core 기능 중 하나 입니다   
   
MMORPG 게임의 채광에서 몇가지 idea를 가져왔습니다   
MMORPG 게임에서는 게이머가 mine(광산)에서 곡괭이로 채광 하여 여러가지 광석을 획득합니다    
그리고 채광하기 위한 도구인 곡괭이를 강화하여 채광 속도를 올려주기도 하고 상위 mine(광산)에서  
채광을 가능하게 해주기도 합니다

j100Swap에서는 유동성 제공자가 유동성을 제공하면 받게되는 LPT를 NFT화 하였고, 소유하고 있는    
NFT화 된 LPT를 게임이의 곡괭이 처럼 강화하여 마이닝에 참여 할 경우 advantage를 받을 수 있도록  
되어 있습니다      

[:fontawesome-solid-link: TODO - LPT 및 강화 정책에 관한 자세한 내용 ](/features/lpt){ .md-button } 

``` mermaid
graph LR
  A[mine] --> B{ isMinealbe };
  B -->|Yes| C[staking holder - weight 4];
  B -->|Yes| D[staking holder - weight 20];
  B ---->|No| E[staking holder - weight: 2];
  A -->|Governance token 4*X| C; 
  A -->|Governance token 20*X| D; 
  A -->|Governance token 0*X| E; 
  
  S1[Staker1] --> |staking| C;
  C --> |reward| S1;
  S1 --> |depoist| SW1[swap pool - weight 4];
  SW1 --> |LPT| S1;
  S1 --> |LPT enhance| S1;

  S2[Staker2] --> |staking| E;
  E --> |no reward| S2;
  S2 --> |depoist| SW2[swap pool - weight 2];
  SW2 --> |LPT| S2;
  S2 --> |LPT enhance| S2;
```
- - -

## **GOVERNANCE TOKEN MINING**

유동성 풀(swap pool) Contract를 생성하면, 생성한 유동성 풀에 종속적인 LPT Contract와 LPTStakingHolder   
Contract도 함께 만들어 지게 되며 이때 만들어진 LPT, LPTStakingHolder는 생성한 유동성 풀에 dependency  
하기 때문에 다른 유동성 풀과 상호작용이 없습니다   

마이닝(mining)은 유동성 풀에 유동성을 제공하여 받게되는 NFT화 된 LPT를 Staking Holder에 staking 함으로써   
Governance token 마이닝이 시작 됩니다, 그런데 모든 StakingHolder가 마이닝이 되는 것은 아닙니다, token  
등급이 B(2) 이상으로 만 binding 된 유동성 풀에 의해 생성된 LPTStakingHolder만 가능합니다    

그리고 binding 된 두 token 등급을 곱하면 유동성 풀의 weight(가중치)가 되는데 이 가중치를 기준으로   
다른 LPTStakingHolder와 경쟁하여 Governance token을 분배 받게되며 분배 받은 Governance token은 다시  
StakingHolder에 staking한 staker들과 경쟁하여 보상을 받게 됩니다       
[:fontawesome-solid-link: ERC20 Token Tier ](/features/tokenGrade){ .md-button }  


## **SWAP POOL WEIGHT**

유동성 풀의 가중치 계산과 분배 경쟁(마이닝)에 참여 여부 결정은 아래 코드와 같습니다     
!!! info "분배 경쟁에 참여가 가능한 Staking Holder 조건"
    분배 경쟁에 참여 가능한 StakingHolder는 ERC20 Token 등급이 B(2) 이상 으로만 구성되어야 합니다   
DAO의 투표로 등급을 A(3) 까지 올릴수 있습니다   
```C++
    weight = iTokenManager.inqueryTokenGrade(firstToken)  * iTokenManager.inqueryTokenGrade(secondToken);
    ...
    if( iTokenManager.inqueryTokenGrade(firstToken) > 1 && iTokenManager.inqueryTokenGrade(secondToken) > 1 ) {
        _mSwapPoolData[ swapPool ].bMinable =   true;
        totalValidWeight                   +=  weight;
    } else {
        _mSwapPoolData[ swapPool ].bMinable = false;
    }
```

StakingHolder가 초당 분배 받을 Governance token 량 계산 공식

```C++
    (초당 채굴 량) * (유동성 풀 가중치) / (분배 경쟁에 참여한 swap pool들 가중치 합계)
```





