<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\NetController;
use App\Http\Controllers\AccController;
use Illuminate\Http\Request;
use App\Models\User;
use Faker\Guesser\Name;

Route::get('/', function () {
    return Inertia::render('homepage');
})->name('home');


Route::get('/signup/regform', [AccController::class, 'create'])->name('signup.regform');
Route::get('/signup/plansign', [AccController::class, 'index'])->name('signup.plansign');
Route::get('/signup/planform', [AccController::class, 'planform'])->name('signup.planform');


Route::get('/plan', function () {
    return Inertia::render('plan', [
        'email' => request('email')
    ]);
})->name('plan');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
