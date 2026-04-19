const messages=[
'No anomaly detected',
'Signal received from sector 7',
'Unknown craft moving fast',
'Landing coordinates uploaded'
];
function scanSky(){
 const pick=messages[Math.floor(Math.random()*messages.length)];
 document.getElementById('feed').innerHTML+=`<p>${pick}</p>`;
}
