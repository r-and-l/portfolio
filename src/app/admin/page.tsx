'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ProjectEditor } from '../../components/admin/ProjectEditor';
import type { ProjectFormData } from '../../components/admin/ProjectEditor';
import { useProjectsStore } from '../../store/projectsStore';
import { SkillsEditor } from '../../components/admin/SkillsEditor';
import { HeroSettingsEditor } from '../../components/admin/HeroSettingsEditor';
import { SocialsEditor } from '../../components/admin/SocialsEditor';

const PIN_CODE = '1234';

export default function AdminPage() {
  const [pin, setPin] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');
  
  const [editingProject, setEditingProject] = useState<ProjectFormData | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [activeTab, setActiveTab] = useState<'projects' | 'skills' | 'hero' | 'socials'>('projects');
  
  const router = useRouter();
  
  const { projects, fetchProjects, addProject, updateProject, deleteProject, isLoading } = useProjectsStore();

  useEffect(() => {
    const savedAuth = sessionStorage.getItem('adminAuth');
    if (savedAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      fetchProjects();
    }
  }, [isAuthenticated, fetchProjects]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === PIN_CODE) {
      setIsAuthenticated(true);
      sessionStorage.setItem('adminAuth', 'true');
      setError('');
    } else {
      setError('Invalid PIN code');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('adminAuth');
    router.push('/');
  };

  const handleSave = async (project: ProjectFormData) => {
    if (isCreating) {
      await addProject(project);
    } else if (project.id) {
      await updateProject(project.id, project);
    }
    setIsCreating(false);
    setEditingProject(null);
  };

  const handleEdit = (project: ProjectFormData) => {
    setEditingProject(project);
    setIsCreating(false);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      await deleteProject(id);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-zinc-950 p-4 transition-colors">
        <div className="w-full max-w-md bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl rounded-2xl shadow-xl border border-zinc-200 dark:border-zinc-800 p-8">
          <h2 className="text-2xl font-bold mb-6 text-zinc-900 dark:text-white text-center">Admin Panel</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="pin" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                Enter PIN
              </label>
              <input
                type="password"
                id="pin"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                className="w-full px-4 py-2 bg-zinc-50/50 dark:bg-zinc-950/50 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 text-zinc-900 dark:text-white"
                placeholder="****"
                autoFocus
              />
            </div>
            {error && <p className="text-red-500 text-sm font-medium">{error}</p>}
            <button
              type="submit"
              className="w-full py-2 px-4 bg-brand-600 hover:bg-brand-700 text-white rounded-lg font-medium transition-colors shadow-brand-500/25 shadow-lg"
            >
              Login
            </button>
            <button
              type="button"
              onClick={() => router.push('/')}
              className="w-full py-2 px-4 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-900 dark:text-white rounded-lg font-medium transition-colors mt-2"
            >
              Back to Site
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex transition-colors">
      {/* Sidebar */}
      <div className="w-64 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md border-r border-zinc-200 dark:border-zinc-800 p-6 flex flex-col shrink-0">
        <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-8">Admin Dashboard</h2>
        <nav className="flex-1 space-y-2">
          <button 
            onClick={() => setActiveTab('projects')}
            className={`w-full text-left px-4 py-2 rounded-lg font-medium transition-colors ${activeTab === 'projects' ? 'bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400' : 'text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800'}`}
          >
            Projects
          </button>
          <button 
            onClick={() => setActiveTab('skills')}
            className={`w-full text-left px-4 py-2 rounded-lg font-medium transition-colors ${activeTab === 'skills' ? 'bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400' : 'text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800'}`}
          >
            Skills
          </button>
          <button 
            onClick={() => setActiveTab('hero')}
            className={`w-full text-left px-4 py-2 rounded-lg font-medium transition-colors ${activeTab === 'hero' ? 'bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400' : 'text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800'}`}
          >
            Hero Settings
          </button>
          <button 
            onClick={() => setActiveTab('socials')}
            className={`w-full text-left px-4 py-2 rounded-lg font-medium transition-colors ${activeTab === 'socials' ? 'bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400' : 'text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800'}`}
          >
            Social Links
          </button>
        </nav>
        <button
          onClick={() => router.push('/')}
          className="mt-auto px-4 py-2 text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors text-left font-medium"
        >
          &larr; Back to Portfolio
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto relative">
        <div className="max-w-4xl mx-auto">
          {activeTab === 'projects' && (
            isCreating || editingProject ? (
            <ProjectEditor
              project={editingProject || undefined}
              onSave={handleSave}
              onCancel={() => {
                setIsCreating(false);
                setEditingProject(null);
              }}
            />
          ) : (
            <>
              <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">Projects</h1>
                <button 
                  onClick={() => setIsCreating(true)}
                  className="px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white rounded-lg font-medium transition-colors shadow-brand-500/25 shadow-lg"
                >
                  + New Project
                </button>
              </div>
              
              {isLoading ? (
                <div className="text-center py-12 text-zinc-500 dark:text-zinc-400">Loading...</div>
              ) : (
                <div className="grid gap-4">
                  {projects.map((project) => (
                    <div 
                      key={project.id} 
                      className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 rounded-xl p-4 flex items-center justify-between shadow-sm transition-all hover:shadow-md"
                    >
                      <div className="flex items-center gap-4">
                        {project.image && (
                          <img src={project.image} alt="Thumbnail" className="w-16 h-12 object-cover rounded bg-zinc-100 dark:bg-zinc-800" />
                        )}
                        <div>
                          <h3 className="font-bold text-zinc-900 dark:text-white">
                            {project.title.ru} / {project.title.en}
                          </h3>
                          <div className="flex gap-2 mt-1">
                            {project.tags.map(tag => (
                              <span key={tag} className="text-[10px] uppercase font-bold bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 px-2 py-0.5 rounded">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEdit(project)}
                          className="px-3 py-1.5 text-sm bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 rounded font-medium transition-colors"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => project.id && handleDelete(project.id)}
                          className="px-3 py-1.5 text-sm bg-red-50 hover:bg-red-100 dark:bg-red-500/10 dark:hover:bg-red-500/20 text-red-600 dark:text-red-400 rounded font-medium transition-colors"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                  
                  {projects.length === 0 && (
                    <div className="text-center py-12 bg-white/50 dark:bg-zinc-900/50 rounded-xl border border-zinc-200 border-dashed dark:border-zinc-800 text-zinc-500 dark:text-zinc-400">
                      No projects found. Create one!
                    </div>
                  )}
                </div>
              )}
            </>
          ))}
          {activeTab === 'skills' && <SkillsEditor />}
          {activeTab === 'hero' && <HeroSettingsEditor />}
          {activeTab === 'socials' && <SocialsEditor />}
        </div>
      </div>
    </div>
  );
}
