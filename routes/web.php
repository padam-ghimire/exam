<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\ExamController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SectionController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\ExamSubmitController;
use App\Http\Controllers\StudentExamController;
use App\Http\Controllers\SubscriptionController;
use App\Http\Controllers\SectionStatusController;
use App\Http\Controllers\QuestionStatusController;

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

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//     ]);
// });

Route::get('/', HomeController::class)->name('home');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/student/{student}/exam/{exam}', StudentExamController::class)->name('student.exam')->middleware('signed');
Route::post('/student/{student}/exam/{exam}/submit', ExamSubmitController::class)->name('student.exam.submit');




Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');



        //Sections
    Route::resource("sections",SectionController::class);
    Route::get("sections/status/{section}",SectionStatusController::class)->name("sections.status");

    //exams
    Route::resource("exams",ExamController::class);
    //questions
    Route::resource("questions",QuestionController::class);
    Route::get("questions/status/{question}",QuestionStatusController::class)->name("questions.status");

    //students
    Route::resource("students",StudentController::class);
    Route::get("stundents/subscription/{student}",SubscriptionController::class)->name("students.subscription");


});

require __DIR__.'/auth.php';
