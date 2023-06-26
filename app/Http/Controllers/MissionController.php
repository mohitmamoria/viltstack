<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Response;

class MissionController extends Controller
{
    public function index(Request $request): Response
    {
        return inertia('Mission/Index');
    }

    public function create(Request $request): Response
    {
        return inertia('Mission/Create');
    }
}
