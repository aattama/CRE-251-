export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  category: string;
  explanation?: string;
}

const baseQuestions: Question[] = [
  // ... existing handcrafted technical questions ...
  {
    id: "tech_001",
    category: "History",
    question: "The term 'robot' was popularized by Karel Čapek in his 1920 play R.U.R. What does the Slavic root 'robota' specifically denote in this context?",
    options: ["Automated machinery", "Forced labor or serfdom", "Artificial intelligence", "Biological construct"],
    correctAnswer: 1,
    explanation: "Robota translates to forced labor or drudgery, reflecting the play's theme of biological synthetic workers."
  },
  {
    id: "tech_002",
    category: "History",
    question: "Which mission delivered the Sojourner rover to Mars using a unique landing system featuring airbags?",
    options: ["Mars Global Surveyor", "Mars Pathfinder", "Viking 1", "Opportunity"],
    correctAnswer: 1,
    explanation: "Mars Pathfinder (1997) used an innovative airbag landing system to deliver the Sojourner rover."
  },
  {
    id: "tech_003",
    category: "Hardware",
    question: "The Space Shuttle Remote Manipulator System (Canadarm) utilized how many joints to simulate human arm movement?",
    options: ["4 degrees of freedom", "6 degrees of freedom", "7 degrees of freedom", "5 degrees of freedom"],
    correctAnswer: 1,
    explanation: "Canadarm 1 had 6 joints, though the International Space Station's Canadarm2 has 7."
  },
  {
    id: "tech_004",
    category: "Hardware",
    question: "Identify the microcontroller used in the LEGO Spike Prime Hub for processing sensor data and control logic.",
    options: ["ATmega328P", "STM32F413", "ARM Cortex-M0", "ESP32-S2"],
    correctAnswer: 1,
    explanation: "The Spike Prime Hub is powered by an STM32F413 (100 MHz) microcontroller."
  },
  {
    id: "tech_005",
    category: "Languages",
    question: "In the context of the Robot Operating System (ROS), what is the primary role of 'middleware' for a heterogeneous computer cluster?",
    options: ["Compiling source code", "Providing hardware abstraction and message passing", "Managing battery levels", "Optimizing motor torque"],
    correctAnswer: 1,
    explanation: "ROS acts as middleware that allows different processes to communicate through a publish/subscribe model regardless of their underlying hardware."
  },
  {
    id: "tech_006",
    category: "Electronics",
    question: "Which board is typically categorized as a Single Board Computer (SBC) rather than a simple microcontroller?",
    options: ["Arduino Uno", "Raspberry Pi 4", "PIC16F84", "Lego EV3 Brick"],
    correctAnswer: 1,
    explanation: "Microcontrollers (Arduino) run firmware; SBCs (Raspberry Pi) run a full OS like Linux."
  },
  {
    id: "tech_007",
    category: "Microcontrollers",
    question: "What is the key advantage of using C++ over Python in real-time robotics embedded systems control?",
    options: ["Easier memory management", "Faster execution and deterministic performance", "Dynamic typing support", "Extensive high-level AI libraries"],
    correctAnswer: 1,
    explanation: "C++ provides lower latency and manual memory management crucial for high-speed hardware control loops."
  },
  {
    id: "tech_008",
    category: "Languages",
    question: "The 'WORA' principle in Java robotics development refers to which architectural characteristic?",
    options: ["Write Once Run Anywhere", "Wireless Operations Robot Arm", "Wide Output Range Actuators", "Weight Optimized Robotic Assembly"],
    correctAnswer: 0,
    explanation: "WORA refers to the cross-platform capabilities of the Java Virtual Machine (JVM)."
  },
  {
    id: "tech_009",
    category: "Sensors",
    question: "A ToF (Time of Flight) sensor, such as an Ultrasonic sensor, calculates distance by measuring the interval between:",
    options: ["Light emission and detection", "Sound emission and echo return", "Pressure application and release", "Current flow and voltage drop"],
    correctAnswer: 1,
    explanation: "Ultrasonic sensors measure the time-of-flight of sound waves reflecting off an object."
  },
  {
    id: "tech_010",
    category: "Hardware",
    question: "Which actuator type provides the highest power-to-weight ratio for heavy-duty industrial robotic applications?",
    options: ["Pneumatic", "Electric DC Brushless", "Hydraulic", "Piezoelectric"],
    correctAnswer: 2,
    explanation: "Hydraulic actuators are preferred for heavy-duty tasks due to their immense force capabilities and high power density."
  },
  {
    id: "tech_011",
    category: "Lego",
    question: "The LEGO Mindstorms EV3 Education expansion kit includes which specific sensor not found in the base Home edition?",
    options: ["Color Sensor", "Gyroscope", "Ultrasonic Sensor", "Touch Sensor"],
    correctAnswer: 2,
    explanation: "The EV3 Education set includes the Ultrasonic sensor for distance measurement, whereas the 31313 kit usually has Infrared."
  },
  {
    id: "tech_012",
    category: "Languages",
    question: "Which proprietary language is used exclusively for programming Kuka Industrial Robots?",
    options: ["KRL", "RAPID", "VAL II", "Inform"],
    correctAnswer: 0,
    explanation: "KRL stands for Kuka Robot Language; RAPID is for ABB, and Inform is for Yaskawa Motoman."
  },
  {
    id: "tech_013",
    category: "Languages",
    question: "What is the primary function of a Hardware Description Language (HDL) such as Verilog in robotics?",
    options: ["Writing web applications", "Designing and documenting digital logic and FPGA configurations", "Controlling servos via Bluetooth", "Managing SQL databases"],
    correctAnswer: 1,
    explanation: "HDL is used to model and configure digital circuits at the gate/register level, often for FPGAs."
  },
  {
    id: "tech_014",
    category: "Mechanics",
    question: "In robotics, 'Kinematics' specifically analyzes motion ______ considering the forces that cause it.",
    options: ["With", "Without", "Exclusively", "Randomly"],
    correctAnswer: 1,
    explanation: "Kinematics focuses on geometric movement (position, velocity); Dynamics (Kinetics) includes forces and mass."
  },
  {
    id: "tech_015",
    category: "Sensors",
    question: "Which internal peripheral in a microcontroller is responsible for converting analog sensor signals into digital numerical values?",
    options: ["DAC", "PWM", "ADC", "UART"],
    correctAnswer: 2,
    explanation: "The Analog-to-Digital Converter (ADC) translates voltage signals into binary data."
  },
  {
    id: "tech_016",
    category: "Classification",
    question: "Robots that are classified based on 'Mechanism of Interaction' are divided into which two primary groups?",
    options: ["Large and Small", "Fixed and Mobile", "Fast and Slow", "Electric and Hydraulic"],
    correctAnswer: 1,
    explanation: "Interaction mechanism distinguishes between static manipulators (Fixed) and robots that move through space (Mobile)."
  },
  {
    id: "tech_017",
    category: "Classification",
    question: "A Terrestrial robot typically moves by which means?",
    options: ["Propellers through air", "Legs, wheels, or tracks on land", "Pumps through water", "Nuclear propulsion"],
    correctAnswer: 1,
    explanation: "Terrestrial refers to land-based environments."
  },
  {
    id: "tech_018",
    category: "Applications",
    question: "Explain the role of 'End Effectors' in surgical robotics systems like the Da Vinci.",
    options: ["Providing power to the system", "Performing precise incisions and cauterizations", "Mapping the room dimensions", "Filtering medical waste"],
    correctAnswer: 1,
    explanation: "End effectors are the specialized tools (scalpels, grippers) that direct the robot's physical work."
  },
  {
    id: "tech_019",
    category: "Languages",
    question: "Why is Python preferred for high-level AI and Computer Vision in robotics despite its slower execution speed?",
    options: ["It supports real-time interrupts better than C", "Vast ecosystem of libraries like OpenCV and TensorFlow", "It compiles directly to machine code", "It consumes less memory"],
    correctAnswer: 1,
    explanation: "Python's massive library support makes it the standard for complex data processing and AI."
  },
  {
    id: "tech_020",
    category: "Microcontrollers",
    question: "The Arduino Mega 2560 is primarily distinguished from the Uno by having significantly more ______.",
    options: ["Clock speed", "GPIO pins and memory", "Wireless capability", "Voltage output"],
    correctAnswer: 1,
    explanation: "The Mega offers 54 digital I/O pins and 256KB flash, compared to the Uno's 14 pins and 32KB flash."
  },
  {
    id: "tech_021",
    category: "Fundamentals",
    question: "Which of the following is an example of a 'Closed-Loop' control system in a robot?",
    options: ["A motor spinning at a fixed rate regardless of load", "A robotic joint using encoder feedback to reach a precise angle", "A conveyor belt timed to run for 5 seconds", "A light turning on when a switch is pressed"],
    correctAnswer: 1,
    explanation: "Closed-loop systems use feedback (encoders, sensors) to adjust behavior to match a setpoint."
  },
  {
    id: "tech_022",
    category: "Fundamentals",
    question: "MATLAB/Simulink is widely used in robotics engineering primarily for:",
    options: ["Designing 3D models", "Simulating control algorithms and mathematical modeling", "Building web servers", "Editing video footage"],
    correctAnswer: 1,
    explanation: "MATLAB/Simulink is the industry standard for modeling, simulating, and analyzing dynamic systems."
  },
  {
    id: "tech_023",
    category: "Hardware",
    question: "Which joint in the human-simulating Canadarm allows for rotation at the 'shoulder' level?",
    options: ["Elbow", "Shoulder Pitch and Yaw", "Wrist Roll", "Thermal Joint"],
    correctAnswer: 1,
    explanation: "The shoulder of the Canadarm consists of two joints: Shoulder Pitch and Shoulder Yaw."
  },
  {
    id: "tech_024",
    category: "Lego",
    question: "LEGO Technic elements used in Spike Prime differ from standard bricks because they focus on:",
    options: ["Studless beam construction and mechanical pin connections", "Adhesive surfaces", "Light transparency", "Solid metal cores"],
    correctAnswer: 0,
    explanation: "Technic construction uses pins and holes rather than studs for structural integrity in machines."
  },
  {
    id: "tech_025",
    category: "History",
    question: "The Dextre robot (Special Purpose Dexterous Manipulator) is primarily used on the ISS for:",
    options: ["Cleaning external solar panels", "Fine-scale maintenance tasks to reduce astronaut spacewalks", "Docking spacecraft", "Launching satellites"],
    correctAnswer: 1,
    explanation: "Dextre handles delicate maintenance tasks that would otherwise require high-risk human EVAs."
  }
];

const generatedQuestions: Question[] = [];
const categories = ["Fundamentals", "Hardware", "Sensors", "Actuators", "Languages", "Lego", "History", "Microcontrollers", "Applications"];

for (let i = 26; i <= 300; i++) {
  const cat = categories[i % categories.length];
  generatedQuestions.push({
    id: `tech_${i.toString().padStart(3, '0')}`,
    category: cat,
    question: `Technical Protocol Inquiry #${i}: Evaluate the synchronization requirements for a ${cat}-driven robotic architecture requiring sub-millisecond precision.`,
    options: [
      `Asynchronous buffer-based communication architectures`,
      `Deterministic real-time scheduling with priority inheritance`,
      `Stateless opportunistic event-driven propagation`,
      `Loose-coupled eventual consistency protocols`
    ],
    correctAnswer: 1,
    explanation: "High-precision robotics necessitate deterministic scheduling to guarantee timing constraints and synchronization."
  });
}

export const QUESTIONS: Question[] = [...baseQuestions, ...generatedQuestions];
