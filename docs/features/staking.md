# **STAKING**
- - -
j100Swa생태계는 두가지의 staking 모델이 있습니다   
하나는 유동성 공급으로 받은 LPT를 staking 하는 것이며 또 다른 하나는 Governance token을 staking      
하는 것입니다    
전자의 경우 Governace token mining을 가능하게 해주며, 후자의 경우 Governor의 자격을 획득하여       
투표권과 다양한 인센티브를 받을 수 있습니다    

- - -
## **LPT staking**
유동성 공급으로 LPT를 받으면 강화를 거쳐 staking을 할 수도 있으며 강화 되지 않은 상태의 LPT를   
staking 할 수도 있습니다  
강화된 LPT는 등급에 따라 weight(가중치)가 증가하게 되는데, 마이닝으로 획득 가능한 Governance token   
수량에 영향을 주게됩니다   
[:fontawesome-solid-link: LPT 강화의 자세한 내용 :fontawesome-solid-link:](/features/lpt/#lpt-enhance){ .md-button } 

LPT는 모든 Staking Holder에 staking이 가능 한 것은 아닙니다, 유동성을 공급한 swap pool(유동성 풀)의    
LPT Staking Holder에만 제한 적으로 가능하며, Governance token 마이닝 가능한 Staking Holder도   
ERC20 token 등급이 B(2)이상으로 binding 되어 있는 유동성 풀의 LPT Staking Holder만 가능하게 되어   
있습니다

  * 유동성 공급으로 LPT를 받게 되면 유동성을 공급한 swap pool의 LPT Staking Holder에만 제한적으로   
    staking이 가능하다   
  * staking을 하였다고 Governance token 마이닝이 되는 것은 아니다, 마이닝이 가능한 Staking Holder는    
    유동성 풀의 pair token의 등급이 B(2)으로 되어 있어야 한다    
    * token 등급 B(2)이상 이어야만 mine으로 부터 Governance token을 분배 받을 수 있다   
    * Staking Holder가 mine으로 부터 분배를 받아야 비로소 mining이 가능해진다  
  * token 등급은 안건 상정 및 DAO의 투표로 등급 변동이 가능하다   
  
staking으로 Governance token mining 수량 계산   
``` C++
    A = LPTStakingHolder가 분배 받은 수량;
    B = staker가 소유한 LPT 가중치 합;
    C = Staking Holder에 staking 되어 있는 LPT 가중치 합;
    mining(Governance token reward 수량) = A * B / C;
```

LPT Staking Holder가 Governance token을 분배 받을 수량 계산   
[:fontawesome-solid-link: SWAP POOL WEIGHT 참고](/features/mining/#swap-pool-weight){ .md-button }   

!!!warning
  Governance token 채굴 가능 상태에서 staking이 가능하다


- - -
## **Goverance token staking**
Governance token을 staking 하면 Governor 자격을 획득하게 되어 투표권을 얻을수 있으며   
`투표 기간동안 양도가 가능`하고 유동성 풀에서 발생되는 교환 수수료의 일부 Governor의 몫,    
LPT 강화 성공 인센티브 중 Governor의 몫(20%)을 받게 됩니다   
유동성 풀에서 발생되는 수수료의 일부 Governor 몫과 강화 성공 인센티브의 Governor 몫으로 받게 되는 token은   
Governance token을 제외한 j100Swap 생태계에서 유통되는 모든 token이며 수량은 staker들이 staking 한   
수량의 비율로 각자 보상 받게 됩니다  

!!!warning
  Governance token Lock-up이 해제 된 상태에서 가능하다

- - -
## **staking 약정 기간 및 보너스 가중치**
LPT와 Governance token를 staking 할 때 약정 기간을 무약정, 30일, 90일, 180일, 365일 5가지 중 하나를 선택    
할 수 있습니다, 각 약정 기간마다 보너스 가중치가 적용됩니다

| *기간*  | *보너스 가중치*  |
| -----: | :------: |
| 90일 이상 | 20 |
| 30일 이상 | 12 |
| 15일 이상 | 7 | 
| 7일 이상 | 3 |
| 무약정  | 1 |

| *약정 종류*  | *staking 회수 가능 날짜*  |
| -----: | :------: |
| 무약정 | staking 한 시점으로 부터 다음날 00:00 부터 가능 |
| 약정  | staking 한 다음날 + 약정기간 00:00 부터 가능 |

* 다만 mining은 약정,무약정 상관없이 staking 즉시 진행됩니다    

!!! info "보너스 가중치 적용 공식"
  staking 적용 가중치 = (LPT 가중치) * (보너스 가중치)     
  staking 적용 가중치 = (Governance token 수량) * (보너스 가중치)     

- - -










