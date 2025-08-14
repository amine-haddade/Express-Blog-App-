import React, { useEffect, useMemo } from 'react';
import { TrendingUp, Layers, Clock, Calendar, PieChart, Activity } from 'lucide-react';
import { useAppSelector } from '../hooks/useAppSelector';
import { selectAllPosts, selectLoading, GetPosts } from '../store/slices/blogSlice';
import { useAppDispatch } from '../hooks/useAppDispatch';

const Insights: React.FC = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(selectAllPosts);
  const loading = useAppSelector(selectLoading);
  const { isDark } = useAppSelector(state => state.ui);

  useEffect(() => {
    if (!loading && posts.length === 0) {
      dispatch(GetPosts());
    }
  }, [dispatch, loading, posts.length]);

  const stats = useMemo(() => {
    const total = posts.length;
    const byCategory = new Map<string, number>();
    let totalRead = 0;
    let latestDate = '';

    posts.forEach(p => {
      const cat = p.category || 'Uncategorized';
      byCategory.set(cat, (byCategory.get(cat) || 0) + 1);
      totalRead += p.readTime || 0;
      if (!latestDate || (p.date && p.date > latestDate)) latestDate = p.date;
    });

    const avgRead = total > 0 ? Math.round(totalRead / total) : 0;
    const topCategories = [...byCategory.entries()].sort((a, b) => b[1] - a[1]).slice(0, 5);

    const recentPosts = [...posts]
      .sort((a, b) => (b.date || '').localeCompare(a.date || ''))
      .slice(0, 5);

    return { total, avgRead, latestDate, topCategories, recentPosts };
  }, [posts]);

  return (
    <div className={`pt-16 min-h-screen ${isDark ? 'bg-slate-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Header */}
        <div className="mb-8">
          <h1 className={`text-4xl font-black mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Insights
          </h1>
          <p className={`${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            Un aperçu moderne des performances de votre blog
          </p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className={`${isDark ? 'bg-slate-800' : 'bg-white'} rounded-2xl p-6 shadow-xl border ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
            <div className="flex items-center justify-between">
              <div>
                <p className={`${isDark ? 'text-slate-400' : 'text-slate-500'} text-sm`}>Articles publiés</p>
                <p className={`text-3xl font-extrabold ${isDark ? 'text-white' : 'text-slate-900'}`}>{stats.total}</p>
              </div>
              <Layers className={`w-10 h-10 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
            </div>
          </div>

          <div className={`${isDark ? 'bg-slate-800' : 'bg-white'} rounded-2xl p-6 shadow-xl border ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
            <div className="flex items-center justify-between">
              <div>
                <p className={`${isDark ? 'text-slate-400' : 'text-slate-500'} text-sm`}>Temps de lecture moyen</p>
                <p className={`text-3xl font-extrabold ${isDark ? 'text-white' : 'text-slate-900'}`}>{stats.avgRead} min</p>
              </div>
              <Clock className={`w-10 h-10 ${isDark ? 'text-orange-400' : 'text-orange-600'}`} />
            </div>
          </div>

          <div className={`${isDark ? 'bg-slate-800' : 'bg-white'} rounded-2xl p-6 shadow-xl border ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
            <div className="flex items-center justify-between">
              <div>
                <p className={`${isDark ? 'text-slate-400' : 'text-slate-500'} text-sm`}>Dernière publication</p>
                <p className={`text-3xl font-extrabold ${isDark ? 'text-white' : 'text-slate-900'}`}>{stats.latestDate || '-'}</p>
              </div>
              <Calendar className={`w-10 h-10 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`} />
            </div>
          </div>

          <div className={`${isDark ? 'bg-slate-800' : 'bg-white'} rounded-2xl p-6 shadow-xl border ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
            <div className="flex items-center justify-between">
              <div>
                <p className={`${isDark ? 'text-slate-400' : 'text-slate-500'} text-sm`}>Catégorie la plus active</p>
                <p className={`text-3xl font-extrabold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {stats.topCategories[0]?.[0] || '-'}
                </p>
              </div>
              <TrendingUp className={`w-10 h-10 ${isDark ? 'text-fuchsia-400' : 'text-fuchsia-600'}`} />
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Top categories */}
          <div className={`lg:col-span-1 ${isDark ? 'bg-slate-800' : 'bg-white'} rounded-2xl p-6 shadow-xl border ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>Top catégories</h3>
              <PieChart className={`${isDark ? 'text-slate-300' : 'text-slate-500'}`} />
            </div>
            <div className="space-y-3">
              {stats.topCategories.length === 0 && (
                <p className={`${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Aucune donnée</p>
              )}
              {stats.topCategories.map(([name, count]) => (
                <div key={name} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500" />
                    <span className={`${isDark ? 'text-slate-200' : 'text-slate-800'}`}>{name}</span>
                  </div>
                  <span className={`${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{count}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent posts */}
          <div className={`lg:col-span-2 ${isDark ? 'bg-slate-800' : 'bg-white'} rounded-2xl p-6 shadow-xl border ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>Publications récentes</h3>
              <Activity className={`${isDark ? 'text-slate-300' : 'text-slate-500'}`} />
            </div>
            {loading ? (
              <p className={`${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Chargement...</p>
            ) : (
              <div className="space-y-4">
                {stats.recentPosts.map(p => (
                  <div key={p.id} className={`p-4 rounded-xl border ${isDark ? 'border-slate-700 hover:bg-slate-700/50' : 'border-slate-200 hover:bg-slate-50'} transition` }>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>{p.title}</p>
                        <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{p.category} • {p.readTime} min • {p.date}</p>
                      </div>
                      {p.image && (
                        <img src={p.image} alt={p.title} className="w-12 h-12 object-cover rounded-lg" />
                      )}
                    </div>
                  </div>
                ))}
                {stats.recentPosts.length === 0 && (
                  <p className={`${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Aucune publication pour le moment</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;
