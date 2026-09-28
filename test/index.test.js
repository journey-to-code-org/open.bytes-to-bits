import test from "node:test";import assert from "node:assert/strict";import{bytesToBits,bitsToBytes,convertDataSize}from"../src/index.js";
test("bytes bits",()=>{assert.equal(bytesToBits(2),16);assert.equal(bitsToBytes(16),2);});
test("MB to bits",()=>assert.equal(convertDataSize(1,"mbyte","mbit"),8));
test("MiB to bytes",()=>assert.equal(convertDataSize(1,"mebibyte","byte"),1048576));
