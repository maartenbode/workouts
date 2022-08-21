import React from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/inertia-react';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 px-2 sm:px-0 sm:pt-0 bg-cream">
            <div>
                <Link href="/">
                    <strong className="text-2xl">💪 Workouts</strong>
                </Link>
            </div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-6 bg-white border-cream-dark border border-b-2 overflow-hidden rounded-lg">
                {children}
            </div>
        </div>
    );
}
