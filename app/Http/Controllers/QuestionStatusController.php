<?php

namespace App\Http\Controllers;

use App\Models\Question;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;

class QuestionStatusController extends Controller
{
    public function __invoke(Question $question) : RedirectResponse
    {
        $question->update([
            'is_active' =>  !$question->is_active
        ]);
        return Redirect::route('questions.index')->with('success', 'Question updated.');
    }

}
