// Project data
const projectData = {
    '1': {
        title: 'Autonomous Mobile Robot (AMR)',
        description: '<p>This autonomous mobile robot system was developed for warehouse and industrial applications. The robot can navigate complex environments using a combination of LIDAR, computer vision, and SLAM techniques.</p><p>Key features include obstacle avoidance, path planning, and automated navigation. The system uses ROS2 for high-level control and integrates with Gazebo for simulation testing.</p><p>The AMR has been successfully deployed for inventory management, material transport, and facility monitoring operations.</p>',
        tech: '<h4>Technologies Used:</h4><ul><li>ROS2 (Robot Operating System)</li><li>Gazebo for simulation</li><li>SLAM for mapping and localization</li><li>Rviz2 for visualization</li><li>Path Planning Algorithms</li></ul>',
        links: '<a href="https://youtube.com/shorts/Z9sZbSp2InU?feature=share" class="btn" target="_blank">View Demo</a><a href="https://github.com/dilip-2006/agv-pika" class="btn" target="_blank">GitHub Repository</a>',
        images: [
            'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgH9OTHO2vKUjRDCs441y_iG8Uf2A5A3RJz0rX_iqasdm0uyuG5MjOxtv09uHP7MXwrOQwwWZEKFQRsbAOyOvGX8y99gn3Xnsesp-YMnlUmG3l4NMoZamifWThXU2zoDw61DN6ikkyJhPcmn7ViXL3-eANWI1yF24YbCh1N3UMwIdkDDJS8zrgYaCPy6wJo/s320/agv1.jpg',
            'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjQ8A6-rls6kWbfkm8Ct8bdzhJ2FsoGTQ6FDM9mq_RJtFwbBAnburRhajizlAqVlTPykIhCYKG3SZFgjDjSkiJSvUfVGKXSWlv_zyHI6pmkGDQ35ux9XEGZegbipFBeWEvIILbyIyONGmgap-z7-i92qeOwqISWMpJ1Kkf-sU_QPpZ27V_kXSQa732qm_9R/s320/agv.jpg'
        ],
        tags: ['ROS2', 'Gazebo', 'SLAM', 'Rviz2', 'Path-Planning-Algorithum']
    },
    '2': {
        title: 'Arduino-Braccio Robotic Arm',
        description: '<p>This Arduino-Braccio based robotic arm was designed for precision pick and place operations with voice control capabilities. The arm features multiple degrees of freedom and uses servo motors for accurate positioning.</p><p>The system incorporates both manual control and voice command interfaces, allowing for intuitive operation in various environments. It can be programmed for repetitive tasks or controlled in real-time.</p><p>The arm has been tested in educational environments and small-scale assembly operations with promising results.</p>',
        tech: '<h4>Technologies Used:</h4><ul><li>Arduino platform</li><li>Servo motor control</li><li>Voice recognition system</li><li>Pick and place algorithms</li><li>Custom interface design</li></ul>',
        links: '<a href="https://youtu.be/KuqnxAnVxHI" class="btn" target="_blank">Demo Video</a><a href="https://github.com/dilip-2006/braccio" class="btn" target="_blank">GitHub Repository</a>',
        images: [
            'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEijz9gZHIAtFKE3IJZh-hLgslje8KIU_MyEmX4BY178zQ8hu6M3SQNdPpXAEyYVYD9joSofQmwOVVRM-u7aUhgDDOI9sWLm5mzwh_A5BNeYqS5Wlj7zgscYTKhcDeL9hYHHL7wlDKMFiHb0FUTymYyDQ1JUKGNsUy8qhuU7BvQPbZyDDMPI2IaQFyLH331G/s320/braccio.jpg',
            'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEirQ_EBhpfgSOIHtSnTisrnulsVsQKDCfA7maV_jWVi98FbW5my7cv2MEFSSBdXtlotps9xMKRbiLGzukyWwSZj6c-I4S55qN4wRy0n4qKj9Q2kF9CLxo8SuvBpcvdnGCNepLk76Brc71u_BZ-fY_Uvp3net-rkhVV4xpsayHO6IZyu9wnNnc71ouPa_VPY/s320/braccio1.jpg'
        ],
        tags: ['Pick and Place', 'Voice Control', 'Arduino-Braccio']
    },
    '3': {
        title: 'Dobot Magician',
        description: '<p>The Dobot Magician project focuses on implementing advanced robotic manipulation capabilities including computer vision integration, 3D printing, laser engraving, and pick and place operations.</p><p>A key innovation in this project is the implementation of inverse kinematics algorithms that improve positioning accuracy and enable complex movement sequences. The computer vision system allows the robot to identify, sort, and manipulate objects autonomously.</p><p>The system has been used for educational purposes, small-scale manufacturing, and as a prototyping platform for robotic applications.</p>',
        tech: '<h4>Technologies Used:</h4><ul><li>Computer Vision algorithms</li><li>3D printing capabilities</li><li>Laser engraving functionality</li><li>Inverse Kinematics</li><li>Pick and place operation</li></ul>',
        links: '<a href="https://youtu.be/kFla514rnmY" class="btn" target="_blank">View Demo</a><a href="https://github.com/dilip-2006/dobot" class="btn" target="_blank">GitHub Repository</a>',
        images: [
            'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiWry8zEHQVSvw8w4WIi__JGHGAPb5FgB4aVyWDWFSbz8ZZVP8c2ALbT7VrkK32MYdcsUwERxhbF1GglARknMaNywHuO85_qmQww2ilrf7a7hPtJeDNQy572heNZ37tRDaomlHMHx2yFJZRz8-Fme4BYqvQ_0RK4p7liHbQp572tiMYlc-Fj9knn-mifF3A/s320/dobot0.jpg',
            'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgIZk1hHz5G0xQicTlPSpC_ea4nS1qFxb-ivHk0WC_dtdvHTjUwI1eR8GofwDFnrVmcvTRShGcqo3nKhiKag5D05cMF2ivAKX4m-vaEAJvb36WlxXVq7bpae0f3kUvRNk_1Jchy7xeFb7AwWKRi5Bt9CntFN8Vtb5FnsDR1CWgQsJOR3z6A5HgwUAok3c5s/s320/dobot1.jpg'
        ],
        tags: ['Computer Vision', '3d Printing,laser Engraving', 'pick and place', 'Object recognition', 'inverse Kinematics', 'Goal-Stack Algorithm.']
    },
    '4': {
        title: 'Human & Line Following Robots',
        description: '<p>This project involves the development of robots capable of following humans and navigating along predefined paths marked by lines. The robots use a combination of sensors and computer vision to track targets and maintain course.</p><p>The human-following functionality uses computer vision and machine learning to identify and track human subjects, maintaining an optimal following distance. The line-following capability utilizes infrared sensors to detect contrast differences and adjust steering accordingly.</p><p>These robots have applications in guided tours, automated luggage transport, and industrial material handling.</p>',
        tech: '<h4>Technologies Used:</h4><ul><li>Locomotion control systems</li><li>Reinforcement Learning algorithms</li><li>PyTorch for computer vision</li><li>PID control systems</li><li>Sensor fusion</li></ul>',
        links: '<a href="https://youtube.com/shorts/kBS-5c52lUU?feature=share" class="btn" target="_blank">Demonstration Video</a><a href="https://github.com/dilip-2006/human-linefollowing" class="btn" target="_blank">GitHub Repository</a>',
        images: [
            'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgNbYV6_KCCSiWrGhXPqgm4RzbIisO7l1pjbG3CXvP0d3DycKShfBfyfjcun7U-t8knaxzGq40w3c6cfFfFWdH3RBgscoUkFf4vJDjB_kK7j7hhBln3bqbNauIvzzUC-N4dw-sFey1InQe0RpwaT5PryPrnnpuIJTY64W9EtsWIaNbc39D-OVAfCEM0LCk/s320/human1.jpg',
            'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhzWNF29__YC3Jv4xQJ8wUU3Kuye7VElFKoKbH0SX-2_dvOVzVtAGF20zUZVx5w2A6vCwfLnLpyhXxYSY2xHjImcGvCgt4Y2x3Ri1HJ_iZ2ATuFrw5VWVVxEXuaUFBG1F5sA_eZscfbpPLCkBdp255D2Pe6vq1tmRAA8Jn-TeeQ_2uoPsGFIuj3ayb5vUI/w400-h180/huma.jpg',

        ],
        tags: ['Sensor Integration', 'Arduino', 'Embedded Systems']
    },
    '5': {
        title: 'TurtleBot',
        description: '<p>The TurtleBot project focuses on implementing and extending the capabilities of this popular ROS-based mobile robot platform. The implementation includes navigation, mapping, and interaction features using ROS infrastructure.</p><p>The system demonstrates autonomous navigation in unknown environments using SLAM techniques for mapping and localization. Additional features include object recognition, voice command processing, and teleoperation capabilities.</p><p>This platform serves as both an educational tool for learning ROS and robotics concepts and as a practical solution for indoor navigation and monitoring tasks.</p>',
        tech: '<h4>Technologies Used:</h4><ul><li>ROS (Robot Operating System)</li><li>SLAM for mapping</li><li>Path planning algorithms</li><li>Obstacle avoidance</li><li>Sensor integration</li></ul>',
        links: '<a href="https://github.com/dilip-2006/agv-pika" class="btn" target="_blank">Project Repository</a>',
        images: [
            'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgQcCclMK2V7MGH09YZuV5OtsLRf7AqBMe4U1HRuh-hW50vXZB-gmyv-dulVQG0FB-PsMdQh_V-90bY91SdkNj0__S59QqpT6sTP-f2jEOpVtU21_GkF1NointZyBopu5tECn4Zw02oYf1PMWjzEQx5AOMB3GvFP9YSDDHGKJJ1UGt-H6xPSccwRwfm5s1d/s320/turte.jpg',
            'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhF-H4NB6klfqpD9aG22ogGmAeC0D6y2MhxeXRmTJp_8wtoo_iJl-BdYrnad20mXT1S3ev58fR1mLbTO6jCsgNBZarYTbwZm-10dzWlpJsVT4OX6xTgPQH8vde7b328mxXTdAgCIWvlQ2TJ-46tujPr9SOzEXz61uPmhppTlQ-y1dAVI4sWD6440qjfCaPn/s320/map.jpg'
        ],
        tags: ['Locomotion', 'Ros2', 'Mobile robot', 'Slam,Odom']
    },
    '6': {
        title: 'FPV Drone',
        description: '<p>This First Person View (FPV) drone project encompasses the design, construction, and operation of custom racing and photography drones. The drones feature high-performance flight characteristics with real-time video transmission capabilities.</p><p>Key aspects include custom frame design, power system optimization, flight controller tuning, and camera system integration. The project explores both manual flight control techniques and semi-autonomous features.</p><p>The drones have been used for aerial photography, competitive racing, and as platforms for testing new flight control algorithms.</p>',
        tech: '<h4>Technologies Used:</h4><ul><li>Flight controller programming</li><li>PID tuning</li><li>Real-time video transmission</li><li>Power system optimization</li><li>Custom frame design</li></ul>',
        images: [
            'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgSSBdtGFY_-mCo6_-na73rMt4t_0FjBxuP8dZkLVMA-AxLpGoukC84o6-SjVC8V0vN8qIt3JLry1T754UCpk6qt19RSjWMdp8rBV161wSdUksoZIvVjk0Os0hpfCGl-Sxbj2Q5ei-1OKOM5XoB7PltFhBun8A0wYqPOrKRSdkmzRZH_cgiw2rK0nhzjNem/s320/drg.jpg',
            'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEipZ4D3ekmKEe3lszyirooWh_oLiAImBGmUqmc63To1MaDr1zA6KD80kQz5d1Dp2R4KoWuPpQjEHfjgx22imV42GLCuMR_heKsW52kxfWADI_jVsG2WCbwpWWuuhoyRSZ6mZwhbCYqcA0EsnfaW1rqmus2f0JyS-EerIwTJH6WN3O-KGeNDMuzTwXlz73tO/s320/dr.jpg'
        ],
        tags: ['Designing', '3d printing', 'Assembly', 'Exploration & inspection']
    },
    '7': {
        title: 'Computer Vision Applications',
        description: '<p>This project explores the implementation of various computer vision techniques for robotic applications. The focus is on object detection, tracking, and classification for enabling robots to understand and interact with their environment.</p><p>The system utilizes OpenCV and deep learning frameworks to process visual information and extract meaningful data. Applications include gesture recognition, object manipulation, and autonomous navigation based on visual cues.</p><p>The project demonstrates practical implementations of computer vision in robotics, from basic image processing to advanced neural network-based solutions.</p>',
        tech: '<h4>Technologies Used:</h4><ul><li>OpenCV for image processing</li><li>Deep learning for object detection</li><li>Feature extraction algorithms</li><li>Camera calibration techniques</li><li>Real-time processing optimization</li></ul>',
        links: '<a href="https://youtu.be/wwx2VRfdbfg" class="btn" target="_blank">demo video</a><a href="https://github.com/dilip-2006/color-detection-teach" class="btn" target="_blank">Github Repository</a>',
        images: [
            'https://images.deepai.org/glossary-terms/068e67da35a647bd8f99b0148d7f99aa/Computer-Vision.png',
            'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiS6jae5w5b7iteT1LuSoYwNtR00WOTLlezHG3pEpuEjX80KDLx6jnNBJeYXqqaawT4cr_o2VVvg5wsbXcxUSTJyMl_CwxiVkUNY9__irmZhIVvLYsjtI9HS6SMwRyc1-HCxZZs06ZmbTS1rDfSFUj8xKFQv686z5pZpMcL8JT-F9qRrFLy3MMiTGmhFIE/s320/detection.png'
        ],
        tags: ['RGB ,HSV', 'color teaching.', 'color detection.', 'Position calibiration.']
    },
    '8': {
        title: 'Autonomous Incineration Bot',
        description: '<p>Reduction in Landfill Usage: By efficiently incinerating waste, AUTOFIRE significantly reduces the amount of waste that ends up in landfills, helping to preserve valuable land resources.</p><p>Decreased Land Pollution: Minimizing landfill dependency directly reduces soil and groundwater contamination, contributing to a healthier environment.</p><p>Minimized Air Pollution: Equipped with advanced emission control technology, AUTOFIRE ensures that the incineration process releases minimal pollutants, greatly reducing the impact on air quality.</p>',
        tech: '<h4>Technologies Used:</h4><ul><li>OpenCV for image processing</li><li>Deep learning for object detection</li><li>Feature extraction algorithms</li><li>Camera calibration techniques</li><li>Real-time processing optimization</li></ul>',
        links: '<a href="https://youtu.be/8jbFfYfPXYc" class="btn" target="_blank">Demo Video 1</a><a href="https://youtu.be/fOJbl6jEKfA" class="btn" target="_blank">Demo Video 2</a>',
        images: [
            'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhJL8UYhw6nd0RNZD_PNZSk9pdnA938MtF0Xo05AVa9QEsVw5sxRzyCpsD1CgXs726WpPtrXcmIN8rGPIwfp6ZNE5Pa-XCu1ntHNlIZ1MsAgCYq02vUhjHRhUuvMJJfBe743rP96H5pfpaRrfx0mPISBvG0qtglu8kBUqwfhqAWXzxFn3OV_Ln9EnmLvUUG/s320/WhatsApp%20Image%202025-05-18%20at%2011.50.23_ff151659.jpg',
            'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjr8pTE-S8XxyTCckp1dTtUG3dV-t-o55CdOzCD_QhFfJ0CD484RzJcuuKuz-kNCph5DppbiMFVE664B36eG-cyQ0RftyxCS8Cc5-gEIyaxC6TV6lXT55Fd5h0vxG6sGSxu6FR6d9wojSGTbZe6ASEB-8gp2K8nCN-0IJLE91-pw5MRnviQftCIde0_m5tD/s320/WhatsApp%20Image%202025-05-18%20at%2011.50.23_8fb7d416.jpg'
        ],
        tags: ['Solidworks', 'Modeiling and simulation.', 'Incineration.', 'Environmental Sustainability.']
    }
};