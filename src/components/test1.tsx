import React from "react";

function test1() {
  function function2() {
    console.log("this is from main branch");
    console.log("this is new line in main branch");
  }
  return <div>test1</div>;
}

export default test1;
