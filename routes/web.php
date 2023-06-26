<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\MissionController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::group([
    'middleware' => 'auth',
], function () {
    Route::get('/', DashboardController::class)->name('dashboard');

    /**
     * Missions
     */
    Route::get('missions', [MissionController::class, 'index'])->name('missions.index');
    Route::get('missions/create', [MissionController::class, 'create'])->name('missions.create');
    Route::post('missions', [MissionController::class, 'store'])->name('missions.store');
});
