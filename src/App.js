import './App.css';
import AtImage from './components/atoms/at-image/at-image.tsx';
import AtButton from './components/atoms/at-button/at-button.tsx'
const imageUrl = '/assets/imgs/hero-test.jpg';

function App() {

  const imgProps = {
    urlAction: "",
    title: "",
    media: imageUrl,
    altText: ""
  }

  const buttonProps = {
    text: "prueba"
  }

  console.log(imgProps)
  return (
    <div className="">
      <AtImage media={imgProps.media}>
      </AtImage>
      <AtButton text={buttonProps.text}></AtButton>
    </div>
  );
}

export default App;
