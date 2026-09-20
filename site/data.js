
/* ---------- SETTINGS: change these two lines ---------- */
var NAME='Azzall';
var EMAIL='azzall.ali3@gmail.com';
/* ------------------------------------------------------ */

/* ---------- project data: add new projects to this list ---------- */
var PROJECTS=[
{slug:'pipe-climber',title:'IMechE Pipe Climber',cat:'Mechatronics',year:'Year 2',module:'Sensors, Actuators and Control (PDE2822)',role:'Team member',team:'Lina Khalifa and Ethan Busenze',
 tools:['Arduino Uno','SolidWorks','Tinkercad','MATLAB','3D printing','Laser cutting'],tags:['control systems','sensors','actuators','CAD'],
 summary:'An Arduino-controlled device built to climb a pipe while carrying a chain, for the IMechE Design Challenge.',
 brief:'Build and test a device that simulates a wire rope climbing robot. It had to climb to a top barrier, hold for 15 seconds with a red light and buzzer, return to the start on a green light, then drop a 2.2 m chain at an intermediate point.',
 did:['Modelled the motor and the closed-loop control system in MATLAB.','Chose the motor, limit switch, push button and Arduino, and explained each choice.','Designed the wheels, chain-drop arm and base in CAD, then 3D printed and laser cut them.','Wired and programmed two encoder motors, a limit switch, LEDs and a buzzer.'],
 outcome:'The code and electronics worked on the bench, but on test day the motor could not lift the finished device, which weighed about 1200 g against a 600 g estimate. The project still earned a First, and the lesson was to test early and track weight from the start.',
 tint:'#E6F0E8',
 portrait:true,
 images:['pipe-climber-01.jpg','pipe-climber-02.jpg','pipe-climber-03.jpg','pipe-climber-04.jpg','pipe-climber-05.jpg','pipe-climber-06.jpg','pipe-climber-07.jpg','pipe-climber-08.jpg','pipe-climber-09.jpg','pipe-climber-10.jpg','pipe-climber-11.jpg','pipe-climber-12.jpg','pipe-climber-13.jpg','pipe-climber-14.jpg','pipe-climber-15.jpg','pipe-climber-16.jpg','pipe-climber-17.jpg','pipe-climber-18.jpg','pipe-climber-19.jpg','pipe-climber-20.jpg','pipe-climber-21.jpg','pipe-climber-22.jpg'],
 slides:[['Page 1',''],['Page 2',''],['Page 3',''],['Page 4',''],['Page 5',''],['Page 6',''],['Page 7',''],['Page 8',''],['Page 9',''],['Page 10',''],['Page 11',''],['Page 12',''],['Page 13',''],['Page 14',''],['Page 15',''],['Page 16',''],['Page 17',''],['Page 18',''],['Page 19',''],['Page 20',''],['Page 21',''],['Page 22','']]},
{slug:'repeatable-vehicle',title:'IMechE Repeatable Vehicle',cat:'Mechanical',year:'Year 1',module:'IMechE Design Challenge',role:'Team member',team:'Joe Goodsell and Keisi Cucaj',
 tools:[],tags:['mechanical design','teamwork','testing'],
 summary:'A purely mechanical device that moves, hits a wall and returns to its start. Winner of the challenge.',
 brief:'Design and build a repeatable device that moves, hits a wall and travels back to its starting position, using only mechanical principles and methods.',
 did:['Worked in a team of three to design and build the device.','Kept to a £50 budget and a 400 mm cube size limit.','Measured distance travelled mechanically, with no programming.','Tested and adapted the design when things did not go to plan.'],
 outcome:'The team won the challenge. It was a great introduction to Design Engineering and showed the importance of teamwork, testing and adapting.',
 tint:'#F1E9DA',
 images:['arv-image.jpeg'],
 slides:[['The challenge','A repeatable device that moves, hits a wall and travels back to its starting position.'],['The specification','Finish within 3 minutes, spend no more than £50 and fit inside 400 x 400 x 400 mm.'],['No programming','Distance travelled had to be measured mechanically, using only mechanical principles.'],['The team','Designed and built together with Joe Goodsell and Keisi Cucaj.'],['The result','The team won the challenge.']]}
]
var CATS=['All','Mechanical','Mechatronics']

/* ---------- experience: newest first ---------- */
var EXPERIENCE=[
{role:'Sales Associate',org:'Selfridges · Part-time · London',dates:'Oct 2024 to present',
 text:'Advise clients on high-end handbag collections in a luxury retail setting, building product knowledge and lasting client relationships.'},
{role:'Engineering Intern',org:'ADAMO ROBOT · Internship · Madrid, Spain',dates:'May 2025 to Jun 2025',
 text:'Worked with engineers to improve a physiotherapy rehabilitation robot. Used anthropometric data to refine the ergonomic design and assessed the economic feasibility of design changes.'},
{role:'Sales Assistant',org:'The Entertainer · London',dates:'Nov 2023 to Feb 2024',
 text:'Helped customers with enquiries and product choices, kept displays and stock organised, and worked with the team on in-store displays and promotions.'},
{role:'Private Equity Intern',org:'Permira · Internship',dates:'Sep 2022 to Sep 2023',
 text:'Worked alongside industry specialists on financial analysis and due diligence for investment opportunities, and was invited to return to headquarters.'}
];
