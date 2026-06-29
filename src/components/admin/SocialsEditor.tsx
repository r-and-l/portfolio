import React, { useState, useEffect } from 'react';

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  isActive: boolean;
}

export function SocialsEditor() {
  const [socials, setSocials] = useState<SocialLink[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isCreating, setIsCreating] = useState(false);
  const [editingSocial, setEditingSocial] = useState<SocialLink | null>(null);

  // Form State
  const [platform, setPlatform] = useState('');
  const [url, setUrl] = useState('');
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    fetchSocials();
  }, []);

  const fetchSocials = async () => {
    try {
      const res = await fetch('/api/socials');
      if (res.ok) {
        const data = await res.json();
        setSocials(data);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (social: SocialLink) => {
    setEditingSocial(social);
    setPlatform(social.platform);
    setUrl(social.url);
    setIsActive(social.isActive);
    setIsCreating(false);
  };

  const handleCreateNew = () => {
    setEditingSocial(null);
    setPlatform('');
    setUrl('');
    setIsActive(true);
    setIsCreating(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = { platform, url, isActive };
    
    try {
      if (isCreating) {
        await fetch('/api/socials', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      } else if (editingSocial) {
        await fetch(`/api/socials/${editingSocial.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      }
      setIsCreating(false);
      setEditingSocial(null);
      fetchSocials();
    } catch (e) {
      console.error(e);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this social link?')) {
      try {
        await fetch(`/api/socials/${id}`, { method: 'DELETE' });
        fetchSocials();
      } catch (e) {
        console.error(e);
      }
    }
  };

  if (isCreating || editingSocial) {
    return (
      <div className="bg-white dark:bg-zinc-900 rounded-xl p-6 border border-zinc-200 dark:border-zinc-800 shadow-sm max-w-lg mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-zinc-900 dark:text-white">
          {isCreating ? 'Add Social Link' : 'Edit Social Link'}
        </h2>
        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1 dark:text-zinc-300">Platform (e.g. github, telegram)</label>
            <input required value={platform} onChange={e => setPlatform(e.target.value)} className="w-full px-4 py-2 rounded-lg bg-zinc-50 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 dark:text-zinc-300">URL</label>
            <input required type="url" value={url} onChange={e => setUrl(e.target.value)} className="w-full px-4 py-2 rounded-lg bg-zinc-50 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500" />
          </div>
          <div className="flex items-center gap-2 pt-2">
            <input type="checkbox" id="isActive" checked={isActive} onChange={e => setIsActive(e.target.checked)} className="w-4 h-4 text-brand-600 bg-zinc-100 border-zinc-300 rounded focus:ring-brand-500 dark:focus:ring-brand-600 dark:ring-offset-zinc-800 focus:ring-2 dark:bg-zinc-700 dark:border-zinc-600" />
            <label htmlFor="isActive" className="text-sm font-medium text-zinc-900 dark:text-zinc-300">Active (visible on site)</label>
          </div>
          <div className="flex gap-4 pt-4">
            <button type="submit" className="px-6 py-2 bg-brand-600 text-white rounded-lg font-medium hover:bg-brand-700">Save</button>
            <button type="button" onClick={() => { setIsCreating(false); setEditingSocial(null); }} className="px-6 py-2 bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-lg font-medium hover:bg-zinc-300 dark:hover:bg-zinc-700">Cancel</button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">Social Links</h1>
        <button onClick={handleCreateNew} className="px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white rounded-lg font-medium transition-colors shadow-brand-500/25 shadow-lg">
          + Add Link
        </button>
      </div>
      
      {isLoading ? (
        <div className="text-center py-12 text-zinc-500">Loading...</div>
      ) : (
        <div className="grid gap-4 max-w-3xl">
          {socials.map(social => (
            <div key={social.id} className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 rounded-xl p-4 flex items-center justify-between shadow-sm">
              <div>
                <h3 className="font-bold text-zinc-900 dark:text-white capitalize flex items-center gap-2">
                  {social.platform}
                  {!social.isActive && <span className="text-xs bg-red-100 text-red-600 dark:bg-red-500/20 dark:text-red-400 px-2 py-0.5 rounded font-bold">HIDDEN</span>}
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">{social.url}</p>
              </div>
              <div className="flex gap-2">
                <button onClick={() => handleEdit(social)} className="px-3 py-1.5 text-sm bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 rounded font-medium transition-colors">Edit</button>
                <button onClick={() => handleDelete(social.id)} className="px-3 py-1.5 text-sm bg-red-50 hover:bg-red-100 dark:bg-red-500/10 dark:hover:bg-red-500/20 text-red-600 dark:text-red-400 rounded font-medium transition-colors">Delete</button>
              </div>
            </div>
          ))}
          {socials.length === 0 && (
            <div className="text-center py-12 bg-white/50 dark:bg-zinc-900/50 rounded-xl border border-zinc-200 border-dashed dark:border-zinc-800 text-zinc-500">No social links found. Add one!</div>
          )}
        </div>
      )}
    </div>
  );
}
