import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
    {
        id: "Meetup 1",
        title: "First Meetup",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/92/NDU-Goldkuppel.jpg",
        address: "1 Suffolk St, London SW1Y 4HG",
        description: "This is the first meetup"
    },
    {
        id: "Meetup 2",
        title: "Second Meetup",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/92/NDU-Goldkuppel.jpg",
        address: "2 Suffolk St, London SW1Y 4HG",
        description: "This is the first meetup"
    },
    {
        id: "Meetup 3",
        title: "Third Meetup",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/92/NDU-Goldkuppel.jpg",
        address: "3 Suffolk St, London SW1Y 4HG",
        description: "This is the first meetup"
    },
]

function HomePage() {
 return <MeetupList meetups={DUMMY_MEETUPS}></MeetupList>
}

export default HomePage;