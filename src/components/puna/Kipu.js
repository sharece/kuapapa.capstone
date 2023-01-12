import { Link } from "react-router-dom";

export const Kipu = () => (
  <>
    <Link className="back-to-moku" to="/puna">
      Take me back to Puna
    </Link>
    <div>
      <h1>KIPU</h1>
      <p>
        {" "}
        Kīpū: Hold-back or brace, as a canoe on a wave with a paddle It
        straddles the Hā`upu mountain range and is divided in two parts,
        Kīpū-uka and Kīpū-kai. Hā`upu peak dominates the land.
      </p>
      <p>
        Kīpū straddles the Hā`upu mountain range and is divided in two parts.
        Kīpū means Hold-back or brace, as a canoe on a wave with a paddle.
      </p>
    </div>
  </>
);
