import { useState } from 'react';
import QRCode from 'react-qr-code';
import QRCodeLink from 'qrcode';
import './style.css';

function App() {
  const [link, setLink] = useState('')
  const [qrcodeLink, setQrcodeLink] = useState('')

  function handleGenerate(link_url){
    QRCodeLink.toDataURL(link_url,{
      width:600,
      margin: 3,
    }, function (err, url){
      setQrcodeLink(url);
    })
  }

  function handleQrcode(e){
    setLink(e.target.value);
    handleGenerate(e.target.value);
  }

  return (
    <div className='container'>

      <QRCode
        value={link}
      />

      <input
      className='input'
      placeholder='Digite seu link...'
      value={link}
      onChange={(e) => handleQrcode(e)}
      />

      <a className='linkDownload' href={qrcodeLink} download={`qrcode.png`}>Download QrCode</a>

    </div>
  );
}

export default App;
