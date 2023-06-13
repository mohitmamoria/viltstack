<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

Route::get('/', [AuthController::class, 'show'])->name('auth.show');
Route::post('start', [AuthController::class, 'start'])->name('auth.start');
Route::get('resolve', [AuthController::class, 'resolveByLink'])->name('auth.resolve-by-link')->middleware('signed');
Route::post('resolve', [AuthController::class, 'resolveByCode'])->name('auth.resolve-by-code');
