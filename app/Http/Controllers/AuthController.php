<?php

namespace App\Http\Controllers;

use App\Http\Requests\Auth\StartRequest;
use App\Jobs\Auth\ResolveByLink;
use App\Jobs\Auth\Start;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Response;

class AuthController extends Controller
{
    public function show(Request $request): Response
    {
        return inertia('Auth/Show');
    }

    public function start(StartRequest $request)
    {
        Start::dispatch($request->email);

        return back();
    }

    public function resolveByLink(Request $request)
    {
        $user = User::find($request->u);
        ResolveByLink::dispatchSync($user);

        return redirect()->route('dashboard');
    }

    public function resolveByCode(Request $request)
    {
        // Resolve using code
    }
}
