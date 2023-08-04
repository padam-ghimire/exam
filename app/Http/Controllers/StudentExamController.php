<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class StudentExamController extends Controller
{
     /**
     * Handle the incoming request.
     */
    public function __invoke(Student $student,Exam $exam)
    {
        if($quiz->expiry_date->lt(Carbon::now())){
            return Redirect::route("home")->with('message','Exam is already expired');
        };
        $studentQuiz = StudentExamResult::where('student_id',$student->id)
                        ->where('exam_id',$quiz->id)
                        ->first();
        if($studentQuiz){
            return Redirect::route("home")->with('message','You have already attempted the exam.');
        }
        return Inertia::render('Student/StartExam',[
            'exam' => $quiz->load("questions.answers:id,question_id,option"),
            'student' => $student
        ]);
    }
}
