<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Question;
use Illuminate\Http\Request;
use Inertia\Response;


class QuestionController extends Controller
{
    /**
     * @return Response
     */
    public function index() : Response
    {
        return Inertia::render('Question/Index', [
            'questions' =>  Question::paginate(10),
        ]);
    }
}
