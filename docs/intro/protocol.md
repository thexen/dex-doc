# **프로토콜 개요**
j100Swap은 중앙화 거래소에서 사용하는 오더북 형식이 아닌 AMM 방식의 탈중앙화 swap protocol 입니다   
- - -   

j100Swap은 CPMM function을 기반으로 유동성 풀의 각 토큰 수량에 따라 토큰 가격과 교환 비율이 결정   
됩니다   

예를 들어 유동성 풀에 토큰 A 와 B가 각각 1:2의 비율로 100,200개씩 있다고 가정 해보겠습니다   
(설명의 이해를 돕고자 아래 CPMM function을 적용 하지 않은 상태로 설명을 드리겠습니다)     

1:2의 비율은 토큰 A 1개를 토큰 B 2개로 교환 가능하다는 말과 같습니다       
유동성 풀에서 토큰 A 1개를 토큰 B 2로 교환을 해보겠습니다 그러면 유동성 풀에는 토큰 A 101,   
토큰 B 199개가 남아 있게 되어 교환 비율이 변경됩니다, 즉 토큰 A 1개를 토큰 B 2개로 교환을 할 수   
없게 됩니다  
이젠 토큰 A 1개를 토큰 B 1.97개로 교환 하여야 하며 토큰 A의 가치는 하락 토큰 B의 가치는 상승한  
상태로 가격 형성이 이루어 지며 이와 같이 j100Swap protocol은  `자유 시장 경제 체제`의 공급과   
수요로 가격과 교환 비율이 적용되도록 설계 개발 되었습니다   

*j100Swap 메커니즘*
!!! note "CPMM function"
    X * Y = K   
    - - -  
    X, Y = 유동성 풀의 ERC20 token 수량     
    K = 상수   

CPMM은 유동성 풀에서 swap이 이루어지면 K가 항상 일정한 수치가 유지되도록 해주는 function 입니다   
그리고 swap시에는 fee(수수료)가 필요한데 교환 수수료는 자동으로 유동성 풀에 예치되는 방식을 사용    
하고 있어 Constant K가 천천히 증가하는 메카니즘을 도입하여 개발 되었습니다 

*교환 함수*     
!!! note "swap function"
    r = to - K / (from + amount)    
    - - -   
    from(ERC20 token)의 amount 를 to(ERC20 token) 로 교환 하기      
    r = 교환으로 받게 될  to의 수량     
    amount = 수수료가 포함된 from의 수량     
    K = 상수     

amount에는 교환 수수료가 포함 되어 있어 교환 수수료를 제외된 수량만 교환이 이루어져야 합니다    

*교환 수량 구하는 함수*
!!! note "swap amount"    
    swapAmount = amount * amount / (amount + amount * fee)     
    - - -   
    amount : (amount + amount * fee) = swapAmount : amount     

교환 함수에 swapAmount를 적용 하면 수수료를 제외한 수량만 교환이 이루어 집니다
    ``` java
        r = to - K / (from+swapAmount)
    ```   
그리고 수수료(`amount - swapAmount`)의 일부 Governor 몫(인센티브)를 제외한 유동성 공급자의   
인센티브는 유동성 풀에 예치되어 contant K는 천천히 증가하게 됩니다, K가 증가한다는 말은 유동성   
풀의 자산이 증가한다는 말과 같습니다     
- - -   

**참여자와 인센티브(수익)**

j100Swap 생태계에 유동성을 공급한 참여자들은 Governor와 수수료를 쉐어하게 됩니다   
Governance token을 staking하면 Governor 자격이 부여 되여 모든 유동성 풀의 수수료 일부 와 투표   
권한 얻을 수 있습니다   
!!! info "Governance token 받기"
    유동성 공급의 증표로 ERC721(NFT)화된 LPT를 staking 하면 얻을 수 있습니다   

유동성 공급자는 유동성 풀에서 수수료만 별도로 인출 할 수 없으며 유동성 공급의 증표로 받은 LPT를  
반납하여 유동성을 공급한 token 수량과 수수료를 동시에 회수하여야 합니다   

  * Liquidity Provider(LP): 두 개의 자산(ERC20 token)을 유동성 풀에 공급하면 공급의 증표로   
    NFT화 된 LPT를 받게되며 이 LPT를 강화하여 NFT 마켓에 판매하거나, staking으로 Governance token   
    얻을 수 있습니다, 그리고 유동성 풀에서 발생되는 교환 수수료를 풀 내의 지분율에 따라 보상을  
    받게 됩니다       
  * Governor: Governance token을 staking한 참여자를 말하며, 유동성 풀에서 발생하는 교환 수수료     
    (swap fee)의 Governor 몫에 해당 되는 부분을 staking한 지분율에 따라 분배 받게됩니다    
    이와 더불어 안건 상정으로 air drop된 투표권을 투표 기간내에 양도하여 부수익을 얻을 수 있습니다      
  * Staker: LPT를 staking한 참여자를 말하며, staking 된 상태의 LPT는 강화나 판매를 할 수 없습    
    니다, LPT staking으로 Governance token을 지분율에 따라 분배 받게 됩니다   
  * Trader: 유동성 풀에서 원하는 토큰을 교환하는 참여자를 말합니다, 토큰 교환으로 차익을 얻을 수    
    있습니다   

!!! info "수수료와 Governor 몫"
    수수료와 수수료의 Governor 몫은 안건 상정과 Governor의 투표로 변경이 가능합니다   