import { publicUrl } from "../utils/publicUrl";

export interface WorkProject {
  slug: string;
  name: string;
  category: string;
  summary: string;
  description: string;
  tech: string;
  link?: string;
  image: string;
  images?: string[];
}

export const projects: WorkProject[] = [
  {
    slug: "employee-project-task-management-system",
    name: "Employee Project & Task Management System",
    category: "Full-Stack / React & Django REST Framework",
    summary:
      "A full-stack, role-based workforce management platform with JWT authentication and API-enforced Admin/Manager/Employee access control.",
    description:
      "A full-stack, role-based workforce management platform with three-tier Admin/Manager/Employee access control enforced at the API layer, plus JWT authentication with access/refresh rotation and blacklist-on-logout. Covers employee onboarding, project and task assignment with auto-computed progress, leave requests and approvals, task attachments (file, audio, video, URL) with server-side validation, and a live analytics dashboard with colorblind-safe charts and dark/light theming.",
    tech: "React 19, Django REST Framework, MySQL, JWT Auth",
    link: "https://github.com/Augustinedhanavel1506/employee-project-management",
    image: publicUrl("/images/project-employee-management.png"),
  },
  {
    slug: "smart-healthcare-management-system",
    name: "Smart Healthcare Management System",
    category: "IoT / AI / Machine Learning",
    summary:
      "An IoT-powered healthcare platform for real-time patient monitoring and predictive treatment analytics.",
    description:
      "A smart healthcare management system leveraging IoT, AI, and machine learning to enhance patient care and operational efficiency — real-time patient monitoring, predictive analytics for treatment optimization, and seamless EHR integration, plus telemedicine features and data security protocols for compliance.",
    tech: "IoT, AI/ML, EHR Integration, Telemedicine",
    link: "https://github.com/Augustinedhanavel1506",
    image: publicUrl("/images/project-healthcare.svg"),
  },
  {
    slug: "air-pollution-detection-spatio-temporal-data",
    name: "Air Pollution Detection Using Spatio-Temporal Data",
    category: "GIS / Machine Learning",
    summary:
      "A GIS and machine-learning system that detects air pollution patterns and visualizes hotspots from spatio-temporal sensor data.",
    description:
      "A system to detect and analyze air pollution patterns using spatio-temporal data, integrating real-time sensor data and GIS with machine learning to predict pollution trends and visualize hotspots across time and space — aiding urban planning and public health interventions.",
    tech: "GIS, Machine Learning, Sensor Data",
    link: "https://github.com/Augustinedhanavel1506",
    image: publicUrl("/images/project-air-pollution.svg"),
  },
];
