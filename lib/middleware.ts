import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export async function middleware(req: NextRequest) {
    const res = NextResponse.next();
    const supabase = createServerComponentClient({ cookies });

    const { data: { user } } = await supabase.auth.getUser();

    const url = req.nextUrl.clone();

    if (!user) {
        if (!url.pathname.startsWith('/login')) {
        url.pathname = '/login';
        return NextResponse.redirect(url);
        }
        return res;
    }

    const role = user.user_metadata?.role;

    if (!role && !url.pathname.startsWith('/select-role')) {
        url.pathname = '/select-role';
        return NextResponse.redirect(url);
    }

    if (role === 'intern' && url.pathname === '/') {
        url.pathname = '/dashboard/intern';
        return NextResponse.redirect(url);
    }

    if (role === 'startup' && url.pathname === '/') {
        url.pathname = '/dashboard/startup';
        return NextResponse.redirect(url);
    }

    return res;
}

export const config = {
    matcher: ['/', '/dashboard/:path*'],
};
