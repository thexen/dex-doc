# **TEA MVAULT**
- - -

## **Address**
* ADDRESS
- - -

## **Events & Functions**

!!! note
    *onlyMember*   
     - Team wallet의 구성원들만 호출 가능   
    *onlyQuorum*   
    - Team wallet의 구성원들이 승인한 경우만 호출 가능   
    *onlySelf*   
    - Team wallet contract에서 public으로 호출 만 가능

=== "Inquery Functions(7)"

    * **balanceOf**   
    Team wallet 모든 자산(Dex에 등록 되어 있는)을 조회 한다
    ``` java
        function balanceOf() 
            public view onlyMember returns( TTokenBalance[] memory )
    ```   
        Returns     

        | *Return*    | *Description*                          |
        | :--------- | :------------------------------------ |
        | TTokenBalance | 토큰 별 balance |

        ``` C++
        struct TTokenBalance {
            address token;
            uint256 balance;
        }
        ```

    - - -
    * **balanceOf**   
    Team wallet의 특정 자산을 조회 한다
    ``` java
        function balanceOf( IERC20 token ) public view onlyMember returns( uint256 )
    ```   
        Parameters     
           
        | *Param*      | *Description*                          |
        | :--------- | :------------------------------------ |
        | token | ERC20 token contract address |

        Returns     

        | *Return*    | *Description*                          |
        | :--------- | :------------------------------------ |
        | uint256 | token의 balance |

    - - -
    * **inqueryDoc**   
    안건의 내용을 조회 한다
    ``` java
        function inqueryDoc( uint256 docId ) 
                public view returns( TDraftInqueryeDoc memory doc )
    ```   
        Parameters     
           
        | *Param*      | *Description*                          |
        | :--------- | :------------------------------------ |
        | docId | 조회 할 안건 문서 Id |

        Returns     

        | *Return*    | *Description*                          |
        | :--------- | :------------------------------------ |
        | TDraftInqueryeDoc | 안건 내용 |

        ``` C++
        struct TDraftInqueryeDoc {
            address                         drafter;        //기안자
            uint256                         draftDate;      //작성 날짜
            uint8                           approval;       //동의한 member 수
            bool                            invoked;        //transaction 호출 여부
            uint256                         invokeDate;     //처리된 날짜
            bytes                           callData;       //안건 처리를 위해 호출 될 Data
            bool                            success;        //안건 처리 성공 여부
            bytes                           returnData;     //안건 처리 결과
        }
        ```
 
    - - -
    * **inqueryNumberOfMember**   
    Team wallet의 구성원 수를 조회 한다
    ``` java
         function inqueryNumberOfMember() public view returns( uint256 )
    ```   

        Returns     

        | *Return*    | *Description*                          |
        | :--------- | :------------------------------------ |
        | uint256 | 구성원 수 |

    - - -
    * **inqueryMember**   
    Team wallet의 구성원을 조회 한다
    ``` java
        function inqueryMember( uint256 idx ) public view returns( address )
    ```   
        Parameters     
           
        | *Param*      | *Description*                          |
        | :--------- | :------------------------------------ |
        | idx | 조회 할 구성원 number |

        Returns     

        | *Return*    | *Description*                          |
        | :--------- | :------------------------------------ |
        | address | 구성원 address |

    - - -
    * **inqueryCurrentId**   
    가장 최근에 제안된 안건의 Id를 조회 한다
    ``` java
        function inqueryCurrentId() public view returns( uint256 )
    ```   
        Returns     

        | *Return*    | *Description*                          |
        | :--------- | :------------------------------------ |
        | address | 최근에 제안된 안건 문서 Id |

    - - -
    * **inqueryCallData**   
    안건 문서의 callData 내용을 조회 한다   
    어떤 내용으로 안건을 제안하였는지 확인 할 수 있다
    ``` java
        function inqueryCallData( uint256 docId ) public view returns( string memory, bytes memory ) 
    ```   
        Parameters     
           
        | *Param*      | *Description*                          |
        | :--------- | :------------------------------------ |
        | docId | 제안한 문서 Id |

        Returns     

        | *Return*    | *Description*                          |
        | :--------- | :------------------------------------ |
        | string | 상정된 안건이 가결 되면 호출 될 function 이름 |
        | bytes | 호출 할 function의 encoded 된 parameter  |


=== "Invoke Functions(7)"

    * **approval**   
    Team wallet에서 처리 가능한 안건을 승인 한다
    ``` java
        function approval( uint256 docId ) public onlyMember noReentrancy 
    ```   
        Parameters     
           
        | *Param*      | *Description*                          |
        | :--------- | :------------------------------------ |
        | docId | 안건 문서 Id |

        !!! info
            기안 작성 일로 부터 3일 이내에 승인 되어야 하고 집행 되어야 한다  
    - - -
    * **proposalJoin**   
    Team wallet에 가입 신청을 한다
    ``` java
        function proposalJoin() public noReentrancy returns( uint256 )
    ```   
        Returns     

        | *Return*    | *Description*                          |
        | :--------- | :------------------------------------ |
        | uint256 | 안건 문서 Id |

        !!! info
            invokeByDraftDocId function을 호출하여 안건을 처리하면   
            function join( address newMember ) public onlySelf이 호출된다

    - - -
    * **proposalExpulsion**   
    Team wallet의 구성원 제명 안건을 제안 한다
    ``` java
        function proposalExpulsion( address member ) 
                    public onlyMember noReentrancy returns( uint256 ) 
    ```   
        Parameters     
           
        | *Param*      | *Description*                          |
        | :--------- | :------------------------------------ |
        | member | 제명 할 구성원의 adrress |

        Returns     

        | *Return*    | *Description*                          |
        | :--------- | :------------------------------------ |
        | uint256 | 안건 문서 Id |

        !!! info
            invokeByDraftDocId function을 호출하여 안건을 처리하면      
            function expulsion( address member ) public onlySelf이 호출된다

    - - -
    * **proposalWithdrawal**   
    Team wallet이 소유한 모든 자산의 인출을 신청한다
    ``` java
        function proposalWithdrawal() public onlyMember noReentrancy returns( uint256 )
    ```   
        Returns     

        | *Return*    | *Description*                          |
        | :--------- | :------------------------------------ |
        | uint256 | 안건 문서 Id |

        !!! info
            invokeByDraftDocId function을 호출하여 안건을 처리하면      
            function withdrawal( address to ) public onlySelf이 호출된다

    - - -
    * **proposalWithdrawal**   
    Team wallet이 소유한 특정 자산의 모든 총액 인출을 신청한다
    ``` java
        function proposalWithdrawal( address token ) 
                    public onlyMember noReentrancy returns( uint256 )
    ```   
        Parameters     
           
        | *Param*      | *Description*                          |
        | :--------- | :------------------------------------ |
        | token | 인출을 신청할 token contract address |
        
        Returns     

        | *Return*    | *Description*                          |
        | :--------- | :------------------------------------ |
        | uint256 | 안건 문서 Id |

        !!! info
            invokeByDraftDocId function을 호출하여 안건을 처리하면      
            function withdrawal( address token, address to ) public onlySelf이 호출된다

    - - -
    * **proposalWithdrawal**   
    Team wallet이 소유한 특정 자산의 amount 만큼 인출을 신청한다
    ``` java
        function proposalWithdrawal( address token
                                , uint256 amount ) 
                            public onlyMember noReentrancy returns( uint256 )
    ```   
        Parameters     
           
        | *Param*      | *Description*                          |
        | :--------- | :------------------------------------ |
        | token | 인출을 신청할 token contract address |
        | amount | 인출 할 token의 수량 |

        Returns     

        | *Return*    | *Description*                          |
        | :--------- | :------------------------------------ |
        | uint256 | 안건 문서 Id |

        !!! info
            invokeByDraftDocId function을 호출하여 안건을 처리하면      
            function withdrawal( address token, address to, uint256 amount ) public onlySelf이 호출된다

    - - -
    * **invokeByDraftDocId**   
    안건을 집행한다
    ``` java
        function invokeByDraftDocId( uint256 docId ) public onlyQuorum(docId)
    ```   
        Parameters     
           
        | *Param*      | *Description*                          |
        | :--------- | :------------------------------------ |
        | docId | 처리 할 안건 문서 Id |

        !!! info
            기안 작성 일로 부터 3일 이내에 승인 되어야 하고 집행 되어야 한다  
    
=== "Events"
    1. Sed sagittis eleifend rutrum
    2. Donec vitae suscipit est
    3. Nulla tempor lobortis orci

