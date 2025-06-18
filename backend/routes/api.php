<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PortfolioController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\SkillController;
use App\Http\Controllers\ContactController;

// API routes don't need CSRF protection - Laravel automatically adds the 'api' prefix
Route::middleware('api')->group(function () {
    // Portfolio routes
    Route::apiResource('portfolio', PortfolioController::class);
    
    // Project routes
    Route::apiResource('projects', ProjectController::class);
    
    // Skill routes
    Route::apiResource('skills', SkillController::class);
    
    // Contact routes
    Route::apiResource('contacts', ContactController::class);
    
    // Admin routes that require authentication
    Route::prefix('admin')->group(function () {
        Route::post('login', [App\Http\Controllers\Admin\AdminController::class, 'login']);
        Route::middleware('auth:sanctum')->group(function () {
            Route::get('dashboard', [App\Http\Controllers\Admin\AdminController::class, 'dashboard']);
            Route::post('logout', [App\Http\Controllers\Admin\AdminController::class, 'logout']);
        });
    });
});
