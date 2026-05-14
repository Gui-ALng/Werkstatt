<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'werkstatt')->name('werkstatt');

// Support legacy tests and helpers expecting a `home` named route.
// Provide a `/home` route that renders the same Inertia page as `/`.
Route::inertia('/home', 'werkstatt')->name('home');

// Public portfolio pages
Route::inertia('/about', 'about')->name('about');
Route::inertia('/projects', 'projects')->name('projects');

// Project detail pages (placeholders)
Route::inertia('/projects/projeto-alpha', 'projects/projeto-alpha')->name('projects.alpha');
Route::inertia('/projects/projeto-beta', 'projects/projeto-beta')->name('projects.beta');
Route::inertia('/projects/projeto-gamma', 'projects/projeto-gamma')->name('projects.gamma');
