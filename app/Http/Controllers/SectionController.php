<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;
use App\Models\Section;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;
use App\Http\Requests\SectionStoreRequest;
use App\Http\Requests\SectionUpdateRequest;


class SectionController extends Controller
{
    /**
     * @return Response
     */
    public function index(): Response
    {
        return Inertia::render('Section/Index', [
            'sections' => Section::paginate(10)
        ]);
    }


     /**
     * @return Response
     */
    public function create(): Response
    {
        return Inertia::render('Section/Create');
    }

     /**
     * @param SectionStoreRequest $request
     * @return RedirectResponse
     */
    public function store(SectionStoreRequest $request): RedirectResponse
    {
        Auth::user()->sections()->create($request->validated());
        return Redirect::route('sections.index')->with('success', 'Section created.');
    }

    /**
     * @param Section $section
     * @return Response
     */
    public function edit(Section $section): Response
    {
        return Inertia::render('Section/Edit', [
            'section' => $section
        ]);
    }


    /**
     * @param SectionUpdateRequest $request
     * @param Section $section
     * @return RedirectResponse
     */
    public function update(SectionUpdateRequest $request, Section $section): RedirectResponse
    {
        $section->update($request->validated());
        return Redirect::route('sections.index')->with('success', 'Section updated.');
    }


    public function destroy(Section $section):RedirectResponse
    {
        $section->delete();
        return Redirect::route('sections.index')->with('success', 'Section deleted.');

    } 

   

}
