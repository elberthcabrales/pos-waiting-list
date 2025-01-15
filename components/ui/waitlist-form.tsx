'use client';

import { useState } from 'react';
import { toast } from 'sonner';

export function WaitlistForm() {
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      toast.success('Thanks for joining the waitlist!');
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error('Error:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to submit email');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 max-w-md">
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        required
        className="flex-1 px-4 py-2 rounded-lg border border-white/10 bg-white/5 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        disabled={isLoading}
        className="px-6 py-2 bg-gradient-to-r from-blue-500 to-violet-500 rounded-lg font-medium text-white hover:opacity-90 transition-opacity disabled:opacity-50"
      >
        {isLoading ? 'Joining...' : 'Join Waitlist'}
      </button>
    </form>
  );
}