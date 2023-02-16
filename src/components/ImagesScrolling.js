import { useEffect, useState, useRef } from "react";

function ImagesScrolling({ name, images }) {
  const imagesValue = images.length;

  const mainImage = useRef();
  const secondImage = useRef();
  const [toggleImageNumber, setToggleImageNumber] = useState(false);
  const [currentImageName, setCurrentImageName] = useState(images[0]);
  const [secondImageName, setSecondImageName] = useState("");
  const [currentImageNumber, setCurrentImageNumber] = useState(0);
  const [secondImageNumber, setSecondImageNumber] = useState(0);
 
  useEffect(() => {
    setCurrentImageName(images[currentImageNumber]);
  }, [currentImageNumber]);
  useEffect(() => {
    setSecondImageName(images[secondImageNumber]);
  }, [secondImageNumber]);

  const handleEndAnimation = () => {
    if (currentImageNumber !== secondImageNumber)
    {
      mainImage.current.classList.remove("image-scroll__image_animate_right-main");
      mainImage.current.classList.remove("image-scroll__image_animate_left-main");
      secondImage.current.classList.remove("image-scroll__image_animate_left-second");
      secondImage.current.classList.remove("image-scroll__image_animate_right-second");
      secondImage.current.classList.add("image-scroll__image_visible");
      mainImage.current.classList.remove("image-scroll__image_visible");

      setToggleImageNumber(!toggleImageNumber);
      setCurrentImageNumber(secondImageNumber);
    }
  };
  const handleButtonLeft = () => {
    if (currentImageNumber !== secondImageNumber) {
      return;
    }
    setSecondImageNumber((currentImageNumber - 1 + imagesValue) % imagesValue);
    mainImage.current.classList.add("image-scroll__image_animate_right-main");
    secondImage.current.classList.add("image-scroll__image_animate_right-second");
  };

  const handleButtonRight = () => {
    if (currentImageNumber !== secondImageNumber) {
      return;
    }
    setSecondImageNumber((currentImageNumber + 1) % imagesValue);
    mainImage.current.classList.add("image-scroll__image_animate_left-main");
    secondImage.current.classList.add("image-scroll__image_animate_left-second");
  };

  return (
    <div className="image-scroll">
      <button
        onClick={handleButtonLeft}
        className="image-scroll__button image-scroll__button_position_left"
      >
        &#8592;
      </button>
      <img
        onAnimationEnd={handleEndAnimation}
        className="image-scroll__image image-scroll__image_visible"
        src={`./images/${name}/${toggleImageNumber ? secondImageName : currentImageName}`}
        ref={toggleImageNumber ? secondImage : mainImage}
        alt=""
      />
      <img
        onAnimationEnd={handleEndAnimation}
        className="image-scroll__image"
        src={`./images/${name}/${toggleImageNumber ? currentImageName : secondImageName}`}
        ref={toggleImageNumber ? mainImage : secondImage}
        alt=""
      />
      <button
        onClick={handleButtonRight}
        className="image-scroll__button  image-scroll__button_position_right"
      >
        &#8594;
      </button>
    </div>
  );
}
export default ImagesScrolling;
