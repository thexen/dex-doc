# **TOKENOMICS**
- - -

j100Swap은 타 DEX와 차별화 된 정책들이 몇 가지 있습니다  
유동성 제공자에게 보다 많은 수익과 인센티브, 또 다른 가치 창출 기회를 제공하고 j100Swap의 생태계 유지를 위한   
유동성 확보 및 확보된 유동성 유지 방안에 대한 많은 고민을 하였습니다   

??? warning annotate "j100Swap의 차별화 된 정책"
      - NFT화 된 LPT   
      - LPT 강화    
      - LPT 강화 성공 인센티브   
      - Voting

      [:fontawesome-solid-link: TODO - LPT 및 강화 정책에 관한 자세한 내용 ](/features/lpt ){ .md-button } 
      [:fontawesome-solid-link: TODO - Voting 투표권에 관한 자세한 내용 ](/features/voting ){ .md-button } 

j100Swap 생태계에 참여하여 획득한 LPT, ballot는 유동성 공급과 staking 만으로 보상을 받았던 기존의 DEX들과 다르게   
자산화 할 수 있도록 되어 있습니다(다만 ballot은 투표기간 동안만 자유롭게 개인간 거래가 됩니다)

예를 들어 NFT화 된 LPT는 기존의 NFT와 다르게 두 token이 binding 되어 있어 최소한 binding 된 두 token의 가치와 동일한   
가치를 가지게 되며, 강화를 하면 할 수록 보다 많은 mining 기회가 부여되고, 성공 확률은 낮아져 NFT화 된 LPT의 가치는      
증가 할 것 입니다   
강화 된 LPT로 staking을 하면 mining 가중치가 증가되어 강화 되지 않은 LPT 보다 많은 Governance token을 보상받게 되며      
staking을 하지 않고 NFT 마켓에 판매 할 경우 또 다른 가치 창출로 이어져 많은 수익을 만들 수 있을 것이라 기대합니다



## **마이닝 수량**
반감기가 적용 되지 않은 1일 총 마이닝 수량은 43,200 초당 0.5개로, 매년 1월 1일 기준으로 반감기가 적용 됩니다

| *내용*      | *수량*                          |   
| :---------:  | ------------------------------------: |    
| 초당 마이닝 수량 | 0.5 |   
| Staking Holder 초당 분배 수량(90%) | 0.45 |   
| 개발 커미션(15%) | 0.05 |   
| 1일 총 마이닝 수량 | 43,200.0(반감기 미적용) |   

## **인플레이션 정책**
분배 와 마이닝으로 분리 하여 설명을 하고자 합니다   
분배 단계는 Governance token을 분배 비율로 LPT Staking Holder에 Air drop을 하는 것이라고 하면      
마이닝 단계는 LPT Staking Holder가 분배 받은 Governance token을 Staker들이 staking 한 LPT의   
가중치 비율로 경쟁을 하며 보상 받아 갑니다


| *내용*      | *설명*                          |   
| :---------:  | :------------------------------------: |    
| 분배 대상 | LPT Staking Holder |   
| 분배 대상 조건 | token 등급 B(2) 이상으로 만 Binding 된 유동성 풀의 Staking Holder |   
| 분배 비율  | (유동성 풀 가중치 * 분배 수량) / (분배 대상 조건에 부합되는 유동성 풀 가중치 합계) |   
| 전체 일 분배 수량 | 43,200.0(반감기 미적용) * 90% |
| 마이닝 경쟁 | 동일한 LPT Staking Holder에 staking 되어 있는 LPT의 가중치 |   

## **디인플레이션 정책**
유동성 풀에서 발생한 수수료 중 governor 몫의 Governance token 전체와 특정 구간의 강화 성공   
인센티브로 지급 될 Governance token의 governor 몫(20%)과 개발사 몫(10%)을 펀드 형태로   
조성됩니다. 조성된 Governance token은 DAO 안건 상정과 투표로 소각시켜 인플레이션을 둔화  
시킬수 있도록 되어 있습니다   

| *Governance token 펀드 조성*      | 
| :---------:  
| 유동성 풀에서 발생한 수수료 중 governor 몫의 Governance token | 
| LPT 강화 성공 인센티브 중 governor 몫(20%)과 개발팀 몫(10%)의 Governance token |
| 안건 상정 비용 |

그리고 안건 상정 비용을 Governance token으로 지불하게 되어 있어 안건 상정 비용 또한 소각의   
대상이 됩니다

