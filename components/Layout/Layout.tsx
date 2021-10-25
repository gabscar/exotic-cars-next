
import Header from './Header';

import { LayoutMain } from './styles';

function Layout(props:any) {
  return (
    <div>
      <Header/>
      <LayoutMain>{props.children}</LayoutMain>
    </div>
  );
}

export default Layout;