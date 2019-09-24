
// const express = require('express');
// const React = require('react');
// const renderToString = require('react-dom/server').renderToString;
// const Home = require('./client/component/Home').default;

import express from 'express';
import renderer from './helpers/renderer';

const app = express();

app.use(express.static('public'));
app.get('*',(req,res) => {
    res.send(renderer(req));
})

app.listen(3000 , ()=>{
    console.log("Listing at prot number :3000")
})