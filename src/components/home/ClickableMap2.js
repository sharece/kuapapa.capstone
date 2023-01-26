import greenmap from "../../assets/green-kauai.png";
export const ClickableMap2 = () => (
  <>
    <div className="">
      {" "}
      <img
        className="home-map"
        alt="clickable map"
        src={greenmap}
        useMap="#image_map"
      />
      <map name="image_map">
        <area
          target="_self"
          alt="niihau"
          title="niihau"
          href="http://localhost:3000/niihau"
          coords="186,161,15,385"
          shape="rect"
        />
        <area
          target="_self"
          alt="halelea"
          title="halelea"
          href="http://localhost:3000/halelea"
          coords="610,102,510,28"
          shape="rect"
        />
        <area
          target="_self"
          alt="kona"
          title="kona"
          href="http://localhost:3000/kona"
          coords="368,133,528,323"
          shape="rect"
        />
        <area
          target="_self"
          alt="puna"
          title="puna"
          href="http://localhost:3000/puna"
          coords="622,127,740,264"
          shape="rect"
        />
        <area
          target="_self"
          alt="koolau"
          title="koolau"
          href="http://localhost:3000/koolau"
          coords="646,23,741,90"
          shape="rect"
        />
        <area
          target="_self"
          alt="napali"
          title="napali"
          href="http://localhost:3000/napali"
          coords="424,45,476,91"
          shape="rect"
        />
      </map>
    </div>
  </>
);
