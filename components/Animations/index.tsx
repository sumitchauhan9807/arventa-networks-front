import Type1 from './Type1';
import Type2 from './Type2';
import PBX from './PBX';
import Type4 from './Operational';
import Partners from './Partners';
import Compliance from './Compliance';

const Animations = ({ type }) => {
  switch (type) {
    case 'home':
      return <Type1 />;
    case 'about':
      return <Type2 />;
    case 'pbx':
      return <PBX />;
    case 'operations':
      return <Type4 />;
    case 'partners':
      return <Partners />;
    case 'compliance':
      return <Compliance />;
    default:
      return null;
  }
};

export default Animations;
