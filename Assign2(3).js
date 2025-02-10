const sessions = [
    {topic:"Phy",sessionTime:'2025-02-03T10:06:00',duration:60},
    {topic:"Chem",sessionTime:'2025-02-03T12:00:00',duration:50},
    {topic:"Bio",sessionTime:'2025-02-03T11:00:00',duration:40},
];

const addSession = (topic, sessionTime, duration) => {
  if (!topic || isNaN(new Date(sessionTime)) || duration <= 0) return console.error("Invalid input.");
  sessions.push({ topic, sessionTime: new Date(sessionTime), duration });
  console.log(`Session added: ${topic} at ${new Date(sessionTime).toLocaleTimeString()} for ${duration} mins.`);
};
addSession('Math Study', '2025-02-03T10:00:00', 60);
console.log(sessions)


const listTodaySessions = () => {
  const today = new Date().toISOString().slice(0, 10);
  sessions.filter(s => s.sessionTime.slice(0, 10) === today)
    .forEach(s => console.log(`Topic: ${s.topic}, Time: ${s.sessionTime}, Duration: ${s.duration} mins`));
};
listTodaySessions();


const sessionCountdown = () => {
  const now = Date.now();
  sessions.forEach(s => {
    const diff = s.sessionTime - now;
    if (diff > 0) setTimeout(() => console.log(`Session on ${s.topic} starts now!`), diff);
  });
};
sessionCountdown();




const fetchStudyMaterials = async (topic) => {
  console.log(topic ? `Materials for ${topic}` : "No topic provided.");
};
fetchStudyMaterials('Math');
// Output: Materials for Math