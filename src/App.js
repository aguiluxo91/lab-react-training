import React from 'react';
import BoxColor from './components/box-color/BoxColor';
import Greetings from './components/greetings/Greetings';
import IdCard from './components/id-card/IdCard';
import Random from './components/random/Random';
import CreditCard from './components/credit-card/Credit-Card';
import Rating from './components/rating/Rating';
import DriverCard from './components/driver-card/driverCard';
import LikeButton from './components/like-button/LikeButton';
import ClickablePicture from './components/clickable-picture/ClickablePicture';
import Dice from './components/dice/Dice';
import Carousel from './components/carousel/Carousel';
import NumbersTable from './components/numbers-table/NumbersTable';
import Facebook from './components/facebook/Facebook';

function App() {
  return (
    <div className="App container">
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date('1992-07-14')}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date('1988-05-11')}
        picture="https://randomuser.me/api/portraits/women/8.jpg"
      />

      <div className="mb-3">
        <Greetings lang="en">John</Greetings>
        <Greetings lang="de">Obrian</Greetings>
      </div>

      <div className="mb-3">
        <Random min={1} max={6}>
          Random value between 1 and 6 =
        </Random>
        <Random min={1} max={100}>
          Random value between 1 and 100 =
        </Random>
      </div>

      <div className="mb-3">
        <BoxColor r={255} g={0} b={0}>
          <p>rgb(255,0,0)</p>
          <p>#ff0000</p>
        </BoxColor>
        <BoxColor r={128} g={255} b={0}>
          <p>rgb(128,255,0)</p>
          <p>#80ff00</p>
        </BoxColor>
      </div>

      <div className="d-flex">
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"
        />
        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />
        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white"
        />
      </div>

      <div className="mt-3">
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
      </div>

      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: 'Toyota Corolla Altis',
          licensePlate: 'CO42DE',
        }}
      />
      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: 'Audi A3',
          licensePlate: 'BE33ER',
        }}
      />

      <div className="d-flex">
        <LikeButton />
        <LikeButton />
      </div>

      <ClickablePicture
        className="mb-5"
        img="/img/persons/maxence.png"
        imgClicked="/img/persons/maxence-glasses.png"
      />
      <div className="my-3">
        <Dice />
      </div>
      <div className="my-3">
        <Carousel
          imgs={[
            'https://randomuser.me/api/portraits/women/1.jpg',
            'https://randomuser.me/api/portraits/men/1.jpg',
            'https://randomuser.me/api/portraits/women/2.jpg',
            'https://randomuser.me/api/portraits/men/2.jpg',
          ]}
        />
      </div>
      <div className="my-3">
        <NumbersTable limit={16} />
      </div>

      <div className="my-3">
        <Facebook />
      </div>
    </div>
  );
}

export default App;
