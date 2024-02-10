/*
 * Created on Fri Feb 09 2024
 * Author : Abdellah Oulahyane
 * Copyright (c) 2024
 */

import { AboutComponent } from './components/about.js';
import { HomeComponent } from './components/home.js';
import Framework from './js/framework.mjs';
















// Initialize the framework
const app = new Framework();






app.route('/',      HomeComponent);
app.route('/about/{id}', AboutComponent);


app.start();

