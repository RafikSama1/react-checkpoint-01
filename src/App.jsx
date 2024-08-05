import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';

const App = () => {
  const firstName = 'John';
  const showImage = firstName !== '';

  return (
    <div className="mt-5">
      <div>
          <Name />
          <Price />
          <Description />
          <Image />
      </div>
      <p className="mt-3">
        {firstName ? `Hello, ${firstName}` : 'Hello, there!'}
      </p>
      {showImage && (
        <div>
          <img
            src="https://via.placeholder.com/150"
            alt="placeholder"
            className="mt-3"
          />
        </div>
      )}
    </div>
  );
};

export default App;
