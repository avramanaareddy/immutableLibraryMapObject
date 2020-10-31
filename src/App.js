import React from "react";
import "./styles.css";
import {Map } from 'immutable'
export default function App() {
let book = Map({title:'Bhagavan Ravana Brahma'});

let book2 = func1(book);
let isPublished = book2.get('isPublished')
console.log(isPublished)
let jsObject=book2.toJS();
  return (
    <div className="App">
      <h1>Immutable Objects creation</h1>
      <h3>Immutable way book name:: {book.get('title')}</h3>
    <h3>When you set property value it becomes new object:</h3>
<p>
    <h3> book title : {book2.get('title')}</h3>
    <h3> is published : {JSON.stringify(isPublished)}</h3>
  </p>
  <p>
    Java Script based object:
<br/>
<h3> Book Name:: {jsObject.title}</h3>
<h3> Published::  {JSON.stringify(jsObject.isPublished)}</h3>
  </p>
    </div>
  );
};
const  func1=b=>b.set("isPublished", true);
 
