import React, { useState, useEffect } from 'react';

export interface Skill {
  id: string;
  name: string;
  category: string;
  icon?: string;
  proficiency?: number;
}

export function SkillsEditor() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isCreating, setIsCreating] = useState(false);
  const [editingSkill, setEditingSkill] = useState<Skill | null>(null);

  // Form State
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [icon, setIcon] = useState('');
  const [proficiency, setProficiency] = useState<number>(0);

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    try {
      const res = await fetch('/api/skills');
      if (res.ok) {
        const data = await res.json();
        setSkills(data);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (skill: Skill) => {
    setEditingSkill(skill);
    setName(skill.name);
    setCategory(skill.category);
    setIcon(skill.icon || '');
    setProficiency(skill.proficiency || 0);
    setIsCreating(false);
  };

  const handleCreateNew = () => {
    setEditingSkill(null);
    setName('');
    setCategory('');
    setIcon('');
    setProficiency(0);
    setIsCreating(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = { name, category, icon, proficiency: Number(proficiency) };
    
    try {
      if (isCreating) {
        await fetch('/api/skills', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      } else if (editingSkill) {
        await fetch(`/api/skills/${editingSkill.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      }
      setIsCreating(false);
      setEditingSkill(null);
      fetchSkills();
    } catch (e) {
      console.error(e);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this skill?')) {
      try {
        await fetch(`/api/skills/${id}`, { method: 'DELETE' });
        fetchSkills();
      } catch (e) {
        console.error(e);
      }
    }
  };

  if (isCreating || editingSkill) {
    return (
      <div className="bg-white dark:bg-zinc-900 rounded-xl p-6 border border-zinc-200 dark:border-zinc-800 shadow-sm">
        <h2 className="text-2xl font-bold mb-6 text-zinc-900 dark:text-white">
          {isCreating ? 'Create Skill' : 'Edit Skill'}
        </h2>
        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1 dark:text-zinc-300">Name</label>
            <input required value={name} onChange={e => setName(e.target.value)} className="w-full px-4 py-2 rounded-lg bg-zinc-50 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500" placeholder="e.g. React" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 dark:text-zinc-300">Category</label>
            <input required value={category} onChange={e => setCategory(e.target.value)} className="w-full px-4 py-2 rounded-lg bg-zinc-50 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500" placeholder="e.g. Frontend" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 dark:text-zinc-300">Icon (URL or class)</label>
            <input value={icon} onChange={e => setIcon(e.target.value)} className="w-full px-4 py-2 rounded-lg bg-zinc-50 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 dark:text-zinc-300">Proficiency (0-100)</label>
            <input type="number" min="0" max="100" value={proficiency} onChange={e => setProficiency(Number(e.target.value))} className="w-full px-4 py-2 rounded-lg bg-zinc-50 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500" />
          </div>
          <div className="flex gap-4 pt-4">
            <button type="submit" className="px-6 py-2 bg-brand-600 text-white rounded-lg font-medium hover:bg-brand-700">Save</button>
            <button type="button" onClick={() => { setIsCreating(false); setEditingSkill(null); }} className="px-6 py-2 bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-lg font-medium hover:bg-zinc-300 dark:hover:bg-zinc-700">Cancel</button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">Skills</h1>
        <button onClick={handleCreateNew} className="px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white rounded-lg font-medium transition-colors shadow-brand-500/25 shadow-lg">
          + New Skill
        </button>
      </div>
      
      {isLoading ? (
        <div className="text-center py-12 text-zinc-500">Loading...</div>
      ) : (
        <div className="grid gap-4">
          {skills.map(skill => (
            <div key={skill.id} className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 rounded-xl p-4 flex items-center justify-between shadow-sm">
              <div>
                <h3 className="font-bold text-zinc-900 dark:text-white">{skill.name}</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">{skill.category} • {skill.proficiency}%</p>
              </div>
              <div className="flex gap-2">
                <button onClick={() => handleEdit(skill)} className="px-3 py-1.5 text-sm bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 rounded font-medium transition-colors">Edit</button>
                <button onClick={() => handleDelete(skill.id)} className="px-3 py-1.5 text-sm bg-red-50 hover:bg-red-100 dark:bg-red-500/10 dark:hover:bg-red-500/20 text-red-600 dark:text-red-400 rounded font-medium transition-colors">Delete</button>
              </div>
            </div>
          ))}
          {skills.length === 0 && (
            <div className="text-center py-12 bg-white/50 dark:bg-zinc-900/50 rounded-xl border border-zinc-200 border-dashed dark:border-zinc-800 text-zinc-500">No skills found. Create one!</div>
          )}
        </div>
      )}
    </div>
  );
}
