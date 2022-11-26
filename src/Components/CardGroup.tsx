import React from "react";
import Card from "./Card";
import {
  faChartArea,
  faBoltLightning,
  faCloud,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
function CardGroup() {
  return (
    <div className="grid grid-rows-2 grid-cols-2 grid-flow-row-dense">
      <Card
        icon={faBoltLightning}
        title="Amet enim"
        content="Phasellus congue posuere lectus eu gravida. Phasellus ui mollis ex, gravida rhoncus mi. Maecenas eu ligula nec mi tincidunt suscipit eu in lacus"
        border="rb"
      />
      <Card
        icon={faChartArea}
        title="Ipsum dolor"
        content="IntegerPraesent urna nunc, convallis ac feugiat eliquet, ornare elementum non tellus. Nam enim sapien, ornare et dui ut, faucibus interdum enim."
        border="b"
      />
      <Card
        icon={faCloud}
        title="Cras quis"
        content="Integer id nisl blandit felis tempor tincidunt tempus posuere. Praesent ex metus, fugiat eget urna id, tincidunt tempus ipsum. In non facilisis"
        border="r"
      />
      <Card
        icon={faLock}
        title="Phasellus pretium"
        content="Vestibulum porttitor vulputate felis nulla ultrices. Nam eu nisl auctor leo accumsan fermentum. Duis sodales felis nulla, eget auctor eros porta vitae"
      />
    </div>
  );
}

export default CardGroup;
