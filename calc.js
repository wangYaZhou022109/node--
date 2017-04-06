'use strict';
const path=require('path');
const addObj=require(path.join(__dirname,add.js));
const subStringFunc=require(path.join(__dirname,subString.js));
module.exports={
    addFunc:addObj.addFunc,
    name:addObj.name,
    subString:subString
}