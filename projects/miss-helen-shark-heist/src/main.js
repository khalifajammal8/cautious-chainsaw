import * as THREE from 'three';
import { FPS, DURATION, scenes, sceneAt } from './story.js';

const stage = document.querySelector('#stage');
const caption = document.querySelector('#caption');
const scrub = document.querySelector('#scrub');
const timeLabel = document.querySelector('#time');
const playBtn = document.querySelector('#play');
const sceneTitle = document.querySelector('#sceneTitle');
const sceneDesc = document.querySelector('#sceneDesc');
const captionToggle = document.querySelector('#captions');

const renderer = new THREE.WebGLRenderer({ antialias:true, alpha:false });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.setSize(1080, 1920, false);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.15;
stage.prepend(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x061720);
scene.fog = new THREE.Fog(0x061720, 13, 38);
const camera = new THREE.PerspectiveCamera(38, 1080/1920, .1, 100);
camera.position.set(0, 4.2, 17);

scene.add(new THREE.HemisphereLight(0x8bc8dc, 0x14232a, 2.0));
const key = new THREE.DirectionalLight(0xffdfb0, 2.5); key.position.set(-5,9,8); scene.add(key);
const cyan = new THREE.PointLight(0x20a9d0, 35, 24); cyan.position.set(0,5,-5); scene.add(cyan);
const warm = new THREE.PointLight(0xff9b43, 18, 18); warm.position.set(5,2,5); scene.add(warm);

const mat = (color, roughness=.75, metalness=0) => new THREE.MeshStandardMaterial({color,roughness,metalness});
const mats = {
  floor:mat(0x10232b), wall:mat(0x18343d), glass: new THREE.MeshPhysicalMaterial({color:0x48b7d1,transparent:true,opacity:.18,roughness:.12,metalness:.1}),
  dark:mat(0x10181b), skin:mat(0xc98c67), shirt:mat(0x2d5261), pants:mat(0x1d2930), stroller:mat(0x202c34,.55), fabric:mat(0x8b9a99), coral:mat(0x286f78), sand:mat(0x9a8660), shark:mat(0x778d92,.32), white:mat(0xe5f1ed), black:mat(0x101517)
};
const box = (w,h,d,m,x=0,y=0,z=0,parent=scene) => { const o=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),m);o.position.set(x,y,z);parent.add(o);return o; };
const sphere = (r,m,x=0,y=0,z=0,parent=scene,scale=[1,1,1]) => {const o=new THREE.Mesh(new THREE.SphereGeometry(r,20,14),m);o.position.set(x,y,z);o.scale.set(...scale);parent.add(o);return o;};
const cylinder = (rt,rb,h,m,x=0,y=0,z=0,parent=scene) => {const o=new THREE.Mesh(new THREE.CylinderGeometry(rt,rb,h,16),m);o.position.set(x,y,z);parent.add(o);return o;};

const world = new THREE.Group(); scene.add(world);
const aquarium = new THREE.Group(); world.add(aquarium);
box(18,.5,20,mats.floor,0,-1,0,aquarium);
box(18,12,.5,mats.wall,0,5,-8,aquarium);
for(let i=0;i<4;i++){const tank=box(3.3,4,.35,mats.glass,-5+i*3.35,2.2,-7.65,aquarium);box(3.1,.12,.28,mats.coral,-5+i*3.35,.2,-7.4,aquarium);for(let j=0;j<4;j++)sphere(.35,mats.coral,-6.1+i*3.35+j*.45,.4+(j%2)*.3,-7.25,aquarium,[.6,1.3,.7]);}
for(let i=-2;i<=2;i++){const col=cylinder(.28,.34,8,mat(0x2b4851),i*3.4,3,-3,aquarium);cylinder(.45,.45,.35,mat(0x49616a),i*3.4,7,-3,aquarium);}
for(let i=0;i<28;i++){const p=sphere(.025,mat(0x9be9f1),Math.sin(i*12.3)*7,Math.cos(i*4.7)*4,Math.sin(i*3.1)*5-2,aquarium);p.userData.bubble=true;}

const shark = new THREE.Group(); aquarium.add(shark);
sphere(.55,mats.shark,0,0,0,shark,[1.75,.55,.65]);
const tail = new THREE.Mesh(new THREE.ConeGeometry(.42,.95,3),mats.shark);tail.rotation.z=-Math.PI/2;tail.position.x=-1.45;shark.add(tail);
const dorsal = new THREE.Mesh(new THREE.ConeGeometry(.38,.7,3),mats.shark);dorsal.rotation.z=Math.PI;dorsal.position.set(-.1,.55,0);shark.add(dorsal);
for(const side of [-1,1]){sphere(.065,mats.black,.58,.1,side*.48,shark);const fin=new THREE.Mesh(new THREE.ConeGeometry(.22,.7,3),mats.shark);fin.rotation.z=.9;fin.position.set(.1,-.32,side*.38);shark.add(fin);}
shark.position.set(-.5,1.7,-5.9);

function makePerson(x,z,shirt=0x2d5261){
 const g=new THREE.Group();world.add(g);
 const torso=box(.72,1.2,.42,mat(shirt),0,1.55,0,g);
 const head=sphere(.36,mats.skin,0,2.45,0,g,[.85,1,.85]);
 // Graphic face marks: deliberately flat, simple and readable.
 sphere(.045,mats.black,-.12,2.48,.31,g);sphere(.045,mats.black,.12,2.48,.31,g);
 const mouth=box(.13,.025,.025,mats.black,0,2.31,.32,g);
 const armL=cylinder(.09,.07,.95,mats.skin,-.48,1.65,0,g);armL.rotation.z=-.35;
 const armR=cylinder(.09,.07,.95,mats.skin,.48,1.65,0,g);armR.rotation.z=.35;
 const legL=cylinder(.13,.1,.85,mats.pants,-.2,.55,0,g);const legR=cylinder(.13,.1,.85,mats.pants,.2,.55,0,g);
 g.position.set(x,0,z);g.userData={torso,head,armL,armR,legL,legR};return g;
}
const thiefA=makePerson(-3,1,0x354f60), thiefB=makePerson(3,1,0x6a4a3b), employee=makePerson(4,-2,0x2e6670);
const stroller=new THREE.Group();world.add(stroller);
box(1.2,.95,.9,mats.stroller,0,.8,0,stroller);
box(.9,.14,.8,mats.fabric,0,1.33,0,stroller);
const handle=cylinder(.055,.055,1.7,mat(0x71828a),0,1.65,-.48,stroller);handle.rotation.z=-.55;
for(const x of [-.48,.48])for(const z of [-.4,.4]){const w=cylinder(.18,.18,.12,mats.dark,x,.18,z,stroller);w.rotation.x=Math.PI/2;}
const bundle=sphere(.42,mats.fabric,0,1.52,.02,stroller,[1.15,.65,.8]);
stroller.position.set(0,0,2);

const bucket=new THREE.Group();world.add(bucket);cylinder(.5,.58,.8,mat(0x52646b),0,.42,0,bucket);cylinder(.47,.47,.06,mat(0x2b7e91),0,.82,0,bucket);bucket.position.set(0,0,2.5);

const garage=new THREE.Group();world.add(garage);
box(18,.5,18,mats.floor,0,-1,0,garage);box(18,12,.5,mat(0x26343a),0,5,-7,garage);
for(let i=0;i<3;i++){box(3.1,4,.4,mats.glass,-4+i*4,2,-6.65,garage);for(let j=0;j<5;j++)sphere(.22,mats.coral,-5+i*4+j*.45,.3+(j%2)*.2,-6.4,garage,[.7,1,.7]);}
const titleGroup=new THREE.Group();scene.add(titleGroup);

const dripGroup = new THREE.Group(); stroller.add(dripGroup);
for(let i=0;i<8;i++){const d=sphere(.035,mat(0x72d6ed),-0.2+Math.sin(i*5)*.22,-.55+(i%4)*.18,.48,dripGroup);d.userData.baseY=d.position.y;}

function clearVisible(){aquarium.visible=false;garage.visible=false;shark.visible=false;stroller.visible=false;bucket.visible=false;thiefA.visible=false;thiefB.visible=false;employee.visible=false;titleGroup.visible=false;world.visible=true;}
function setCamera(x,y,z,tx=0,ty=1,tz=0){camera.position.set(x,y,z);camera.lookAt(tx,ty,tz);}
function smooth(a,b,t){const x=THREE.MathUtils.clamp((t-a)/(b-a),0,1);return x*x*(3-2*x);}
function update(t){
 const s=sceneAt(t), local=t-s.start, p=local/(s.end-s.start);
 clearVisible();
 shark.scale.setScalar(1);
 dripGroup.visible=false;
 caption.textContent=captionToggle.checked?s.caption:'';
 sceneTitle.innerHTML='<b>Scene '+s.id+'</b> — '+s.title;
 sceneDesc.textContent=s.visual+' Camera: '+s.camera;
 if(s.id<=6){
   aquarium.visible=true;
   if(s.id===1){stroller.visible=true;stroller.position.set(0,0,4-3*smooth(0,4,t));bundle.visible=true;setCamera(0,3.1,14,0,1,0);camera.position.x=Math.sin(t*1.1)*.3;}
   if(s.id===2){shark.visible=true;shark.position.set(-.6+Math.sin(t*1.4)*.35,1.5,-5.4);setCamera(0,2.7,8,-.5,1.4,-5);}
   if(s.id===3){shark.visible=true;shark.position.set(-.8+2.2*p,2.0,-1);thiefA.visible=true;thiefA.position.set(-2.5+1.8*p,0,2);thiefA.userData.armR.rotation.z=-1.2;thiefB.visible=true;thiefB.position.set(2,0,2);setCamera(-1,3.3,11,0,1.4,0);}
   if(s.id===4){bucket.visible=true;shark.visible=true;shark.scale.setScalar(.48);shark.position.set(0,1.3,2.5);thiefA.visible=true;thiefA.position.set(-2,0,2);setCamera(0,3,10,0,1,2);}
   if(s.id===5){stroller.visible=true;stroller.position.set(-1.8+3*p,0,1);bundle.visible=true;thiefB.visible=true;thiefB.position.set(2.2,0,2);setCamera(0,2.6,10,0,1,0);}
   if(s.id===6){stroller.visible=true;stroller.position.set(-1,0,1);employee.visible=true;employee.position.set(2.4,0,1);dripGroup.visible=true;dripGroup.children.forEach((d,i)=>{d.position.y=d.userData.baseY+Math.sin(t*9+i)*.08;});setCamera(0,2.3,9,0,1,0);}
 }else{
   aquarium.visible=false;garage.visible=true;
   if(s.id===7){shark.visible=true;shark.scale.setScalar(.65);shark.position.set(-.3,1.4,-5.3);setCamera(-2,3,11,0,1,-3);}
   if(s.id===8){garage.visible=false;aquarium.visible=true;shark.visible=true;shark.scale.setScalar(1);shark.position.set(-.4,1.5,-5.4);setCamera(0,2.4,8,0,1.4,-5);}
 }
 // Animated environmental life and subtle camera movement.
 aquarium.children.forEach(o=>{if(o.userData?.bubble)o.position.y+=Math.sin(t*1.8+o.position.x)*.002;});
 shark.rotation.z=Math.sin(t*2.2)*.045;
 shark.position.y+=Math.sin(t*2.8)*.003;
 renderer.render(scene,camera);
 scrub.value=t;
 timeLabel.firstElementChild.textContent='00:'+String(Math.floor(t)).padStart(2,'0')+'.'+String(Math.floor((t%1)*100)).padStart(2,'0');
}
let current=0,playing=false,last=0,raf=0;
function tick(now){if(!playing)return;if(!last)last=now;current+=Math.min((now-last)/1000,.05);last=now;if(current>=DURATION){current=DURATION;playing=false;playBtn.textContent='Play';}update(current);if(playing)raf=requestAnimationFrame(tick);}
function play(){if(playing){playing=false;cancelAnimationFrame(raf);playBtn.textContent='Play';}else{if(current>=DURATION)current=0;playing=true;last=0;playBtn.textContent='Pause';raf=requestAnimationFrame(tick);}}
playBtn.addEventListener('click',play);
document.querySelector('#restart').addEventListener('click',()=>{playing=false;cancelAnimationFrame(raf);playBtn.textContent='Play';current=0;update(current);});
scrub.addEventListener('input',()=>{playing=false;cancelAnimationFrame(raf);playBtn.textContent='Play';current=Number(scrub.value);update(current);});
document.querySelector('#prev').addEventListener('click',()=>jump(Math.max(0,sceneAt(current).id-2)));
document.querySelector('#next').addEventListener('click',()=>jump(Math.min(7,sceneAt(current).id)));
captionToggle.addEventListener('change',()=>update(current));
function jump(i){playing=false;cancelAnimationFrame(raf);playBtn.textContent='Play';current=scenes[i].start;update(current);}
const sceneButtons=document.querySelector('#scenes');
scenes.forEach((s,i)=>{const b=document.createElement('button');b.textContent=String(s.id).padStart(2,'0')+' · '+s.title;b.addEventListener('click',()=>jump(i));sceneButtons.append(b);});
window.addEventListener('resize',()=>{renderer.setSize(1080,1920,false);});
update(0);
