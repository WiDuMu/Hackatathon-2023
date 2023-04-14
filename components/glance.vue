<template>
    <div>
        <div class="box">
            <div class="triangle red"></div>
        </div>
        <div class="box">
            <img src="">
        </div>
    </div>
</template>
<style>
.green {
    color: green;
}
.red {
    color: red;
}
.box {
    border: 1px grey solid;
    min-height: 100px;
    min-width: 100px;
    border-radius: 5px;
}
.triangle  {
  width: 0; 
  height: 0; 
  border-left: 5rem solid transparent;
  border-right: 5rem solid transparent;
  border-bottom: 5rem solid red;
}
</style>