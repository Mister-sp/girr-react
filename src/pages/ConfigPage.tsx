import React from "react";
import Header from "../components/common/Header";
import Card from "../components/common/Card";

const ConfigPage: React.FC = () => (
  <div className="max-w-2xl mx-auto p-4">
    <Header title="Configuration" />
    <Card className="mt-4">
      <h2 className="font-semibold mb-2">Paramètres</h2>
      {/* Ajoute ici les formulaires de configuration, inputs, etc. */}
      <div className="text-gray-500">(Configuration de la régie à venir)</div>
    </Card>
  </div>
);

export default ConfigPage;
