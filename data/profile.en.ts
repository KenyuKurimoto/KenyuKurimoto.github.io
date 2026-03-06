import { ProfileData } from "./types";

export const profileEn: ProfileData = {
  lastUpdated: "March 2, 2026",
  name: "Ken'yu Kurimoto",
  nameEn: "栗本 健有",
  title: "Software Engineer",
  avatar: "/assets/avatar.jpg",
  about: [
    "After completing my master's degree, I have worked on in-house robot development end-to-end—from hardware design and assembly to ROS-based software and CI. My main focus has been integrating robots with building and facility infrastructure, including elevators, automatic doors, and Facility Resource Management Servers (defined by the Robot Friendly Asset Promotion Association: RFA).",
    "With the rise of generative AI, I believe that the value expected of engineers is expanding beyond implementation to include system vision and integration. My goal is to design and deliver systems that connect generative AI with robots and social infrastructure—from prototyping to real-world deployment.",
    "My first area of interest is Physical AI (AI for embodied robots). Building on my background in deep learning and computer vision, I want to advance AI-powered service robots and their deployment in society.",
    "My second area of interest is software infrastructure for robot integration. For service robots to be accepted at scale, we need not only robot features but also robust software foundations that allow robots to operate as part of facility or city-scale systems. I will continue working on mechanisms for seamless integration with physical infrastructure and higher-level facility/city systems.",
  ],
  contact: {},
  skills: [
    {
      category: "Languages",
      tags: ["C++", "Python", "C#", "Bash", "Swift", "JavaScript"],
    },
    {
      category: "Robotics",
      tags: ["ROS/ROS2", "MoveIt", "Nav2", "Zenoh"],
    },
    {
      category: "Perception / AI",
      tags: ["SLAM", "OpenCV", "PCL", "Object Detection", "Point Cloud Processing"],
    },
    {
      category: "Simulation",
      tags: ["Gazebo", "RViz2", "Isaac Sim", "URDF / SDF"],
    },
    {
      category: "Hardware / Embedded",
      tags: [
        "NVIDIA Jetson",
        "Raspberry Pi",
        "Arduino",
        "CAN bus",
        "Inventor CAD",
        "KiCad",
        "3D Printer",
      ],
    },
    {
      category: "Dev Environment / DevOps",
      tags: [
        "Docker",
        "Git",
        "GitHub Actions",
        "Ansible",
        "Linux (Ubuntu)",
        "VSCode",
        "ClaudeCode",
      ],
    },
  ],
  experience: [
    {
      company: "SoftBank Corp.",
      companyUrl: "https://www.softbank.jp/corp/",
      role: "Software Engineer",
      period: "April 2019 – Present",
      overview:
        "Worked on in-house R&D robot development covering 3D CAD design, assembly, ROS-based software development, and internal/external system integration. Additional responsibilities include evaluating new sensors and generative AI tools for robot integration, providing technical consultation and PoC development inside or outside the company, and contributing as a core member to national government demonstration projects (technical discussions, architecture design, and reporting).",
      projects: [
        {
          name: "Multi-Mobility Driving Experiment Using Resource Management Server in Keihanna District",
          period: "2025 – 2026",
          role: "Software Engineer / Architect",
          description:
            "Participated as a member of the Keihanna district demonstration in the 'Research on Distributed Cooperative Operation Infrastructure for Multiple Mobilities' led by the Digital Agency. Involved in overall architecture definition while developing a system to integrate the higher-level systems (resource management server / cooperative operation infrastructure) with our company's Robot Management System. Leveraged Open-RMF, an OSS fleet management system, for fleet control of our robots, and achieved cross-vendor route arbitration through connection with an RFA-compliant resource management server.",
          tech: ["ROS Jazzy", "Open-RMF", "Nav2", "RFA", "Python", "MQTT", "Zenoh"],
          videos: [
            {
              url: "/assets/keihanna_1.mp4",
              caption: "Route arbitration using resource management server (vestibule example)",
            },
            {
              url: "/assets/keihanna_2.mp4",
              caption:
                "Route arbitration using resource management server (narrow passage example)",
            },
          ],
        },
        {
          name: "Development of Outdoor Autonomous Delivery Robot 'Albion' and Its Introduction to Demonstration Experiments",
          period: "2024 – 2025",
          role: "Software Engineer / Hardware Engineer",
          description:
            "Developed 'Albion,' an outdoor autonomous delivery robot classified as a 'remotely-operated small vehicle,' designed for demonstration experiments including outdoor delivery scenarios. Based on a 3D model proposed by a designer, designed and assembled the hardware using Inventor CAD, building the entire system on a commercial vehicle base. On the software side, fully migrated development from ROS1 to ROS2, implementing automatic door opening/closing, sensor fusion, microcontroller control of locks/LEDs/sensors, and other core robot functions. Also integrated Nav2 with OSS localization packages to conduct driving experiments using a distributed 3D point cloud map. Deployed the robot in an autonomous driving demonstration on public roads in the Aomi area, handling everything from system design to actual driving.",
          tech: [
            "ROS2 Jazzy",
            "Nav2",
            "RTK-GNSS",
            "Inventor CAD",
            "Python",
            "C++",
            "KiCad",
            "CAN bus",
            "Arduino",
            "NVIDIA Jetson",
          ],
          images: [
            {
              url: "/assets/albion.jpg",
              caption: "Outdoor autonomous delivery robot 'Albion'",
            },
            {
              url: "/assets/albion_ui.jpg",
              caption: "Touch panel UI on top of 'Albion'",
            },
            {
              url: "/assets/albion_scale_1.png",
            },
            {
              url: "/assets/albion_scale_2.png",
            },
          ],
          videos: [
            {
              url: "/assets/albion_on_road.mp4",
              caption: "'Albion' driving on public roads",
            },
            {
              url: "/assets/albion_door.mp4",
              caption: "Automatic door opening/closing of 'Albion'",
            },
          ],
          links: [
            {
              label: "Demonstration experiment introduction page in Aomi area",
              url: "https://staff.aist.go.jp/y-sasaki/aomi-mobility.html",
            },
          ],
        },
        {
          name: "Robot Introduction Support Project at 'STATION Ai'",
          period: "2024",
          role: "Software Engineer",
          description:
            "Engaged in robot introduction support as part of the 'STATION Ai' facility operations project contracted from Aichi Prefecture. Connected with the 'LCI' system provided by Octa Robotics, enabling integration with elevators and automatic doors conforming to the RFA standard. Implemented web app integration for our robot and developed call/patrol applications with route planning that accounts for elevator and automatic door positions. Added integration with 'Transbots,' a fleet management system provided by TOPPAN Holdings, and contributed to on-site deployment work at the facility.",
          tech: ["ROS1 Noetic", "Transbots", "RFA", "MQTT", "Python"],
          videos: [
            {
              url: "/assets/stai_door.mp4",
              caption: "Automatic door integration at 'STATION Ai'",
            },
            {
              url: "/assets/stai_elv.mp4",
              caption: "Elevator integration at 'STATION Ai'",
            },
          ],
          links: [
            {
              label: "Cuboid with signage module at STATION Ai",
              url: "https://www.ros-sier.com/case/implementation-cases/station-ai",
            },
          ],
        },
        {
          name: "Multi-Mobility Cooperative Operation System",
          period: "2023 – 2024",
          role: "Software Engineer / Architect",
          description:
            "Participated in the Digital Agency's 'Demonstration Research on Cooperative Operation of Multiple Mobilities,' developing a distributed cooperative framework integrating multiple robots and building infrastructure systems. Led the definition of common specifications with partner companies and software architecture design, and developed ROS robot programs following the distributed cooperative framework. Modified our robot's driving flow based on the premise of sharing 2D maps and topological graph information across vendors. Implemented elevator integration via REST API, facility information retrieval using spatial IDs, and keepout zone configuration. Also built location information sharing via our company's data warehouse system. After the demonstration, conducted in-house experiments on resource management servers being discussed in RFA, and presented at ROSCon JP 2024.",
          tech: ["ROS1 Noetic", "Open-RMF", "RFA", "REST API", "Spatial ID", "Python"],
          videos: [
            {
              url: "/assets/hic_elv_mediation.mp4",
              caption:
                "Route arbitration between different vendor robots based on common specifications",
            },
            {
              url: "/assets/hic_node_edge_mediation.mp4",
              caption: "Node occupancy based on common topological graph information",
            },
          ],
          links: [
            {
              label:
                "Participation in demonstration research on cooperative operation of multiple mobilities (Digital Agency)",
              url: "https://www.ros-sier.com/case/demonstrations-and-projects/haneda",
            },
            {
              label:
                "Demonstration research on cooperative operation of multiple mobilities - Final report (summary version)",
              url: "https://www.digital.go.jp/assets/contents/node/basic_page/field_ref_resources/9f4e70e2-2335-4181-8293-258c12549d31/8d42a535/20240508_policies_mobility_report_01.pdf",
            },
            {
              label: "ROSCon JP 2024 presentation materials",
              url: "https://roscon.ros.org/jp/2024/presentations/03.pdf",
            },
          ],
        },
        {
          name: "Robot Driving Experiment Using Spatial ID",
          period: "2022 – 2023",
          role: "Software Engineer / Hardware Engineer",
          description:
            "Participated in a robot driving demonstration using 3D spatial ID data, conducted as part of the Digital Agency's 'Research on Digital Twin Construction.' Involved in defining robot specifications and proposing use cases for spatial IDs, while designing and developing the demonstration robot based on existing in-house robots. Designed a robot driving method using spatial IDs and implemented the database and driving program. Conducted robot driving demonstrations for government officials, demonstrating the effectiveness of spatial ID-based robot control. Also created a localization map using BIM data of the facility, achieving efficient map creation and obtaining latitude/longitude information required for spatial ID derivation.",
          tech: ["ROS1 Noetic", "REST API", "Spatial ID", "Python", "C++", "Inventor CAD"],
          images: [
            {
              url: "/assets/cube_delivery_1.jpg",
            },
            {
              url: "/assets/cube_delivery_3.jpg",
            },
            {
              url: "/assets/spatial_id_poc.png",
            },
          ],
          youtube: "https://www.youtube.com/watch?v=h7Y9QNBfTUg",
          links: [
            {
              label:
                "SoftBank News: Optimizing robot and drone movement using spatial IDs - Demonstration experiment for spatial information development",
              url: "https://www.softbank.jp/sbnews/entry/20231101_01",
            },
            {
              label:
                "Conducted demonstration experiment on data sharing between delivery robots and AR navigation using spatial IDs",
              url: "https://www.softbank.jp/corp/news/press/sbkk/2023/20230425_01/",
            },
            {
              label: "Research on digital twin construction - Survey report",
              url: "https://www.digital.go.jp/assets/contents/node/basic_page/field_ref_resources/9f4e70e2-2335-4181-8293-258c12549d31/38cba97c/20230426_policies_mobility_report_01.pdf",
            },
          ],
        },
        {
          name: "NEDO Outdoor Delivery Robot Project",
          period: "2020 – 2021",
          role: "Software Engineer",
          description:
            "Responsible for overall software development of an outdoor-capable ROS robot in NEDO's 'Technology Development Project for Realizing New Delivery Services Using Autonomous Mobile Robots' (our company's implementation). Built outdoor navigation using Autoware, an OSS autonomous driving stack, and integrated it into the robot system. A key achievement was implementing traffic signal recognition by integrating with hardware from Japan Signal Co., Ltd., realizing Japan's first outdoor delivery robot operation coordinated with traffic signals. Also designed and implemented a map-switching function for indoor/outdoor driving at Tokyo Portcity Takeshiba, supporting multi-floor delivery.",
          tech: ["ROS1 Noetic", "Autoware", "MQTT", "Python", "C++"],
          images: [
            {
              url: "/assets/nedo_traffic.png",
            },
          ],
          youtube: "https://www.youtube.com/watch?v=CyYP8fSry-I&t=45s",
          links: [
            {
              label:
                "First in Japan: Successful outdoor delivery through cooperation between autonomous robots and traffic signals",
              url: "https://www.softbank.jp/corp/news/press/sbkk/2021/20210615_01/",
            },
          ],
        },
        {
          name: "Indoor Delivery Robot Elevator Integration Demonstration",
          period: "2019 – 2020",
          role: "Software Engineer",
          description:
            "Responsible for overall software development of a multi-floor delivery system in an indoor autonomous delivery demonstration using elevator integration, conducted under MIC's FY2019 IoT safety commission project. Designed a multi-floor facility information management format and implemented a multi-map switching function for seamless movement between floors. Introduced a SMACH-based application to our R&D robot for the first time and implemented elevator integration via MQTT based on vendor specifications. For the subsequent demonstration at Tokyo Portcity Takeshiba, built ROS integration with Mitsubishi Electric's building facility management system 'Ville-Feuille.' Also designed and implemented Google Calendar integration for long-term security patrol scheduling.",
          tech: ["ROS1 Melodic", "MQTT", "Python", "C++"],
          videos: [
            {
              url: "/assets/elevator_demo_1.mp4",
              caption: "Elevator integration at Tokyo Portcity Takeshiba",
            },
          ],
          youtube: "https://www.youtube.com/watch?v=W5sd88Pn8lU",
          links: [
            {
              label:
                "SoftBank News: Easily handling elevator entry and exit! Demonstration towards practical use of services using autonomous mobile robot 'Cuboid-kun'",
              url: "https://www.softbank.jp/sbnews/entry/20200109_01?adid=sbns_m_s_s_o_1_2427_20200220_ytoc_",
            },
          ],
        },
      ],
    },
  ],
  education: [
    {
      school:
        "The University of Tokyo, Graduate School of Information Science and Technology, Dept. of Mechano-Informatics",
      period: "April 2017 – March 2019",
      degree: "Master of Information Science and Technology",
      note: "Member of the JSK Laboratory (Information Systems Engineering Laboratory). Participated in RoboCup DSPL and WRS using Toyota's home support robot (HSR). Master's thesis focused on deep-learning-based object/person recognition and a Dialogflow-based voice dialogue system. Developed an integrated system combining perception, dialogue, and action planning to autonomously perform daily support tasks.",
    },
    {
      school:
        "The University of Tokyo, Faculty of Engineering, Dept. of Information and Communication Engineering",
      period: "April 2013 – March 2017",
      degree: "Bachelor of Engineering",
      note: "During the Komaba campus years, devoted myself to acting and prop-making in an English drama club. After moving to the Hongo campus, served as leader of the department's school festival project and studied AI and mathematical models under Prof. Hitoshi Iba and Associate Prof. Yoshihiko Hasegawa.",
    },
    {
      school: "Tokai Senior High School (Aichi Prefecture, Private)",
      period: "April 2010 – March 2013",
      note: "Earned a 2nd Dan (Nidan) in Kendo. Served as a Cultural Festival Committee member.",
    },
  ],
  certifications: [
    {
      name: "Third-Class Chief Electrical Engineer (Japan)",
      issuer: "Ministry of Economy, Trade and Industry (METI)",
      date: "June 2025",
    },
    {
      name: "JDLA Deep Learning for ENGINEER (E Qualification)",
      issuer: "JDLA (Japan Deep Learning Association)",
      date: "February 2025",
    },
    {
      name: "First-Class Land Radio Engineer (Japan)",
      issuer: "Ministry of Internal Affairs and Communications (MIC)",
      date: "September 2022",
    },
    {
      name: "Embedded Systems Specialist Examination (Japan)",
      issuer: "IPA (Information-technology Promotion Agency of Japan)",
      date: "December 2020",
    },
    {
      name: "TOEFL iBT 106/120",
      issuer: "ETS (Educational Testing Service)",
      date: "August 2016",
    },
    {
      name: "Applied Information Technology Engineer Examination (Japan)",
      issuer: "IPA (Information-technology Promotion Agency of Japan)",
      date: "December 2015",
    },
  ],
};
