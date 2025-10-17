import { ArrowRight, /*ExternalLink,*/ Github } from "lucide-react";
import Robotics from "../assets/Robotics.png";
import IntelliSlot from "../assets/IntelliSlot.png";
import IoT from "../assets/IoT.png"; 
import DepotParcelSystem from "../assets/DepotParcelSystem.png";
import DatabaseSystems from "../assets/DatabaseSystems.png";
import ERModelling from "../assets/ERModelling.png"; 
import Muscript from "../assets/Muscript.png";
const projects = [
  {
    id: 1,
    title: "Depot Parcel System",
    description: "Designed and implemented a parcel management system simulating real-world depot operations. Enabled workers to process customer queues, calculate fees, and release parcels efficiently. Applied three-tier architecture principles with clear seperation of data, logic, and presentation layers. Implemented an MVC-based GUI for dynamic updates across parcel and customer panels. Developed core OOP classes such as Parcel, Customer, and Worker, applying composition and association principles. Utilized the Singleton Pattern for centralized logging and event tracking. Built the GUI entirely with Java components, ensuring modularity, responsiveness, and maintainability. Version-controlled iterative progress using Git to document implementation milestones.",
    image: DepotParcelSystem,
    tags: ["Java", "OOP", "MVC", "Software Architecture Principles"],
    //demoUrl: "#",
    githubUrl: "https://github.com/ayatirfann/Mobile-Computing-Distinction-",
  },
  {
    id: 2,
    title: "Database Systems Project",
    description:
      "Designed and implemented relational, extended-relational, and NoSQL database solutions to manage property viewings and staff assignments. Adapted and executed SQL DDL/DML scripts across multiple environments (MS SQL Server, PostgreSQL, MongoDB). Created schemas, tables, primary/foreign key constraints, indexes, materialized views,and query optimization strategies. Applied advanced PostgreSQL features such as inheritance and complex data types to support new requirements. Migrated relational data into MongoDB collection and executed JSON-based queries for data manipulation and retrieval.",
    image: DatabaseSystems,
    tags: ["MS SQL Server", "PostgreSQL", "MongoDB", "Azure Data Studio", "Docker"],
    //demoUrl: "#",
    githubUrl: "https://github.com/ayatirfann/Database-Systems-Distinction",
  },
  {
    id: 3,
    title: "ER-Modelling",
    description:
      "Evaluated a detailed hotel booking system specification involving guests, rooms, room types, extras, pricing, bookings, and seasonal variations. Constructed a comprehensive Entity-Relationship diagram using Crow's Foot notation to capture all identified entities, attributed, and constraints. Defined and labelled relationships with correct connectivity, cardinality, participation, and direction, ensuring a faithful representation of the business rules. Resolved complex many-to-many (M-M) relationships with appropriate link entities to maintain data integrity. Applied primary and foreign keys systematically to support relational schema translation. Produced a professional E-R model using Lucidchart.",
    image: ERModelling,
    tags: ["E-R Modelling", "Crow's Foot Notation"],
    //demoUrl: "#",
    githubUrl: "https://github.com/ayatirfann/Data-Modelling-for-Databases-Distinction-",
  },
    {
    id: 4,
    title: "Intelli-Slot",
    description: "Designed and developed a web application to optimize urban parking by allowing users to reserver parking spaces in real-time. Build an admin dashboard to monitor live parking slot statuses, latest 10 parking logs for activity and error tracking, and a statistics dashboard showing total reservations, peak hours, and slot utilization rates. Implemented a user interface with drive-through kiosk integration, enabling users to register their parking slot upon entry and then exit via QR code scanning. Utilied Socket.io and Firebase Realtime Database for continuous data synchronization and instant updates of slot availability and transaction logs.",
    image: IntelliSlot,
    tags: ["React Native", "JavaScript", "AsyncStorage"],
    //demoUrl: "#",
    githubUrl: "https://github.com/ayatirfann/Intelli-Slot-",
  },
  {
    id: 5,
    title: "Muscript",
    description: "Muscript is a mobile app designed as a personal music journal, allowing users to log, reflect on, and organize their musical experiences. Built with React Native using Expo Snack, the app provides a smooth and responsive cross-platform experience. Users can write personal notes about songs, albums, or artists. Entries will be stored within the system according to artist, song, album, and genre. It provides a clean and intuitive design for distraction-free journaling.",
    image: Muscript,
    tags: ["React Native", "JavaScript", "AsyncStorage"],
    //demoUrl: "#",
    githubUrl: "https://github.com/ayatirfann/Mobile-Computing-Distinction-",
  },

  {
    id: 6,
    title: "Robotics",
    description:
      "Developed an autonomous robot capable of detecting, tracking, and approaching a soccer ball while avoiding obstacles. Used RGB camera input for color-based object detection and bumper sensors for collision avoidance. Designed a behavior-based control system integrating vision and tactile feedback through subsumption architecture. Programmed in C using Webots simulation libraries to achieve smooth differential motor control and reactive decision-making. Evaluated performance across accuracy, obstacle handling, an stability, achieving all objectives and achieving consistent ball detection and precise stopping behavior. ",
    image: Robotics,
    tags: ["C Programming", "Webots", "ROS", "Autonomous Robotics", "Differential Drive", "RGB Camera Processing", "Obstacle Avoidance", "Subsumption Architecture"],
    //demoUrl: "#",
    githubUrl: "https://github.com/ayatirfann/Robotics-Distinction",
  },

   {
    id: 7,
    title: "IoT",
    description:
      "Designed and simulated an IoT-based smart home ecosystem using Cisco Packet Tracer. Configured a hybrid LAN-WLAN-cloud topology enabling secure communication among sensors, alarms, and lights. Implemented a central home gateway managing NAT, DNS, and firewall services for controlled data exchange. Integrated IoT server and cloud subnet for device authentication and remove access. Demonstrated real-time interaction, scalability, and secure data routing between internal devices and external services. Showcased understanding of IoT protocols (MQTT, CoAP) and network security best practices.",
    image: IoT,
    tags: ["Cisco Packet Tracer", "Network Topology Design", "IoT Server Configuration", "NAT and DNS Configuration", "MQTT & CoAP Protocol", "LAN/WAN Integration"],
    //demoUrl: "#",
    githubUrl: "https://github.com/ayatirfann/Internet-of-Things-Distinction-",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-9xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Some repositories are private due to academic or confidentiality reasons. 
          If you'd like to view specific projects, feel free to reach out and I'll 
          be happy to provide access. 
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {/*<a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    */}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/ayatirfann"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};