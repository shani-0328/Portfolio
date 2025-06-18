<?php

namespace App\Http\Controllers;

use App\Models\Skill;
use Illuminate\Http\Request;

class SkillController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $skills = Skill::orderBy('category')->orderBy('order')->get();
        return response()->json($skills);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'proficiency' => 'integer|min:0|max:100',
            'icon' => 'nullable|string|max:255',
            'category' => 'nullable|string|max:100',
            'order' => 'integer',
        ]);
        
        $skill = Skill::create($validated);
        
        return response()->json($skill, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Skill $skill)
    {
        return response()->json($skill);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Skill $skill)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Skill $skill)
    {
        $validated = $request->validate([
            'name' => 'sometimes|required|string|max:255',
            'proficiency' => 'integer|min:0|max:100',
            'icon' => 'nullable|string|max:255',
            'category' => 'nullable|string|max:100',
            'order' => 'integer',
        ]);
        
        $skill->update($validated);
        
        return response()->json($skill);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Skill $skill)
    {
        $skill->delete();
        return response()->json(null, 204);
    }
}
