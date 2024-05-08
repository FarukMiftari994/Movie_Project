import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useEffect, useState } from "react";
import Model from "../modals/DetailsModal";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { useContext } from "react";
import CardContext from "../context/CardContext";
import { Okej } from "../@types";
import { AuthContext } from "../context/AuthContext";
import { Button } from "react-bootstrap";
import {
  deleteDoc,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import { db } from "../pages/firebase";
import { IoClose } from "react-icons/io5";

function BasicExample({ populars }: { populars: Okej }): JSX.Element {
  const { addToFavourites, removeFromFavourites } = useContext(CardContext);
  const [favouritedBy, setFavouritedBy] = useState(false);
  const [show, setShow] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const { user } = useContext(AuthContext);

  // console.log("isButtonClicked :>> ", isButtonClicked);
  const title = populars.title ? populars.title : populars.name;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleButtonClickAdd = async () => {
    addToFavourites(populars);
    setFavouritedBy(true);
    setIsButtonClicked(true);
  };

  const handleButtonClickRemove = async () => {
    removeFromFavourites(populars);
    setFavouritedBy(false);
    // try {
    //   const id = populars.id;
    //   await deleteDoc(doc(db, "favourites", id + ""));
    // } catch (error) {
    //   console.error("Error removing document: ", error);
    // }
  };

  //use effect takes two arguements : a function, and a dependency array
  // useEffect(() => {
  //   const getMyFavourites = async () => {
  //     if (!user) {
  //       return console.log("no user");
  //     }
  //     console.log("user", user.email);
  //     const docSnap = await getDoc(doc(db, "favourites", user.email + ""));
  //     if (docSnap.exists()) {
  //       // const array = docSnap.data().favourites || [];
  //       // const title = populars.title ? populars.title : populars.name;
  //       // const favByUser = array.includes(title);
  //       setFavouritedBy(true);
  //       // console.log("this is the fav", favByUser);
  //     } else {
  //       console.log("No snap");
  //     }
  //     getMyFavourites();
  //   };
  // }, [user?.email]);
  const checkFavoritedState = async () => {
    const docRef = doc(db, "favourites", user?.email + "");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists() && docSnap.data().favourites?.includes(title)) {
      setFavouritedBy(true);
    } else {
      console.log("No snap");
    }
  };
  useEffect(() => {
    checkFavoritedState();
  }, [user?.email]);
  return (
    <>
      <div
        className="p-0"
        style={{
          width: "260px",
          height: "490px",
          margin: "30px",
          border: "white 2px solid",
          borderRadius: "20px",
          marginBottom: "20px",
        }}
      >
        <div className="item">
          {user && !favouritedBy && (
            <Button
              variant="danger"
              className="notify-badge"
              onClick={handleButtonClickAdd}
              style={{
                cursor: "pointer",
              }}
            >
              <FaHeart style={{ marginBottom: "3.5px" }} />
            </Button>
          )}
          {user && favouritedBy && (
            <Button
              variant="danger"
              className="notify-badge"
              onClick={handleButtonClickRemove}
              style={{
                cursor: "pointer",
              }}
            >
              <IoClose style={{ marginBottom: "3.5px" }} />
            </Button>
          )}

          <div>
            <Card.Img
              src={`https://image.tmdb.org/t/p/w500${populars.poster_path}`}
              style={{
                width: "256px",
                height: "360px",
                borderTopRightRadius: "20px",
                borderTopLeftRadius: "20px",
              }}
            />

            {user && (
              <Button className="button" onClick={handleShow}>
                Learn More
              </Button>
            )}
          </div>
          <ListGroup variant="flush">
            <div>
              <ListGroup.Item className="d-flex justify-content-center align-items-center">
                <FaStar />
                <b>{populars.vote_average}</b>
              </ListGroup.Item>
            </div>
            <ListGroup.Item
              className="d-flex justify-content-center"
              style={{
                borderBottomRightRadius: "20px",
                borderBottomLeftRadius: "20px",
                height: "87px",
              }}
            >
              <b>
                {populars.name}
                {populars.title}
              </b>
            </ListGroup.Item>
          </ListGroup>
          <Model show={show} handleClose={handleClose} populars={populars} />
        </div>
      </div>
    </>
  );
}

export default BasicExample;
