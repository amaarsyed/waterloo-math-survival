// Playful game scores, not probabilities or academic predictions.
const programNames=['CS','Math','CFM','FARM'];
const programLabels=['Computer Science','Mathematics','Computing & Financial Management','Financial Analysis & Risk Management'];
const choicePoints=[
 {A:[5,5,5,5],B:[1,1,1,1]},
 {A:[2,2,2,2],B:[5,5,5,5]},
 {A:[1,2,2,2],B:[5,5,5,5]},
 {A:[4,5,4,4],B:[5,4,5,5]},
 {A:[2,2,2,2],B:[5,5,5,5]},
 {A:[3,3,4,5],B:[5,5,4,3]},
 {A:[3,5,4,4],B:[5,3,4,4]},
 {A:[2,2,2,2],B:[5,5,5,5]},
 {A:[5,5,3,3],B:[3,3,5,5]},
 {A:[3,3,5,5],B:[5,5,4,4]}
];
function calculateScores(answers){if(answers.length!==10||answers.some(x=>!['A','B'].includes(x)))throw new Error('Complete all ten choices first.');return programNames.map((name,p)=>({name,label:programLabels[p],score:Math.round(40+answers.reduce((sum,a,i)=>sum+choicePoints[i][a][p],0)*1.2)}));}
