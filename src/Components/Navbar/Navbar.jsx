import React from "react";
import "./style.scss";

import { Link } from "react-location";

export default function Navbar() {
  return (
    <div className="navbar__container">
      <Link className="navbar__container__title">Hash Digital Agency</Link>

      <div className="navbar__container__links">
        <Link>
            LoremIpsum
        </Link>
        <Link>
            LoremIpsum
        </Link>
        <Link>
            LoremIpsum
        </Link>
        <Link>
            LoremIpsum
        </Link>
      </div>
    </div>
  );
}
