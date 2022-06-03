# **GLOSSARY**
- - -
본 문서에 자주 등장하는 용어입니다   

- - -
* Governance token    
j100Swap 생탱계에서 마이닝이 가능한 ERC20 token 입니다   

- - -   
* Governor    
Governance token을 Governance token contract에 staking을 하게되면 유동성 풀에서 발생되는   
교환 수수료의 일부(Governor 몫)를 claim 할 수 있는 권한과 DAO의 투표권 행사를 부여 받은    
address를 말합니다, j100Swap의 정책결정에 직접적으로 참여 할 수 있게 됩니다

 - - -
* 분배 경쟁       
유동성 풀에 binding 되어 있는 pair token의 등급을 기준으로 staking holder가 분배 받을   
Governance token의 수량이 결정 되므로 pair token의 등급을 올려 보다 많은 분배를 받기 위해   
하는 행위를 말합니다  

- - -   
* 마이닝 경쟁       
staker는 staking holder에 분배 받은 Governance token을 마이닝 통해 보상받게 되는데   
보상 받을 수량은 staking 한 LPT의 가중치의 비율로 결정이 됩니다, LPT의 가중치를 올려  
보다 많은 보상을 받기 위한 행위를 말합니다

- - -   
* staking   
인센티브를 목적으로 Governance token 또는 LPT를 특정한 기간동안 예치하는 행위 말합니다

 - - -   
* staker   
j100Swap 생태계의 Governance token 또는 LPT를 staking 한 account address를 말합니다

 - - -   
 * staking holder   
staking이 가능한 contract를 말합니다


- - -   
* dependency    
유동성 풀(swap pool) contract가 생성 되면서 LPT 와 staking holder contract도 부산물 처럼   
같이 생성이 되게 됩니다, 생성된 LPT 와 staking holder는 유동성 풀에 의존성(dependency)이   
생기게 되는것을 말합니다.    
LPT가 staking 할 수 있는 contract는 의존성으로 있는 유동성 풀 contract가 만들어 지면서   
같이 만들어진 staking holder에만 가능하게 되는 것입니다 
