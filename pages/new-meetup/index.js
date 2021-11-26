import Layout from "../../components/layout/Layout";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {
    function addMeetupHandler(enteredMeetupData) {
        console.log(enteredMeetupData);
    }
    return <Layout>
            <NewMeetupForm onAddMeetup={addMeetupHandler}></NewMeetupForm>
        </Layout>
};

export default NewMeetupPage;