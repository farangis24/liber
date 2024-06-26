import { ServiceIcon } from "../public/icon";
import { Icon } from "../public/icon2";
import { Icon2 } from "../public/icon3";
import { Icon4 } from "../public/icon4";
import { Card } from "./component/card/main-card";
import { Stars } from "../public/stars";
import { CardIcon } from "../public/card-icon";

import "./index.css";
import productImg1 from "/public/book1.png";
import productImg2 from "/public/book2.png";
import productImg3 from "/public/book3.png";
import productImg4 from "/public/book4.png";
import productImg5 from "/public/book5.png";
import productImg6 from "/public/book6.png";
import productImg7 from "/public/book7.png";
import productImg8 from "/public/book8.png";
import service1 from "/public/service1.png";
import service2 from "/public/service2.png";
import service3 from "/public/service3.png";
import service4 from "/public/service4.png";
import service5 from "/public/service5.png";
import service6 from "/public/service6.png";

function App() {
  return (
    <>
      <div className="container pt-5 pb-5">
        <div className="text flex justify-around ">
          <div className="text flex ">
            <ServiceIcon />
            <div className="text ">
              <h1 className="text-black text-lg font-bold ">Тезкор етказиш</h1>
              <p className="w-56 text-sm text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
          </div>
          <div className="text flex">
            <Icon />
            <div className="">
              <h1 className="text-black text-lg font-bold ">Тезкор етказиш</h1>
              <p className="w-56 text-sm text-color-secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
          </div>
          <div className="text flex">
            <Icon2 />
            <div className="">
              <h1 className="text-black text-lg font-bold ">Тезкор етказиш</h1>
              <p className="w-56 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
          </div>
          <div className="text flex">
            <Icon4 />
            <div className="">
              <h1 className="text-black text-lg font-bold ">Тезкор етказиш</h1>
              <p className="w-56 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
          </div>
        </div>
        <h1 className="text-black font-semibold text-2xl pt-5 pb-3">Рукнлар</h1>
        <div className="flex gap-1 ">
          <img src={service1} alt="img" className="img w-52 h-36" />
          <img src={service2} alt="img" className="img w-52 h-36" />
          <img src={service3} alt="img" className="img w-52 h-36" />
          <img src={service4} alt="img" className="img w-52 h-36" />
          <img src={service5} alt="img" className="img w-52 h-36" />
          <img src={service6} alt="img" className="img w-52 h-36" />
        </div>

        <h1 className="text-black font-semibold text-2xl py-9 	">
          Янги қўшилганлар
        </h1>
        <div className="cards flex gap-10 ">
          <Card
            img={productImg1}
            name={" 1984"}
            title={"SIYOSAT, FANTASTIKA"}
            stars={<Stars />}
            icon={<CardIcon />}
          />
          <Card
            img={productImg2}
            name={"Rich dad poor dad"}
            title={"SIYOSAT, FANTASTIKA"}
            stars={<Stars />}
            icon={<CardIcon />}
          />
          <Card
            img={productImg3}
            name={"cod 8"}
            title={"SIYOSAT, FANTASTIKA"}
            stars={<Stars />}
            icon={<CardIcon />}
          />
          <Card
            img={productImg4}
            name={"Даниел КИЗ"}
            title={"SIYOSAT, FANTASTIKA"}
            stars={<Stars />}
            icon={<CardIcon />}
          />
          <Card
            img={productImg5}
            name={"Бепарволикнинг но..."}
            title={"SIYOSAT, FANTASTIKA"}
            stars={<Stars />}
            icon={<CardIcon />}
          />
        </div>
        <h1 className="text-black font-semibold text-2xl py-9">
          Аудио китоблар
        </h1>
        <div className="cards flex gap-10">
          <Card
            img={productImg6}
            name={"Ego is the Enemy"}
            title={"SIYOSAT, FANTASTIKA"}
            stars={<Stars />}
            icon={<CardIcon />}
          />
          <Card
            img={productImg7}
            name={"Rokit"}
            title={"SIYOSAT, FANTASTIKA"}
            stars={<Stars />}
            icon={<CardIcon />}
          />
          <Card
            img={productImg3}
            name={"code 8"}
            title={"SIYOSAT, FANTASTIKA"}
            stars={<Stars />}
            icon={<CardIcon />}
          />
          <Card
            img={productImg8}
            name={"Satellite "}
            title={"SIYOSAT, FANTASTIKA"}
            stars={<Stars />}
            icon={<CardIcon />}
          />
          <Card
            img={productImg5}
            name={" Mark Meson"}
            title={"SIYOSAT, FANTASTIKA"}
            stars={<Stars />}
            icon={<CardIcon />}
          />
        </div>
      </div>
    </>
  );
}

export default App;
