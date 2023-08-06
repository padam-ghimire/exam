<?php

namespace App\Http\Repositories;

use App\Models\Exam;
use App\Models\Section;
use Illuminate\Http\Request;

/**
 * ExamUpdateRepo
 */
class ExamUpdateRepo
{
    /**
     * @param Request $request
     * @param Exam $exam
     * @return void
     */
    public function update(Request $request, Exam $exam)
    {
        $exam->update($request->only(
            "title","description","expiry_date","total_time"
        ));
        $questions = [];
        foreach($request->sections as $section_id)
        {
            $section = Section::with(['questions' => function($q){
                $q->inRandomOrder()->take(5);
            }])->find($section_id);

            $questions = array_merge($section->questions->pluck('id')->toArray(),$questions);
        }

        $exam->questions()->sync($questions);
    }
}
