import React, { useEffect } from "react";
import Card from "../components/common/Card";
import Header from "../components/common/Header";
import Loader from "../components/common/Loader";
import ShowSubjects from "../components/features/ShowSubjects";
import { useShowStore, type Show } from "../store/useShowStore";
import { Link } from "react-router-dom";
import { useWebSocket } from "../hooks/useWebSocket";

const HomePage: React.FC = () => {
  const { shows, loading, error, fetchShows } = useShowStore();

  useEffect(() => {
    fetchShows();
  }, [fetchShows]);

  useWebSocket(import.meta.env.VITE_WS_URL, (data) => {
    if (data && data.type === "show_updated") {
      fetchShows();
    }
  });

  return (
    <div className="max-w-2xl mx-auto p-4">
      <Header title="Accueil GIRR" />
      {loading && <Loader />}
      {error && <div className="text-red-500">{error}</div>}
      {shows.map((show: Show) => (
        <Card key={show.id} className="mt-4">
          <Link to={`/show/${show.id}`}>
            <h2 className="font-semibold mb-2">{show.title}</h2>
          </Link>
          <ShowSubjects subjects={show.subjects} />
        </Card>
      ))}
    </div>
  );
};

export default HomePage;
