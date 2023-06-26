<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class MissionController extends Controller
{
    public function store(Request $request): JsonResponse
    {
        $request->validate([
            'url' => 'required|url',
        ]);

        return response()->json(['success' => 'yes']);
    }
}
