import { useState } from "react";
import JobCard from "../../components/JobCards";


const JobSection = () => {

  const [jobs, setJobs] = useState([
    {
      id: 1,
      jobTitle: "Senior Frontend Developer",
      companyName: "TechCorp Solutions",
      companyLocation: "San Francisco, CA",
      discretion: "Remote",
      jobDescription: "Build responsive, high-performance web applications using React, TypeScript, and modern CSS frameworks. Collaborate closely with UI/UX designers and backend teams."
    },
    {
      id: 2,
      jobTitle: "Backend Software Engineer",
      companyName: "DataSync Inc.",
      companyLocation: "Austin, TX",
      discretion: "Remote",
      jobDescription: "Design, build, and maintain scalable microservices using Node.js and PostgreSQL. Optimize API performance and database queries for high-throughput applications."
    },
    {
      id: 3,
      jobTitle: "UI/UX Designer",
      companyName: "CreativePulse",
      companyLocation: "New York, NY",
      discretion: "Full-Time",
      jobDescription: "Create intuitive user interfaces, user flows, wireframes, and interactive prototypes in Figma. Conduct user research and usability testing to refine web/mobile products."
    },
    {
      id: 4,
      jobTitle: "DevOps Engineer",
      companyName: "CloudScale Systems",
      companyLocation: "Seattle, WA",
      discretion: "Contract",
      jobDescription: "Manage AWS cloud infrastructure using Terraform, establish CI/CD pipelines, and maintain Kubernetes clusters for high-availability production environments."
    },
    {
      id: 5,
      jobTitle: "Content Writer & Strategist",
      companyName: "MediaWave",
      companyLocation: "Chicago, IL",
      discretion: "Part-Time",
      jobDescription: "Produce engaging blog posts, SEO-optimized landing page copy, newsletter updates, and social media content for B2B SaaS clients."
    },
    {
      id: 6,
      jobTitle: "Data Analyst",
      companyName: "FinTech Insights",
      companyLocation: "Boston, MA",
      discretion: "Remote",
      jobDescription: "Analyze user engagement data, create interactive dashboards in Tableau, and write complex SQL queries to inform product strategy and executive decisions."
    },
    {
      id: 7,
      jobTitle: "Mobile App Developer (React Native)",
      companyName: "AppStudio",
      companyLocation: "Denver, CO",
      discretion: "Full-Time",
      jobDescription: "Develop cross-platform mobile apps for iOS and Android using React Native. Integrate REST/GraphQL APIs and optimize mobile app performance."
    },
    {
      id: 8,
      jobTitle: "Cybersecurity Specialist",
      companyName: "ShieldSec",
      companyLocation: "Washington, D.C.",
      discretion: "Contract",
      jobDescription: "Perform security audits, vulnerability assessments, and penetration testing on corporate networks to ensure strict compliance with security protocols."
    },
    {
      id: 9,
      jobTitle: "Product Manager",
      companyName: "NextGen Software",
      companyLocation: "Atlanta, GA",
      discretion: "Full-Time",
      jobDescription: "Define product roadmaps, prioritize feature backlogs, write detailed technical requirements, and coordinate cross-functional agile development sprints."
    },
    {
      id: 10,
      jobTitle: "Customer Support Specialist",
      companyName: "HelpDirect",
      companyLocation: "Remote",
      discretion: "Part-Time",
      jobDescription: "Assist users via live chat, email, and support tickets. Troubleshoot technical issues, document bug reports, and maintain knowledge base documentation."
    }
  ]);

  return (
    <div>
      <div className="container my-2">
        <h4 className="text-center">
          Latest <span className="border-bottom border-3 border-primary p-2">Job</span> Vacancies
        </h4>
        <p className="my-3 text-center text-muted">
          Search and Find your dream job easily. Just browse a job and apply if you need to.
          They are waiting for your skills
        </p>
        {/* Nest the card component */}
        <JobCard allJobs={jobs.filter(job=>job.discretion === "Remote")} />
      </div>
    </div>
  );
}

export default JobSection;