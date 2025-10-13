import React from "react";
import {
  FaServer,
  FaTachometerAlt,
  FaShieldAlt,
  FaNetworkWired,
  FaDatabase,
  FaHdd,
  FaSyncAlt,
  FaCode,
  FaBook,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const sections = [
  {
    title: "Server Management",
    icon: <FaServer className="text-primary me-2" size={28} />,
    points: [
      "Install, configure, and maintain Linux servers across environments.",
      "Keep systems patched and optimized for stable performance.",
    ],
  },
  {
    title: "Performance & Availability",
    icon: <FaTachometerAlt className="text-success me-2" size={28} />,
    points: [
      "Monitor CPU, memory, disk, and network performance.",
      "Implement HA solutions with clustering and load balancing.",
    ],
  },
  {
    title: "Security",
    icon: <FaShieldAlt className="text-danger me-2" size={28} />,
    points: [
      "Configure firewalls, SELinux/AppArmor, and access controls.",
      "Apply regular security updates and harden systems.",
    ],
  },
  {
    title: "Networking",
    icon: <FaNetworkWired className="text-info me-2" size={28} />,
    points: [
      "Configure and troubleshoot DNS, DHCP, FTP, SSH, mail, and web servers.",
      "Manage proxy servers (Squid, Nginx, HAProxy).",
    ],
  },
  {
    title: "Databases & Web Servers",
    icon: <FaDatabase className="text-warning me-2" size={28} />,
    points: [
      "Install, configure, and maintain MySQL, Apache, and Nginx.",
      "Optimize for performance, backups, and scaling.",
    ],
  },
  {
    title: "Storage Management",
    icon: <FaHdd className="text-secondary me-2" size={28} />,
    points: [
      "Manage partitions, RAID, LVM, NFS, and Samba.",
      "Configure and maintain GlusterFS for distributed storage.",
    ],
  },
  {
    title: "Backup & Disaster Recovery",
    icon: <FaSyncAlt className="text-dark me-2" size={28} />,
    points: [
      "Implement scheduled backups and test recovery.",
      "Design and maintain disaster recovery plans.",
    ],
  },
  {
    title: "Automation & Scheduling",
    icon: <FaCode className="text-success me-2" size={28} />,
    points: [
      "Use cron jobs, shell scripts, or Ansible for automation.",
      "Automate repetitive administration tasks.",
    ],
  },
  {
    title: "Application & Developer Support",
    icon: <FaServer className="text-primary me-2" size={28} />,
    points: [
      "Assist developers with deployments and integrations.",
      "Ensure reliable runtime environments for applications.",
    ],
  },
  {
    title: "Documentation & Support",
    icon: <FaBook className="text-muted me-2" size={28} />,
    points: [
      "Document procedures, configurations, and troubleshooting.",
      "Provide team/user support for technical issues.",
    ],
  },
];

export default function ServerManagment() {
  return (
    <div className="container py-4">
      <h1 className="text-center mb-4 fw-bold">Server Administration Dashboard</h1>
      <div className="row g-4">
        {sections.map((section, idx) => (
          <div className="col-md-6" key={idx}>
            <div className="card shadow-sm h-100 border-0">
              <div className="card-body">
                <h5 className="card-title d-flex align-items-center mb-3">
                  {section.icon}
                  {section.title}
                </h5>
                <ul className="list-unstyled ms-4">
                  {section.points.map((point, i) => (
                    <li key={i} className="mb-2">
                      <span className="text-secondary">•</span> {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
