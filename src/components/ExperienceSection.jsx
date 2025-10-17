export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          Professional <span className="text-primary">Experience</span>
        </h2>

        {/* Position Info */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold">Junior Software Engineer</h3>
          <h4 className="font-bold text-primary">
            National Incubation Center for Aerospace Technologies (NICAT)
          </h4>
          <p className="text-sm text-muted-foreground mt-1 font-bold text-primary">
            July 2024 – Present
          </p>
        </div>

        {/* EXPERIENCE CARDS */}
        <div className="space-y-8">
          {/* DATABASE DESIGN & ANALYTICS */}
          <div className="gradient-border p-6 card-hover text-left space-y-3">
            <h4 className="font-semibold text-lg">
              Database Design & Analytics
            </h4>
            <p className="text-muted-foreground">
              Designed and optimized SQL-based relational databases, leveraging Docker
              for isolated development and testing. Improved schema efficiency through
              normalization and denormalization trade-offs, ensuring high performance and
              reliability. Delivered analytical dashboards and comparative data reports
              to support strategic decision-making.
            </p>
          </div>

          {/* DATA VISUALIZATION */}
          <div className="gradient-border p-6 card-hover text-left space-y-3">
            <h4 className="font-semibold text-lg">
              Data Visualization & Insights
            </h4>
            <p className="text-muted-foreground">
              Conducted analysis on multi-regional tourism datasets using SQL to extract
              insights on visitor trends, geography, and seasonal demand. Developed
              interactive Excel dashboards to visualize booking trends, tourist activities,
              and performance indicators across divisions in Khyber Pakhtunkhwa.
            </p>
          </div>

          {/* MACHINE LEARNING */}
          <div className="gradient-border p-6 card-hover text-left space-y-3">
            <h4 className="font-semibold text-lg">
              Machine Learning & AI Systems
            </h4>
            <p className="text-muted-foreground">
              Developing a Facial Recognition System for sports analysis using DeepFace
              and ArcFace frameworks. Implementing facial detection, alignment, feature
              extraction, and verification modules. Building the machine learning pipeline
              and authoring the Software Specification Document (SSD) to ensure alignment
              with system architecture.
            </p>
          </div>

          {/* WEB DEVELOPMENT */}
          <div className="gradient-border p-6 card-hover text-left space-y-3">
            <h4 className="font-semibold text-lg">React.js Development</h4>
            <p className="text-muted-foreground">
              Developed a React Native web application for Kovara Barite Mining Company
              as part of a partnership with NICAT. The platform showcased the company’s
              mission, vision, operations, and contact information — enhancing digital
              visibility and stakeholder engagement through a clean and responsive interface.
            </p>
          </div>

          {/* SOFTWARE AUDIT */}
          <div className="gradient-border p-6 card-hover text-left space-y-3">
            <h4 className="font-semibold text-lg">
              Software Audit & Optimization
            </h4>
            <p className="text-muted-foreground">
              Performed in-depth software audits to identify usability gaps, integration
              inefficiencies, and backend issues. Authored structured audit reports with
              prioritized recommendations for optimization and collaborated with developers
              to enhance software performance and scalability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
