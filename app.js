/*
 * Created on Fri Feb 09 2024
 * Author : Abdellah Oulahyane
 * Copyright (c) 2024
 */

import { AboutComponent } from './components/about.js';
import { HomeComponent } from './components/home.js';
import Framework, { useState } from './js/framework.mjs';
















// Initialize the framework
const app = new Framework();




const [id, setId] = useState(1234);
console.log('id, setId:', id, setId)
setId(1234);
console.log('id, setId:', id, setId)

app.route('/',      HomeComponent);
app.route('/about/{id}', AboutComponent);


app.start();

