import Article from "./Article";


const concerts = [
    {
    id:1,
    image:"https://api.getwemap.com/images/pps-events/79f1180b0dbbaeb70fa44a86.42100233.jpg?operation=contain",
    name: "Renata",
    type: "Chanson française",
    description: "Renata vous propose de jolies rencontres, des confidences et bien d’autres sujets qui lui tiennent à cœur : tout est prétexte à chanson ! Des compositions personnelles, le plus souvent, mais aussi quelques reprises pour présenter les spectacles à venir.RENATA, au chant, est accompagnée par Francis Harbulot au piano.Programmation ville de Dijon.Concert présenté avec le soutien de la ville de Dijon.",
    lieu: "Dijon",
    suivre: false
    },
    {
    id:2,
    image: "https://api.getwemap.com/images/pps-events/1ce6201ed55a32304990d9b5.79420132.jpg?operation=contain",
    name: "Choeur du Coq à l'Âne",
    type: "Musique Classique",
    description: "20 choristes interprètent des oeuvres choisies de Georg Friedriech Haenedel, Giuseppe Verdi et Jean-Philippe Rameau accompagnées de lectures de textes de Stefan Sweig et François Sureau.",
    lieu: "Dijon",
    suivre: false
    },
    {
    id:3,
    image: "https://imgs.search.brave.com/5BbsrysvocYPMif7ipfb1F2adhhYWaRPCRTLE_cdec0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9waG90/b3MuYmFuZHNpbnRv/d24uY29tL3RodW1i/LzgyMDE0OTcuanBl/Zw",
    name: "Clémence de Tournemire quartet",
    type: "Jazz",
    description: "Hommage à Ella Fitzgerald, Sarah Vaughan et Billie Holiday",
    lieu: "Paris",
    suivre: true
    },
    {
    id:4,
    image:"https://imgs.search.brave.com/ACwZ9pZLaTiPhw7jZQgl5fg8-KU6z618Y89sux7-gog/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMubGVwYXJpc2ll/bi5mci93ZWJzaXRl/L2V0dWRpYW50L2V2/ZW5lbWVudHMvaW1h/Z2VzLzIwMjQvMDYv/ZmV0ZS1tdXNpcXVl/LXdvcmxkLW9mLWdv/c3BlbC1zdXItbGUt/cGF2ZS1wYXJpc2ll/bi1wYXJpcy02MDB4/MzAwLmpwZw",    
    name: "World of Gospel",
    type: "Gospel",
    description: "Le Gospel, une musique qui transcende, qui unit et qui nourrit l’âme... L’énergie que World of Gospel dégage est contagieuse et vous emmènera pour l'occasion dans un voyage émotionnel.",
    lieu: "Paris",
    suivre: false
    }
];

export default function SectionArticles () {

    return <>
    {concerts.map((groupe) => (
        <Article key={groupe.id} groupe = {groupe}/>   )
    )}
    </>
    
}
