export const FPS = 30;
export const DURATION = 52;
export const WIDTH = 1080;
export const HEIGHT = 1920;

export const scenes = [
  { id:1, start:0, end:4, title:"The impossible passenger", caption:"SOMEONE STOLE A SHARK… IN A BABY STROLLER.", narration:"Three people walked into an aquarium with a plan so ridiculous it sounds made up.", visual:"A stroller glides toward camera through a blue-lit aquarium corridor. A suspicious fin silhouette moves beneath the blanket.", camera:"Fast push-in, then slight low-angle reveal.", beat:"Immediate visual contradiction; open loop." },
  { id:2, start:4, end:10, title:"Meet Miss Helen", caption:"HER NAME WAS MISS HELEN.", narration:"Their target was a tiny horn shark named Miss Helen.", visual:"Hero reveal of the 16-inch horn shark in the touch pool. Visitors and coral silhouettes establish scale.", camera:"Slow underwater orbit, rack focus to shark.", beat:"Name the victim and make viewers care." },
  { id:3, start:10, end:16, title:"The grab", caption:"THEY LIFTED HER FROM THE OPEN TOUCH POOL.", narration:"They lifted her from an open touch pool and carried her away from the exhibit.", visual:"A stylised 3D visitor reaches into the pool; the shark is lifted carefully in a net. Other visitors remain soft silhouettes.", camera:"Over-shoulder move, then quick lateral track.", beat:"The crime becomes clear." },
  { id:4, start:16, end:22, title:"The back-room switch", caption:"THEN CAME A BUCKET AND A WET BLANKET.", narration:"In a back room, the shark was placed in a bucket and wrapped in a wet blanket.", visual:"Service-room doorway, bucket with water, damp cloth bundle. Keep animal visible only briefly and non-graphic.", camera:"Doorway peek, short push toward bucket.", beat:"Specific, strange detail escalates the story." },
  { id:5, start:22, end:29, title:"The stroller disguise", caption:"THE BUCKET WENT INTO A BABY STROLLER.", narration:"Then they concealed the bucket in a baby stroller and headed for the exit.", visual:"Bucket lowered into stroller basket; blanket draped over top. Stroller wheels roll past aquarium tanks.", camera:"Low tracking shot beside wheels; tilt up to handle.", beat:"Payoff of the bizarre premise." },
  { id:6, start:29, end:36, title:"The giveaway", caption:"BUT WATER WAS DRIPPING ON THE FLOOR.", narration:"But an employee noticed water dripping from the stroller and alerted management.", visual:"Droplets fall from stroller; employee notices, follows at a distance, reaches for phone.", camera:"Macro droplet insert, whip-pan to employee.", beat:"A tiny mistake breaks the plan." },
  { id:7, start:36, end:44, title:"Found alive", caption:"TWO DAYS LATER, MISS HELEN WAS FOUND ALIVE.", narration:"Police traced the vehicle and found Miss Helen alive at a home with aquariums.", visual:"Nighttime home garage with tanks; police/official silhouettes; shark swims in a recovery tank.", camera:"Headlight sweep, controlled push through doorway, underwater close-up.", beat:"Resolution with relief, not sensationalism." },
  { id:8, start:44, end:52, title:"Back home", caption:"AFTER QUARANTINE, SHE RETURNED TO DISPLAY.", narration:"She was returned to the aquarium, monitored in quarantine, and later went back on display.", visual:"Miss Helen swims in a clean display tank; staff and visitors cheer as silhouettes; final title card.", camera:"Gentle underwater rise and pullback to wide.", beat:"Emotional closure and satisfying final image." }
];

export function sceneAt(t) {
  return scenes.find(s => t >= s.start && t < s.end) || scenes[scenes.length - 1];
}
