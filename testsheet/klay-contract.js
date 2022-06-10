/*




*/
const Caver = require("caver-js");
const { OpenWalletFromPrivateKey, OpenWalletFromKeystoreV3, OpenWalletFromMnemonic, OpenHDWallet } = require( '../wallet/import.js' );
const { KlaySendTransaction } = require( "../wallet/sendtx.js")
const { AbiEncode } = require ( '../utils/abi.js' )
const { DiscoveryMiddleRoute } = require ( '../routing/swapHelpRouter.js' )

async function klayExpectedReceipt( from, amount, to, route ) {

  const caver = new Caver('https://kaikas.baobab.klaytn.net:8651')

  try{
    var data = await AbiEncode( "inqueryExpectedReceipt(address,uint256,address,address[])"
                , from
                , amount
                , to
                , route );
    const val = await caver.klay.call({
      to: '0x0fE5322F52D13Fe39194d8d1B3a7F0559ea9F4CB', 
      data: data,});
    var dec = caver.klay.abi.decodeParameter( 'uint256', val );
    return dec;
  } catch( e ) {
    console.log(e)
  } finally {
  }

}

async function klayBalanceOf( token, sender ) {

  const caver = new Caver('https://kaikas.baobab.klaytn.net:8651')

  try{
    var data = await AbiEncode( "balanceOf(address)", sender );
    const val = await caver.klay.call({
      to: token, 
      data: data,
    });
    var dec = caver.klay.abi.decodeParameter( 'uint256', val );
    console.log( token + " - "  + dec )
  } catch( e ) {
    console.log(e)
  } finally {
  }

}

async function exchange(from, amount, to, minimum, route ) {

  //Open Wallet
  const wallet          = await OpenWalletFromPrivateKey("0x69908c50c12b5e7aa84fe245a107431ea666ceb650b31a55c28e9bf2987d74c3");
  const contractAddress = '0x0fE5322F52D13Fe39194d8d1B3a7F0559ea9F4CB'

  ///Encoding ABI 
  var data = await AbiEncode( "exchange(address,uint256,address,uint256,address[])"
            , from
            , amount
            , to
            , minimum
            , route );

  var receipt = await KlaySendTransaction( {
    provider: {
      url: 'https://kaikas.baobab.klaytn.net:8651',
    },
    wallet: wallet,
    rawTransaction: {
      to:     contractAddress,
      value:  0,
      gas:    21000000,
      input:  data,
    }
  })
  //console.log(receipt)
    
}


//klayBalanceOf( "0x21CB1A627380BAdAeF180e1346479d242aca90D3", "0xFf8EF2b0054Edf1A722186CE62BBE4323951e99B" );
//klayBalanceOf( "0x950a8536720a9571EE73689a26Ed6A4a8fC94A3e", "0xFf8EF2b0054Edf1A722186CE62BBE4323951e99B" );

async function main() {
  var middleRoutes  = DiscoveryMiddleRoute( "0x21CB1A627380BAdAeF180e1346479d242aca90D3"
                                    , "0x658a3a6065E16FE42D8a51CC00b0870e850909F5"
                                    , 5 );
  console.log( middleRoutes );
  
  var expectedValue = await klayExpectedReceipt( "0x21CB1A627380BAdAeF180e1346479d242aca90D3"
                    , 1000000000 
                    , "0x658a3a6065E16FE42D8a51CC00b0870e850909F5"
                    , middleRoutes );
    console.log( expectedValue );                                        
  
  await exchange( "0x21CB1A627380BAdAeF180e1346479d242aca90D3"
        , 1000000000
        , "0x658a3a6065E16FE42D8a51CC00b0870e850909F5"
        , 19999601
        , middleRoutes );

}

//main();      


async function dailyStat( swapPool, date ) {

  const caver = new Caver('https://kaikas.baobab.klaytn.net:8651')

  try{
    
    var data = await AbiEncode( "inqueryDailyStat(address,uint256,uint256)"
                      , swapPool //"0xFf8EF2b0054Edf1A722186CE62BBE4323951e99B"
                      , date //(Date.now()/1000).toFixed(0)
                      , 1 );
    const val = await caver.klay.call({
      to: "0xCADEE27aB0e882E7A4ab2Cf5cB763Fd5fA72AB93", 
      data: data,
    });
    
    //1654763078
    //1654676693
    console.log( (Date.now()/1000).toFixed(0));

    var decoded = caver.klay.abi.decodeParameters(['uint256','uint256','uint256','uint256','uint256','uint256','uint256'], val );    
                              
    console.log( decoded )
    console.log( JSON.stringify( decoded, null, 2 ) );

  } catch( e ) {
    console.log(e)
  } finally {
  }

}
dailyStat( "0xFf8EF2b0054Edf1A722186CE62BBE4323951e99B", (Date.now()/1000).toFixed(0) );

//testKlayCallFromContract();

//exchange();