import { renderWidget } from '@remnote/plugin-sdk';
import Form from '../Components/Form';
function MyWidget() {

    return <>
    <Form/>
    </>
  }
  
renderWidget(MyWidget);