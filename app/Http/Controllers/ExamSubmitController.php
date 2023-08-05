<?php

namespace App\Http\Controllers;

use App\Models\Question;
use App\Models\Exam;
use App\Models\Student;
use App\Models\ExamResult;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
class ExamSubmitController extends Controller
{
   /**
     * Handle the incoming request.
     */
    public function __invoke(Student $student, Exam $exam,Request $request)
    {
        $correctAnswerCount = 0;

        $exam = $exam->load("questions.answers");

        foreach($request->results as $result){
            $question = $exam->questions->where('id',$result['question_id'])->first();
            $correctAnswers = $question->answers->where("is_checked")->pluck("id")->toArray();
            $studentAnswers = $result['answers'];
            $status = empty(array_diff($correctAnswers,$studentAnswers));
            if($status){ $correctAnswerCount++;}
        }

        $percentage = round($correctAnswerCount / $exam->questions->count() * 100,2);

        ExamResult::create([
            'student_id' => $student->id,
            'exam_id' => $exam->id,
            'percentage' => $percentage
        ]);

        return Redirect::route('home')->with('success', 'Exam Completed');
    }
}
