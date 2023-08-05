<?php

namespace App\Http\Repositories;

use App\Models\Section;
use App\Events\ExamCreatedEvent;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

/**
 * ExamStoreRepo
 */
class ExamStoreRepo
{
    /**
     * @param Request $request
     * @return void
     */
    public function store(Request $request) : void
    {
        $exam = Auth::user()->exams()->create($request->only(
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

        event(new ExamCreatedEvent($exam));
        $exam->questions()->sync($questions);
    }
}
