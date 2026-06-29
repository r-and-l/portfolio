import React, { useState, useEffect } from 'react';

export function HeroSettingsEditor() {
  const [settings, setSettings] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Form State
  const [heading1Ru, setHeading1Ru] = useState('');
  const [heading1En, setHeading1En] = useState('');
  const [heading2Ru, setHeading2Ru] = useState('');
  const [heading2En, setHeading2En] = useState('');
  const [heading3Ru, setHeading3Ru] = useState('');
  const [heading3En, setHeading3En] = useState('');
  const [descRu, setDescRu] = useState('');
  const [descEn, setDescEn] = useState('');
  const [badges, setBadges] = useState('');

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const res = await fetch('/api/hero');
      if (res.ok) {
        const data = await res.json();
        setSettings(data);
        setHeading1Ru(data.heading1Ru || '');
        setHeading1En(data.heading1En || '');
        setHeading2Ru(data.heading2Ru || '');
        setHeading2En(data.heading2En || '');
        setHeading3Ru(data.heading3Ru || '');
        setHeading3En(data.heading3En || '');
        setDescRu(data.descRu || '');
        setDescEn(data.descEn || '');
        setBadges(Array.isArray(data.badges) ? data.badges.join(', ') : '');
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    const badgesArray = badges.split(',').map(b => b.trim()).filter(Boolean);
    const payload = {
      heading1Ru, heading1En,
      heading2Ru, heading2En,
      heading3Ru, heading3En,
      descRu, descEn,
      badges: badgesArray
    };
    
    try {
      await fetch('/api/hero', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      alert('Settings saved successfully!');
    } catch (e) {
      console.error(e);
      alert('Failed to save settings.');
    }
  };

  if (isLoading) {
    return <div className="text-center py-12 text-zinc-500">Loading...</div>;
  }

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-xl p-6 border border-zinc-200 dark:border-zinc-800 shadow-sm max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-zinc-900 dark:text-white">Hero Settings</h2>
      <form onSubmit={handleSave} className="space-y-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-4">
            <h3 className="font-bold text-brand-600 dark:text-brand-400 border-b border-zinc-200 dark:border-zinc-800 pb-2">Russian (RU)</h3>
            <div>
              <label className="block text-sm font-medium mb-1 dark:text-zinc-300">Heading 1 (e.g. Привет! Я)</label>
              <input value={heading1Ru} onChange={e => setHeading1Ru(e.target.value)} className="w-full px-4 py-2 rounded-lg bg-zinc-50 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 dark:text-zinc-300">Heading 2 (e.g. Фронтенд Разработчик)</label>
              <input value={heading2Ru} onChange={e => setHeading2Ru(e.target.value)} className="w-full px-4 py-2 rounded-lg bg-zinc-50 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 dark:text-zinc-300">Heading 3 (e.g. Создаю интерфейсы)</label>
              <input value={heading3Ru} onChange={e => setHeading3Ru(e.target.value)} className="w-full px-4 py-2 rounded-lg bg-zinc-50 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 dark:text-zinc-300">Description</label>
              <textarea value={descRu} onChange={e => setDescRu(e.target.value)} className="w-full px-4 py-2 rounded-lg bg-zinc-50 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 h-24" />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-brand-600 dark:text-brand-400 border-b border-zinc-200 dark:border-zinc-800 pb-2">English (EN)</h3>
            <div>
              <label className="block text-sm font-medium mb-1 dark:text-zinc-300">Heading 1 (e.g. Hello! I am)</label>
              <input value={heading1En} onChange={e => setHeading1En(e.target.value)} className="w-full px-4 py-2 rounded-lg bg-zinc-50 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 dark:text-zinc-300">Heading 2 (e.g. Frontend Developer)</label>
              <input value={heading2En} onChange={e => setHeading2En(e.target.value)} className="w-full px-4 py-2 rounded-lg bg-zinc-50 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 dark:text-zinc-300">Heading 3 (e.g. Building interfaces)</label>
              <input value={heading3En} onChange={e => setHeading3En(e.target.value)} className="w-full px-4 py-2 rounded-lg bg-zinc-50 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 dark:text-zinc-300">Description</label>
              <textarea value={descEn} onChange={e => setDescEn(e.target.value)} className="w-full px-4 py-2 rounded-lg bg-zinc-50 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 h-24" />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 dark:text-zinc-300">Badges (comma separated)</label>
          <input value={badges} onChange={e => setBadges(e.target.value)} placeholder="React, TypeScript, Tailwind" className="w-full px-4 py-2 rounded-lg bg-zinc-50 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500" />
        </div>

        <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
          <button type="submit" className="px-8 py-3 bg-brand-600 text-white rounded-lg font-bold hover:bg-brand-700 w-full md:w-auto shadow-brand-500/25 shadow-lg">Save Hero Settings</button>
        </div>
      </form>
    </div>
  );
}
