import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Calendar, Clock, User, ArrowRight, ArrowLeft, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { BLOG_POSTS } from '../data';
import { BlogPost, BlogCategory } from '../types';

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory | 'All'>('All');
  const [activePost, setActivePost] = useState<BlogPost | null>(null);
  
  // Local comments state so submitting comments actually works in the UI!
  const [postsState, setPostsState] = useState<BlogPost[]>(BLOG_POSTS);
  const [commentAuthor, setCommentAuthor] = useState('');
  const [commentText, setCommentText] = useState('');
  const [commentSuccess, setCommentSuccess] = useState(false);

  // Newsletter local state
  const [email, setEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const categories: (BlogCategory | 'All')[] = [
    'All',
    'Travel Tips',
    'Nusa Penida Guide',
    'Coffee',
    'Food',
    'Lifestyle',
    'Events',
    'Restaurant News'
  ];

  const handleNewsletterSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setNewsletterSuccess(true);
      setTimeout(() => {
        setEmail('');
        setNewsletterSuccess(false);
      }, 3000);
    }
  };

  // Add Comment Logic
  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentAuthor.trim() || !commentText.trim() || !activePost) return;

    const newComment = {
      id: `c-new-${Date.now()}`,
      author: commentAuthor,
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150', // neutral avatar
      date: 'Just now',
      content: commentText
    };

    setPostsState((prevPosts) =>
      prevPosts.map((p) => {
        if (p.id === activePost.id) {
          const updatedComments = p.comments ? [newComment, ...p.comments] : [newComment];
          // Also update currently viewed active post in local state
          setActivePost({ ...p, comments: updatedComments });
          return { ...p, comments: updatedComments };
        }
        return p;
      })
    );

    setCommentAuthor('');
    setCommentText('');
    setCommentSuccess(true);
    setTimeout(() => setCommentSuccess(false), 3000);
  };

  // Filter Blog Posts
  const filteredPosts = useMemo(() => {
    let posts = [...postsState];

    // 1. Search Query
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      posts = posts.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.content.toLowerCase().includes(query)
      );
    }

    // 2. Category Filter
    if (selectedCategory !== 'All') {
      posts = posts.filter((post) => post.category === selectedCategory);
    }

    return posts;
  }, [searchQuery, selectedCategory, postsState]);

  // Determine Featured Article (the first matching one)
  const featuredPost = useMemo(() => {
    if (filteredPosts.length > 0) {
      return filteredPosts[0]; // First post in current filter
    }
    return null;
  }, [filteredPosts]);

  // Feed posts (excluding the featured one)
  const feedPosts = useMemo(() => {
    if (filteredPosts.length > 1) {
      return filteredPosts.slice(1);
    }
    return [];
  }, [filteredPosts]);

  // Related Articles (filtered by category, excluding active article)
  const relatedPosts = useMemo(() => {
    if (!activePost) return [];
    return postsState
      .filter((p) => p.category === activePost.category && p.id !== activePost.id)
      .slice(0, 2);
  }, [activePost, postsState]);

  // Handle detailed view trigger
  const handleViewPost = (post: BlogPost) => {
    setActivePost(post);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToFeed = () => {
    setActivePost(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="blog-page" className="w-full bg-[#F8F6F2]">
      {/* 1. HERO (Only if not reading a post) */}
      {!activePost && (
        <section id="blog-hero" className="relative py-28 md:py-36 bg-[#6A5843] text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1200"
              alt="Notebook and coffee blog"
              className="w-full h-full object-cover opacity-15 filter brightness-50"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-[#6A5843]/85" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-3"
            >
              <span className="font-mono text-xs tracking-widest text-[#B89B72] uppercase font-bold">The Alily Chronicles</span>
              <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-[#F8F6F2]">
                Our Travel & Lifestyle Blog
              </h1>
              <p className="text-sm md:text-base text-[#F8F6F2]/80 max-w-xl mx-auto font-sans">
                Read guidebooks to Nusa Penida cliffs, barista secrets, sustainable food farming, and island sunset secrets.
              </p>
            </motion.div>
          </div>
        </section>
      )}

      {/* 2. BLOG CONTENT CONTROLLER */}
      <div id="blog-body-container" className="py-16 max-w-7xl mx-auto px-6 md:px-12">
        <AnimatePresence mode="wait">
          {activePost ? (
            /* ================= ARTICLE READING MODE ================= */
            <motion.article
              key="reading-mode"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto space-y-12"
            >
              {/* Back Navigation */}
              <button
                id="blog-back-btn"
                onClick={handleBackToFeed}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#6A5843] hover:text-[#B89B72] bg-white px-5 py-3 rounded-full border border-[#6A5843]/5 shadow-sm transition-all cursor-pointer"
              >
                <ArrowLeft size={14} /> Back to Blog Feed
              </button>

              {/* Cover Image & Metadata */}
              <div className="space-y-6">
                <span className="font-mono text-[10px] tracking-widest uppercase text-[#B89B72] bg-[#6A5843]/10 px-3 py-1.5 rounded-full font-bold">
                  {activePost.category}
                </span>
                
                <h1 className="font-serif text-3xl md:text-5xl font-bold text-[#6A5843] leading-tight">
                  {activePost.title}
                </h1>

                {/* Author card row */}
                <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-b border-[#6A5843]/10 py-4">
                  <div className="flex items-center space-x-3">
                    <img
                      src={activePost.author.avatar}
                      alt={activePost.author.name}
                      className="w-11 h-11 rounded-full object-cover border border-[#6A5843]/10"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <p className="font-serif text-sm font-bold text-[#6A5843]">{activePost.author.name}</p>
                      <p className="text-[10px] font-sans text-[#2B2B2B]/60">{activePost.author.role}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-6 text-xs text-gray-500 font-mono sm:ml-auto">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} /> {activePost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} /> {activePost.readTime}
                    </span>
                  </div>
                </div>
              </div>

              {/* Large Cover Image */}
              <div className="rounded-[32px] overflow-hidden aspect-[16/9] shadow-xl border border-[#6A5843]/10">
                <img
                  src={activePost.image}
                  alt={activePost.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Styled Rich Content Pane */}
              <div
                id="article-content"
                className="font-sans text-[#2B2B2B]/90 text-base leading-relaxed space-y-6 max-w-3xl mx-auto"
              >
                {/* Parse paragraphs and headers manually into styled components to ensure pristine beauty without third-party markdown dependencies */}
                {activePost.content.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('### ')) {
                    return (
                      <h3 key={index} className="font-serif text-2xl font-bold text-[#6A5843] pt-6 pb-2">
                        {paragraph.replace('### ', '')}
                      </h3>
                    );
                  } else if (paragraph.startsWith('## ')) {
                    return (
                      <h2 key={index} className="font-serif text-3xl font-bold text-[#6A5843] pt-8 pb-3 border-b border-[#6A5843]/10">
                        {paragraph.replace('## ', '')}
                      </h2>
                    );
                  } else if (paragraph.startsWith('* **') || paragraph.startsWith('* ')) {
                    return (
                      <ul key={index} className="list-disc list-inside pl-4 space-y-2 text-sm md:text-base text-[#2B2B2B]/85">
                        {paragraph.split('\n').map((li, lIdx) => (
                          <li key={lIdx} className="leading-relaxed">
                            {li.replace('* ', '')}
                          </li>
                        ))}
                      </ul>
                    );
                  } else if (paragraph.startsWith('1. **') || paragraph.startsWith('1. ')) {
                    return (
                      <ol key={index} className="list-decimal list-inside pl-4 space-y-2 text-sm md:text-base text-[#2B2B2B]/85">
                        {paragraph.split('\n').map((li, lIdx) => (
                          <li key={lIdx} className="leading-relaxed">
                            {li.replace(/^\d+\.\s*/, '')}
                          </li>
                        ))}
                      </ol>
                    );
                  }
                  
                  return (
                    <p key={index} className="text-sm md:text-base leading-relaxed">
                      {paragraph}
                    </p>
                  );
                })}
              </div>

              {/* Tags row */}
              <div className="max-w-3xl mx-auto pt-6 border-t border-[#6A5843]/5 flex flex-wrap gap-2">
                {activePost.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="bg-[#6A5843]/5 border border-[#6A5843]/10 text-[#6A5843] text-[10px] font-mono uppercase tracking-wider px-3 py-1.5 rounded-full">
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Related Articles Section */}
              {relatedPosts.length > 0 && (
                <div className="max-w-3xl mx-auto pt-16 border-t border-[#6A5843]/15 space-y-6">
                  <h3 className="font-serif text-xl font-bold text-[#6A5843]">Related Articles</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {relatedPosts.map((rPost) => (
                      <div
                        key={rPost.id}
                        onClick={() => handleViewPost(rPost)}
                        className="bg-white p-5 rounded-3xl border border-[#6A5843]/5 hover:border-[#B89B72]/20 hover:shadow-lg cursor-pointer transition-all duration-300 flex flex-col justify-between group"
                      >
                        <div className="space-y-3">
                          <div className="aspect-[16/10] rounded-2xl overflow-hidden">
                            <img
                              src={rPost.image}
                              alt={rPost.title}
                              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                          <span className="font-mono text-[9px] tracking-widest text-[#B89B72] uppercase font-bold block">{rPost.category}</span>
                          <h4 className="font-serif text-base font-bold text-[#6A5843] group-hover:text-[#B89B72] transition-colors line-clamp-1">
                            {rPost.title}
                          </h4>
                          <p className="text-xs text-gray-500 line-clamp-2">{rPost.excerpt}</p>
                        </div>
                        <span className="text-xs font-semibold text-[#B89B72] flex items-center gap-1 mt-3">
                          Read Post <ArrowRight size={12} />
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Real Responsive Comments Form and List (UI-State Saved locally) */}
              <div className="max-w-3xl mx-auto pt-16 border-t border-[#6A5843]/15 space-y-10">
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl font-bold text-[#6A5843] flex items-center gap-2">
                    <MessageSquare size={22} className="text-[#B89B72]" />
                    Comments ({activePost.comments?.length || 0})
                  </h3>
                  <p className="text-xs text-gray-500">Share your thoughts on this article. Join the conversation!</p>
                </div>

                {/* Submitting Feedback Indicator */}
                {commentSuccess && (
                  <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl text-xs font-medium flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600" />
                    Comment posted successfully! Thank you for participating.
                  </div>
                )}

                {/* Submit comment form */}
                <form id="comment-form" onSubmit={handleAddComment} className="bg-white p-6 rounded-[24px] border border-[#6A5843]/5 shadow-sm space-y-4">
                  <h4 className="font-serif text-sm font-bold text-[#6A5843]">Leave a Comment</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      id="comment-author-input"
                      type="text"
                      required
                      value={commentAuthor}
                      onChange={(e) => setCommentAuthor(e.target.value)}
                      placeholder="Your Name"
                      className="w-full bg-[#F8F6F2] px-4 py-2.5 rounded-xl text-xs text-[#2B2B2B] placeholder-gray-400 border border-[#6A5843]/5 focus:outline-none focus:ring-2 focus:ring-[#B89B72]/20 focus:bg-white transition-all"
                    />
                  </div>
                  <textarea
                    id="comment-text-input"
                    rows={3}
                    required
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    placeholder="Type your comment here..."
                    className="w-full bg-[#F8F6F2] px-4 py-3 rounded-xl text-xs text-[#2B2B2B] placeholder-gray-400 border border-[#6A5843]/5 focus:outline-none focus:ring-2 focus:ring-[#B89B72]/20 focus:bg-white transition-all"
                  />
                  <div className="flex justify-end">
                    <button
                      id="comment-submit-btn"
                      type="submit"
                      className="bg-[#6A5843] hover:bg-[#A6845C] text-white text-xs font-semibold px-5 py-2.5 rounded-full flex items-center gap-1.5 transition-all cursor-pointer shadow-sm"
                    >
                      <Send size={12} /> Post Comment
                    </button>
                  </div>
                </form>

                {/* Comments List */}
                <div className="space-y-6">
                  {activePost.comments && activePost.comments.length > 0 ? (
                    activePost.comments.map((comment) => (
                      <div key={comment.id} className="flex gap-4 p-5 bg-white rounded-2xl border border-[#6A5843]/5 shadow-sm">
                        <img
                          src={comment.avatar}
                          alt={comment.author}
                          className="w-10 h-10 rounded-full object-cover border border-[#6A5843]/10 shrink-0"
                          referrerPolicy="no-referrer"
                        />
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-serif text-xs font-bold text-[#6A5843]">{comment.author}</span>
                            <span className="text-[10px] font-mono text-gray-400">{comment.date}</span>
                          </div>
                          <p className="text-xs text-[#2B2B2B]/85 leading-relaxed font-sans">{comment.content}</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-6 text-xs text-gray-400 italic">
                      No comments yet. Be the first to share your thoughts!
                    </div>
                  )}
                </div>
              </div>
            </motion.article>
          ) : (
            /* ================= BLOG INDEX / LIST MODE ================= */
            <motion.div
              key="blog-feed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-16"
            >
              {/* Filter Controls Row */}
              <div className="flex flex-col md:flex-row gap-6 justify-between items-center bg-white p-6 rounded-3xl border border-[#6A5843]/5 shadow-sm">
                {/* Horizontal Scrolling Categories */}
                <div className="flex items-center space-x-2 overflow-x-auto pb-1 scrollbar-none w-full md:max-w-2xl">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-4 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap cursor-pointer transition-all duration-300 ${
                        selectedCategory === cat
                          ? 'bg-[#6A5843] text-white shadow-sm'
                          : 'bg-[#F8F6F2] text-[#2B2B2B]/70 hover:bg-[#6A5843]/10'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* Search Bar */}
                <div className="relative w-full md:max-w-xs shrink-0">
                  <Search className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  <input
                    id="blog-search-input"
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search articles..."
                    className="w-full bg-[#F8F6F2] pl-10 pr-4 py-2.5 rounded-2xl text-xs text-[#2B2B2B] placeholder-gray-400 border border-[#6A5843]/5 focus:outline-none focus:ring-2 focus:ring-[#B89B72]/20 focus:bg-white transition-all duration-200"
                  />
                </div>
              </div>

              {filteredPosts.length > 0 ? (
                <div className="space-y-16">
                  {/* FEATURED ARTICLE DISPLAY (Top layout prominence) */}
                  {featuredPost && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-white rounded-[40px] overflow-hidden border border-[#6A5843]/5 shadow-lg group grid grid-cols-1 lg:grid-cols-12 gap-0"
                    >
                      {/* Image Frame */}
                      <div className="lg:col-span-7 h-64 md:h-96 lg:h-full min-h-[300px] overflow-hidden relative">
                        <img
                          src={featuredPost.image}
                          alt={featuredPost.title}
                          className="w-full h-full object-cover group-hover:scale-101 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                        <span className="absolute top-6 left-6 bg-[#B89B72]/95 backdrop-blur-sm text-white font-mono text-[9px] tracking-widest uppercase font-semibold px-3.5 py-1.5 rounded-full border border-white/10 shadow-sm">
                          ★ Featured Article
                        </span>
                      </div>

                      {/* Content Frame */}
                      <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-between space-y-6">
                        <div className="space-y-4">
                          <span className="font-mono text-[10px] tracking-widest text-[#B89B72] uppercase font-bold">
                            {featuredPost.category}
                          </span>
                          
                          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#6A5843] group-hover:text-[#B89B72] transition-colors leading-tight">
                            {featuredPost.title}
                          </h2>
                          
                          <p className="text-xs md:text-sm text-[#2B2B2B]/75 leading-relaxed font-sans line-clamp-4">
                            {featuredPost.excerpt}
                          </p>
                        </div>

                        {/* Author row & trigger */}
                        <div className="pt-6 border-t border-[#6A5843]/5 flex flex-wrap items-center justify-between gap-4">
                          <div className="flex items-center space-x-3">
                            <img
                              src={featuredPost.author.avatar}
                              alt={featuredPost.author.name}
                              className="w-10 h-10 rounded-full object-cover border border-[#6A5843]/10"
                              referrerPolicy="no-referrer"
                            />
                            <div>
                              <p className="font-serif text-xs font-bold text-[#6A5843]">{featuredPost.author.name}</p>
                              <p className="text-[10px] text-gray-400">{featuredPost.date}</p>
                            </div>
                          </div>

                          <button
                            id={`featured-read-btn-${featuredPost.id}`}
                            onClick={() => handleViewPost(featuredPost)}
                            className="bg-[#6A5843] text-white hover:bg-[#A6845C] text-xs font-semibold px-5 py-3 rounded-full flex items-center gap-1 transition-all cursor-pointer"
                          >
                            Read Article
                            <ArrowRight size={14} />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* LATEST POSTS FEED GRID */}
                  {feedPosts.length > 0 && (
                    <div className="space-y-8">
                      <h3 className="font-serif text-2xl font-bold text-[#6A5843]">Latest Publications</h3>
                      <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-8">
                        {feedPosts.map((post, idx) => (
                          <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            onClick={() => handleViewPost(post)}
                            className={`bg-white rounded-xl sm:rounded-[32px] overflow-hidden border border-[#6A5843]/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group cursor-pointer ${idx >= 3 ? 'hidden md:flex' : 'flex'}`}
                          >
                            <div className="h-24 xs:h-32 sm:h-52 overflow-hidden relative">
                              <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                                referrerPolicy="no-referrer"
                              />
                              <span className="absolute top-1.5 left-1.5 sm:top-4 sm:left-4 bg-white/90 backdrop-blur-sm text-[#6A5843] font-mono text-[6px] sm:text-[9px] tracking-wider uppercase font-semibold px-1 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-gray-100 shadow-sm max-w-[90%] truncate">
                                {post.category}
                              </span>
                            </div>

                            <div className="p-2 sm:p-6 flex flex-col flex-grow justify-between space-y-2 sm:space-y-4">
                              <div className="space-y-1 sm:space-y-2.5">
                                <div className="flex items-center space-x-1 sm:space-x-3 text-[6px] sm:text-[10px] font-mono text-gray-400">
                                  <span className="flex items-center gap-0.5"><Calendar size={8} className="sm:size-3" /> {post.date}</span>
                                  <span>•</span>
                                  <span className="flex items-center gap-0.5"><Clock size={8} className="sm:size-3" /> {post.readTime}</span>
                                </div>
                                <h4 className="font-serif text-[10px] sm:text-lg font-bold text-[#6A5843] group-hover:text-[#B89B72] transition-colors line-clamp-2 leading-snug">
                                  {post.title}
                                </h4>
                                <p className="text-[8px] sm:text-xs text-[#2B2B2B]/75 leading-relaxed line-clamp-2 sm:line-clamp-3">
                                  {post.excerpt}
                                </p>
                              </div>

                              <div className="pt-1.5 sm:pt-4 border-t border-[#6A5843]/5 flex flex-col xs:flex-row items-start xs:items-center justify-between gap-1">
                                <div className="flex items-center space-x-1 sm:space-x-2">
                                  <img
                                    src={post.author.avatar}
                                    alt={post.author.name}
                                    className="w-5 h-5 sm:w-7 sm:h-7 rounded-full object-cover border border-[#6A5843]/10"
                                    referrerPolicy="no-referrer"
                                  />
                                  <span className="font-serif text-[8px] sm:text-[11px] font-bold text-[#6A5843] truncate max-w-[40px] xs:max-w-none">{post.author.name}</span>
                                </div>
                                <span className="text-[8px] sm:text-xs font-semibold text-[#B89B72] flex items-center gap-0.5 group-hover:translate-x-1 transition-transform">
                                  Read <ChevronRight size={10} className="mt-0.5 sm:size-3.5" />
                                </span>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Standard feed pagination UI */}
                  <div className="flex items-center justify-center space-x-2 pt-8 border-t border-[#6A5843]/10">
                    <button className="px-4 py-2 text-xs font-semibold rounded-full border border-[#6A5843]/10 text-gray-400 cursor-not-allowed" disabled>Prev</button>
                    <button className="px-3.5 py-2 text-xs font-semibold rounded-full bg-[#6A5843] text-white">1</button>
                    <button className="px-4 py-2 text-xs font-semibold rounded-full border border-[#6A5843]/10 text-[#6A5843] hover:bg-[#6A5843]/5 cursor-pointer">Next</button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-20 bg-white rounded-[32px] border border-[#6A5843]/5 p-8 max-w-lg mx-auto shadow-sm space-y-4">
                  <span className="text-4xl">📚</span>
                  <h3 className="font-serif text-xl font-bold text-[#6A5843]">No Articles Found</h3>
                  <p className="text-sm text-[#2B2B2B]/70 font-sans leading-relaxed">
                    We couldn't find any travel guides or news matching your query. Try searching for "coffee" or "Penida" or browse other categories.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('All');
                    }}
                    className="bg-[#6A5843] text-white px-6 py-3 rounded-full text-xs font-semibold tracking-wide hover:bg-[#A6845C] transition-all cursor-pointer"
                  >
                    Reset Filters
                  </button>
                </div>
              )}

              {/* Newsletter subscription panel */}
              <div id="blog-newsletter-promo" className="py-12 max-w-4xl mx-auto pt-24">
                <div className="bg-[#6A5843] text-white p-10 md:p-14 rounded-[32px] shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center gap-8 md:gap-12 justify-between">
                  <div className="absolute inset-0 bg-[radial-gradient(#B89B72_1px,transparent_1px)] [background-size:20px_20px] opacity-10" />
                  
                  <div className="space-y-3 max-w-md relative z-10">
                    <span className="font-mono text-xs tracking-widest text-[#B89B72] uppercase font-bold">Stay Updated</span>
                    <h3 className="font-serif text-2xl md:text-3xl font-bold">Join the Alily Letters</h3>
                    <p className="text-xs text-[#F8F6F2]/80 leading-relaxed font-sans">
                      Weekly newsletters containing insider Nusa Penida guides, seasonal menu announcements, and digital nomad coffee coupons.
                    </p>
                  </div>

                  <div className="w-full md:max-w-xs relative z-10">
                    {newsletterSuccess ? (
                      <div className="p-4 bg-emerald-500/20 border border-emerald-500/30 text-emerald-200 rounded-2xl text-xs font-medium flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                        Successfully subscribed to Alily Letters!
                      </div>
                    ) : (
                      <form id="blog-newsletter-form" onSubmit={handleNewsletterSubscribe} className="space-y-2">
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Your Email Address"
                          className="w-full bg-[#8C775B]/20 border border-[#8C775B]/40 px-4 py-3 rounded-2xl text-xs text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#B89B72] focus:bg-white/10 transition-all"
                        />
                        <button
                          type="submit"
                          className="w-full bg-[#B89B72] hover:bg-[#A6845C] text-white py-3 rounded-2xl text-xs font-semibold tracking-wide shadow-md transition-all cursor-pointer"
                        >
                          Subscribe Now
                        </button>
                      </form>
                    )}
                  </div>
                </div>
              </div>

            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// Simple Helper chevron icon
function ChevronRight(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
