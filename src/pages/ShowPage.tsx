import React, { useEffect, useState } from "react";
import Card from "../components/common/Card";
import Header from "../components/common/Header";
import Loader from "../components/common/Loader";
import ShowSubjects from "../components/features/ShowSubjects";
import { useParams } from "react-router-dom";
import { useShowStore, type Show } from "../store/useShowStore";

const ShowPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { loading, error, fetchShowById } = useShowStore();
  const [show, setShow] = useState<Show | null>(null);

  useEffect(() => {
    if (!id) return;
    fetchShowById(id).then((data: Show | null) => {
      if (data) setShow(data);
    });
  }, [id, fetchShowById]);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <Header title={show ? show.title : `Détail émission #${id}`} />
      {loading && <Loader />}
      {error && <div className="text-red-500">{error}</div>}
      {show && (
        <Card className="mt-4">
          <h2 className="font-semibold mb-2">Sujets</h2>
          <ShowSubjects subjects={show.subjects} />
        </Card>
      )}
    </div>
  );
};

export default ShowPage;
