import { MongoClient, ObjectId } from "mongodb";
import { Fragment } from "react";
import Head from "next/head";
import MeetupDetail from "../../components/meetups/MeetupDetail";

// const DUMMY_MEETUP = {
//   image:
//     "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/M%C3%BCnchen_Panorama.JPG/250px-M%C3%BCnchen_Panorama.JPG",
//   title: "A First meetup",
//   address: "Some address",
//   description: "This is the first meet up description",
// };

function MeetupDetails(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.meetup.title}</title>
        <meta name="description" content={props.meetup.description} />
      </Head>
      <MeetupDetail
        image={props.meetup.image}
        title={props.meetup.title}
        address={props.meetup.address}
        description={props.meetup.description}
      />
    </Fragment>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://Artem2:Kg0ue6a1Cu5Jr2Qc@cluster0.fikvk.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetuspCollection = db.collection("meetups");
  const meetupsFromDb = await meetuspCollection.find({}, { _id: 1 }).toArray();
  client.close();
  return {
    fallback: "blocking", // это будет раотать после деплоинга, а false не будет работать после деплоинга
    // fallback: false, // false означает, что мы в paths предусмотрели все, что можно и чего-то другого не будет
    // fallback: true, // true означает, что мы в paths что-то предусмотрели, но еслди будет другой идентификатор, то программа все равно попробует отрисовать страницу
    // paths: [{ params: { meetupId: "m1" } }, { params: { meetupId: "m2" } }],
    paths: meetupsFromDb.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  const client = await MongoClient.connect(
    "mongodb+srv://Artem2:Kg0ue6a1Cu5Jr2Qc@cluster0.fikvk.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetuspCollection = db.collection("meetups");
  const selectedMeetupFromDb = await meetuspCollection.findOne({
    _id: ObjectId(meetupId),
  });
  delete selectedMeetupFromDb._id;
  console.log("selectedMeetupFromDb", selectedMeetupFromDb);
  client.close();
  return {
    props: {
      // meetup: { ...DUMMY_MEETUP, id: meetupId },
      // meetup: {
      //   image: selectedMeetupFromDb.image,
      //   title: selectedMeetupFromDb.title,
      //   address: selectedMeetupFromDb.address,
      //   description: selectedMeetupFromDb.description,
      //   id: meetupId,
      // },
      meetup: { ...selectedMeetupFromDb, id: meetupId },
    },
  };
}

// export const getStaticPaths = async () => {

//   return {
//       paths: [], //indicates that no page needs be created at build time
//       fallback: 'blocking' //indicates the type of fallback
//   }
// }

export default MeetupDetails;
