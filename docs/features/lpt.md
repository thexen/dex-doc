# **LPT**
- - -

DEX는 유동성 풀에 token을 예치하면 LPT(Liquidity Provider Token)를 받게 됩니다   
j100Swap은 후발 주자이기 때문에 타 DEX에 없는 차별화된 무엇인가가 절실하다고 생각 하였습니다   
그래서 예치한 증명으로 받은 ERC20화 되어 있는 LPT로 할 수 있는게 무엇이 있을까 고민을 하게 되었고   
staking만으로는 타 DEX와의 차별화를 둘 수 없었기에 NFT화 된 LPT를 기획 하기 시작 하였습니다   

ERC721화 된 LPT는 ERC20화 된 LPT를 도입 하였을 경우의 단점보다 장점과 매력이 많음을 알게 되어   
타 DEX와의 차별화로 ERC721화 된 LPT를 j100Swap 생태계에 도입하게 되었습니다   

- - -

## **단점 및 보완**
유동성 풀에 token A와B 2:1 비율로 200:100 개씩 예치하여 1개의 LPT를 받을 수 있다고 가정 한다면   
100:50 개씩 예치 할 경우 0.5개의 LPT를 받을 수 있어야 합니다     
ERC721화 된 LPT인 경우 100:50개 씩 예치 하는 소규모 예치는 불가능 하게 되는 문제점이 발생 됩니다   

j100Swap에서는 이런 문제점을 해결 하고자 아래와 같은 기능을 적용하였고 또 향후 다른 보완 책도   
준비 중에 있습니다

ERC721화 된 LPT를 배수 분할 할 수 있도록하여 문제점을 보완하였습니다    
정책,기능 변경등 구동중인 j100Swap에 개발팀 개입을 못하게 개발 되어 있어 LPT 분할은   
DAO에 의해 의결되고 투표하여 처리하면 됩니다   

뿐만 아니라 향후 cloud funding contract를 만들어 소규모의 유동성 예치가 가능하도록 준비할 계획   
입니다

??? info "cloud funding contract"
    정수 개의 LPT를 받을 수 있을 정도의 소규모 자산들을 모아 유동성 풀에 예치시켜 주는      
    contract   

- - -

## **차별화**
j100Swap 생태계에 유동성 제공으로 받은 ERC721(NFT)화 된 LPT는 단순한 staking만을 위한 것이    
아닙니다   
NFT 마켓에서 거래 되고 있는 NFT들의 가치는 사고파는 사람들이 결정 하는 것이여서 실물 가치가   
없지만 j100Swap 생태계의 LPT는 binding 된 pair token 수량 만큼 가치를 가지고 있으며 rarity를   
부여하여 가치 상승을 유도하였습니다      
rarity는 staking의 가중치에도 적용되어 riarity의 실용성에 대한 가치도 부여 되었다고 하겠습니다   

LPT를 staking하게 되면 LPT의 가중치로 mining 수량이 결정 되는데 rarity가 상승 할 수록 가중치도  
같이 상승하여 보다 많은 Governance token을 보상 받게 됩니다   

LPT의 rairity 상승은 LPT 강화에 성공하여야만 하고 특정 구간은 강화 성공확률이 희박하게 설정되어   
강화 실패시 rarity 하락도 하게 됩니다  

## **LPT ENHANCE**
LPT 강화는 staking 상태에서 되지 않습니다


강화 실패시 강등 구간    

| *강화전*      | *강화성공*  | *강화실패* |
| :---------: | :--------------: |  :--------------: | 
| S | SS | A |
| SS | SSS | S |
| SSS | SSSP | SS |


강화 성공시 인센티브(강화보상) 구간    

| *강화전*      | *강화성공*  | *인센티브* |
| :---------: | :--------------: |  :--------------: | 
| S | SS | 1% |
| SS | SSS | 9% |
| SSS | SSSP | 50% |    


!!! warning "강화 성공 인센티브 내용"
    강화 성공시 강화 재료로 사용된 모든 ERC20 Token과 coin 입니다    
    인센티브는 수수료(30%)를 제외하고 즉시 받게 됩니다     
    ```
    강화 성공 수수료: 30%    
        Governor: 20%     
        개발팀: 10%     
    ```    
    단 Governance token은 디플레이션 정책으로 burn 또는 recycle로 인센티브에서 제외 됩니다   


**강화 확률 테이블**   

| *Tier*      | *확률(1/1,000,000)*  | *확률조정범위* | *가중치* | *가중치조정범위* | *인센티브* |
| :--------- | --------------: | :-----------------: | -------------: | :-------------: | -------------: |
| SSSP(7) | 43 |   불가 | 100 | 불가 | 50% |
| SSS(6) | 3,190 |  500~5,000 | 50 | 39~57 | 9% |      
| SS(5) | 43,000 |  2,000~60,0000 | 25 | 24~27 | 1% |     
| S(4) | 130,000 |  100,000~150,000 | 20 | 18~22 | - |     
| A(3) | 300,000 |  300,000~400,000 | 15 | 13~17 | - |     
| B(2) | 500,000 |  불가 | 12 | 불가 | -  |     
| C(1) | 1,000,000 | 불가 | 10 | 불가 | - |     


## **STAKING**

j100Swap에서는 두가지의 staking 모델이 있습니다   
하나는 Governance token을 staking 하는 것이고 또 다른 하나는 LPT를 하는 것입니다   
여기에서는 LPT staking에 관한 내용을 다룰것입니다   

유동성 제공으로 LPT를 받아 강화를 한 후 staking을 하던 무강화 상태에서 staking을 하던   
dependency 한 LPTStakingHolder에 제한된 LPT로 staking이 가능합니다    
다시 말해 유동성을 제공한 swap pool에서 받은 LPT는 swap pool에 dependency 한    
LPTStakingHolder에 만 staking이 가능 합니다   

그리고 staking을 하였다고 Governance token의 reward를 기대 할 수 없습니다   
j100Swap에서 관리하는 ERC20 Token 등급 B(2) 이상인 token으로만 구성된 유동성 풀   
이어야 reward를 받을 수 있습니다   
ERC20 Token 등급은 DAO로 등급 조절이 가능하니 자세한 내용은 Token Tier 편을 참고   
하시기 바랍니다    
[:fontawesome-solid-link: ERC20 Token Tier ](/features/tokenGrade){ .md-button }
[:fontawesome-solid-link: Mining ](features/mining){ .md-button }    


staking으로 받을수 있는 Governance token 계산   
``` C++
    A = LPTStakingHolder가 분배 받은 수량;
    B = staker가 소유한 LPT 가중치 합;
    C = LPTStakingHolder에 staking 되어 있는 LPT 가중치 합;
    mining(Governance token reward 수량) = A * B / C;
```

LPTStakingHolder가 분배 받을 수량 계산   
[:fontawesome-solid-link: SWAP POOL WEIGHT 참고](/features/mining/#swap-pool-weight){ .md-button }    


## **j100Swap 생태계의 LPT 가치**
j100Swap 생태계에 유동성 제공으로 받은 LPT는 다른 NFT와 차별화 된 실 가치를 부여 받은 상태입니다   
다시 말하면 LPT에 binding 되어 있는 pair token의 가치를 가지고 있습니다   

LPT를 staking 하면 Governance token reward라는 또 다른 가치를 창출 하게 되며 강화를 통한 더 많은    
reward와 rarity를 부여 받을 수 있어 다른 서비스에서 제공하는 NFT와 차별화가 분명하고 무의미한 강화가   
아님을 확인 하실수 있을 겁니다   

강화 등급이 높은 ERC721(NFT)화 된 LPT를 NFT 마켓에 등록하여 판매를 한다면 어떤 가치의 평가를 받을 수 있을지  
많이 기대가 됩니다  

``` mermaid   
graph LR
  A[mine] --> B{ isMinealbe };
  B -->|Yes| C[staking holder - weight 4];
  S1[staker] -->|1.enhance| E[enhanced LPT];
  E --> |2.staking| C;
  C --> |3.governance token reward| E;
```

``` mermaid   
graph LR
  S1[staker] -->|1.enhance| E[enhanced LPT];
  E -->|2.sale| M[NFT open market];
  M -->|3.income| S1;  
```

- - -





