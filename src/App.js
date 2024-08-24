import './App.css';
import AtImage from './components/atoms/at-image/at-image.tsx';
const imageUrl = '/assets/imgs/hero-test.jpg';

function App() {

  const imgProps = {
    urlAction: "",
    title: "",
    media: imageUrl,
    altText: ""
  }

  console.log(imgProps)
  return (
    <div className="">
      <AtImage media={imgProps.media}>
      </AtImage>
    </div>
  );
}

export default App;
