<?php

namespace App\Http\Controllers;

use App\Models\Exam;
use Inertia\Inertia;
use Illuminate\Http\Request;

class HomeController extends Controller
{

    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        return Inertia::render('Home/Index',[
            'exams' => Exam::active()->whereHas("questions")->with("questions")->get()
        ]);
    }

}
