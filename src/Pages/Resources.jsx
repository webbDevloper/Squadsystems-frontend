import { FaFileAlt, FaVideo, FaBook, FaDownload, FaPlay } from "react-icons/fa";

const Resources = () => {
  const resourceCategories = [
    {
      title: "Whitepapers & Guides",
      icon: <FaFileAlt size={28} className="text-red-600" />,
      resources: [
        {
          title: "Digital Transformation Guide 2024",
          description: "Complete guide to modernizing your business with technology",
          type: "PDF",
          size: "2.5 MB",
          downloadCount: "1,200+",
          date: "March 2024",
        },
        {
          title: "Cloud Migration Best Practices",
          description: "Step-by-step approach to successful cloud adoption",
          type: "PDF",
          size: "1.8 MB",
          downloadCount: "850+",
          date: "February 2024",
        },
        {
          title: "Cybersecurity Checklist for SMBs",
          description: "Essential security measures for small and medium businesses",
          type: "PDF",
          size: "1.2 MB",
          downloadCount: "2,100+",
          date: "January 2024",
        },
      ],
    },
    {
      title: "Video Resources",
      icon: <FaVideo size={28} className="text-red-600" />,
      resources: [
        {
          title: "Introduction to Modern Web Development",
          description: "Overview of current web development technologies and trends",
          type: "Video",
          duration: "25 min",
          views: "5,400+",
          date: "March 2024",
        },
        {
          title: "Building Scalable Applications",
          description: "Architecture patterns for enterprise-level applications",
          type: "Video",
          duration: "35 min",
          views: "3,200+",
          date: "February 2024",
        },
      ],
    },
    {
      title: "Case Studies",
      icon: <FaBook size={28} className="text-red-600" />,
      resources: [
        {
          title: "E-commerce Platform Transformation",
          description: "How we helped a retail company increase sales by 300%",
          type: "Case Study",
          readTime: "8 min read",
          industry: "Retail",
          date: "March 2024",
        },
        {
          title: "Healthcare System Modernization",
          description: "Implementing HIPAA-compliant patient management system",
          type: "Case Study",
          readTime: "12 min read",
          industry: "Healthcare",
          date: "February 2024",
        },
      ],
    },
  ];

  const webinars = [
    {
      title: "Future of Web Development",
      date: "April 15, 2024",
      time: "2:00 PM EST",
      speaker: "Sarah Johnson, CTO",
      description: "Exploring emerging trends and technologies shaping web development",
      status: "upcoming",
    },
    {
      title: "AI in Business Applications",
      date: "March 20, 2024",
      time: "3:00 PM EST",
      speaker: "Michael Chen, Lead AI Engineer",
      description: "Practical applications of AI in modern business solutions",
      status: "recorded",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Knowledge <span className="text-red-600">Resources</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Access our comprehensive library of guides, whitepapers, case studies, and educational content to help you
              make informed technology decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {resourceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <div className="flex items-center mb-8">
                <div className="mr-4">{category.icon}</div>
                <h2 className="text-3xl font-bold">{category.title}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.resources.map((resource, resourceIndex) => (
                  <div
                    key={resourceIndex}
                    className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <span className="px-2 py-1 bg-red-100 text-red-600 text-xs rounded">{resource.type}</span>
                      <span className="text-xs text-gray-500">{resource.date}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-3 leading-tight">{resource.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{resource.description}</p>

                    <div className="flex flex-wrap gap-2 text-xs text-gray-500 mb-4">
                      {resource.size && <span>Size: {resource.size}</span>}
                      {resource.duration && <span>Duration: {resource.duration}</span>}
                      {resource.readTime && <span>{resource.readTime}</span>}
                      {resource.downloadCount && <span>{resource.downloadCount} downloads</span>}
                      {resource.views && <span>{resource.views} views</span>}
                      {resource.industry && <span>Industry: {resource.industry}</span>}
                    </div>

                    <button className="w-full px-4 py-2 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-2">
                      {resource.type === "Video" ? <FaPlay /> : <FaDownload />}
                      {resource.type === "Video" ? "Watch Now" : "Download"}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Webinars Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Webinars & Events</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join our expert-led webinars and stay updated with the latest technology trends and insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {webinars.map((webinar, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`px-2 py-1 text-xs rounded ${
                      webinar.status === "upcoming" ? "bg-red-100 text-red-600" : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {webinar.status === "upcoming" ? "Upcoming" : "Recorded"}
                  </span>
                  <div className="flex items-center text-xs text-gray-500">📅 {webinar.date}</div>
                </div>
                <h3 className="text-lg font-bold mb-3">{webinar.title}</h3>
                <p className="text-gray-600 text-sm mb-3 leading-relaxed">{webinar.description}</p>
                <div className="text-xs text-gray-500 mb-4">
                  <p>Speaker: {webinar.speaker}</p>
                  <p>Time: {webinar.time}</p>
                </div>
                <button
                  className={`w-full px-4 py-2 font-medium rounded-lg transition-colors ${
                    webinar.status === "upcoming"
                      ? "bg-red-600 text-white hover:bg-red-700"
                      : "border border-red-600 text-red-600 hover:bg-red-50"
                  }`}
                >
                  {webinar.status === "upcoming" ? "Register Now" : "Watch Recording"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
