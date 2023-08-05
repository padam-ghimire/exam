<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Exam;
use App\Models\Student;
use App\Models\ExamResult;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
class StudentExamController extends Controller
{
     /**
     * Handle the incoming request.
     */
    public function __invoke(Student $student,Exam $exam)
    {
        if($exam->expiry_date->lt(Carbon::now())){
            return Redirect::route("home")->with('message','Exam is already expired');
        };
        $studentExam = ExamResult::where('student_id',$student->id)
                        ->where('exam_id',$exam->id)
                        ->first();
        if($studentExam){
            return Redirect::route("home")->with('message','You have already attempted the exam.');
        }
        return Inertia::render('Student/StartExam',[
            'exam' => $exam->load("questions.answers:id,question_id,option"),
            'student' => $student
        ]);
    }
}
