/* Everything you edit lives in this file: name, email, categories and projects. */

/* ---------- SETTINGS: change these two lines ---------- */
var NAME='Your Name';
var EMAIL='hello@example.com';
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
 images:[], /* file names in the images folder, one per slide, in slide order. Example: ['01-challenge.jpg','02-control.jpg'] */
 slides:[['The challenge','Climb a pipe carrying a 2.2 m chain, hold at the top for 15 seconds, return, then drop the chain.'],['Control system','A closed-loop system: encoders and a limit switch feed position back to an Arduino.'],['Motor modelling','A MATLAB model showed the closed-loop response would be stable before anything was built.'],['CAD and build','3D printed wheels with rubber and O-rings, a printed chain-drop arm and a laser-cut MDF base.'],['Electronics','An Arduino Uno, two encoder motors, a limit switch, LEDs and a buzzer, powered by a 12V battery.'],['Test day','Everything worked on the bench. On the pipe, the finished device weighed about double the estimate.']]},
{slug:'repeatable-vehicle',title:'IMechE Repeatable Vehicle',cat:'Mechanical',year:'Year 1',module:'IMechE Design Challenge',role:'Team member',team:'Joe Goodsell and Keisi Cucaj',
 tools:[],tags:['mechanical design','teamwork','testing'],
 summary:'A purely mechanical device that moves, hits a wall and returns to its start. Winner of the challenge.',
 brief:'Design and build a repeatable device that moves, hits a wall and travels back to its starting position, using only mechanical principles and methods.',
 did:['Worked in a team of three to design and build the device.','Kept to a £50 budget and a 400 mm cube size limit.','Measured distance travelled mechanically, with no programming.','Tested and adapted the design when things did not go to plan.'],
 outcome:'The team won the challenge. It was a great introduction to Design Engineering and showed the importance of teamwork, testing and adapting.',
 tint:'#F1E9DA',
 images:[],
 slides:[['The challenge','A repeatable device that moves, hits a wall and travels back to its starting position.'],['The specification','Finish within 3 minutes, spend no more than £50 and fit inside 400 x 400 x 400 mm.'],['No programming','Distance travelled had to be measured mechanically, using only mechanical principles.'],['The team','Designed and built together with Joe Goodsell and Keisi Cucaj.'],['The result','The team won the challenge.']]}
];
var CATS=['All','Mechanical','Mechatronics'];
