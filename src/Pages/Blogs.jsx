import {
  FaUser,
  FaCalendarAlt,
  FaClock,
  FaSearch,
  FaArrowRight,
} from "react-icons/fa";

const Blogs = () => {
  const featuredPost = {
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt:
      "Explore the latest trends shaping web development, from AI integration to progressive web apps and the evolution of JavaScript frameworks.",
    author: "Sarah Johnson",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Web Development",
    image: "https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg",
    featured: true,
  };

  const blogPosts = [
    {
      title: "Building Scalable Microservices Architecture",
      excerpt:
        "Learn how to design and implement microservices that can handle enterprise-level traffic and complexity.",
      author: "Michael Chen",
      date: "March 12, 2024",
      readTime: "12 min read",
      category: "Architecture",
      image:
        "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
    },
    {
      title: "Cybersecurity Best Practices for Small Businesses",
      excerpt:
        "Essential security measures every small business should implement to protect against cyber threats.",
      author: "Emily Rodriguez",
      date: "March 10, 2024",
      readTime: "6 min read",
      category: "Security",
      image:
        "https://images.pexels.com/photos/5473951/pexels-photo-5473951.jpeg",
    },
    {
      title: "Cloud Migration: A Step-by-Step Guide",
      excerpt:
        "Complete guide to migrating your infrastructure to the cloud safely and efficiently.",
      author: "David Kim",
      date: "March 8, 2024",
      readTime: "10 min read",
      category: "Cloud",
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg",
    },
    {
      title: "Mobile App Development: Native vs Cross-Platform",
      excerpt:
        "Comparing the pros and cons of native and cross-platform mobile development approaches.",
      author: "Lisa Wang",
      date: "March 5, 2024",
      readTime: "7 min read",
      category: "Mobile",
      image:
        "https://images.pexels.com/photos/4065917/pexels-photo-4065917.jpeg",
    },
    {
      title: "AI Integration in Business Applications",
      excerpt:
        "How artificial intelligence is transforming business processes and customer experiences.",
      author: "Robert Chen",
      date: "March 3, 2024",
      readTime: "9 min read",
      category: "AI & ML",
      image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg",
    },
    {
      title: "Database Optimization Techniques",
      excerpt:
        "Advanced strategies for improving database performance and query optimization.",
      author: "Jennifer Martinez",
      date: "March 1, 2024",
      readTime: "11 min read",
      category: "Database",
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg",
    },
  ];

  const categories = [
    "All",
    "Web Development",
    "Architecture",
    "Security",
    "Cloud",
    "Mobile",
    "AI & ML",
    "DevOps",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Tech <span className="text-red-600">Insights</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Stay updated with the latest technology trends, best practices,
              and insights from our team of experts.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <FaSearch />
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-3 py-1 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <span className="text-red-600 mr-2">
                <FaArrowRight />
              </span>
              <span className="text-sm font-semibold text-red-600">
                Featured Article
              </span>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-0">
                  <img
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <span className="px-2 py-1 bg-red-100 text-red-600 text-xs rounded w-fit mb-4">
                    {featuredPost.category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-6 gap-4">
                    <span className="flex items-center gap-1">
                      <FaUser /> {featuredPost.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt /> {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaClock /> {featuredPost.readTime}
                    </span>
                  </div>
                  <button className="px-6 py-2 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors w-fit flex items-center gap-2">
                    Read Article <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Latest Articles
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover insights, tutorials, and industry analysis from our
              technology experts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow group cursor-pointer"
              >
                <div className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute top-3 left-3 px-2 py-1 bg-red-600 text-white text-xs rounded">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-3 leading-tight group-hover:text-red-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-xs text-gray-500 gap-4">
                      <span className="flex items-center gap-1">
                        <FaUser /> {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaCalendarAlt /> {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaClock /> {post.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-6 py-3 border border-red-600 text-red-600 font-medium rounded-lg hover:bg-red-50 transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Never Miss an Update
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Subscribe to our newsletter and get the latest tech insights
              delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button className="px-6 py-2 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Join 5,000+ developers and business leaders who trust our
              insights.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
