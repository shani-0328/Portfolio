<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Portfolio;
use App\Models\Project;
use App\Models\Skill;
use App\Models\Contact;

class AdminController extends Controller
{
    /**
     * Show the admin dashboard.
     */
    public function dashboard()
    {
        $portfolioCount = Portfolio::count();
        $projectCount = Project::count();
        $skillCount = Skill::count();
        $contactCount = Contact::count();
        
        $latestProjects = Project::latest()->take(5)->get();
        $latestContacts = Contact::latest()->take(5)->get();
        
        return response()->json([
            'counts' => [
                'portfolio' => $portfolioCount,
                'projects' => $projectCount,
                'skills' => $skillCount,
                'contacts' => $contactCount,
            ],
            'latest' => [
                'projects' => $latestProjects,
                'contacts' => $latestContacts,
            ]
        ]);
    }
    
    /**
     * Login the admin user.
     */
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);
        
        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();
            
            $user = Auth::user();
            $token = $user->createToken('admin-token')->plainTextToken;
            
            return response()->json([
                'user' => $user,
                'token' => $token,
            ]);
        }
        
        return response()->json([
            'message' => 'Invalid credentials'
        ], 401);
    }
    
    /**
     * Logout the admin user.
     */
    public function logout(Request $request)
    {
        Auth::logout();
        
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        
        return response()->json([
            'message' => 'Logged out successfully'
        ]);
    }
}
