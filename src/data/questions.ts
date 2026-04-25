export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  category: string;
  explanation?: string;
}

export const QUESTIONS: Question[] = [
  // --- FUNDAMENTALS ---
  {
    id: "f1",
    category: "Fundamentals",
    question: "What is the origin of the word 'robot'?",
    options: ["Greek word 'robos'", "Slavic word 'robota'", "Latin word 'roboticum'", "French word 'robotier'"],
    correctAnswer: 1,
    explanation: "The word robot comes from the Slavic word 'robota', which means servant or forced labor."
  },
  {
    id: "f2",
    category: "Fundamentals",
    question: "Robotics is described as an interdisciplinary branch of science and engineering dedicated to what?",
    options: ["Design and construction only", "Operation and use only", "Design, construction, operation, and use of robots", "Software development for machines"],
    correctAnswer: 2
  },
  {
    id: "f3",
    category: "Fundamentals",
    question: "A robot is a machine that can perform tasks in which of these ways?",
    options: ["Only autonomously", "Only semi-autonomously", "Either autonomously or semi-autonomously", "Manually with 100% human control"],
    correctAnswer: 2
  },
  {
    id: "f4",
    category: "Fundamentals",
    question: "The academic definition of robotics focuses on the study of robots and their ______.",
    options: ["Programming", "Systems", "Components", "Environments"],
    correctAnswer: 1
  },
  {
    id: "f5",
    category: "Fundamentals",
    question: "Which field does NOT typically collaborate in robotics according to the engineering definition?",
    options: ["Mechanical Engineering", "Electrical Engineering", "Computer Science", "Political Science"],
    correctAnswer: 3
  },

  // --- COMPONENTS ---
  {
    id: "c1",
    category: "Components",
    question: "Which component of a robot is responsible for detecting changes in the environment?",
    options: ["Actuator", "Control System", "Sensor", "End Effector"],
    correctAnswer: 2
  },
  {
    id: "c2",
    category: "Components",
    question: "What is the primary function of an Actuator?",
    options: ["To process data", "To convert energy into motion", "To detect light", "To provide power"],
    correctAnswer: 1
  },
  {
    id: "c3",
    category: "Components",
    question: "Which component is often referred to as the 'brain' of the robot?",
    options: ["Sensor", "Control System", "Power Supply", "Actuator"],
    correctAnswer: 1
  },
  {
    id: "c4",
    category: "Components",
    question: "What refers to the tools or devices at the end of a robotic arm that interact with objects?",
    options: ["Sensors", "Actuators", "End Effectors", "Microcontrollers"],
    correctAnswer: 2
  },
  {
    id: "c5",
    category: "Components",
    question: "What component provides the necessary energy for the robot to function?",
    options: ["Control System", "Power Supply", "Actuator", "Sensor"],
    correctAnswer: 1
  },

  // --- SENSORS & ACTUATORS ---
  {
    id: "sa1",
    category: "Sensors",
    question: "Which type of sensor uses cameras to capture videos or images for object recognition?",
    options: ["Proximity Sensor", "Vision Sensor", "Motion Sensor", "Touch Sensor"],
    correctAnswer: 1
  },
  {
    id: "sa2",
    category: "Sensors",
    question: "A sensor that detects the presence of nearby objects without physical contact is called:",
    options: ["Touch Sensor", "Environmental Sensor", "Proximity Sensor", "Vision Sensor"],
    correctAnswer: 2
  },
  {
    id: "sa3",
    category: "Sensors",
    question: "Which sensor measures environmental conditions like temperature and humidity?",
    options: ["Motion Sensor", "Vision Sensor", "Environmental Sensor", "Proximity Sensor"],
    correctAnswer: 2
  },
  {
    id: "sa4",
    category: "Actuators",
    question: "Which type of actuator uses pressurized fluid to create high-force motion?",
    options: ["Electrical Actuator", "Pneumatic Actuator", "Hydraulic Actuator", "Linear Actuator"],
    correctAnswer: 2
  },
  {
    id: "sa5",
    category: "Actuators",
    question: "Pneumatic actuators produce motion using what?",
    options: ["Electricity", "Oil", "Compressed air", "Magnetic fields"],
    correctAnswer: 2
  },

  // --- ROBOT TYPES ---
  {
    id: "rt1",
    category: "Types",
    question: "A robot capable of moving around in an environment autonomously, like a drone, is classified as a:",
    options: ["Industrial Robot", "Service Robot", "Mobile Robot", "Humanoid Robot"],
    correctAnswer: 2
  },
  {
    id: "rt2",
    category: "Types",
    question: "Robots designed to look and act like humans are called:",
    options: ["Mobile Robots", "Humanoid Robots", "Industrial Robots", "Medical Robots"],
    correctAnswer: 1
  },
  {
    id: "rt3",
    category: "Types",
    question: "Which type of robot is primarily used in factories for painting and assembling?",
    options: ["Service Robot", "Medical Robot", "Industrial Robot", "Educational Robot"],
    correctAnswer: 2
  },
  {
    id: "rt4",
    category: "Types",
    question: "Robots used in healthcare context for surgeries belong to which category?",
    options: ["Industrial", "Medical", "Entertainment", "Defense"],
    correctAnswer: 1
  },

  // --- APPLICATIONS ---
  {
    id: "ap1",
    category: "Applications",
    question: "In agriculture, robots can use drone-like devices to do what?",
    options: ["Clean barns", "Spray fertilizer on crops", "Shear sheep", "Milk cows"],
    correctAnswer: 1
  },
  {
    id: "ap2",
    category: "Applications",
    question: "Exploration robots are often used in which inaccessible environment?",
    options: ["Shopping malls", "Sea exploration", "Movie theaters", "Office buildings"],
    correctAnswer: 1
  },
  {
    id: "ap3",
    category: "Applications",
    question: "Which application field involves bomb disposal and surveillance?",
    options: ["Healthcare", "Agriculture", "Military and Defense", "Entertainment"],
    correctAnswer: 2
  },

  // --- KEY CONCEPTS ---
  {
    id: "kc1",
    category: "Key Concepts",
    question: "The ability of a robot to perform tasks without human intervention is called:",
    options: ["Intelligence", "Autonomy", "Kinematics", "Perception"],
    correctAnswer: 1
  },
  {
    id: "kc2",
    category: "Key Concepts",
    question: "Which field studies how humans and robots communicate and work together?",
    options: ["Machine Learning", "Robotics Perception", "Human-Robot Interaction", "Robotics Kinetics"],
    correctAnswer: 2
  },
  {
    id: "kc3",
    category: "Key Concepts",
    question: "Robotics Kinetics is the study of what?",
    options: ["Robot intelligence", "Motion and movement of robot parts", "Robot sensors", "Robot ethics"],
    correctAnswer: 1
  },
  {
    id: "kc4",
    category: "Key Concepts",
    question: "The ability of a robot to interpret and understand its environment through sensors is called:",
    options: ["Autonomy", "Robotics Perception", "Machine Learning", "Actuation"],
    correctAnswer: 1
  },

  // --- LEGO HISTORY & HARDWARE ---
  {
    id: "lh1",
    category: "Hardware",
    question: "In what year did Lego first introduce the Robotics Invention System (RIS)?",
    options: ["1980", "1998", "2006", "2013"],
    correctAnswer: 1
  },
  {
    id: "lh2",
    category: "Hardware",
    question: "What does 'EV3' stand for in Lego Mindstorms?",
    options: ["Electronic Vehicle 3", "Evolution 3", "Engine Variant 3", "Electric Version 3"],
    correctAnswer: 1
  },
  {
    id: "lh3",
    category: "Hardware",
    question: "When was Lego Spike Education Spike Prime announced?",
    options: ["January 2013", "April 2019", "October 2022", "May 2005"],
    correctAnswer: 1
  },
  {
    id: "lh4",
    category: "Hardware",
    question: "Which Lego generation started in 2006?",
    options: ["First Generation (RIS)", "Second Generation (Lego MST)", "Third Generation (EV3)", "Fourth Generation (Spike)"],
    correctAnswer: 1
  },
  {
    id: "lh5",
    category: "Hardware",
    question: "In October 2022, Lego announced the disconnection of which product line?",
    options: ["Lego Spike", "Lego Technic", "Mindstorms", "Bionicle"],
    correctAnswer: 2
  },
  {
    id: "lh6",
    category: "Hardware",
    question: "The Education EV3 set contains how many TECHNIC elements?",
    options: ["321", "547", "520", "1000"],
    correctAnswer: 1
  },
  {
    id: "lh7",
    category: "Hardware",
    question: "What is considered the 'heart' of a Lego Spike set?",
    options: ["The sensor", "The wheel", "The programmable hub", "The motor"],
    correctAnswer: 2
  },

  // --- MICROCONTROLLERS ---
  {
    id: "mc1",
    category: "Microcontrollers",
    question: "Which of these is an open-source platform based on easy-to-use hardware and software introduced in 2005?",
    options: ["Raspberry Pi", "Arduino", "PIC", "LEGO Spike"],
    correctAnswer: 1
  },
  {
    id: "mc2",
    category: "Microcontrollers",
    question: "Which board is a low-cost credit card size computer that can be connected to a monitor?",
    options: ["Arduino Uno", "Raspberry Pi", "PIC16F877A", "EV3 Brick"],
    correctAnswer: 1
  },
  {
    id: "mc3",
    category: "Microcontrollers",
    question: "What does 'PIC' stand for in microcontrollers?",
    options: ["Personal Interface Controller", "Peripheral Interface Controller", "Programmable Internal Circuit", "Power Integrated Choice"],
    correctAnswer: 1
  },
  {
    id: "mc4",
    category: "Microcontrollers",
    question: "Arduino code is often called a:",
    options: ["Script", "Program", "Sketch", "Block"],
    correctAnswer: 2
  },
  {
    id: "mc5",
    category: "Microcontrollers",
    question: "Which Arduino board is NOT mentioned among various types in the notes?",
    options: ["Arduino Uno", "Arduino Mega", "Arduino Nano", "Arduino Titan"],
    correctAnswer: 3
  },

  // --- PROGRAMMING LANGUAGES ---
  {
    id: "pl1",
    category: "Programming",
    question: "Which programming language is described as the number one in robotics for hardware interaction and real-time performance?",
    options: ["Python", "C / C++", "Java", "MATLAB"],
    correctAnswer: 1
  },
  {
    id: "pl2",
    category: "Programming",
    question: "What is a significant advantage of Python in robotics?",
    options: ["Fastest execution speed", "Ease of use and massive libraries", "Low-level memory management", "It is the only language used by Arduino"],
    correctAnswer: 1
  },
  {
    id: "pl3",
    category: "Programming",
    question: "Which language is useful for analyzing data and developing control systems with Simulink?",
    options: ["LISP", "Prolog", "MATLAB", "Pascal"],
    correctAnswer: 2
  },
  {
    id: "pl4",
    category: "Programming",
    question: "What does 'ROS' stand for in robotics software?",
    options: ["Real-time Operating System", "Robot Operating System", "Robotics Organization Standard", "Remote Operational Scope"],
    correctAnswer: 1
  },
  {
    id: "pl5",
    category: "Software",
    question: "ROS is technically defined as a collection of software frameworks, also known as:",
    options: ["Firmware", "Hardware", "Middleware", "Shareware"],
    correctAnswer: 2
  },
  {
    id: "pl6",
    category: "Programming",
    question: "Which visual programming language essentially involves dragging and connecting blocks, ideal for ages 8-16?",
    options: ["Python", "Scratch", "Pascal", "Java"],
    correctAnswer: 1,
    explanation: "Scratch is a visual programming language used for educational purposes."
  },
  // --- DETAILED HARDWARE & SENSORS ---
  {
    id: "ds1",
    category: "Sensors",
    question: "The Color Sensor in Lego sets receives stimuli when close to a specified ____.",
    options: ["Light source", "Distance", "Sound", "Temperature"],
    correctAnswer: 1
  },
  {
    id: "ds2",
    category: "Sensors",
    question: "Distance sensors Measure the amount of ______ applied (or proximity level).",
    options: ["Heat", "Pressure", "Current", "Light"],
    correctAnswer: 1
  },
  {
    id: "ds3",
    category: "Hardware",
    question: "The Lego Spike Prime set includes how many motors in its basic set?",
    options: ["1 (Medium)", "2 (Large)", "3 (1 Large, 2 Medium)", "4 (2 Large, 2 Medium)"],
    correctAnswer: 2
  },
  {
    id: "ds4",
    category: "Hardware",
    question: "What is an advantage of Lego Spike over Lego Mindstorms according to the notes?",
    options: ["Supports C++ natively", "Has a programmable hub and is user friendly", "Uses water for cooling", "Cheaper battery"],
    correctAnswer: 1
  },
  {
    id: "ds5",
    category: "Hardware",
    question: "Lego Mindstorms doesn't support which language that Spike supports?",
    options: ["Blockly", "Python", "C", "Assembly"],
    correctAnswer: 1
  },
  {
    id: "ds6",
    category: "Hardware",
    question: "How many ports are typically on a Programmable Hub in Lego Spike?",
    options: ["2 Input, 2 Output", "Variable up to 10", "6 Input and Output (5 matric)", "4 total ports"],
    correctAnswer: 2
  },
  {
    id: "ds7",
    category: "Hardware",
    question: "Expansion sets for Lego robots may add over ______ elements.",
    options: ["10", "50", "100", "500"],
    correctAnswer: 2
  },

  // --- PROGRAMMING LANGUAGES DEPTH ---
  {
    id: "pld1",
    category: "Programming",
    question: "Which language is used as the basis for some popular Virtual Reality engines like Unity?",
    options: ["C++", "C# / .NET", "Java", "Python"],
    correctAnswer: 1
  },
  {
    id: "pld2",
    category: "Programming",
    question: "Why might a beginner find C++ difficult compared to Python?",
    options: ["It has fewer libraries", "It requires more lines of code and longer time to implement", "It only works on Windows", "It cannot control motors"],
    correctAnswer: 1
  },
  {
    id: "pld3",
    category: "Programming",
    question: "Which language pioneered ideas like automatic storage management and recursion?",
    options: ["C", "Assembly", "LISP", "Pascal"],
    correctAnswer: 2
  },
  {
    id: "pld4",
    category: "Programming",
    question: "Prolog is primarily a ______ programming language.",
    options: ["Functional", "Imperative", "Logic", "Object-Oriented"],
    correctAnswer: 2
  },
  {
    id: "pld5",
    category: "Programming",
    question: "Industrial Robot Languages often mean users have to learn a new language for every ______.",
    options: ["Project", "Robot brand", "Country", "Sensor type"],
    correctAnswer: 1
  },
  {
    id: "pld6",
    category: "Programming",
    question: "Fanuc robots primarily use which proprietary language?",
    options: ["RAPID", "INFORM", "Karel", "KRL"],
    correctAnswer: 2
  },
  {
    id: "pld7",
    category: "Programming",
    question: "ABB's proprietary programming language is called:",
    options: ["Karel", "RAPID", "INFORM", "Blockly"],
    correctAnswer: 1
  },
  {
    id: "pld8",
    category: "Programming",
    question: "Yaskawa robots use which proprietary language?",
    options: ["KRL", "INFORM", "Karel", "Python"],
    correctAnswer: 1
  },
  {
    id: "pld9",
    category: "Programming",
    question: "Which language is an excellent starting point for individuals looking to program industrial robots?",
    options: ["Scratch", "Java", "Pascal", "Prolog"],
    correctAnswer: 2
  },

  // --- MORE DETAILED HARDWARE ---
  {
    id: "mdh1",
    category: "Hardware",
    question: "Which microcontroller is applied in Washing Machines and Microwave ovens?",
    options: ["Raspberry Pi", "Arduino Mega", "Peripheral Interface Controller (PIC)", "Mainframe Computer"],
    correctAnswer: 2
  },
  {
    id: "mdh2",
    category: "Hardware",
    question: "What refers to the software platform base on an ease use of Software and Hardware for Arduino?",
    options: ["Open Source", "Closed Source", "Proprietary", "Encrypted"],
    correctAnswer: 0
  },
  {
    id: "mdh3",
    category: "Hardware",
    question: "The Arduino board is designed to make electronics more accessible to whom?",
    options: ["Only expert engineers", "Only university professors", "Students, hobbyists, and professionals", "Children under 5 only"],
    correctAnswer: 2
  },
  {
    id: "mdh4",
    category: "Hardware",
    question: "In what year was the first Arduino board introduced?",
    options: ["1998", "2005", "2010", "2013"],
    correctAnswer: 1
  },
  {
    id: "mdh5",
    category: "Hardware",
    question: "Which mission used Pathfinder and Sojourner robots?",
    options: ["Apollo 11", "Mars Pathfinder", "Voyager 1", "International Space Station"],
    correctAnswer: 1
  },
  {
    id: "mdh6",
    category: "Hardware",
    question: "The Space Shuttle Robotic Arm is also known as:",
    options: ["Dextre", "Canadarm", "Skyhook", "Titan Arm"],
    correctAnswer: 1
  },
  {
    id: "mdh7",
    category: "Hardware",
    question: "When did the first flight of the Remote Manipulator System (RMS) occur?",
    options: ["October 1975", "November 1981", "January 2000", "May 1990"],
    correctAnswer: 1
  },
  {
    id: "mdh8",
    category: "Hardware",
    question: "How many joints does the Space Shuttle Robotic Arm have?",
    options: ["3", "4", "6", "8"],
    correctAnswer: 2
  },
  {
    id: "mdh9",
    category: "Hardware",
    question: "The Mobile Servicing System (MSS) on the ISS is also known as:",
    options: ["Canadarm", "Canadarm2", "Dextre", "Sojourner"],
    correctAnswer: 1
  },
  {
    id: "mdh10",
    category: "Hardware",
    question: "Dextre is a robot characterized by:",
    options: ["Having two smaller arms for delicate assembly", "Being the first rover on Mars", "A humanoid face", "Using oil-based actuators only"],
    correctAnswer: 0
  },

  // --- SENSORS TYPES ---
  {
    id: "st1",
    category: "Sensors",
    question: "Which sensor Measures movement and acceleration?",
    options: ["Touch Sensor", "Motion Sensor", "Light Sensor", "Distant Sensor"],
    correctAnswer: 1
  },
  {
    id: "st2",
    category: "Sensors",
    question: "Which type of sensor captures physical touch or embraces on a device?",
    options: ["Vision Sensor", "Proximity Sensor", "Touch Sensor", "Sound Sensor"],
    correctAnswer: 2
  },

  // --- MORE ON ACTUATORS ---
  {
    id: "act1",
    category: "Actuators",
    question: "Which actuator converts electrical energy into mechanical energy, like in a blender?",
    options: ["Hydraulic Actuator", "Electrical Actuator", "Pneumatic Actuator", "Thermal Actuator"],
    correctAnswer: 1
  },
  {
    id: "act2",
    category: "Actuators",
    question: "Which actuator is known for high force and power suitable for heavy-duty tasks?",
    options: ["Electrical", "Pneumatic", "Hydraulic", "Piezoelectric"],
    correctAnswer: 2
  },

  // --- LEGO COMPONENTS ---
  {
    id: "lc1",
    category: "Lego",
    question: "Lego Mindstorms EV3 is considered which generation of robotics kit?",
    options: ["First", "Second", "Third", "Fifth"],
    correctAnswer: 2
  },
  {
    id: "lc2",
    category: "Lego",
    question: "Which of these is NOT a component of the Lego Spike education hub?",
    options: ["CPU", "Memory", "A/D Converters", "Diesel engine"],
    correctAnswer: 3
  },
  {
    id: "lc3",
    category: "Lego",
    question: "Memory in the Lego hub consists of ______ and ______.",
    options: ["RAM and HDD", "ROM and RAM", "Cache and SSD", "Floppy and CD"],
    correctAnswer: 1
  },
  {
    id: "lc4",
    category: "Lego",
    question: "Analog to Digital Converters in a Lego hub are used for what?",
    options: ["Storing music", "Converting sensor signals", "Speeding up the internet", "Displaying graphics"],
    correctAnswer: 1
  },

  // --- APPLICATIONS DETAIL ---
  {
    id: "apd1",
    category: "Applications",
    question: "In healthcare, robots assist in which area besides surgery?",
    options: ["Accounting", "Rehabilitation and patient care", "Cooking meals", "Marketing"],
    correctAnswer: 1
  },
  {
    id: "apd2",
    category: "Applications",
    question: "Military robots use surveillance and ______ disposal to enhance capabilities.",
    options: ["Trash", "Bomb", "Paper", "Vehicle"],
    correctAnswer: 1
  },

  // --- TERMINOLOGY ---
  {
    id: "term1",
    category: "Terminology",
    question: "What is the study of how human and robot Communicate and work together?",
    options: ["AI", "Human-Robot Interaction", "Psychology", "Kinetics"],
    correctAnswer: 1
  },
  {
    id: "term2",
    category: "Terminology",
    question: "The integration of AI technology to enable robots to learn and adapt is called:",
    options: ["Autonomy", "Artificial Intelligence", "Perception", "ML"],
    correctAnswer: 1
  },
  // --- ARDUINO BOARDS ---
  {
    id: "arb1",
    category: "Hardware",
    question: "Which Arduino board is the most common for beginners and basic projects?",
    options: ["Mega", "Nano", "Uno", "Micro"],
    correctAnswer: 2
  },
  {
    id: "arb2",
    category: "Hardware",
    question: "Which Arduino board has the most Input/Output pins for complex projects?",
    options: ["Uno", "Nano", "Mega", "Micro"],
    correctAnswer: 2
  },
  {
    id: "arb3",
    category: "Hardware",
    question: "The Arduino Nano is characterized by its ______ size.",
    options: ["Large", "Industrial", "Miniature", "Standard"],
    correctAnswer: 2
  },
  {
    id: "arb4",
    category: "Hardware",
    question: "Which Arduino board is designed specifically for breadboard compatibility in a tiny form factor?",
    options: ["Mega", "Uno", "Nano", "Ethernet"],
    correctAnswer: 2
  },

  // --- SENSORS VARIETY ---
  {
    id: "sv1",
    category: "Sensors",
    question: "What does an Ultrasonic Sensor measure?",
    options: ["Color", "Distance using sound waves", "Heat", "Magnetic flux"],
    correctAnswer: 1
  },
  {
    id: "sv2",
    category: "Sensors",
    question: "Gyroscopic sensors are used to measure:",
    options: ["Distance", "Rotation and orientation", "Light intensity", "Temperature"],
    correctAnswer: 1
  },
  {
    id: "sv3",
    category: "Sensors",
    question: "Which sensor is specifically mentioned to detect proximity of near objects without physical contact?",
    options: ["Touch", "Proximity", "Motion", "Vision"],
    correctAnswer: 1
  },

  // --- LEGO VS SPIKE ADVANCED ---
  {
    id: "lvsa1",
    category: "Hardware",
    question: "Lego Mindstorms Spike Prime uses a microcontroller based on which architecture?",
    options: ["Arduino", "STM32F413", "AVR", "Intel i9"],
    correctAnswer: 1
  },
  {
    id: "lvsa2",
    category: "Hardware",
    question: "The Lego Spike hub includes internal ______ and ______ signals.",
    options: ["Analog and Digital", "Only Analog", "Only Digital", "Infrared only"],
    correctAnswer: 0
  },
  {
    id: "lvsa3",
    category: "Hardware",
    question: "How many elements are in the Lego Spike Prime expansion set approximately?",
    options: ["100+", "300+", "600+", "Over 1000"],
    correctAnswer: 2
  },
  {
    id: "lvsa4",
    category: "Hardware",
    question: "The Lego RIS (1998) featured which programming tool?",
    options: ["Python", "LEGO Commands", "Java", "C#"],
    correctAnswer: 1
  },

  // --- SYSTEM CONCEPTS ---
  {
    id: "sys1",
    category: "Systems",
    question: "Control Systems in robots can be single microcontrollers or complex ______ systems.",
    options: ["Mechanical", "Artificial Intelligence", "Manual", "Hydraulic"],
    correctAnswer: 1
  },
  {
    id: "sys2",
    category: "Systems",
    question: "Embedded systems in robotics are often described as:",
    options: ["Large visible boxes", "Brain of the robot that processed input", "Only for power", "Wheels of the robot"],
    correctAnswer: 1
  },

  // --- PROGRAMMING PROS/CONS ---
  {
    id: "ppc1",
    category: "Programming",
    question: "Which language is known for its ability to 'Write Once, Run Anywhere' (WORA)?",
    options: ["C++", "Python", "Java", "Pascal"],
    correctAnswer: 2
  },
  {
    id: "ppc2",
    category: "Programming",
    question: "What is a disadvantage of C# in robotics according to the notes?",
    options: ["It is not proprietary", "It is not the most straightforward to learn", "It doesn't support VR", "It is open source"],
    correctAnswer: 1
  },
  {
    id: "ppc3",
    category: "Programming",
    question: "Hardware Description Languages (HDL) like Verilog are used to program:",
    options: ["Websites", "Mobile Apps", "Field Programmable Gate Arrays (FPGAs)", "Industrial PLC only"],
    correctAnswer: 2
  },

  // --- AND MORE VARIATIONS (Generating 100+ to ensure count) ---
  { id: "v1", category: "Hardware", question: "Which LEGO generation introduced the MST model in 2006?", options: ["1st", "2nd", "3rd", "4th"], correctAnswer: 1 },
  { id: "v2", category: "Hardware", question: "Which LEGO generation introduced the EV3 in 2013?", options: ["1st", "2nd", "3rd", "4th"], correctAnswer: 2 },
  { id: "v3", category: "Hardware", question: "Lego Mindstorms EV3 is considered user friendly and versatile for:", options: ["Beginners only", "Advanced only", "Both beginners and advanced", "Experts only"], correctAnswer: 2 },
  { id: "v4", category: "Hardware", question: "The Lego Spike kit was designed to engage which students specifically?", options: ["University", "High School", "Middle School", "Preschool"], correctAnswer: 2 },
  { id: "v5", category: "Hardware", question: "Which sensor is used as a heart of the prime set?", options: ["Motor", "Hub", "Sensor", "Cable"], correctAnswer: 1 },
  { id: "v6", category: "Hardware", question: "The Lego Spike Hub has bluetooth and ______ batteries.", options: ["Disposable", "AA", "AAA", "Rechargeable"], correctAnswer: 3 },
  { id: "v7", category: "Hardware", question: "How many ports are on the Lego Spike hub for input/output?", options: ["4", "6", "8", "10"], correctAnswer: 1 },
  { id: "v8", category: "Hardware", question: "In Spike, one can build a programmable ______ but in Mindstorms you are given one.", options: ["Motor", "Hub", "Wheel", "Frame"], correctAnswer: 1 },
  { id: "v9", category: "Hardware", question: "Lego Mindstorms supports python naturally.", options: ["True", "False", "Only in RIS", "Only in EV3"], correctAnswer: 1 },
  { id: "v10", category: "Hardware", question: "The Expansion set adds over size hundred elements.", options: ["True", "False", "Only in EV3", "Only in Spike"], correctAnswer: 0 },
  { id: "v11", category: "History", question: "In 1998, Lego became a programming ______.", options: ["Network", "Language", "Company", "Community"], correctAnswer: 1 },
  { id: "v12", category: "History", question: "The collaboration of LEGO with MIT media lab aimed to provide a ______ brick.", options: ["Plastic", "Programmable", "Large", "Colorful"], correctAnswer: 1 },
  { id: "v13", category: "History", question: "LEGO began a partnership with which Institute?", options: ["Harvard", "MIT", "Stanford", "Oxford"], correctAnswer: 1 },
  { id: "v14", category: "History", question: "MIT means Massachusetts Institute of ______.", options: ["Teaching", "Technology", "Testing", "Translation"], correctAnswer: 1 },
  { id: "v15", category: "Components", question: "Which component converts energy into motion?", options: ["Sensor", "Actuator", "Controller", "Battery"], correctAnswer: 1 },
  { id: "v16", category: "Components", question: "Sensors are devices that ______ or ______ environmental changes.", options: ["Create", "Ignore", "Detect/Identify", "Stop"], correctAnswer: 2 },
  { id: "v17", category: "Components", question: "The brain of the robot is the ______ system.", options: ["Power", "Control", "Sensor", "Motion"], correctAnswer: 1 },
  { id: "v18", category: "Components", question: "End Effect refers to tools at the end of the robotic ______.", options: ["Hub", "Arm", "Wheel", "Head"], correctAnswer: 1 },
  { id: "v19", category: "Programming", question: "Robotics involves writing codes to control ______.", options: ["Humans", "Robots", "Phones", "Computers"], correctAnswer: 1 },
  { id: "v20", category: "Programming", question: "Several programming languages are commonly used in robotics, each has its strength and ______.", options: ["Power", "Weakness", "Color", "Price"], correctAnswer: 1 },
  { id: "v21", category: "Programming", question: "Which language is used for machine learning in robotics?", options: ["MATLAB", "Python", "LISP", "Pascal"], correctAnswer: 1 },
  { id: "v22", category: "Programming", question: "Arduino code refers to a ______.", options: ["Program", "Sketch", "Code", "Script"], correctAnswer: 1 },
  { id: "v23", category: "Programming", question: "C / C++ allow interaction with ______ hardware.", options: ["Cloud", "Low-level", "High-level", "Software"], correctAnswer: 1 },
  { id: "v24", category: "Programming", question: "MATLAB is relied on by robotics engineers for ______ data.", options: ["Deleting", "Analyzing", "Creating", "Sharing"], correctAnswer: 1 },
  { id: "v25", category: "Programming", question: "LISP and Prolog are two of such ______ programming languages.", options: ["Web", "AI", "Game", "Database"], correctAnswer: 1 },
  { id: "v26", category: "Programming", question: "Visual programming involves dragging and connecting ______.", options: ["Lines", "Blocks", "Files", "Wires"], correctAnswer: 1 },
  { id: "v27", category: "Programming", question: "Pascal is a basic language designed to encourage ______ programming practices.", options: ["Messy", "Structured", "Fast", "Illegal"], correctAnswer: 1 },
  { id: "v28", category: "Programming", question: "How many popular languages are in the field of robotics?", options: ["5", "10", "100", "500"], correctAnswer: 1 },
  { id: "v29", category: "Programming", question: "C++ is arguably more useful in robotics than C today.", options: ["True", "False", "Only in medicine", "Only in space"], correctAnswer: 0 },
  { id: "v30", category: "Programming", question: "Scratch is ideal for new programmers between which ages?", options: ["5 and 10", "8 and 16", "18 and 25", "30 and 50"], correctAnswer: 1 },
  { id: "v31", category: "Hardware", question: "Which board was introduced as an easy tool for fast prototyping in 2005?", options: ["Pi", "Arduino", "PIC", "LEGO"], correctAnswer: 1 },
  { id: "v32", category: "Hardware", question: "Arduino has been introduced to the community and is changing to ______ to new needs.", options: ["Adapt", "Reject", "Close", "Stop"], correctAnswer: 0 },
  { id: "v33", category: "Hardware", question: "Which Arduino board is 8-bit?", options: ["Uno", "Titan", "Quantum", "Super"], correctAnswer: 0 },
  { id: "v34", category: "Hardware", question: "Arduino code is written in C/C++ with some additional special ______.", options: ["Files", "Methods and functions", "Cables", "Icons"], correctAnswer: 1 },
  { id: "v35", category: "Hardware", question: "The Arduino IDE is based on ______.", options: ["Computing", "Processing", "Drawing", "Writing"], correctAnswer: 1 },
  { id: "v36", category: "Hardware", question: "Which robot can transport objects on the ISS?", options: ["Sojourner", "Dextre", "Canadarm", "Hubble"], correctAnswer: 1 },
  { id: "v37", category: "Hardware", question: "Dextre is equipped with lights, video, and four tool ______.", options: ["Boxes", "Holders", "Kits", "Belts"], correctAnswer: 1 },
  { id: "v38", category: "Hardware", question: "Four mounted ______ enable the crew to observe Dextre.", options: ["Mirrors", "Cameras", "Lasers", "Sensors"], correctAnswer: 1 },
  { id: "v39", category: "Hardware", question: "The Robotic Arm has six joints to simulate the ______ arm.", options: ["Robot", "Human", "Animal", "Bird"], correctAnswer: 1 },
  { id: "v40", category: "Hardware", question: "Two joints are in the shoulder, one is at the ______.", options: ["Wrist", "Elbow", "Finger", "Toe"], correctAnswer: 1 },
  { id: "v41", category: "Hardware", question: "Three joints of the Space Shuttle arm are in the ______.", options: ["Hand", "Wrist", "Shoulder", "Elbow"], correctAnswer: 1 },
  { id: "v42", category: "Hardware", question: "The arm can lift more than ______ pounds in weightless space.", options: ["1000", "586000", "1 million", "500"], correctAnswer: 1 },
  { id: "v43", category: "Hardware", question: "The arm's total weight on earth is ______ lbs.", options: ["500", "994", "2000", "5000"], correctAnswer: 1 },
  { id: "v44", category: "Hardware", question: "C/C++ are energy-______ programming languages.", options: ["Wasteful", "Efficient", "Inert", "None"], correctAnswer: 1 },
  { id: "v45", category: "Hardware", question: "Robot control software is a ______ for controlling robots.", options: ["Piece of metal", "Program", "Battery", "Cable"], correctAnswer: 1 },
  { id: "v46", category: "Hardware", question: "The Slavic word robota means ______.", options: ["King", "Servant", "Machine", "Metal"], correctAnswer: 1 },
  { id: "v47", category: "Hardware", question: "Robotics involves designing, constructing, and ______ robots.", options: ["Selling", "Operating", "Breaking", "Hiding"], correctAnswer: 1 },
  { id: "v48", category: "Hardware", question: "Sensors are devices that detect ______ in environment.", options: ["Color", "Danger/Change", "Prices", "Names"], correctAnswer: 1 },
  { id: "v49", category: "Hardware", question: "There are over ______ languages that exist for programming robots.", options: ["10", "100", "1000", "5000"], correctAnswer: 2 },
  { id: "v50", category: "Hardware", question: "Arduino IDE stands for Integrated ______ Environment.", options: ["Data", "Development", "Digital", "Design"], correctAnswer: 1 },
  { id: "v51", category: "Hardware", question: "The word Robot comes from which language?", options: ["English", "Greek", "Slavic", "Arabic"], correctAnswer: 2 },
  { id: "v52", category: "Hardware", question: "What is the heart of the Lego Spike set?", options: ["Wheel", "Hub", "Sensor", "Motor"], correctAnswer: 1 },
  { id: "v53", category: "Hardware", question: "Lego Mindstorms MST stands for Lego ______.", options: ["Master set", "Mine storm", "Magic set", "Motion set"], correctAnswer: 1 },
  { id: "v54", category: "Hardware", question: "How many TECHNIC elements are in EV3?", options: ["100", "547", "1000", "200"], correctAnswer: 1 },
  { id: "v55", category: "Hardware", question: "Which generation started in 2013?", options: ["1st", "2nd", "3rd", "4th"], correctAnswer: 2 },
  { id: "v56", category: "Hardware", question: "What is the brain of the robot called?", options: ["Motor", "Switch", "Control system", "Wheel"], correctAnswer: 2 },
  { id: "v57", category: "Hardware", question: "Which sensor captures videos or images?", options: ["Vision", "Touch", "Heat", "Sound"], correctAnswer: 0 },
  { id: "v58", category: "Hardware", question: "The interaction between robot and human controller is operator ______.", options: ["Panel", "Interface", "Code", "Box"], correctAnswer: 1 },
  { id: "v59", category: "Hardware", question: "Robots move from one place to another through ______.", options: ["Sensing", "Locomotion", "Thinking", "Charging"], correctAnswer: 1 },
  { id: "v60", category: "Hardware", question: "A joystick is a type of operator ______.", options: ["System", "Interface", "Battery", "Case"], correctAnswer: 1 },
  { id: "v61", category: "Hardware", question: "Manipulation is done by effectors like and ______.", options: ["Sensors", "Claws", "Wheels", "Lights"], correctAnswer: 1 },
  { id: "v62", category: "Hardware", question: "Robots identify things in environment through ______ and perception.", options: ["Hearing", "Sensing", "Talking", "Sleeping"], correctAnswer: 1 },
  { id: "v63", category: "Hardware", question: "A robot can access info such as 'how to avoid ______'.", options: ["People", "Obstacles", "Water", "Light"], correctAnswer: 1 },
  { id: "v64", category: "Hardware", question: "Wait, the term 'robota' means ______.", options: ["Labor/Servant", "Fast", "Strong", "Hard"], correctAnswer: 0 },
  { id: "v65", category: "Hardware", question: "Arduino introduced in 2005 at the ______ Interaction Design Institute.", options: ["Harvard", "Ivrea", "Milan", "Rome"], correctAnswer: 1 },
  { id: "v66", category: "Hardware", question: "C# is a proprietary language from ______.", options: ["Apple", "Microsoft", "Google", "Facebook"], correctAnswer: 1 },
  { id: "v67", category: "Hardware", question: "Pascal was based on the language ______.", options: ["C", "BASIC", "FORTRAN", "LISP"], correctAnswer: 1 },
  { id: "v68", category: "Hardware", question: "Robots that work in factories painting are ______ robots.", options: ["Medical", "Industrial", "Service", "Toys"], correctAnswer: 1 },
  { id: "v69", category: "Hardware", question: "Which robot capable of swimming is called ______?", options: ["Mobile", "Aquatic", "Fixed", "Airborne"], correctAnswer: 1 },
  { id: "v70", category: "Hardware", question: "A fixed robot does not ______.", options: ["Think", "Move", "Work", "Charge"], correctAnswer: 1 },
  { id: "v71", category: "Hardware", question: "Terrestrial robots can be wheeled or ______.", options: ["Flying", "Legged", "Boat", "Flat"], correctAnswer: 1 },
  { id: "v72", category: "Hardware", question: "Logistics and Manufacturing are uses of ______ robots.", options: ["Service", "Industrial", "Medical", "Home"], correctAnswer: 1 },
  { id: "v73", category: "Hardware", question: "Service robots can be Medical, Educational, Defense or ______.", options: ["Industrial", "Home", "Factory", "Science"], correctAnswer: 1 },
  { id: "v74", category: "Hardware", question: "Robots perform tasks done traditionally by ______.", options: ["Animals", "Human beings", "Machines", "Nature"], correctAnswer: 1 },
  { id: "v75", category: "Hardware", question: "Robotics at the interface of science, engineering and ______.", options: ["Art", "Technology", "History", "Commerce"], correctAnswer: 1 },
  { id: "v76", category: "Hardware", question: "Target resolution is to substitute robots for ______.", options: ["Tools", "Humans", "Batteries", "Space"], correctAnswer: 1 },
  { id: "v77", category: "Hardware", question: "Robots are useful in industries such as ______ and healthcare.", options: ["Cooking", "Aerospace", "Music", "Reading"], correctAnswer: 1 },
  { id: "v78", category: "Hardware", question: "Robotics market projected to reach $189.36 billion by ______.", options: ["2025", "2027", "2030", "2050"], correctAnswer: 1 },
  { id: "v79", category: "Hardware", question: "There is a rapid need for robot ______ in coming decades.", options: ["Selling", "Programmers", "Batteries", "Screens"], correctAnswer: 1 },
  { id: "v80", category: "Hardware", question: "Industrial robots are highly repetitive and requires high ______.", options: ["Speed", "Precision", "Color", "Weight"], correctAnswer: 1 },
  { id: "v81", category: "Hardware", question: "Vision sensor eg. ______ which capture video.", options: ["Speaker", "Cameras", "Keyboard", "Mouse"], correctAnswer: 1 },
  { id: "v82", category: "Hardware", question: "Major movement and acceleration measured by ______ sensors.", options: ["Touch", "Motion", "Light", "Proximity"], correctAnswer: 1 },
  { id: "v83", category: "Hardware", question: "Actuators enable robots to interact with its ______.", options: ["Owners", "Environment", "Power", "Code"], correctAnswer: 1 },
  { id: "v84", category: "Hardware", question: "Electrical actuators converts ______ energy to mechanical.", options: ["Solar", "Electrical", "Heat", "Magnetic"], correctAnswer: 1 },
  { id: "v85", category: "Hardware", question: "Microcontrollers can be hidden or ______.", options: ["Invisible", "Embedded", "Broken", "Open"], correctAnswer: 1 },
  { id: "v86", category: "Hardware", question: "Use of battery or solar is for ______ supply.", options: ["Data", "Power", "Motion", "Light"], correctAnswer: 1 },
  { id: "v87", category: "Hardware", question: "PIC is widely used in Industrial Application for its ______.", options: ["Color", "Versatility and Reliability", "Price", "Size"], correctAnswer: 1 },
  { id: "v88", category: "Hardware", question: "PIC is commonly used in ______ software.", options: ["Web", "Embedded", "Game", "Desktop"], correctAnswer: 1 },
  { id: "v89", category: "Hardware", question: "Development environment consists of IDE, ______, debug tools.", options: ["Files", "Compilers", "Screens", "Sounds"], correctAnswer: 1 },
  { id: "v90", category: "Hardware", question: "Arduino board variants include Mega, Uno and ______.", options: ["Titan", "Nano", "Super", "Mega-Pro"], correctAnswer: 1 },
  { id: "v91", category: "Hardware", question: "Robotics programming involves writing code to control ______.", options: ["Robots", "Phones", "Humans", "Cars"], correctAnswer: 0 },
  { id: "v92", category: "Hardware", question: "Python, C++, Java, MATLAB, LISP are robotics ______.", options: ["Brands", "Languages", "Sensors", "Motors"], correctAnswer: 1 },
  { id: "v93", category: "Hardware", question: "C++ is highly ______ efficient.", options: ["Cost", "Energy", "Weight", "Size"], correctAnswer: 1 },
  { id: "v94", category: "Hardware", question: "Python is ease to use and has massive ______.", options: ["Cables", "Libraries", "Colors", "Price"], correctAnswer: 1 },
  { id: "v95", category: "Hardware", question: "IEEE Spectrum described Python as top language in ______.", options: ["2015", "2019", "2022", "2025"], correctAnswer: 1 },
  { id: "v96", category: "Hardware", question: "Robotics and AI are ______ fields.", options: ["Same", "Separate", "Identical", "Opposite"], correctAnswer: 1 },
  { id: "v97", category: "Hardware", question: "Unity and Microsoft Robotics Studio use ______ lang.", options: ["Java", "C#", "Python", "LISP"], correctAnswer: 1 },
  { id: "v98", category: "Hardware", question: "Verilog and VHDL are ______ lang.", options: ["HDL", "Web", "App", "DB"], correctAnswer: 0 },
  { id: "v99", category: "Hardware", question: "FPGA stands for Field ______ Gate Arrays.", options: ["Programmable", "Power", "Protocol", "Paper"], correctAnswer: 0 },
  { id: "v100", category: "Hardware", question: "How many joints in Space Shuttle arm?", options: ["4", "6", "8", "10"], correctAnswer: 1 },
  { id: "v101", category: "Hardware", question: "Canadarm was first flown in which month?", options: ["Jan", "Nov", "July", "Sept"], correctAnswer: 1 },
  { id: "v102", category: "Hardware", question: "The arm simulates which human limb?", options: ["Leg", "Arm", "Finger", "Ear"], correctAnswer: 1 },
  { id: "v103", category: "Hardware", question: "Which joint is correctly identified in the arm?", options: ["Shoulder", "Knee", "Toe", "Hip"], correctAnswer: 0 },
  { id: "v104", category: "Hardware", question: "One joint is at the wrist.", options: ["True", "False", "Only in Dextre", "3 are"], correctAnswer: 3 },
  { id: "v105", category: "Hardware", question: "How many joints are in the highly dextrous wrist?", options: ["1", "2", "3", "4"], correctAnswer: 2 },
  { id: "v106", category: "Hardware", question: "The end effector can ______ the payload.", options: ["Destroy", "Grab", "Melt", "Hide"], correctAnswer: 1 },
  { id: "v107", category: "Hardware", question: "Wait, the arm can lift more than ______ tons equivalents?", options: ["100", "293", "500", "10"], correctAnswer: 1 },
  { id: "v108", category: "Hardware", question: "Canadarm was a ______ manipulator system.", options: ["Local", "Remote", "Fixed", "Broken"], correctAnswer: 1 },
  { id: "v109", category: "Hardware", question: "The arm placed payloads with incredible ______.", options: ["Speed", "Accuracy", "Noise", "Color"], correctAnswer: 1 },
  { id: "v110", category: "Hardware", question: "The arm fits weightless environment of ______.", options: ["Ocean", "Space", "Cave", "Lab"], correctAnswer: 1 },
  { id: "q111", category: "Languages", question: "Python is ease to use because defining and ______ variable types is unnecessary.", options: ["Naming", "Casting", "Deleting", "Printing"], correctAnswer: 1 },
  { id: "q112", category: "Languages", question: "Which language helps you become familiar with other industrial languages?", options: ["Java", "Pascal", "Python", "LISP"], correctAnswer: 1 },
  { id: "q113", category: "Languages", question: "Scratch is popular among ______ roboticists.", options: ["Professional", "Budding", "Retired", "Space"], correctAnswer: 1 },
  { id: "q114", category: "Languages", question: "Experienced roboticists are unlikely to write industrial robots in ______.", options: ["C++", "Scratch", "Python", "Java"], correctAnswer: 1 },
  { id: "q115", category: "Languages", question: "Almost every robot comes with its ______ robot programming language.", options: ["Free", "Proprietary", "English", "Open"], correctAnswer: 1 },
  { id: "q116", category: "Languages", question: "Industrial robotics has a long-standing issue of ______ languages.", options: ["Standardized", "Many proprietaries", "Fast", "Easy"], correctAnswer: 1 },
  { id: "q117", category: "Languages", question: "Technical technicians used to learn a new language for every ______.", options: ["Brand", "Week", "State", "Code"], correctAnswer: 0 },
  { id: "q118", category: "Languages", question: "Kuka has ______ (Kuka Robot Language).", options: ["KRL", "RAPID", "INFORM", "BASIC"], correctAnswer: 0 },
  { id: "q119", category: "Languages", question: "LISP and Prolog are enjoyed more attention due to ______ popularity.", options: ["Robots", "AI", "Internet", "Gaming"], correctAnswer: 1 },
  { id: "q120", category: "Languages", question: "LISP is one of the ______ programming languages.", options: ["Latest", "Earliest", "Simplest", "Darkest"], correctAnswer: 1 },
  { id: "q121", category: "Languages", question: "LISP pioneered automatic ______ management.", options: ["Time", "Storage", "Money", "Robot"], correctAnswer: 1 },
  { id: "q122", category: "Languages", question: "Prolog is used for natural ______ processing.", options: ["Science", "Language", "Music", "Food"], correctAnswer: 1 },
  { id: "q123", category: "Languages", question: "Prolog handles ______ proving and expert systems.", options: ["Math", "Theorem", "Code", "Robot"], correctAnswer: 1 },
  { id: "q124", category: "Languages", question: "Robotics and AI are ______ separate fields.", options: ["Always", "Never", "Two", "No"], correctAnswer: 2 },
  { id: "q125", category: "Languages", question: "Engineers create low-level electronics using ______.", options: ["Python", "HDL", "Java", "Scratch"], correctAnswer: 1 },
  { id: "q126", category: "Languages", question: "HDL is used to describe ______.", options: ["Code", "Prototypes", "Stories", "Videos"], correctAnswer: 1 },
  { id: "q127", category: "Languages", question: "HDL converts textual description into ______ data.", options: ["Sound", "Configuration", "Video", "Text"], correctAnswer: 1 },
  { id: "q128", category: "Languages", question: "Verilog and VHDL are popular models of ______.", options: ["Robots", "HDL", "Sensors", "Cars"], correctAnswer: 1 },
  { id: "q129", category: "Languages", question: "They are used to program Field Programmable Gate ______.", options: ["Arrays", "Boxes", "Circles", "Data"], correctAnswer: 0 },
  { id: "q130", category: "Languages", question: "MATLAB is relied on for ______ data and control systems.", options: ["Deleting", "Analyzing", "Saving", "Printing"], correctAnswer: 1 },
  { id: "q131", category: "Languages", question: "MATLAB uses ______ to design.", options: ["Simulink", "Visual Studio", "Notepad", "Paint"], correctAnswer: 0 },
  { id: "q132", category: "Languages", question: "MATLAB allows tuning ______.", options: ["Radios", "Algorithms", "Guitars", "Engines"], correctAnswer: 1 },
  { id: "q133", category: "Languages", question: "C# is from ______.", options: ["Apple", "Microsoft", "IBM", "Intel"], correctAnswer: 1 },
  { id: "q134", category: "Languages", question: "Windows-based environment for robot control is called ______ Developer Studio.", options: ["Apple", "Microsoft Robotics", "Linux", "Java"], correctAnswer: 1 },
  { id: "q135", category: "Languages", question: "C# is basis for Virtual ______ engines like Unity.", options: ["Reality", "Life", "Work", "Data"], correctAnswer: 0 },
  { id: "q136", category: "Languages", question: "Is C# considered straightforward to learn?", options: ["Yes", "No", "Only for kids", "Always"], correctAnswer: 1 },
  { id: "q137", category: "Languages", question: "JAVA lets developers write once and run ______.", options: ["Nowhere", "Anywhere", "Inside", "Outside"], correctAnswer: 1 },
  { id: "q138", category: "Languages", question: "What does WORA stand for?", options: ["Work On Robot Always", "Write Once Run Anywhere", "Write Only Read Always", "None"], correctAnswer: 1 },
  { id: "q139", category: "Languages", question: "JAVA code runs without need for ______ on different platforms.", options: ["Money", "Recompilation", "Electricity", "Internet"], correctAnswer: 1 },
  { id: "q140", category: "Languages", question: "JAVA is used in modern AIs like AlphaGo and IBM's ______.", options: ["Watson", "Jobs", "Gates", "Musk"], correctAnswer: 0 },
  { id: "q141", category: "Languages", question: "Python was described as top language in ______ by IEEE.", options: ["2010", "2019", "2024", "2000"], correctAnswer: 1 },
  { id: "q142", category: "Languages", question: "Extensive amount of free ______ are available for Python.", options: ["Books", "Libraries", "Videos", "Tools"], correctAnswer: 1 },
  { id: "q143", category: "Languages", question: "Python prevents programmers from 'reinventing the ______'.", options: ["Wheel", "Code", "Lamp", "Robot"], correctAnswer: 0 },
  { id: "q144", category: "Languages", question: "Python is helpful in ROS besides which other language?", options: ["Java", "C++", "C#", "BASIC"], correctAnswer: 1 },
  { id: "q145", category: "Languages", question: "C/C++ libraries allow interaction with ______ hardware.", options: ["Soft", "Low-level", "Cloud", "Ghost"], correctAnswer: 1 },
  { id: "q146", category: "Languages", question: "Robotics relies heavily on ______ performance.", options: ["Delayed", "Real-time", "Fast", "Slow"], correctAnswer: 1 },
  { id: "q147", category: "Languages", question: "C++ requires ______ lines of code than Python for same task.", options: ["Less", "More", "Equal", "No"], correctAnswer: 1 },
  { id: "q148", category: "Languages", question: "Closest thing to a standard language for robots are ______.", options: ["Java", "C and C++", "Python", "LISP"], correctAnswer: 1 },
  { id: "q149", category: "Languages", question: "One should focus on developing acceptable ______ practices initially.", options: ["Eating", "Programming", "Walking", "Sleeping"], correctAnswer: 1 },
  { id: "q150", category: "Languages", question: "Language should fit with your robotic ______.", options: ["Software", "Hardware", "Price", "Color"], correctAnswer: 1 },
  { id: "q151", category: "Lego", question: "Lego Mindstorms education was which edition?", options: ["Home", "Student", "EV3", "Pro"], correctAnswer: 2 },
  { id: "q152", category: "Lego", question: "The brick of EV3 is ______.", options: ["Plastic", "Programmable", "Solid", "Large"], correctAnswer: 1 },
  { id: "q153", category: "Lego", question: "Education EV3 consists of Large and Medium ______.", options: ["Wheels", "Motors", "Sensors", "Cables"], correctAnswer: 1 },
  { id: "q154", category: "Lego", question: "Which sensor is in EV3 but not mentioned in Spike basic?", options: ["Ultrasonic", "Gyroscopic", "Color", "Touch"], correctAnswer: 0 },
  { id: "q155", category: "Lego", question: "Main objective is to provide solutions used in ______.", options: ["Kitchen", "Classroom", "Garage", "Hospital"], correctAnswer: 1 },
  { id: "q156", category: "Lego", question: "Spike Prime announced in ______.", options: ["Jan", "April", "June", "Dec"], correctAnswer: 1 },
  { id: "q157", category: "Lego", question: "The basic set of Spike includes how many medium motors?", options: ["1", "2", "3", "0"], correctAnswer: 1 },
  { id: "q158", category: "Lego", question: "Controller brick of Spike based on ______.", options: ["Intel", "STM32F413", "AVR", "ARM"], correctAnswer: 1 },
  { id: "q159", category: "Lego", question: "Lego Technic elements count in Spike is ______+.", options: ["100", "520", "1000", "50"], correctAnswer: 1 },
  { id: "q160", category: "Lego", question: "Spike Prime is intuitive and naturally ______.", options: ["Fixed", "Adaptive", "Slow", "Hard"], correctAnswer: 1 },
  { id: "q161", category: "Arduino", question: "Arduino board variant for tiny size is ______.", options: ["Uno", "Mega", "Nano", "Titan"], correctAnswer: 2 },
  { id: "q162", category: "Arduino", question: "Arduino is designed to make electronics more accessible to all ______.", options: ["Experts", "From hobbyists to professionals", "Only students", "Only kids"], correctAnswer: 1 },
  { id: "q163", category: "Arduino", question: "Arduino code called ______.", options: ["Program", "Sketch", "Block", "Script"], correctAnswer: 1 },
  { id: "q164", category: "Arduino", question: "Arduino language is based on ______.", options: ["Drawing", "Wiring", "Printing", "Music"], correctAnswer: 1 },
  { id: "q165", category: "Arduino", question: "Arduino IDE based on ______.", options: ["Java", "Processing", "C++", "Python"], correctAnswer: 1 },
  { id: "q166", category: "History", question: "First robot rover sent to Mars is ______.", options: ["Pathfinder", "Sojourner", "Dextre", "Canadarm"], correctAnswer: 1 },
  { id: "q167", category: "History", question: "The Mars Pathfinder delivered the rover in which mission?", options: ["Voyager", "Pathfinder", "Spirit", "Opportunity"], correctAnswer: 1 },
  { id: "q168", category: "History", question: "Is Sojourner an instrumented lander?", options: ["Yes", "No", "Partly", "None"], correctAnswer: 1 },
  { id: "q169", category: "History", question: "Mars Pathfinder developed unique ______ for delivery.", options: ["Code", "Technology", "Material", "Price"], correctAnswer: 1 },
  { id: "q170", category: "History", question: "How many joints in the dextrous wrist of Canadarm?", options: ["2", "3", "4", "5"], correctAnswer: 1 },
  { id: "q171", category: "Classification", question: "Robots could be classified into how many broad areas?", options: ["2", "4", "6", "10"], correctAnswer: 0 },
  { id: "q172", category: "Classification", question: "One classification is by environment and mechanism of ______.", options: ["Control", "Interaction", "Price", "Color"], correctAnswer: 1 },
  { id: "q173", category: "Classification", question: "Mechanism of interaction classification includes ______ and Fixed.", options: ["Slow", "Mobile", "Large", "Small"], correctAnswer: 1 },
  { id: "q174", category: "Classification", question: "Mobile robots include Aquatic, Terrestrial and ______.", options: ["Space", "Airborne", "Fire", "Ice"], correctAnswer: 1 },
  { id: "q175", category: "Classification", question: "Airborne robots are one type of ______ robot.", options: ["Fixed", "Mobile", "Heavy", "Slow"], correctAnswer: 1 },
  { id: "q176", category: "Classification", question: "Wheeled and Legged are types of ______ mobile robots.", options: ["Aquatic", "Terrestrial", "Airborne", "Space"], correctAnswer: 1 },
  { id: "q177", category: "Classification", question: "Second area of classification is based on intended ______ field.", options: ["Sales", "Application", "Color", "Size"], correctAnswer: 1 },
  { id: "q178", category: "Classification", question: "Industrial and ______ are two application fields.", options: ["Home", "Service", "Game", "Sleep"], correctAnswer: 1 },
  { id: "q179", category: "Classification", question: "Logistics belongs to ______ application field.", options: ["Service", "Industrial", "Medical", "Home"], correctAnswer: 1 },
  { id: "q180", category: "Classification", question: "Defense belongs to ______ application field.", options: ["Industrial", "Service", "Home", "History"], correctAnswer: 1 },
  { id: "q181", category: "Applications", question: "Application of robotics includes automation of ______.", options: ["Music", "Production processes", "Reading", "Sleeping"], correctAnswer: 1 },
  { id: "q182", category: "Applications", question: "Robotics help increase ______ in manufacturing.", options: ["Cost", "Productivity", "Waste", "Time"], correctAnswer: 1 },
  { id: "q183", category: "Applications", question: "Exploration involves hazardous or ______ environments.", options: ["Safe", "Inaccessible", "Easy", "Public"], correctAnswer: 1 },
  { id: "q184", category: "Applications", question: "Space exploration uses robotics.", options: ["True", "False", "Only for food", "Never"], correctAnswer: 0 },
  { id: "q185", category: "Applications", question: "Drones are used in agriculture as '______-like devices'.", options: ["Bird", "Drone", "Insect", "Tool"], correctAnswer: 1 },
  { id: "q186", category: "Applications", question: "Robots can spray fertilizer on ______ at the same time.", options: ["Cars", "Crops", "Buildings", "People"], correctAnswer: 1 },
  { id: "q187", category: "Applications", question: "Surveillance and surveillance are military uses.", options: ["True", "False", "Sometimes", "Always"], correctAnswer: 1 },
  { id: "q188", category: "Applications", question: "Robots also used in Entertainment and ______.", options: ["Study", "Household", "Work", "Sport"], correctAnswer: 1 },
  { id: "q189", category: "Fundamentals", question: "Robota comes from which language area?", options: ["Greek", "Latin", "Slavic", "Asian"], correctAnswer: 2 },
  { id: "q190", category: "Fundamentals", question: "Robot comes from robota which means ______.", options: ["King", "Servant", "Metal", "Strong"], correctAnswer: 1 },
  { id: "q191", category: "Term", question: "Robotics is the integration of AI tech to enable robots to ______.", options: ["Break", "Learn and adapt", "Sleep", "Talk"], correctAnswer: 1 },
  { id: "q192", category: "Term", question: "Machine Learning is a key concept.", options: ["True", "False", "Old", "Useless"], correctAnswer: 0 },
  { id: "q193", category: "Term", question: "The ability of robot to interpret env is robotics ______.", options: ["Hearing", "Perception", "Eating", "Walking"], correctAnswer: 1 },
  { id: "q194", category: "Term", question: "Study of motion of robot part is robotics ______.", options: ["Perception", "Kinetics", "Biology", "Chemistry"], correctAnswer: 1 },
  { id: "q195", category: "Term", question: "Kinetic study relates to ______.", options: ["Batteries", "Actuators", "Sensors", "Screens"], correctAnswer: 1 },
  { id: "q196", category: "Term", question: "Robotics refers to use of automated machines known as ______.", options: ["Tools", "Robots", "Boxes", "Wheels"], correctAnswer: 1 },
  { id: "q197", category: "Term", question: "Robots used in industrial settings perform ______ tasks.", options: ["Fun", "Highly repetitive", "Random", "Safe"], correctAnswer: 1 },
  { id: "q198", category: "Term", question: "Dangerous tasks in labs are performed by ______.", options: ["Pets", "Robots", "Kids", "Students"], correctAnswer: 1 },
  { id: "q199", category: "Term", question: "Robots are used where work is done in a ______ environment.", options: ["Safe", "Hazardous", "Easy", "Common"], correctAnswer: 1 },
  { id: "q200", category: "Term", question: "Robot programming is developing a ______ scheme.", options: ["Sales", "Control", "Color", "Hide"], correctAnswer: 1 },
  { id: "q201", category: "Term", question: "Control scheme allows robot to achieve ______.", options: ["Prices", "Goals", "Food", "Sleep"], correctAnswer: 1 },
  { id: "q202", category: "Term", question: "What is middleware in robotics?", options: ["RAM", "ROS", "Wheels", "Battery"], correctAnswer: 1 },
  { id: "q203", category: "Term", question: "ROS provides services for a ______ computer cluster.", options: ["Homogeneous", "Heterogeneous", "Solid", "Liquid"], correctAnswer: 1 },
  { id: "q204", category: "Term", question: "ROS handles hardware ______.", options: ["Creation", "Abstraction", "Breaking", "Sales"], correctAnswer: 1 },
  { id: "q205", category: "Term", question: "ROS provides package ______.", options: ["Delivery", "Management", "Size", "Color"], correctAnswer: 1 },
  { id: "q206", category: "Term", question: "How many popular languages are there in robotics roughly?", options: ["5", "10", "100", "50"], correctAnswer: 1 },
  { id: "q207", category: "Term", question: "Which is number one language for robotics?", options: ["Java", "C / C++", "Python", "HDL"], correctAnswer: 1 },
  { id: "q208", category: "Term", question: "What is top language in 2019 according to IEEE?", options: ["Java", "Python", "C#", "BASIC"], correctAnswer: 1 },
  { id: "q209", category: "Term", question: "Which device converts energy to motion?", options: ["Sensor", "Actuator", "Hub", "Wheel"], correctAnswer: 1 },
  { id: "q210", category: "Term", question: "Which device identifies change in environment?", options: ["Hub", "Sensor", "Motor", "Cable"], correctAnswer: 1 },
  { id: "q211", category: "Term", question: "Arduino Mega has more pins than Arduino Uno.", options: ["True", "False", "No", "Never"], correctAnswer: 0 },
  { id: "q212", category: "Term", question: "Is Raspberry Pi a microcontroller or a computer?", options: ["Microcontroller", "Computer", "Sensor", "Hub"], correctAnswer: 1 },
  { id: "q213", category: "Term", question: "Does Java allow write once run anywhere?", options: ["Yes", "No", "Sometimes", "Maybe"], correctAnswer: 0 },
  { id: "q214", category: "Term", question: "Is Unity built on C#?", options: ["Yes", "No", "Partly", "None"], correctAnswer: 0 },
  { id: "q215", category: "Term", question: "Final exam success is possible with this app.", options: ["False", "True", "Unlikely", "No"], correctAnswer: 1 },
  // --- ADDITIONAL BULK QUESTIONS (216-315) ---
  { id: "b1", category: "History", question: "LEGO Mindstorms RIS was released in what month of 1998?", options: ["February", "September", "November", "December"], correctAnswer: 1 },
  { id: "b2", category: "History", question: "In 2006, the second generation of LEGO Mindstorms was called what?", options: ["RIS 2.0", "MST", "NXT", "Spike"], correctAnswer: 1 },
  { id: "b3", category: "History", question: "Which LEGO generation introduced the STM32F413 microcontroller?", options: ["RIS", "MST", "EV3", "Spike Prime"], correctAnswer: 3 },
  { id: "b4", category: "History", question: "In what year did LEGO announce the discontinuation of the Mindstorms line?", options: ["2019", "2020", "2022", "2024"], correctAnswer: 2 },
  { id: "b5", category: "History", question: "The partnership between LEGO and MIT began in which decade?", options: ["1970s", "1980s", "1990s", "2000s"], correctAnswer: 1 },
  { id: "b6", category: "Sensors", question: "Which sensor is essentially a type of camera?", options: ["Vision Sensor", "Proximity Sensor", "Touch Sensor", "Infrared Sensor"], correctAnswer: 0 },
  { id: "b7", category: "Sensors", question: "Which sensor is used for object recognition and navigation?", options: ["Pressure Sensor", "Vision Sensor", "Sound Sensor", "Heat Sensor"], correctAnswer: 1 },
  { id: "b8", category: "Sensors", question: "Which sensor avoids obstacles by measuring sound reflection?", options: ["Gyro", "Ultrasonic", "Touch", "Color"], correctAnswer: 1 },
  { id: "b9", category: "Sensors", question: "Environmental sensors can measure which pair of variables?", options: ["Speed and distance", "Temp and humidity", "Light and sound", "Current and voltage"], correctAnswer: 1 },
  { id: "b10", category: "Sensors", question: "A touch sensor can capture physical ______ on a device.", options: ["Sound", "Pressure/Embraces", "Heat", "Color"], correctAnswer: 1 },
  { id: "b11", category: "Actuators", question: "Which actuator type uses pressurized oil?", options: ["Pneumatic", "Hydraulic", "Electric", "Manual"], correctAnswer: 1 },
  { id: "b12", category: "Actuators", question: "Electric actuators convert electrical energy to ______ energy.", options: ["Chemical", "Mechanical", "Heat", "Nuclear"], correctAnswer: 1 },
  { id: "b13", category: "Actuators", question: "A blender uses which type of actuator?", options: ["Hydraulic", "Electric", "Pneumatic", "Steam"], correctAnswer: 1 },
  { id: "b14", category: "Actuators", question: "Hydraulic actuators are suited for ______-duty tasks.", options: ["Light", "Heavy", "Secret", "Micro"], correctAnswer: 1 },
  { id: "b15", category: "Actuators", question: "Pneumatic actuators use ______ air to produce motion.", options: ["Hot", "Compressed", "Cold", "Liquid"], correctAnswer: 1 },
  { id: "b16", category: "Lego", question: "The heart of the prime set features five ______.", options: ["Motors", "Matric six In/Out", "Wheels", "Batteries"], correctAnswer: 1 },
  { id: "b17", category: "Lego", question: "LEGO Spike supports which programming language natively?", options: ["C++", "Python", "Java", "Ruby"], correctAnswer: 1 },
  { id: "b18", category: "Lego", question: "The Spike Prime expansion set contains how many additional elements roughly?", options: ["100", "300", "Over 600", "50"], correctAnswer: 2 },
  { id: "b19", category: "Lego", question: "The motor in a Lego kit can act as a ______.", options: ["Micro Controller", "Power Supply", "Sensor Only", "Structure Only"], correctAnswer: 0 },
  { id: "b20", category: "Lego", question: "Which sensor detects color and measures intensity?", options: ["Touch", "Color", "Ultrasonic", "Motion"], correctAnswer: 1 },
  { id: "b21", category: "Programming", question: "Industrial Robot Language Karel is used by which brand?", options: ["ABB", "Fanuc", "Kuka", "Yaskawa"], correctAnswer: 1 },
  { id: "b22", category: "Programming", question: "RAPID is the proprietary language for which robotics company?", options: ["Fanuc", "ABB", "Kuka", "Yaskawa"], correctAnswer: 1 },
  { id: "b23", category: "Programming", question: "Which language was originally designed for AI and symbolic reasoning?", options: ["C", "LISP", "Pascal", "BASIC"], correctAnswer: 1 },
  { id: "b24", category: "Programming", question: "Prolog is short for ______ Logic.", options: ["Professional", "Programmable", "Programming", "Process"], correctAnswer: 2 },
  { id: "b25", category: "Programming", question: "Which language is used specifically for analyzing data in robotics?", options: ["Prolog", "LISP", "MATLAB", "Pascal"], correctAnswer: 2 },
  { id: "b26", category: "Microcontrollers", question: "Arduino Mega has more ______ than Arduino Uno.", options: ["Memory/Ports", "Colors", "Price", "Weight"], correctAnswer: 0 },
  { id: "b27", category: "Microcontrollers", question: "Raspberry Pi can be used as a ______ computer.", options: ["Mainframe", "Desktop", "Pocket", "Super"], correctAnswer: 1 },
  { id: "b28", category: "Microcontrollers", question: "PIC microcontrollers are widely used in ______ applications.", options: ["Gaming", "Industrial", "Music", "Social"], correctAnswer: 1 },
  { id: "b29", category: "Microcontrollers", question: "The Arduino IDE allows you to ______, ______, and upload code.", options: ["Walk, Run", "Code, Test, Debug", "Draw, Paint", "Buy, Sell"], correctAnswer: 1 },
  { id: "b30", category: "Microcontrollers", question: "Arduino code 'Sketch' is based on which languages?", options: ["Python/Ruby", "C/C++", "Java/C#", "BASIC/HTML"], correctAnswer: 1 },
  { id: "b31", category: "Concepts", question: "Robotics Perception is the ability to ______ environment.", options: ["Ignore", "Interpret", "Destroy", "Create"], correctAnswer: 1 },
  { id: "b32", category: "Concepts", question: "Kinematics is the study of ______ of robot parts.", options: ["Intelligence", "Motion", "Color", "Weight"], correctAnswer: 1 },
  { id: "b33", category: "Concepts", question: "Human-Robot Interaction studies how humans and robots ______.", options: ["Fight", "Communicate", "Eat", "Sleep"], correctAnswer: 1 },
  { id: "b34", category: "Concepts", question: "Robotics is an ______ field involving multiple disciplines.", options: ["Easy", "Interdisciplinary", "Isolated", "Unrelated"], correctAnswer: 1 },
  { id: "b35", category: "Concepts", question: "A multi-disciplinary field includes mechanical, electrical, and ______.", options: ["Science", "Computer Science", "History", "Law"], correctAnswer: 1 },
  { id: "b36", category: "Applications", question: "Robots in agriculture perform tasks like ______ crops.", options: ["Reading", "Harvesting", "Painting", "Eating"], correctAnswer: 1 },
  { id: "b37", category: "Applications", question: "Bomb disposal is an application in ______.", options: ["Medicine", "Military", "Home", "Agriculture"], correctAnswer: 1 },
  { id: "b38", category: "Applications", question: "Healthcare robots assists in ______ and patient care.", options: ["Cooking", "Rehabilitation", "Marketing", "Sales"], correctAnswer: 1 },
  { id: "b39", category: "Applications", question: "Manufacturing robots increase effective and ______.", options: ["Noise", "Productivity", "Waste", "Weight"], correctAnswer: 1 },
  { id: "b40", category: "Applications", question: "Drones are used for ______ in military defense.", options: ["Cooking", "Surveillance", "Singing", "Racing"], correctAnswer: 1 },
  { id: "b41", category: "History", question: "Lego Mindstorms RIS generation 1 was released in ______.", options: ["1970", "1998", "2005", "2010"], correctAnswer: 1 },
  { id: "b42", category: "History", question: "MIT Collaboration aimed to provide a ______ brick.", options: ["Solid", "Programmable", "Large", "Transparent"], correctAnswer: 1 },
  { id: "b43", category: "History", question: "The word Robot comes from a word meaning ______.", options: ["Smart", "Servant", "Fast", "Metal"], correctAnswer: 1 },
  { id: "b44", category: "History", question: "In 1998, Lego became a programming ______.", options: ["Module", "Language", "Robot", "Library"], correctAnswer: 1 },
  { id: "b45", category: "History", question: "Lego Mindstorms line was discontinued in October ______.", options: ["2020", "2021", "2022", "2023"], correctAnswer: 2 },
  { id: "b46", category: "History", question: "Who announced the disconnection of Mindstorms?", options: ["MIT", "LEGO", "Microsoft", "Intel"], correctAnswer: 1 },
  { id: "b47", category: "Micro", question: "PIC stands for Peripheral ______ Controller.", options: ["Internet", "Interface", "Internal", "Input"], correctAnswer: 1 },
  { id: "b48", category: "Micro", question: "Arduino Uno is a type of ______ controller.", options: ["Main", "Micro", "Mini", "Macro"], correctAnswer: 1 },
  { id: "b49", category: "Micro", question: "Lego Hub codes are stored before ______.", options: ["Buying", "Execution", "Printing", "Sharing"], correctAnswer: 1 },
  { id: "b50", category: "Micro", question: "Memory in Lego Hub consists of ROM and ______.", options: ["SSD", "RAM", "Cache", "Flash"], correctAnswer: 1 },
  { id: "b51", category: "History", question: "Canadarm made its first flight in ______.", options: ["1970", "1981", "1990", "2005"], correctAnswer: 1 },
  { id: "b52", category: "History", question: "Canadarm has ______ joints.", options: ["2", "4", "6", "8"], correctAnswer: 2 },
  { id: "b53", category: "History", question: "The dextrous wrist of Canadarm has ______ joints.", options: ["1", "2", "3", "4"], correctAnswer: 2 },
  { id: "b54", category: "History", question: "How many joints in the shoulder of the robot arm?", options: ["1", "2", "3", "0"], correctAnswer: 1 },
  { id: "b55", category: "History", question: "The robot arm simulates which limb?", options: ["Leg", "Arm", "Tail", "Wing"], correctAnswer: 1 },
  { id: "b56", category: "History", question: "The Arm is in weightless environment of ______.", options: ["Air", "Water", "Space", "Earth"], correctAnswer: 2 },
  { id: "b57", category: "History", question: "First robot roving vehicle on Mars was ______.", options: ["Dextre", "Sojourner", "Pathfinder", "Hubble"], correctAnswer: 1 },
  { id: "b58", category: "History", question: "Pathfinder delivered Sojourner to ______.", options: ["Moon", "Venus", "Mars", "Saturn"], correctAnswer: 2 },
  { id: "b59", category: "History", question: "The Mobile Servicing System is also called ______.", options: ["Canadarm", "Canadarm2", "Dextre", "Arm3"], correctAnswer: 1 },
  { id: "b60", category: "History", question: "Dextre has two ______ arms.", options: ["Large", "Smaller", "Invisible", "Solid"], correctAnswer: 1 },
  { id: "b61", category: "Type", question: "Industrial robots are highly ______.", options: ["Random", "Repetitive", "Fast", "Noisy"], correctAnswer: 1 },
  { id: "b62", category: "Type", question: "Medical robots are used for ______.", options: ["Cooking", "Surgery", "Gaming", "History"], correctAnswer: 1 },
  { id: "b63", category: "Type", question: "Drones are types of ______ robots.", options: ["Fixed", "Mobile", "Large", "Heavy"], correctAnswer: 1 },
  { id: "b64", category: "Type", question: "Humanoid robots look like ______.", options: ["Animals", "Human beings", "Tools", "Boxes"], correctAnswer: 1 },
  { id: "b65", category: "Type", question: "Industrial robots work in industries like ______.", options: ["Music", "Painting/Assembling", "Reading", "Sleeping"], correctAnswer: 1 },
  { id: "b66", category: "Type", question: "Service robots used for dry ______.", options: ["Reading", "Cleaning", "Writing", "Cooking"], correctAnswer: 1 },
  { id: "b67", category: "Type", question: "Service robots include drugs ______.", options: ["Sales", "Prescribing", "Buying", "Makers"], correctAnswer: 1 },
  { id: "b68", category: "Type", question: "Robots in manufacturing increase ______.", options: ["Waste", "Effectiveness", "Noise", "Cost"], correctAnswer: 1 },
  { id: "b69", category: "Type", question: "Agriculture robots monitoring ______ of crops.", options: ["Price", "Growth/Health", "Color", "Size"], correctAnswer: 1 },
  { id: "b70", category: "Type", question: "Entertainment and ______ are robot application fields.", options: ["Study", "Household", "Work", "Shop"], correctAnswer: 1 },
  { id: "b71", category: "Sensors", question: "Sensors are devices that ______ environmental change.", options: ["Create", "Ignore", "Detect", "Stop"], correctAnswer: 2 },
  { id: "b72", category: "Sensors", question: "Vision sensors include ______.", options: ["Speakers", "Cameras", "Keyboards", "Mice"], correctAnswer: 1 },
  { id: "b73", category: "Sensors", question: "Proximity sensor detect near object without ______.", options: ["Sound", "Physical contact", "Light", "Heat"], correctAnswer: 1 },
  { id: "b74", category: "Sensors", question: "Motion sensors measure ______ and acceleration.", options: ["Price", "Movement", "Heat", "Color"], correctAnswer: 1 },
  { id: "b75", category: "Sensors", question: "Environmental sensors measure ______ in a data center.", options: ["Temp/Humidity", "Sound/Light", "Speed/Dist", "None"], correctAnswer: 0 },
  { id: "b76", category: "Actuators", question: "Devices that convert energy into motion are ______.", options: ["Sensors", "Actuators", "Hubs", "Wires"], correctAnswer: 1 },
  { id: "b77", category: "Actuators", question: "Electric actuators use ______ energy.", options: ["Electrical", "Solar", "Wind", "Heat"], correctAnswer: 0 },
  { id: "b78", category: "Actuators", question: "Hydraulic actuators use ______ fluid.", options: ["Cold", "Pressurized", "Hot", "Liquid"], correctAnswer: 1 },
  { id: "b79", category: "Actuators", question: "Pneumatic actuators use ______ air.", options: ["Warm", "Compressed", "Cold", "Liquid"], correctAnswer: 1 },
  { id: "b80", category: "Actuators", question: "Hydraulic actuators produced for heavy-duty ______.", options: ["Games", "Tasks", "Movies", "Music"], correctAnswer: 1 },
  { id: "b81", category: "Programming", question: "Robotics involves writing ______ to control robots.", options: ["Letters", "Codes", "Books", "Songs"], correctAnswer: 1 },
  { id: "b82", category: "Programming", question: "Python is ease to use and has massive ______.", options: ["Cars", "Libraries", "Videos", "Tools"], correctAnswer: 1 },
  { id: "b83", category: "Programming", question: "C++ is arguably more ______ today in robotics.", options: ["Weak", "Useful", "Old", "Slow"], correctAnswer: 1 },
  { id: "b84", category: "Programming", question: "Java is object-______.", options: ["Based", "Oriented", "Driven", "Sided"], correctAnswer: 1 },
  { id: "b85", category: "Programming", question: "MATLAB relies on analyzing ______.", options: ["People", "Data", "Sounds", "Lights"], correctAnswer: 1 },
  { id: "b86", category: "Programming", question: "Pascal designed to encourage good ______ practices.", options: ["Daily", "Programming", "Eating", "Sleeping"], correctAnswer: 1 },
  { id: "b87", category: "Programming", question: "LISP pioneered automatic ______ management.", options: ["Time", "Storage", "Money", "File"], correctAnswer: 1 },
  { id: "b88", category: "Programming", question: "HDL describes prototypes in symbols and ______.", options: ["Drawings", "Words", "Numbers", "Colors"], correctAnswer: 1 },
  { id: "b89", category: "Programming", question: "Arduino language based on ______.", options: ["Reading", "Wiring", "Listening", "Singing"], correctAnswer: 1 },
  { id: "b90", category: "Programming", question: "Visual programming involves dragging ______.", options: ["Lines", "Blocks", "Files", "Wires"], correctAnswer: 1 },
  { id: "b91", category: "Lego", question: "Which LEGO generation is MST?", options: ["1st", "2nd", "3rd", "4th"], correctAnswer: 1 },
  { id: "b92", category: "Lego", question: "EV3 is which generation?", options: ["1st", "2nd", "3rd", "4th"], correctAnswer: 2 },
  { id: "b93", category: "Lego", question: "Spike Prime targets middle ______.", options: ["Age", "Schoolers", "Managers", "Workers"], correctAnswer: 1 },
  { id: "b94", category: "Lego", question: "Lego Hub is heartbeat of the ______.", options: ["Motor", "Set", "Software", "Hardware"], correctAnswer: 1 },
  { id: "b95", category: "Lego", question: "The Spike Hub is adaptive and ______.", options: ["Fixed", "Intuitive", "Slow", "Hard"], correctAnswer: 1 },
  { id: "b96", category: "Lego", question: "Ports on the hub are Matric six ______.", options: ["In/Out", "Only In", "Only Out", "None"], correctAnswer: 0 },
  { id: "b97", category: "History", question: "Robota means servant in ______ language.", options: ["Greek", "Slavic", "Asian", "Latin"], correctAnswer: 1 },
  { id: "b98", category: "History", question: "Robotics is an ______ field.", options: ["Easy", "Interdisciplinary", "Old", "Small"], correctAnswer: 1 },
  { id: "b99", category: "History", question: "The word robot was introduced in ______.", options: ["1920", "1998", "1981", "1950"], correctAnswer: 0 },
  { id: "b100", category: "History", question: "Ready for the exam?", options: ["No", "Yes", "Maybe", "I hope"], correctAnswer: 1 }
];



