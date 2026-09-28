import { useState, useEffect } from 'react';

export type PortfolioStatus = 'open' | 'busy' | 'closed';

export function usePortfolioStatus() {
  const [status, setStatus] = useState<PortfolioStatus>('open');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const res = await fetch('/api/status');
        const data = await res.json();
        if (data.status && ['open', 'busy', 'closed'].includes(data.status)) {
          setStatus(data.status);
        }
      } catch (error) {
        console.error('Failed to fetch portfolio status', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStatus();

    const interval = setInterval(fetchStatus, 12000);

    return () => clearInterval(interval);
  }, []);

  return { status, loading };
}
