<x-mail::message>
    # Verify to get inside

    You can verify by click this link

    <x-mail::button :url="$link">
        Verify
    </x-mail::button>

    Thanks,<br>
    {{ config('app.name') }}
</x-mail::message>
