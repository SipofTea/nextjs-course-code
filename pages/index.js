import { useEffect, useState } from "react";
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

function HomePage(props) {
    const [loadedMeetups, setLoadedMeetups] = useState([]);
    useEffect(() => {
        // send http request and fetch data
        setLoadedMeetups(DUMMY_MEETUPS)
    }, []); 
    return <MeetupList meetups={props.meetups}></MeetupList>
}

export async function getStaticProps() {

    return {
        props: {
            meetups: DUMMY_MEETUPS
        }
    };
}

export default HomePage;