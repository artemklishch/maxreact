import { Fragment } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import NewMeetUpForm from "../../components/meetups/NewMeetupForm";

function NewMeetUpPage() {
  const router = useRouter();
  async function addMeetUpHandler(enteredMeetUpData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(enteredMeetUpData),
    });
    const data = await response.json();
    console.log("data", data);
    router.push("/");
  }
  return (
    <Fragment>
      <Head>
        <title>Add a New Meetup</title>
        <meta name="description" content="Add your own meetups" />
      </Head>
      <NewMeetUpForm onAddMeetup={addMeetUpHandler} />
    </Fragment>
  );
}
export default NewMeetUpPage;
