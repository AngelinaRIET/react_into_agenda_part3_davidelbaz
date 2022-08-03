import { useEffect, useState } from "react";
import Card from "./components/Card";
import "./App.css";
import Select from "./components/Select";
import Input from "./components/Input";
function App() {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true); //je pars du principe qu'au chargement de la page, je suis dans l'attente de données
  const [urlParams, setUrlParams] = useState({
    rows: 32,
    search: "",
  });
  useEffect(() => {
    setLoading(true);
    const url = `https://data.iledefrance.fr/api/records/1.0/search/?dataset=evenements-publics-cibul&q=${urlParams.search}&rows=${urlParams.rows}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setRecords(data.records);
        setLoading(false);
      });
  }, [urlParams.rows, urlParams.search]); //au premier chargement du composant, tu vas faire une requête

  // useEffect(() => {
  //   let monInterval = setInterval(() => {
  //       console.log("toto");
  //   }, 1000);

  //   return () => { //cleanup (fonction de nettoyage) au déchargement du composant
  //     clearInterval(monInterval)
  //   };
  // }, []);
  // if (loading) {
  //   return <div>Chargement en cours</div>;
  // }
  // {row: 32, search: "Paris"}

  const handleChange = (e) => {
    //une seule fonction pour le select et l'input
    setUrlParams({ ...urlParams, [e.target.name]: e.target.value }); //rows || search
  };

  return (
    <>
      <div>
        <h1>Liste des évènements culturels</h1>
        <Select handleChange={handleChange} options={[32, 60, 100]} />
        <Input handleChange={handleChange} />
        {loading ? (
          <div>Chargement en cours</div>
        ) : (
          <div className="cardBloc">
            {records.map((e) => (
              <Card
                key={e.recordid}
                title={e.fields.title}
                image={e.fields.image_thumb}
                description={e.fields.description}
                url={e.fields.link}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
