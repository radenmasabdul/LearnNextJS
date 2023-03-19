import { useState } from "react";
import { useRouter } from "next/router";

const EventList = ({ eventList }) => {
  const [events, setEvents] = useState(eventList);
  const router = useRouter();

  const fetchEvent = async () => {
    const response = await fetch(
      `http://localhost:4000/events?category=sports`
    );
    const data = await response.json();
    setEvents(data);
    router.push("/events?category=sports", undefined, { shallow: true });
  };

  return (
    <>
      <h1 className="text-red-700 text-4xl">List of Event</h1>
      <button onClick={fetchEvent} className="btn btn-info text-white">
        Sports Events
      </button>
      {events.map((event) => {
        return (
          <div key={event.id}>
            <h1>Event Id : {event.id}</h1>
            <h2>Title : {event.title}</h2>
            <p>Desciption: {event.description}</p>
            <p>Category: {event.category}</p>
            <p>Date: {event.date}</p>
            <hr />
          </div>
        );
      })}
    </>
  );
};

export default EventList;

//SSR
export async function getServerSideProps(context) {
  const { query } = context;
  const { category } = query;
  const queryString = category ? "category-sports" : "";
  const response = await fetch(`http://localhost:4000/events?${queryString}`);
  const data = await response.json();

  return {
    props: {
      eventList: data,
    },
  };
}
