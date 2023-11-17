import ReactDOM from 'react-dom/client';
import HomeLayout from './components/HomeLayout/HomeLayout';
import Databinding from './DataBinding/Databinding';
//import scss ở index (Vì import ở bất kì file nào khi build vẫn ra index.html)
import './assets/scss/style.scss'
import StyleComponent from './StyleComponent/StyleComponent';
import HandleEvent from './HandleEvent/HandleEvent';
import ChangeFontSize from './StateDemo/ChangeFontSize';
import ChangeColor from './StateDemo/ChangeColor';
import ChangeAvatar from './StateDemo/ChangeAvatar';
import ChangeCarColor from './StateDemo/ChangeCarColor';
import RenderWithMap from './RenderWithMap/RenderWithMap';
import DemoProps from './Props/DemoProps/DemoProps';
import EXRenderProductList from './Props/EXRenderProductList/EXRenderProductList';
import BaiTapXemChiTiet from './Props/BaiTapXemChiTiet/BaiTapXemChiTiet';

//Tạo root trên thẻ div#root
const root = ReactDOM.createRoot(document.getElementById('root'));
//JSX
root.render(
    <div className="abc">
      {/* <HandleEvent /> */}
      {/* <ChangeFontSize /> */}
      {/* <ChangeColor /> */}
      {/* <ChangeAvatar /> */}
      {/* <ChangeCarColor /> */}
      {/* <RenderWithMap /> */}
      {/* <DemoProps /> */}
      {/* <EXRenderProductList /> */}
      <BaiTapXemChiTiet />
    </div>
);

