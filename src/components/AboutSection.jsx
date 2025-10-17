import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer & Aspiring Data Scientist 
            </h3>

            <p className="text-muted-foreground">
              I specialize in creating responsive, accessible, and performant
              web applications using React.js, Node.js, and Firebase. 
            </p>

          
            <p className="text-muted-foreground">
              Skilled in data analytics, leveraging data to 
              uncover insights, drive decision-making, and optimize strategies. 
              Proficient in conducting research, combining analytics rigor
              with practical application to solve complex problems and support 
              data-driven outcomes. 
            </p>

            <p className="text-muted foreground">
              Growing interest in data science and machine learning, I aim to specialize in the 
              development of models that extract meaningful patterns, predict outcomes, and enhance decision-making 
              processes. 
            </p>

            <p className="text-muted-foreground">
              Expertise in project management, coordinating cross-functional
              teams, managing timelines, allocating resources effectively, and implementing
              agile workflows to ensure that projects are delivered on time and with high 
              quality. 
            </p>

            <p className="text-muted-foreground">
              I'm a passionate Software Engineer who thrives on building reliable, scalable, 
              and user-focused solutions. My journey started with data analysis and software development, 
              and now I'm diving deeper into data analytics and machine learning to create technology that's 
              more adaptive and intelligent. From designing robust architectures to uncovering insights hidden 
              in data, I'm driven by curiosity, precision and the joy of continuous learning.  
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    Building responsive web applications with React.js, Node.js, Express, and Firebase. 
                    Experienced with Tailwind CSS, Socket.io, and SQL databases like MySQL, and PostgreSQL.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Designing accessible, user-centered interfaces in Figma. 
                    Implementing WCAG 2.2 and evaluation tools like WAVE.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Data Analysis</h4>
                  <p className="text-muted-foreground">
                    Turning data into insight using Excel and SQL. Experienced in cleaning, transforming, and visualizing 
                    datasets for reporting and analysis. Skilled in creating interactive dashboard and visualizations using 
                    Power BI and Excel Charts. Knowledge of Pandas, Numpy, and Matplotlib. 
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Data Science & Machine Learning</h4>
                  <p className="text-muted-foreground">
                    Developing facial recognition systems using Python tools such as DeepFace and ArcFace,
                    applying AI-driven techniques to enhance decision-making.
                  </p>
                </div>
              </div>
            </div>

            

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Managing projects with Agile and Scrum methodologies. Skilled in Jira, 
                    Trello, and Notion for planning and collaboration.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Research</h4>
                  <p className="text-muted-foreground">
                    Conducting applied research to generate insights and validate ideas. 
                    Skilled in using Python, R, and SQL for data-driven investigations.
                  </p>
                </div>
              </div>
            </div>






          </div>
        </div>
      </div>
    </section>
  );
};