import { Fragment } from "react";
import Head from "next/head";
import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";
// import { useEffect, useState } from "react";

// const DUMMY_MEETUPS = [
//   {
//     id: "m1",
//     title: "The First MeetUp",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/M%C3%BCnchen_Panorama.JPG/250px-M%C3%BCnchen_Panorama.JPG",
//     address: "Some address",
//     description: "This is a first meet up",
//   },
//   {
//     id: "m2",
//     title: "The Second MeetUp",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/M%C3%BCnchen_Panorama.JPG/250px-M%C3%BCnchen_Panorama.JPG",
//     address: "Some address",
//     description: "This is a second meet up",
//   },
// ];

function HomePage(props) {
  //   const [meetups, setMeetups] = useState([]);
  //   useEffect(() => {
  //     setMeetups(DUMMY_MEETUPS);
  //   }, []);
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetup"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://Artem2:Kg0ue6a1Cu5Jr2Qc@cluster0.fikvk.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetuspCollection = db.collection("meetups");
  const meetupsFromDb = await meetuspCollection.find().toArray();
  client.close();
  return {
    props: {
      meetups: meetupsFromDb.map((el) => ({
        image: el.image,
        title: el.title,
        address: el.address,
        id: el._id.toString(),
      })),
    },
    revalidate: 10, // обновляем данніе каждіе 10 секунд
  };
}

// export async function getServerSideProps(context) {
//   // данные обновляются автоматически, когда они обновляются на сервере
//   // fetch data for example
//   const req = context.req
//   const res = context.res
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export default HomePage;
