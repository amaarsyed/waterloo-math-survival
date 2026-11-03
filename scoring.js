// Transparent study-habit rubric. Weights are design choices, not fitted data.
// This is a 10–100 game score, never a probability of graduating.
const survivalRubric=[
 {metric:'Seeking help instead of hiding gaps',weight:15,strong:'A'},
 {metric:'Collaborative understanding',weight:10,strong:'B'},
 {metric:'Independent problem-solving practice',weight:20,strong:'A'},
 {metric:'Addressing confusion early',weight:10,strong:'B'},
 {metric:'Sustainable study routine',weight:10,strong:'B'},
 {metric:'Spreading practice over time',weight:15,strong:'A'},
 {metric:'Planning around deadlines',weight:5,strong:'B'},
 {metric:'Learning from marked feedback',weight:10,strong:'A'},
 {metric:'Checking reasoning and calculations',weight:5,strong:'B'},
 {metric:'Campus preference — deliberately unscored',weight:0,strong:null}
];
function calculateSurvival(answers){
 if(!Array.isArray(answers)||answers.length!==10||Array.from(answers).some(x=>!['A','B'].includes(x)))throw new Error('Complete all ten choices first.');
 const habitPoints=survivalRubric.reduce((sum,r,i)=>sum+(answers[i]===r.strong?r.weight:0),0);
 return Math.max(10,Math.min(100,Math.round(10+0.9*habitPoints)));
}
