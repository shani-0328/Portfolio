<?php

namespace App\Http\Controllers;

use App\Models\Portfolio;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class PortfolioController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $portfolio = Portfolio::first();
        
        // Parse social_media JSON if it's still a string
        if ($portfolio && is_string($portfolio->social_media)) {
            try {
                $portfolio->social_media = json_decode($portfolio->social_media, true);
            } catch (\Exception $e) {
                Log::error('Error decoding social_media JSON: ' . $e->getMessage());
            }
        }
        
        return response()->json($portfolio);
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
            'title' => 'nullable|string|max:255',
            'bio' => 'nullable|string',
            'email' => 'nullable|email|max:255',
            'phone' => 'nullable|string|max:20',
            'address' => 'nullable|string|max:255',
            'photo' => 'nullable|string|max:255',
            'resume' => 'nullable|string|max:255',
            'social_media' => 'nullable|array',
        ]);
        
        $portfolio = Portfolio::create($validated);
        
        return response()->json($portfolio, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Portfolio $portfolio)
    {
        return response()->json($portfolio);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Portfolio $portfolio)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Portfolio $portfolio)
    {
        $validated = $request->validate([
            'name' => 'sometimes|required|string|max:255',
            'title' => 'nullable|string|max:255',
            'bio' => 'nullable|string',
            'email' => 'nullable|email|max:255',
            'phone' => 'nullable|string|max:20',
            'address' => 'nullable|string|max:255',
            'photo' => 'nullable|string|max:255',
            'resume' => 'nullable|string|max:255',
            'social_media' => 'nullable|array',
        ]);
        
        $portfolio->update($validated);
        
        return response()->json($portfolio);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Portfolio $portfolio)
    {
        //
    }
}
