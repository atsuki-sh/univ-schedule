<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CourseController;

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

Route::get('/', function () {
    return view('home');});

// スケジュール画面
Route::get('/{user_id}/schedule', [CourseController::class, 'index'])->name('course.index');
// コース作成
Route::post('/{user_id}/schedule/create', [CourseController::class, 'create'])->name('course.create');
// コース編集
Route::post('/{user_id}/schedule/update', [CourseController::class, 'update'])->name('course.update');
//コース削除
Route::post('/{user_id}/schedule/delete', [CourseController::class, 'delete'])->name('course.delete');

Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
    return view('dashboard');
})->name('dashboard');
