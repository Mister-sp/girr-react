import React from "react";

type Subject = {
  id: string;
  title: string;
  order: number;
};

type ShowSubjectsProps = {
  subjects: Subject[];
};

const ShowSubjects: React.FC<ShowSubjectsProps> = ({ subjects }) => (
  <ul className="space-y-2">
    {subjects.map((subject) => (
      <li key={subject.id} className="bg-gray-100 rounded px-3 py-2">
        {subject.title}
      </li>
    ))}
  </ul>
);

export default ShowSubjects;
