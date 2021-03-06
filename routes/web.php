<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your welcomelication. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return inertia('index');
});

Route::get('/jaillogs', function () {
    return inertia('jaillogs/index');
});

Route::get('/prompter', function () {
    return inertia('prompter/index');
});
