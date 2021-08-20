import React, { useState, useEffect, FormEvent } from "react";
import styles from "./styles.module.scss";
import { IMeetup } from "../../utils/interfaces";
import { v4 as uuid_v4 } from "uuid";
import api from "axios";
import CommentList from "../CommentList";

const MeetupList = () => {
  const [meetups, setMeetups] = useState<IMeetup[]>([]);

  const [newMeetupTitle, setNewMeetupTitle] = useState("");
  const [newMeetupDescription, setNewMeetupDescription] = useState("");

  useEffect(() => {
    api.get("http://localhost:3333/meetups").then((response) => {
      setMeetups(response.data);
    });
  }, []);

  const addNewMeetup = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newMeetup = {
      id: uuid_v4(),
      title: newMeetupTitle,
      description: newMeetupDescription,
      comments: [],
    };

    setMeetups([newMeetup, ...meetups]);

    setNewMeetupTitle("");
    setNewMeetupDescription("");
  };

  const meetupList = meetups.map((meetup) => ({
    ...meetup,
    formattedTitle:
      meetup.title.length > 40
        ? meetup.title.substr(0, 40).concat("...")
        : meetup.title,
  }));

  return (
    <>
      <form className={styles.formMeetups} onSubmit={addNewMeetup}>
        <input
          className={styles.inputText}
          placeholder="Título do Meetup"
          onChange={(e) => setNewMeetupTitle(e.target.value)}
          value={newMeetupTitle}
        />

        <textarea
          className={styles.textArea}
          placeholder="Descrição do Meetup"
          onChange={(e) => setNewMeetupDescription(e.target.value)}
          value={newMeetupDescription}
        />

        <button className={styles.button} type="submit">
          Publicar
        </button>
      </form>

      <div className={styles.meetupList}>
        {meetupList.map((meetup) => (
          <section className={styles.containerInfos} key={meetup.id}>
            <strong>{meetup.formattedTitle}</strong>
            <p className={styles.description}>{meetup.description}</p>

            <CommentList comments={meetup.comments} />
          </section>
        ))}
      </div>
    </>
  );
};

export default MeetupList;
