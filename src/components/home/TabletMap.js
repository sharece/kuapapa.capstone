import { useNavigate } from "react-router-dom";
import colormap from "../../assets/color-mapfi.png";
export const TabletMap = () => {
  const navigate = useNavigate();
  const handleClick = (evt) => {
    /*
     * prevent the links from reloading the page by intercepting the click
     * and using navigate to update the url
     */
    evt.preventDefault();
    navigate(`/${evt.target.title}`);
  };
  return (
    <>
      <div className="flex justify-center p-10 z-3">
        <img
          sizes="(min-width: 640px)"
          alt="clickable map"
          src={colormap}
          useMap="#image_map"
        />
        <map name="image_map">
          <area
            onClick={handleClick}
            alt="napali"
            title="napali"
            href="/napali"
            coords="491,28,491,52,478,74,435,94,395,79,435,65,"
            shape="poly"
          />
          <area
            onClick={handleClick}
            alt="kona"
            title="kona"
            href="/kona"
            coords="389,81,430,98,481,79,488,92,539,154,563,159,564,169,558,174,558,205,561,250,586,269,599,276,611,281,629,285,645,291,652,307,614,338,578,325,521,325,477,319,400,257,349,242,340,220,324,198,332,163,387,81"
            shape="poly"
          />
          <area
            onClick={handleClick}
            alt="puna"
            title="puna"
            href="/puna"
            coords="644,103,665,100,674,107,689,107,738,104,738,124,728,133,717,157,704,180,697,206,697,229,707,236,707,260,692,256,675,268,690,275,690,278,656,305,651,290,641,283,603,275,597,266,566,250,569,162,577,157,593,157,605,141,622,122,635,122,"
            shape="poly"
          />
          <area
            onClick={handleClick}
            alt="koolau"
            title="koolau"
            href="/koolau"
            coords="635,13,665,13,665,28,697,28,707,43,722,67,736,101,640,101,632,88,619,74,641,36"
            shape="poly"
          />
          <area
            onClick={handleClick}
            alt="halelea"
            title="halelea"
            href="/halelea"
            coords="583,19,614,24,629,27,636,27,639,40,627,51,614,68,614,76,620,83,629,91,629,96,638,101,638,109,633,116,624,116,617,116,613,127,606,127,592,140,588,152,573,152,566,157,556,151,545,153,539,142,504,103,500,90,492,86,488,78,485,71,494,59,495,44,495,24,527,24,561,39,571,21"
            shape="poly"
          />
          <area
            onClick={handleClick}
            alt="niihau"
            title="niihau"
            href="/niihau"
            coords="49,386,8,354,22,296,111,227,127,194,138,169,144,160,161,160,161,192,174,213,161,218,146,266,154,283,97,308,"
            shape="poly"
          />
        </map>
      </div>
    </>
  );
};
