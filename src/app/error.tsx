"use client";

import { useEffect } from "react";
import { AlertTriangle } from "lucide-react";
export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		// You can send this error to a logging service like Sentry here
		console.error("App Error:", error);
	}, [error]);

	return (
		<div className='min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6'>
			<div className='bg-white shadow-xl rounded-2xl p-8 max-w-md text-center space-y-4'>
				<div className='flex justify-center'>
					{/* <img className='mix-blend-multiply' src={pika} alt='pika-tiired' /> */}
					<AlertTriangle className='h-12 w-12 text-red-500' />
				</div>
				<h2 className='text-2xl font-bold text-gray-800'>Something went wrong</h2>
				<p className='text-gray-600'>
					We encountered an unexpected error. Please try again, or contact support if the problem
					persists.
				</p>

				{/* Optional: show error digest for debugging */}
				{error.digest && <p className='text-xs text-gray-400 mt-2'>Error ID: {error.digest}</p>}

				<button
					onClick={reset}
					className='mt-4 inline-block bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200'>
					Try again
				</button>
			</div>
		</div>
	);
}
