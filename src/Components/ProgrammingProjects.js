import ProjectTemplate from './ProjectTemplate';
import SectionHeaderTemplate from './SectionHeaderTemplate';

export default function ProgrammingProjects() {

    const projects = [
        {
            title:"Safety Helmet Detection System Based on YOLO and SpringBoot",
            responsibilities: [
                "Utilized RabbitMQ for message-based asynchronous communication to handle traffic peak shaving, effectively managing high-concurrency requests from the YOLO detection model, thereby improving system reliability, stability, and scalability.",
                "Integrated frontend and backend,as well as the YOLO helmet detection model for seamless functionality and improved product quality."
            ],
            utilized: "SpringBoot, RabbitMQ, YOLO, React, MaterialUI, MySQL"
        },

        {
            title: "Online Employee Training Platform",
            responsibilities: [
                "Designed and implemented a comprehensive frontend interface to facilitate the education and assessment of employees.",
                "Integrated Tencent's advanced Cloud Object Storage and Short Message Service to prioritize the security of users' accounts while ensuring smooth access to video courses."
            ],
            utilized: "Tencent Cloud APIs, SpringBoot, React, MaterialUI, MySQL"
        },

        {
            title: "Personal Blog Website",
            responsibilities: [
                "Improved frontend functionalities, resulting in a 40% reduction in load times, coupled with substantial improvements in responsiveness across various devices and user experience.",
                "Deployed the website to the cloud to ensure global accessibility and purchased a domain name for enhanced brand recognition and ease of access."
            ],
            utilized: "SpringBoot, React, Cloud Computing, MaterialUI, MySQL"
        }
    ];

    return (
        <div>
            <SectionHeaderTemplate sectionHeaderName="PROJECTS"/>

            {
                projects.map((project, index) => (
                    <ProjectTemplate 
                        key={index}
                        title={project.title}
                        responsibilities={project.responsibilities}
                        utilized={project.utilized}
                    />
                ))
            }

      </div>
    );
};