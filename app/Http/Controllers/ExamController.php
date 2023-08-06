<?php

namespace App\Http\Controllers;

use App\Models\Exam;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Section;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use App\Http\Repositories\ExamUpdateRepo;
use App\Http\Requests\ExamStoreRequest;
use App\Http\Repositories\ExamStoreRepo;
use App\Http\Requests\ExamUpdateRequest;
use Illuminate\Support\Facades\Redirect;

class ExamController extends Controller
{

    private ExamStoreRepo $examStoreRepo;
    private ExamUpdateRepo $examUpdateRepo;

    public function __construct(ExamStoreRepo $examStoreRepo,ExamUpdateRepo $examUpdateRepo)
    {
        $this->examStoreRepo = $examStoreRepo;
        $this->examUpdateRepo = $examUpdateRepo;
    }

    /**
     * @return Response
     */
    public function index() : Response
    {
        return Inertia::render('Exam/Index', [
            'exams' =>  Exam::paginate(10)
        ]);
    }


     /**
     * @return Response
     */
    public function create() : Response
    {
        return Inertia::render('Exam/Create',[
            'sections' => Section::select("id","title")->get()
        ]);
    }


    /**
     * @param ExamStoreRequest $request
     * @return RedirectResponse
     */
    public function store(ExamStoreRequest $request) : RedirectResponse
    {
        $this->examStoreRepo->store($request);
        return Redirect::route('exams.index')->with('success', 'Exam created.');
    }


    /**
     * @param Exam $exam
     * @return Response
     */
    public function edit(Exam $exam) : Response
    {
        return Inertia::render('Exam/Edit',[
            'exam' => $exam,
            'sections' => Section::select("id","title")->get()
        ]);
    }


    /**
     * @param ExamUpdateRequest $request
     * @param Exam $exam
     * @return RedirectResponse
     */
    public function update(ExamUpdateRequest $request, Exam $exam) : RedirectResponse
    {
        $this->examUpdateRepo->update($request,$exam);
        return Redirect::route('exams.index')->with('success', 'Exam updated.');
    }


    /**
     * @param Exam $exam
     * @return RedirectResponse
     */
    public function destroy(Exam $exam)
    {
        $exam->delete();
        return Redirect::route('exams.index')->with('success', 'Exam Deleted.');
    }



}
