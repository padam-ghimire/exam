<?php

namespace App\Http\Controllers;

use App\Models\Exam;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Section;
use Illuminate\Http\Request;
use App\Http\Requests\ExamStoreRequest;
use App\Http\Repositories\ExamStoreRepo;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;

class ExamController extends Controller
{

    private ExamStoreRepo $examStoreRepo;

    public function __construct(ExamStoreRepo $examStoreRepo)
    {
        $this->examStoreRepo = $examStoreRepo;
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



}
