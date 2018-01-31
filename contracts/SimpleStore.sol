pragma solidity ^0.4.2;

contract SimpleStore {
uint storeData;

function set(uint x){
  storeData = x;
}

function get() constant returns (uint retVal){
return storeData;
}
}

/*
1. Write Contract Code.
2. Write Unit Tests for it.
3. Add it to the migrations
4. import it to React
*/
