"use client";

import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

export default function Dashboard({ params }: { params: { role: string } }) {
    const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL as string,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
    );
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const getUserInfo = async () => {
        const { data: { user } } = await supabase.auth.getUser();
        setUser(user);
        };
        getUserInfo();
    }, []);

    const handleLogout = async () => {
        await supabase.auth.signOut();
        window.location.href = "/";
    };

return (
    <div className="p-4">
        <h2>{params.role.toUpperCase()} Dashboard</h2>
        {user && (
            <>
            <p>Email: {user.email}</p>
            <p>User ID: {user.id}</p>
            </>
        )}
        <button onClick={handleLogout}>Logout</button>
    </div>
    );
}
