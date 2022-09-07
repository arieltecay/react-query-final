/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import NewBand from "./componentes/NewBand";
import Band from "./componentes/Band";
import Bands from "./componentes/Bands";

export default function App() {
  const [bandId, setBandId] = useState(-1);

  return (
    <main className="container">
      <h1 className="mb-4">React-Query de las Bandas</h1>
      {bandId > -1 && (
        <div>
          <a onClick={() => setBandId(-1)} href="#">
            Back
          </a>
        </div>
      )}
      {bandId > -1 ? (
        <Band bandId={bandId} setBandId={setBandId} />
      ) : (
        <div className="row gap-4">
{/*           <div className="col-md">
            <NewBand />
          </div> */}
          <div className="col-md">
            <Bands setBandId={setBandId} />
          </div>
        </div>
      )}
    </main>
  );
}