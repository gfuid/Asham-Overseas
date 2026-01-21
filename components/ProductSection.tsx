
import React, { useState, useMemo } from 'react';
import { PRODUCTS, CATEGORIES, MATERIALS, USAGES } from '../constants';
import { ArrowUpRight, Filter, X, Check, ChevronRight } from 'lucide-react';

const ProductSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeMaterial, setActiveMaterial] = useState("All");
  const [activeUsage, setActiveUsage] = useState("All");
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    // 1. First, define the raw filtered list based on UI selections
    const matches = PRODUCTS.filter(product => {
      const categoryMatch = activeCategory === "All" || product.category === activeCategory;
      const materialMatch = activeMaterial === "All" || product.material === activeMaterial;
      const usageMatch = activeUsage === "All" || (product.usage && product.usage.includes(activeUsage));

      // 2. EXCLUDE "Pure Cotton Deewan Set" explicitly
      const isExcluded = product.name === "Pure Cotton Deewan Set";

      return categoryMatch && materialMatch && usageMatch && !isExcluded;
    });

    // 3. REMOVE DUPLICATES (If any products have the exact same name)
    return matches.filter((value, index, self) =>
      index === self.findIndex((t) => t.name === value.name)
    );
  }, [activeCategory, activeMaterial, activeUsage]);



  const clearFilters = () => {
    setActiveCategory("All");
    setActiveMaterial("All");
    setActiveUsage("All");
  };

  const hasActiveFilters = activeCategory !== "All" || activeMaterial !== "All" || activeUsage !== "All";

  return (
    <section id="products" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-slate-900 tracking-tight">Signature Collections</h2>
            <p className="text-slate-500 max-w-xl text-lg leading-relaxed">
              Industrial grade linens and designer upholstery from Panipat's leading manufacturer.
            </p>
          </div>

          <button
            onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all border-2 ${isFilterMenuOpen ? 'bg-indigo-600 border-indigo-600 text-white shadow-lg' : 'bg-white border-slate-200 text-slate-700 hover:border-indigo-600'}`}
          >
            <Filter size={20} />
            {isFilterMenuOpen ? 'Close Filters' : 'Filter by Material & Use'}
            {hasActiveFilters && !isFilterMenuOpen && (
              <span className="flex items-center justify-center w-5 h-5 bg-indigo-600 text-white text-[10px] rounded-full ml-1">!</span>
            )}
          </button>
        </div>

        {/* Filter Panel */}
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isFilterMenuOpen ? 'max-h-[800px] mb-12 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="bg-slate-50 rounded-3xl p-6 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-10 border border-slate-100 shadow-inner">
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Category</h4>
              <div className="flex flex-wrap gap-2">
                {["All", ...CATEGORIES].map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${activeCategory === cat ? 'bg-indigo-600 text-white shadow-md' : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'}`}
                  >
                    {activeCategory === cat && <Check size={14} />}
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Material</h4>
              <div className="flex flex-wrap gap-2">
                {["All", ...MATERIALS].map(mat => (
                  <button
                    key={mat}
                    onClick={() => setActiveMaterial(mat)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${activeMaterial === mat ? 'bg-indigo-600 text-white shadow-md' : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'}`}
                  >
                    {activeMaterial === mat && <Check size={14} />}
                    {mat}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">End Use</h4>
              <div className="flex flex-wrap gap-2">
                {["All", ...USAGES].map(use => (
                  <button
                    key={use}
                    onClick={() => setActiveUsage(use)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${activeUsage === use ? 'bg-indigo-600 text-white shadow-md' : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'}`}
                  >
                    {activeUsage === use && <Check size={14} />}
                    {use}
                  </button>
                ))}
              </div>
            </div>

            {hasActiveFilters && (
              <div className="md:col-span-3 flex justify-end">
                <button
                  onClick={clearFilters}
                  className="text-indigo-600 text-sm font-bold flex items-center gap-1 hover:text-indigo-700 hover:underline transition-all"
                >
                  <X size={14} /> Reset all selections
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group flex flex-col h-full">
                <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden mb-6 bg-slate-100 shadow-xl shadow-slate-200/50 border border-slate-100">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop';
                    }}
                  />

                  <div className="absolute top-5 left-5 flex flex-wrap gap-2">
                    {product.material && (
                      <span className="bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black text-indigo-700 shadow-xl uppercase tracking-widest">
                        {product.material}
                      </span>
                    )}
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 duration-300">
                    <div className="bg-white p-4 rounded-2xl text-indigo-600 shadow-2xl flex items-center gap-2 font-bold">
                      Details <ArrowUpRight size={20} />
                    </div>
                  </div>
                </div>

                <div className="flex-grow space-y-3 px-2">
                  <div className="flex justify-between items-center">
                    <span className="text-[11px] font-bold text-indigo-600 uppercase tracking-[0.2em]">{product.category}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 leading-tight tracking-tight group-hover:text-indigo-600 transition-colors">{product.name}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">{product.description}</p>

                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    {product.usage && product.usage.map(u => (
                      <span key={u} className="text-[10px] font-bold bg-slate-100 text-slate-500 px-2.5 py-1 rounded-full border border-slate-200/50 uppercase tracking-wider">
                        {u}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-28 bg-slate-50 rounded-[40px] border-2 border-dashed border-slate-200">
            <div className="mb-6 text-slate-300 flex justify-center">
              <Filter size={80} strokeWidth={1.5} />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-3">No matching products</h3>
            <p className="text-slate-500 mb-10 text-lg max-w-md mx-auto">We couldn't find anything matching your current filters. Try resetting them to see our full range.</p>
            <button
              onClick={clearFilters}
              className="bg-indigo-600 text-white px-10 py-4 rounded-2xl font-bold hover:bg-indigo-700 shadow-lg shadow-indigo-200 transition-all active:scale-95"
            >
              Reset All Filters
            </button>
          </div>
        )}

        <div className="mt-28 text-center">
          <a href="#contact" className="inline-flex items-center gap-4 bg-slate-900 text-white px-12 py-5 rounded-3xl font-bold hover:bg-slate-800 transition-all group shadow-2xl shadow-slate-200">
            Enquire for Wholesale Catalog
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
